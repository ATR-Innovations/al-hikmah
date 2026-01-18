const VideoSection = () => {
  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="flex-1 bg-black rounded-xl overflow-hidden shadow-md">
        <iframe 
          className="w-full h-full"
          src="https://www.youtube.com/embed/b4pJHa3_0NU" 
          title="Video 1"
          allowFullScreen
        />
      </div>
      <div className="flex-1 bg-black rounded-xl overflow-hidden shadow-md">
        <iframe 
          className="w-full h-full"
          src="https://www.youtube.com/embed/eWfabq-6O1w" 
          title="Video 2"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoSection;