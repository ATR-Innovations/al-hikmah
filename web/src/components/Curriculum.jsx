import React, { useState } from 'react';

const Curriculum = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // ডামি ডাটা সেট
  const curriculumData = [
    { id: 1, title: "Brain Storming", icon: "🧠", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600", desc: "Developing critical thinking and problem-solving skills through interactive puzzles and sessions." },
    { id: 2, title: "Physical", icon: "🏃‍♂️", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600", desc: "Focusing on physical growth, sports, and regular exercise for a healthy lifestyle." },
    { id: 3, title: "Intellectual", icon: "💡", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600", desc: "Enhancing cognitive abilities and logical reasoning through structured learning." },
    { id: 4, title: "ICT", icon: "💻", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600", desc: "Preparing students for the digital world with modern computer skills and technology." },
    { id: 5, title: "Indoor Game", icon: "♟️", image: "https://images.unsplash.com/photo-1589149055152-d09219050e1e?q=80&w=600", desc: "Developing strategy and mental agility through chess, ludo, and other indoor activities." },
    { id: 6, title: "Cultural", icon: "🎭", image: "https://images.unsplash.com/photo-1514525253361-b83f85df075c?q=80&w=600", desc: "Exploring arts, music, and traditions to foster creativity and cultural awareness." },
    { id: 7, title: "Social", icon: "🤝", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600", desc: "Building communication skills and empathy through teamwork and community service." },
    { id: 8, title: "Moral Practice", icon: "✨", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600", desc: "Instilling values, ethics, and integrity to build a strong character." },
    { id: 9, title: "Academic", icon: "📚", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600", desc: "Excellence in core subjects through modern teaching methodologies." },
  ];

  return (
    <section className="py-8 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-4 bg-[#186E95] py-2 rounded">Our Curriculum</h2>
          <p className="text-gray-600 max-w-2xl mx-auto italic">
            A holistic approach to education, focusing on every aspect of a student's growth.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {curriculumData.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative background circle */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-50 rounded-full group-hover:bg-blue-600 transition-colors duration-500 opacity-50 group-hover:opacity-10"></div>
              
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 mt-2 text-sm line-clamp-2">
                {item.desc}
              </p>
              <div className="mt-4 flex items-center text-blue-600 font-semibold text-sm">
                Learn More <span className="ml-2 group-hover:ml-4 transition-all">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Logic */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl relative animate-scaleUp">
              {/* Close Button */}
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-white/80 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10 transition-transform hover:rotate-90"
              >
                ✕
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="text-4xl mb-2">{selectedItem.icon}</div>
                  <h2 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">
                    {selectedItem.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6 italic">
                    "{selectedItem.desc}"
                  </p>
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="bg-blue-600 text-white py-3 px-6 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                  >
                    Got It!
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Basic CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        .animate-scaleUp { animation: scaleUp 0.3s ease-out; }
      `}</style>
    </section>
  );
};

export default Curriculum;