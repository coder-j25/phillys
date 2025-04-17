import bg from '../assets/background.png';
import map from '../assets/map.png';
import React from "react";

const FindUs = () => {
    return (
        <>
<div className="flex flex-col min-h-screen bg-[url('/src/assets/background.png')] bg-cover bg-center">
  <h1 className="text-center text-white font-bold text-6xl xl:text-7xl pt-10 pb-10">
    Find Us
  </h1>

  <div className="relative flex-grow bg-[url('/src/assets/map.png')] bg-cover bg-center">
    <div className="absolute inset-0 bg-black/50"></div>

    <div className="hidden sm:flex relative z-10 h-full w-full items-center justify-center py-10 mt-20">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=hansonjustinee5%40gmail.com&ctz=America%2FPhoenix"
        style={{ border: 0 }}
        className="w-[90%] max-w-4xl h-[500px] rounded-lg shadow-lg"
        title="Willy's Philly's"
      ></iframe>
    </div>

    <div className="flex sm:hidden relative z-10 h-full w-full items-center justify-center py-10 mt-20">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=hansonjustinee5%40gmail.com&ctz=America%2FPhoenix&mode=AGENDA"
        style={{ border: 0 }}
        className="w-[95%] h-[400px] rounded-lg shadow-lg"
        title="Willy's Philly's Daily View"
      ></iframe>
    </div>
  </div>
</div>
        </>
    );
};

export default FindUs