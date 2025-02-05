export default function VideoSection() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-pink-600">Descubre Morpheus8 en acción</h2>
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}> {/* Aspect ratio 16:9 */}
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/watch?v=NBvs1za1J1E"
            title="Video de Morpheus8"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
  