import about from '../assets/about.png';
const AboutSection = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <img src={about} alt="About School" className="rounded-3xl shadow-2xl relative z-10" />
        <div className="absolute -bottom-6 -right-0 w-full h-full bg-blue-600 rounded-3xl -z-0 opacity-10"></div>
      </div>
      <div>
        <h2 className="text-4xl font-black text-gray-900 mb-6">আমাদের সম্পর্কে <br/><span className="text-blue-600">আমাদের লক্ষ্য ও উদ্দেশ্য</span></h2>
        <p className="text-gray-600 leading-relaxed mb-6 italic">"শিক্ষা মানে শুধু তথ্য সংগ্রহ নয়, বরং মনকে প্রশিক্ষিত করা।"</p>
        <p className="text-gray-700 mb-8">আমরা একটি সুশৃঙ্খল এবং আধুনিক ডিজিটাল পরিবেশ প্রদানের মাধ্যমে ভবিষ্যৎ প্রজন্মকে দক্ষ নাগরিক হিসেবে গড়ে তুলতে প্রতিশ্রুতিবদ্ধ। আমাদের রয়েছে অভিজ্ঞ শিক্ষক মন্ডলী এবং আধুনিক ক্লাসরুম সুবিধা।</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition">বিস্তারিত জানুন</button>
      </div>
    </div>
  </section>
);

export default AboutSection;