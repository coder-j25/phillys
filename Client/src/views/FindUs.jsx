import React from "react";

const FindUs = () => {
    return (
        <div className=""
        style={{ backgroundImage: "url('/src/assets/background.png')" }}>
            <h1 className="text-3xl font-bold text-center my-6">Find Us</h1>
            <div className="calendar-container flex justify-center">
                <iframe
                    src="#"
                    style={{ border: 0 }}
                    width="800"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    title="Willy's Philly's Calendar"
                ></iframe>
            </div>
        </div>
    );
};

export default FindUs