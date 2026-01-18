const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=400",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=400",
    "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=400"
  ];
  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">গ্যালারি</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className="group overflow-hidden rounded-xl h-64">
              <img src={img} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition duration-500 cursor-pointer" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;