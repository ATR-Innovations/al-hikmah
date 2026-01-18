const ContactSection = () => (
  <section id="contact" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      {/* Google Map */}
      <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-lg mb-12">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.90244243014!2d90.3910801!3d23.7508643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JDAzLjEiTiA5MMKwMjMnMjcuOSJF!5e0!3m2!1sen!2sbd!4v1625560000000" 
          className="w-full h-full border-0" 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-3xl shadow-inner">
          <h3 className="text-2xl font-bold mb-6">সরাসরি মেসেজ দিন</h3>
          <form className="space-y-4">
            <input type="text" placeholder="আপনার নাম" className="w-full p-4 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-600 outline-none" />
            <input type="email" placeholder="ইমেইল এড্রেস" className="w-full p-4 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-600 outline-none" />
            <textarea placeholder="আপনার মেসেজ..." rows="4" className="w-full p-4 rounded-xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-600 outline-none"></textarea>
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition">পাঠিয়ে দিন</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h4 className="text-xl font-bold text-blue-600 mb-2">ঠিকানা</h4>
            <p className="text-gray-700">বাড়ি #১২, রোড #০৫, ধানমন্ডি, ঢাকা - ১২০৯</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-blue-600 mb-2">যোগাযোগ</h4>
            <p className="text-gray-700">+৮৮০ ১৭০০-০০০০০০<br/>info@schoolname.com</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-blue-600 mb-2">অফিস সময়</h4>
            <p className="text-gray-700">শনিবার - বৃহস্পতিবার (সকাল ৮:০০ - বিকাল ৪:০০)</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;