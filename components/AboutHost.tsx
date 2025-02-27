import Image from "next/image"

export function AboutHost() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image src="/edstevenson.jpg" alt="Your Name" width={300} height={300} className="rounded-full" />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">About Your Host</h2>
            <p className="mb-4">
              With over a decade of experience in real estate and technology, I&apos;ve helped hundreds of real estate
              professionals transform their businesses through automation. My passion is identifying unique
              opportunities for each client and implementing tailored solutions that drive real results.
            </p>
            <p className="mb-4">
              <strong>My Promise to You:</strong> I personally identify and implement 1-3 automation improvements before
              we discuss any fees. This ensures you see tangible value from our collaboration from day one.
            </p>
            <p>
              Join me in this masterclass, and let&apos;s unlock the full potential of your real estate business through the
              power of automation!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

