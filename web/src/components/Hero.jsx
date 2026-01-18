import Carousel from "./Carousel";
import VideoSection from "./VideoSection";
import NoticeBoard from "./NoticeBoard";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto m-4 p-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* Left Side: Carousel (1st Half) */}
        <div className="w-full">
          <Carousel />
        </div>

        {/* Right Side: Video and Notice (2nd Half) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Video Section */}
          <VideoSection />
          
          {/* Notice Board Section */}
          <NoticeBoard />
        </div>

      </div>
    </div>
  );
};

export default Hero;