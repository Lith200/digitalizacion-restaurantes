export default function Testimonials() {
    const testimonials = [
      {
        name: "Juan Pérez",
        comment: "Los mejores tacos que he probado."
      },
      {
        name: "María López",
        comment: "Excelente servicio y ambiente."
      },
      {
        name: "Carlos García",
        comment: "Definitivamente volveré."
      },
      {
        name: "Marlene Marin",
        comment: "i always come back."
      }
    ];
  
    return (
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Lo que dicen nuestros clientes
        </h2>
  
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-6 rounded-xl border shadow-sm"
            >
              <p className="italic">
                "{testimonial.comment}"
              </p>
  
              <p className="mt-4 font-bold">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }