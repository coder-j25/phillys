import bg from '../assets/background.png';
import map from '../assets/map.png';
import React from "react";

const FindUs = () => {
    return (
        <>
           
<div className="flex flex-col min-h-screen bg-[url('/src/assets/background.png')] bg-cover bg-center">
  <h1 className="text-center text-white font-bold  text-6xl xl:text-7xl pt-10 pb-10">
    Find Us
  </h1>
  <div className="relative flex-grow bg-[url('/src/assets/map.png')] bg-cover bg-center">
    <div className="absolute inset-0 bg-black/50"></div>
    <div className="relative z-10 h-full w-full flex items-center justify-center">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=your_calendar_id%40group.calendar.google.com&ctz=America%2FNew_York"
        style={{ border: 0 }}
        className="w-[90%] max-w-4xl h-[500px] rounded-lg shadow-lg"
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
      ></iframe>
    </div>
  </div>
</div>

        </>
    );
};

export default FindUs