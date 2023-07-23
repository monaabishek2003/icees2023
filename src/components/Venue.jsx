import React from "react";

const Venue = () => {
  return (
    <div className="lg:w-4/5 ml-auto p-8 flex justify-center items-center min-h-screen">
      <div className="max-w-[800px]">
          <h2>VENUE</h2>
        <div className="flex flex-col md:flex-row items-center justify-around">
            <div>
            <p>SSN College of Engineering</p>
            <p>
                Rajiv Gandhi Salai (OMR) Kalavakkam-603110, Chennai, Tamilnadu,
                India.
            </p>
            </div>
            <iframe
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?q=SSN%20COLLEGE%20kalavakkam&#038;t=m&#038;z=10&#038;output=embed&#038;iwloc=near"
            title="SSN COLLEGE kalavakkam"
            aria-label="SSN COLLEGE kalavakkam"
            ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Venue;
