"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Stats } from "@react-three/drei"
import { Physics, useSphere, useBox, usePlane } from "@react-three/cannon"
import * as THREE from "three"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { RefreshCw, Maximize, Minimize, Wind, Lock, Unlock } from "lucide-react"

// Particle system component - fixed to prevent buffer resizing error
function ParticleSystem({ count = 3000, color = "#3B82F6", spread = 15, size = 0.2 }) {
  const points = useRef(null)
  const particleCount = useRef(count)
  const initialized = useRef(false)

  // Create a fixed-size buffer for positions
  const positionsRef = useRef(new Float32Array(count * 3))
  const velocitiesRef = useRef(new Float32Array(count * 3))
  const anglesRef = useRef(new Float32Array(count * 2)) // Store theta and phi angles
  const radiusRef = useRef(new Float32Array(count)) // Store radius for each particle
  const speedRef = useRef(new Float32Array(count)) // Store orbital speed for each particle

  // Initialize positions and velocities
  useEffect(() => {
    const angles = anglesRef.current
    const radius = radiusRef.current
    const speed = speedRef.current
    const positions = positionsRef.current

    for (let i = 0; i < count; i++) {
      // Random spherical coordinates
      angles[i * 2] = Math.random() * Math.PI * 2 // theta (horizontal angle)
      angles[i * 2 + 1] = Math.acos((Math.random() * 2) - 1) // phi (vertical angle)
      radius[i] = spread * (0.7 + Math.random() * 0.3) // Varying radius
      speed[i] = (0.2 + Math.random() * 0.3) * 0.001 // Random orbital speed

      // Convert spherical to cartesian coordinates
      const theta = angles[i * 2]
      const phi = angles[i * 2 + 1]
      const r = radius[i]

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.cos(phi)
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
    }

    initialized.current = true
  }, [count, spread])

  // Update particle positions on each frame
  useFrame(() => {
    if (!points.current || !initialized.current) return

    const positions = positionsRef.current
    const angles = anglesRef.current
    const radius = radiusRef.current
    const speed = speedRef.current
    const geometry = points.current.geometry

    if (!geometry.attributes.position) return

    for (let i = 0; i < particleCount.current; i++) {
      // Update theta angle for orbital motion
      angles[i * 2] += speed[i]

      const theta = angles[i * 2]
      const phi = angles[i * 2 + 1]
      const r = radius[i]

      // Update positions based on new angles
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.cos(phi)
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
    }

    geometry.attributes.position.needsUpdate = true
  })

  // Update particle count, size, or spread when props change
  useEffect(() => {
    particleCount.current = count

    // We don't need to resize the buffer, just use up to 'count' particles
    if (points.current) {
      points.current.material.size = size
    }
  }, [count, size, spread])

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positionsRef.current.length / 3}
          array={positionsRef.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={size} sizeAttenuation={true} color={color} transparent opacity={0.8} />
    </points>
  )
}

// Line element component with position constraints
function Line({ position, rotation, scale, color, constrainMovement = true }) {
  const originalPosition = useRef(position)
  const [ref, api] = useBox(() => ({
    mass: 1,
    position,
    rotation,
    args: [0.3, scale[1], 0.3],
    linearDamping: 0.95,
    angularDamping: 0.95,
  }))

  const [hovered, setHovered] = useState(false)
  const [dragging, setDragging] = useState(false)
  const { camera } = useThree()

  // Handle drag interaction with constraints
  useEffect(() => {
    const handlePointerMove = (e) => {
      if (dragging) {
        const vector = new THREE.Vector3(
          (e.clientX / window.innerWidth) * 2 - 1,
          -(e.clientY / window.innerHeight) * 2 + 1,
          0.5,
        )

        vector.unproject(camera)
        const dir = vector.sub(camera.position).normalize()
        const distance = -camera.position.z / dir.z
        const pos = camera.position.clone().add(dir.multiplyScalar(distance))

        // Apply constraints to maintain shape
        if (constrainMovement) {
          // Constrain horizontal movement to maintain vertical alignment
          pos.x = originalPosition.current[0]
          // Allow vertical movement within limits
          const maxYOffset = scale[1] * 0.5
          pos.y = Math.max(
            originalPosition.current[1] - maxYOffset,
            Math.min(originalPosition.current[1] + maxYOffset, pos.y),
          )
        }

        api.position.set(pos.x, pos.y, position[2])
        api.velocity.set(0, 0, 0)
        api.angularVelocity.set(0, 0, 0)
      }
    }

    const handlePointerUp = () => {
      setDragging(false)
      document.body.style.cursor = "auto"

      // Snap back to original position if constraints are enabled
      if (constrainMovement) {
        api.position.set(originalPosition.current[0], originalPosition.current[1], originalPosition.current[2])
      }
    }

    if (dragging) {
      window.addEventListener("pointermove", handlePointerMove)
      window.addEventListener("pointerup", handlePointerUp)
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [dragging, api, camera, position, constrainMovement, scale])

  // Subscribe to position changes to maintain shape
  useEffect(() => {
    const unsubscribe = api.position.subscribe((pos) => {
      // If too far from original position, apply a spring force back
      if (constrainMovement) {
        const dx = originalPosition.current[0] - pos[0]
        const dy = originalPosition.current[1] - pos[1]
        const dz = originalPosition.current[2] - pos[2]

        // Apply spring force proportional to distance
        if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1 || Math.abs(dz) > 0.1) {
          api.applyForce([dx * 5, dy * 5, dz * 5], [0, 0, 0])
        }
      }
    })

    return unsubscribe
  }, [api, constrainMovement])

  return (
    <mesh
      ref={ref}
      onPointerOver={() => {
        setHovered(true)
        document.body.style.cursor = "grab"
      }}
      onPointerOut={() => {
        setHovered(false)
        document.body.style.cursor = "auto"
      }}
      onPointerDown={(e) => {
        e.stopPropagation()
        setDragging(true)
        document.body.style.cursor = "grabbing"
      }}
      castShadow
    >
      <cylinderGeometry args={[0.15, 0.15, scale[1], 16]} />
      <meshStandardMaterial
        color={hovered ? "#ffffff" : color}
        emissive={color}
        emissiveIntensity={hovered ? 0.5 : 0.2}
        roughness={0.3}
        metalness={0.8}
      />
    </mesh>
  )
}

// Dot element component with position constraints
function Dot({ position, color, size = 0.3, constrainMovement = true }) {
  const originalPosition = useRef(position)
  const [ref, api] = useSphere(() => ({
    mass: 0.5,
    position,
    args: [size],
    linearDamping: 0.95,
    angularDamping: 0.95,
  }))

  const [hovered, setHovered] = useState(false)
  const [dragging, setDragging] = useState(false)
  const { camera } = useThree()

  // Handle drag interaction with constraints
  useEffect(() => {
    const handlePointerMove = (e) => {
      if (dragging) {
        const vector = new THREE.Vector3(
          (e.clientX / window.innerWidth) * 2 - 1,
          -(e.clientY / window.innerHeight) * 2 + 1,
          0.5,
        )

        vector.unproject(camera)
        const dir = vector.sub(camera.position).normalize()
        const distance = -camera.position.z / dir.z
        const pos = camera.position.clone().add(dir.multiplyScalar(distance))

        // Apply constraints to maintain shape
        if (constrainMovement) {
          // Constrain horizontal movement to maintain alignment
          pos.x = originalPosition.current[0]
          // Allow vertical movement within limits
          const maxYOffset = 1.0
          pos.y = Math.max(
            originalPosition.current[1] - maxYOffset,
            Math.min(originalPosition.current[1] + maxYOffset, pos.y),
          )
        }

        api.position.set(pos.x, pos.y, position[2])
        api.velocity.set(0, 0, 0)
      }
    }

    const handlePointerUp = () => {
      setDragging(false)
      document.body.style.cursor = "auto"

      // Snap back to original position if constraints are enabled
      if (constrainMovement) {
        api.position.set(originalPosition.current[0], originalPosition.current[1], originalPosition.current[2])
      }
    }

    if (dragging) {
      window.addEventListener("pointermove", handlePointerMove)
      window.addEventListener("pointerup", handlePointerUp)
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [dragging, api, camera, position, constrainMovement])

  // Subscribe to position changes to maintain shape
  useEffect(() => {
    const unsubscribe = api.position.subscribe((pos) => {
      // If too far from original position, apply a spring force back
      if (constrainMovement) {
        const dx = originalPosition.current[0] - pos[0]
        const dy = originalPosition.current[1] - pos[1]
        const dz = originalPosition.current[2] - pos[2]

        // Apply spring force proportional to distance
        if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1 || Math.abs(dz) > 0.1) {
          api.applyForce([dx * 5, dy * 5, dz * 5], [0, 0, 0])
        }
      }
    })

    return unsubscribe
  }, [api, constrainMovement])

  return (
    <mesh
      ref={ref}
      onPointerOver={() => {
        setHovered(true)
        document.body.style.cursor = "grab"
      }}
      onPointerOut={() => {
        setHovered(false)
        document.body.style.cursor = "auto"
      }}
      onPointerDown={(e) => {
        e.stopPropagation()
        setDragging(true)
        document.body.style.cursor = "grabbing"
      }}
      castShadow
    >
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color={hovered ? "#ffffff" : color}
        emissive={color}
        emissiveIntensity={hovered ? 0.5 : 0.2}
        roughness={0.3}
        metalness={0.8}
      />
    </mesh>
  )
}


// Main scene component
export default function InteractiveScene() {
  const [particleCount, setParticleCount] = useState(4500)
  const [particleSize, setParticleSize] = useState(.5)
  const [particleSpread, setParticleSpread] = useState(25)
  const [showControls, setShowControls] = useState(false)
  const [shapeConstrained, setShapeConstrained] = useState(true)

  // Reset function to restore original positions
  const resetScene = () => {
    window.location.reload()
  }

  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 50], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={1} castShadow />

        <Physics gravity={[0, -0.2, 0]}>
          {/* Lines */}
          <Line
            position={[-1, 0, 0]}
            rotation={[0, 0, 0]}
            scale={[1, 8, 1]}
            color="#00b8d4"
            constrainMovement={shapeConstrained}
          />
          <Line
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={[1, 14, 1]}
            color="#00bcd4"
            constrainMovement={shapeConstrained}
          />
          <Line
            position={[1, 0, 0]}
            rotation={[0, 0, 0]}
            scale={[1, 16, 1]}
            color="#00c8d4"
            constrainMovement={shapeConstrained}
          />
          <Line
            position={[2, 0, 0]}
            rotation={[0, 0, 0]}
            scale={[1, 14, 1]}
            color="#00d4d4"
            constrainMovement={shapeConstrained}
          />
          <Line
            position={[3, 0, 0]}
            rotation={[0, 0, 0]}
            scale={[1, 8, 1]}
            color="#3f51b5"
            constrainMovement={shapeConstrained}
          />

          {/* Dots */}
          <Dot position={[-1, 5, 0]} color="#00b8d4" size={0.4} constrainMovement={shapeConstrained} />
          <Dot position={[1, 9, 0]} color="#00bcd4" size={0.4} constrainMovement={shapeConstrained} />
          <Dot position={[1, -9, 0]} color="#00d4d4" size={0.4} constrainMovement={shapeConstrained} />
          <Dot position={[3, -5, 0]} color="#3f51b5" size={0.4} constrainMovement={shapeConstrained} />

        </Physics>

        <ParticleSystem count={particleCount} size={particleSize} spread={particleSpread} />

        <OrbitControls 
          //enablePan={true} 
          //enableZoom={true} 
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={1}
        />

        {/* <Stats /> */}
      </Canvas>

      {/* Controls UI */}
      {showControls && (<div className="absolute bottom-4 left-4 right-4 p-4 bg-black/70 rounded-lg text-white">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold">Particle Controls</h3>
          <Button variant="outline" size="icon" onClick={() => setShowControls(!showControls)}>
            {showControls ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
          </Button>
        </div>

        { (
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <label>Particle Count: {particleCount}</label>
              </div>
              <Slider
                value={[particleCount]}
                min={100}
                max={5000}
                step={100}
                onValueChange={(value) => setParticleCount(value[0])}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label>Particle Size: {particleSize.toFixed(2)}</label>
              </div>
              <Slider
                value={[particleSize]}
                min={0.01}
                max={0.2}
                step={0.01}
                onValueChange={(value) => setParticleSize(value[0])}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label>Particle Spread: {particleSpread}</label>
              </div>
              <Slider
                value={[particleSpread]}
                min={5}
                max={20}
                step={1}
                onValueChange={(value) => setParticleSpread(value[0])}
              />
            </div>

            <div className="flex space-x-2 mb-2">
              <Button
                onClick={() => setShapeConstrained(!shapeConstrained)}
                variant={shapeConstrained ? "default" : "outline"}
                className="flex-1"
              >
                {shapeConstrained ? (
                  <>
                    <Lock className="mr-2 h-4 w-4" /> Maintain Shape
                  </>
                ) : (
                  <>
                    <Unlock className="mr-2 h-4 w-4" /> Free Movement
                  </>
                )}
              </Button>
            </div>

            <div className="flex space-x-2">
              <Button onClick={resetScene} className="flex-1">
                <RefreshCw className="mr-2 h-4 w-4" /> Reset Scene
              </Button>
              <Button
                onClick={() => {
                  const elements = document.querySelectorAll("mesh")
                  elements.forEach((el) => {
                    const api = el.__r3f?.api
                    if (api && api.applyForce) {
                      api.applyForce(
                        [(Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5],
                        [0, 0, 0],
                      )
                    }
                  })
                }}
                className="flex-1"
              >
                <Wind className="mr-2 h-4 w-4" /> Apply Force
              </Button>
            </div>
          </div>
        )}

        <div className="mt-4 text-xs text-gray-400">
          Drag elements to move them • Use mouse wheel to zoom • Click and drag to rotate
        </div>
      </div>)}
    </>
  )
}

