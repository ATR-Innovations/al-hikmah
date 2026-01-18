const Footer = () => (
  <footer className="bg-gray-900 text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
      <div className="col-span-1 md:col-span-1">
        <h2 className="text-2xl font-black mb-4 italic uppercase">Logo</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          আমাদের স্কুলে আমরা শিক্ষার পাশাপাশি নৈতিকতা ও মূল্যবোধের উপর বিশেষ গুরুত্ব প্রদান করি।
        </p>
      </div>
      <div>
        <h4 className="font-bold mb-6">গুরুত্বপূর্ণ লিংক</h4>
        <ul className="space-y-3 text-gray-400 text-sm">
          <li className="hover:text-blue-400 cursor-pointer transition">ভর্তি তথ্যাদি</li>
          <li className="hover:text-blue-400 cursor-pointer transition">একাডেমিক ক্যালেন্ডার</li>
          <li className="hover:text-blue-400 cursor-pointer transition">রেজাল্ট পোর্টাল</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-6">অন্যান্য</h4>
        <ul className="space-y-3 text-gray-400 text-sm">
          <li className="hover:text-blue-400 cursor-pointer transition">গোপনীয়তা নীতি</li>
          <li className="hover:text-blue-400 cursor-pointer transition">শর্তাবলী</li>
          <li className="hover:text-blue-400 cursor-pointer transition">ক্যারিয়ার</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-6">নিউজলেটার</h4>
        <div className="flex bg-gray-800 p-1 rounded-lg">
          <input type="email" placeholder="ইমেইল" className="bg-transparent border-none focus:ring-0 text-sm p-2 w-full" />
          <button className="bg-blue-600 px-4 py-2 rounded-md text-xs font-bold uppercase">Join</button>
        </div>
      </div>
    </div>
    <p className="text-center text-gray-500 text-xs mt-8">© ২০২৬ সকল স্বত্ব সংরক্ষিত - আপনার স্কুলের নাম</p>
  </footer>
);

export default Footer;