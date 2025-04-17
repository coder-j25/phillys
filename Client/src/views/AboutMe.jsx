const AboutMe = () => {
  return (
    <div className="flex flex-col-reverse relative bg-[url('/src/assets/hero.jpg')] bg-no-repeat bg-cover text-white h-screen p-3">
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="absolute z-10 flex flex-col gap-2 w-80 p-3 lg:mx-56 my-56">
        <h1 className="text-6xl font-bold">Willy's Philly's</h1>
        <p className="font-semibold">
          Serving the best Philly cheesesteaks in the Tucson area! Visit our
          Find us page to check our calendar and see where we'll be next.
        </p>
        <button className="bg-black border-2 border-white">Find Us</button>
      </div>
      {/* section for placeholder  */}
      <div>
        <p>
          Placeholder section for additional homepage content that will be
          developed in future tickets
        </p>
      </div>
    </div>
  );
};
export default AboutMe;
