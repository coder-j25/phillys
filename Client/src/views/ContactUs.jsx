import { useState, useRef } from "react";
import Background from "../assets/background.png";
import Logo from "../assets/logoNoBkgd.png";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({});
  const form = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleValidation = (obj) => {
    const requiredFields = ["fullName", "email", "message"];
    for (let field of requiredFields) {
      if (!obj[field]) {
        alert(
          `Please enter your ${field.replace(/([A-Z])/g, " $1").toLowerCase()}`
        );
        return false;
      } else if (field === "fullName") {
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(obj[field])) {
          alert(
            `Please enter a valid ${field
              .replace(/([A-Z])/g, " $1")
              .toLowerCase()}`
          );
          return false;
        }
      } else if (field === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(obj[field])) {
          alert("Please enter a valid email address");
          return false;
        }
      } else if (field === "message") {
        if (obj[field].length < 10) {
          alert("Message should be at least 10 characters long");
          return false;
        }
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!handleValidation(formData)) return;
    emailjs
      .sendForm(
        "service_yejdmbn",
        "template_epxd2oh",
        form.current,
        "0F1I_evtXzAvXqrLL"
      )
      .then(
        (result) => {
          console.log("form submitted:", result.text);
          alert("Message sent successfully!");
          setFormData({});
        },
        (error) => {
          console.log("Error", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="flex items-center justify-center mt-5 mb-0 font-impact">
        <h1
          className="text-7xl sm:text-8xl text-white text-center -mb-12 sm:-mb-16 md:-mb-20"
          style={{
            fontFamily: "Impact, sans-serif",
          }}
        >
          Contact Us
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-20 lg:gap-32 xl:gap-40 min-h-screen px-4">
        <img
          src={Logo}
          alt="Willys Phillys Logo"
          className="w-60 h-auto sm:w-72 md:w-80 lg:w-96 xl:w-[28rem] mb-6 md:mb-0"
        />
        <div className="flex items-center justify-center md:min-h-screen">
          <div className="bg-black p-8 rounded-3xl w-full max-w-sm">
            <div className="flex-col justify-center items-center mb-4 text-white text-center font-bold">
              <h2>We Cater!!</h2>
              <h2>Send Us A Message!</h2>
            </div>
            <form className="space-y-4" ref={form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                value={formData.fullName || ""}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-2 bg-white text-black rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-2 bg-white text-black rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <textarea
                name="message"
                value={formData.message || ""}
                onChange={handleChange}
                placeholder="Message"
                rows="4"
                className="w-full p-2 bg-white text-black rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              ></textarea>
              <button
                type="submit"
                className="w-full p-2 bg-black text-white border-2 border-white rounded-xl hover:bg-white hover:text-black focus:outline-none font-bold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
