const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=400",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=400",
    "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=400"
  ];
  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Photo Collection
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">গ্যালারি</h2>
          </div>

          <button className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
            View All Gallery
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((img, i) => (
            <div key={i} className="group h-64 overflow-hidden rounded-xl">
              <img src={img} alt="Gallery" className="h-full w-full object-cover transition duration-500 group-hover:scale-110 cursor-pointer" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;