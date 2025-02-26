import Image from "next/image"

export function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Real Estate Agent",
      content: "This masterclass completely transformed my business. I've saved hours each week through automation!",
      image: "/john-doe.jpg",
    },
    {
      name: "Jane Smith",
      role: "Property Manager",
      content: "The strategies I learned have helped me scale my property management business effortlessly.",
      image: "/jane-smith.jpg",
    },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic">&quot;{testimonial.content}&quot;</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Trusted by Industry Leaders</h3>
          <div className="flex justify-center space-x-8">
            <Image src="/partner-logo-1.png" alt="Partner 1" width={100} height={50} />
            <Image src="/partner-logo-2.png" alt="Partner 2" width={100} height={50} />
            <Image src="/partner-logo-3.png" alt="Partner 3" width={100} height={50} />
          </div>
        </div>
      </div>
    </section>
  )
}

