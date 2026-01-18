const AcademicSection = () => {
  const features = [
    { title: "Digital Classroom", desc: "মাল্টিমিডিয়া প্রজেক্টর ও স্মার্ট বোর্ড সুবিধা।" },
    { title: "Science Lab", desc: "আধুনিক যন্ত্রপাতি সমৃদ্ধ বিজ্ঞান ল্যাবরেটরি।" },
    { title: "Library", desc: "হাজারো বইয়ের সংগ্রহ নিয়ে আমাদের লাইব্রেরি।" }
  ];
  return (
    <section id="academic" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">একাডেমিক কার্যক্রম</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-2"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border-b-4 border-blue-600 shadow-sm hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;