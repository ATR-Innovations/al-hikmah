import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdvisorBoard = ({ limit = 3, showViewAll = true }) => {
  const [selectedAdvisor, setSelectedAdvisor] = useState(null);
  const navigate = useNavigate();

  const advisors = [
    {
      id: 1,
      name: "অধ্যক্ষ মাহবুবুর রহমান",
      designation: "সাবেক অধ্যক্ষ",
      institution: "আল-امین একাডেমি স্কুল এন্ড কলেজ",
      image: "https://i.ibb.co/L6V87Z8/advisor1.png", // Dummy path
      bio: "অধ্যক্ষ মাহবুবুর রহমান একজন বিশিষ্ট শিক্ষাবিদ। তিনি দীর্ঘ সময় ধরে শিক্ষা প্রশাসনের বিভিন্ন গুরুত্বপূর্ণ পদে দায়িত্ব পালন করেছেন এবং আল-আমিন একাডেমির উন্নয়নে বিশেষ ভূমিকা রেখেছেন।",
      isChief: true
    },
    {
      id: 2,
      name: "হাফেজ মুনির উদ্দিন আহমেদ",
      designation: "চেয়ারম্যান",
      institution: "আল-কুরআন একাডেমি, লন্ডন",
      image: "https://i.ibb.co/hMN7X7P/advisor2.png",
      bio: "তিনি একজন আন্তর্জাতিক খ্যাতিসম্পন্ন ইসলামী চিন্তাবিদ এবং লন্ডনে আল-কুরআন একাডেমির প্রতিষ্ঠাতা।"
    },
    {
      id: 3,
      name: "শায়খ মুসা আল হাফিজ",
      designation: "দার্শনিক, ধর্মতাত্ত্বিক ও সাহিত্যিক",
      institution: "চেয়ারম্যান, ইসলামি ইতিহাস ও সংস্কৃতি ইনস্টিটিউট",
      image: "https://i.ibb.co/pPzB9rY/advisor3.png",
      bio: "শায়খ মুসা আল হাফিজ আধুনিক ইসলামী দর্শনের একজন শক্তিশালী প্রবক্তা এবং প্রথিতযশা গবেষক।"
    },
    {
      id: 4,
      name: "মোহাম্মদ আব্দুল আজিজ",
      designation: "Director General",
      institution: "BIIT",
      image: "https://i.ibb.co/9vD3zN1/advisor4.png",
      bio: "বাংলাদেশ ইনস্টিটিউট অফ ইসলামিক থট (BIIT) এর মহাপরিচালক হিসেবে তিনি শিক্ষা ও গবেষণায় নেতৃত্ব দিচ্ছেন।"
    },
    {
      id: 5,
      name: "আরিফুল ইসলাম অপু",
      designation: "সহযোগী অধ্যাপক, MIS",
      institution: "ঢাকা বিশ্ববিদ্যালয়",
      image: "https://i.ibb.co/mHwF500/advisor5.png",
      bio: "ঢাকা বিশ্ববিদ্যালয়ের এমআইএস বিভাগের অভিজ্ঞ শিক্ষক এবং টেকনোলজি ম্যানেজমেন্ট বিশেষজ্ঞ।"
    },
    {
      id: 6,
      name: "ড. মোহাম্মদ আব্দুল্লাহ আল মামুন",
      designation: "প্রফেসর, ইসলামিক স্টাডিজ",
      institution: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়",
      image: "https://i.ibb.co/0JtYV7y/advisor6.png",
      bio: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়ের ইসলামিক স্টাডিজ বিভাগের একজন সম্মানিত প্রফেসর।"
    },
    {
      id: 7,
      name: "ড. মোহাম্মদ শহীদুল্লাহ",
      designation: "প্রফেসর, হিসাববিজ্ঞান",
      institution: "ঢাকা বিশ্ববিদ্যালয়",
      image: "https://i.ibb.co/0JtYV7y/advisor7.png",
      bio: "ঢাকা বিশ্ববিদ্যালয়ের হিসাববিজ্ঞান বিভাগের একজন বিশিষ্ট প্রফেসর।"
    }
  ];

  const chief = advisors.find(a => a.isChief);
  const others = advisors.filter(a => !a.isChief).slice(0, limit);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Board of Advisors
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              উপদেষ্টা মন্ডলী
            </h2>
          </div>

          {showViewAll && (
            <button
              onClick={() => navigate('/about')}
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              View All Advisors
            </button>
          )}
        </div>

        {/* Chief Advisor */}
        <div className="flex justify-center mb-16">
          <AdvisorCard person={chief} onClick={() => setSelectedAdvisor(chief)} isChief={true} />
        </div>

        {/* Grid for Others */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {others.map((person) => (
            <AdvisorCard key={person.id} person={person} onClick={() => setSelectedAdvisor(person)} />
          ))}
        </div>

        {/* Detailed Modal */}
        {selectedAdvisor && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
            <div className="bg-white rounded-[2rem] overflow-hidden max-w-3xl w-full shadow-2xl relative animate-scaleUp">
              <button 
                onClick={() => setSelectedAdvisor(null)}
                className="absolute top-5 right-5 bg-gray-100 hover:bg-red-500 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all z-10"
              >
                ✕
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 bg-blue-600">
                  <img src={selectedAdvisor.image} alt={selectedAdvisor.name} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-3/5 p-8 md:p-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedAdvisor.name}</h3>
                  <p className="text-blue-600 font-bold mb-4">{selectedAdvisor.designation}</p>
                  <div className="w-12 h-1 bg-gray-200 mb-6"></div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">জীবনী ও অবদান:</h4>
                  <p className="text-gray-600 leading-relaxed text-justify">
                    {selectedAdvisor.bio || "উনার সম্পর্কে বিস্তারিত তথ্য শীঘ্রই আপডেট করা হবে।"}
                  </p>
                  <p className="mt-4 text-sm text-gray-500 font-medium italic">— {selectedAdvisor.institution}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-scaleUp { animation: scaleUp 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); }
      `}</style>
    </section>
  );
};

// Sub-Component for Individual Card
const AdvisorCard = ({ person, onClick, isChief = false }) => {
  return (
    <div 
      onClick={onClick}
      className={`group cursor-pointer relative bg-white rounded-3xl p-6 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border border-gray-100 flex items-center gap-6 overflow-hidden ${isChief ? 'md:w-[500px] border-blue-200' : 'w-full'}`}
    >
      {/* Background Glow Effect */}
      <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-blue-50 rounded-full group-hover:bg-blue-600 group-hover:scale-[5] transition-all duration-700 opacity-50 group-hover:opacity-5"></div>

      {/* Image with Ring */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden ring-4 ring-blue-50 group-hover:ring-blue-100 transition-all duration-500">
          <img 
            src={person.image} 
            alt={person.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        {isChief && (
          <span className="absolute -top-2 -left-2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
            Chief
          </span>
        )}
      </div>

      {/* Info Section */}
      <div className="relative z-10 text-left">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
          {person.name}
        </h3>
        <p className="text-blue-600 font-semibold text-sm mt-1">{person.designation}</p>
        <p className="text-gray-500 text-xs mt-2 line-clamp-2 leading-relaxed">
          {person.institution}
        </p>
        
        <div className="mt-4 flex items-center text-[10px] font-black uppercase tracking-tighter text-gray-400 group-hover:text-blue-600 transition-all">
          View Profile <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
        </div>
      </div>
    </div>
  );
};

export default AdvisorBoard;