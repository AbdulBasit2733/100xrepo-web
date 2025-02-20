const testimonials = [
  {
    name: "Sarah D.",
    role: "Full Stack Developer",
    quote: "create-100xrepo saved me hours of setup time. Highly recommended!",
  },
  {
    name: "Mike R.",
    role: "Tech Lead",
    quote: "The flexibility and ease of use are unmatched. A game-changer for our team.",
  },
  {
    name: "Emily L.",
    role: "Frontend Engineer",
    quote: "I love how quickly I can spin up a new project with all the tools I need.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">What Developers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6">
            <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
            <div className="font-semibold">{testimonial.name}</div>
            <div className="text-purple-400 text-sm">{testimonial.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

