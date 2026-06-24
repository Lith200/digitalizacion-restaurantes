export default function Location() {
  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Encuéntranos
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Información
          </h3>

          <p>📍 Av. Principal #123</p>
          <p>📞 +52 444 123 4567</p>
          <p>✉️ contacto@taqueria.com</p>

          <div className="mt-6">
            <h4 className="font-semibold">
              Horarios
            </h4>

            <p>Lunes - Domingo</p>
            <p>9:00 AM - 11:00 PM</p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="AQUI_PEGA_LA_URL_DEL_MAPA"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
}