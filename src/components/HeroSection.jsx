import React from "react";

const HeroSection = () => {
  return (
    <div className="main lg:ml-[20%] py-8 px-2 lg:px-10 lg:p-12">
      <header>
        <h2>Sri Sivasubramaniya Nadar College of Engineering</h2>
        <p className="mb-0">
          [An Autonomous Institution, Affiliated to <strong>Anna University</strong> , Chennai]
        </p>
        <p>Kalavakkam - 603110, Chennai, Tamil Nadu, India</p>
        <h4>Department of Electrical and Electronics Engineering</h4>
      </header>

      <main>
        <p className="text-2xl"><strong>organizes</strong></p>
        <h4>[SCOPUS Indexed IEEE Sponsored]</h4>
        <h1 className="py-5 text-4xl md:text-5xl">
          9th International Conference <br /> on Electrical Energy Systems - 2023
        </h1>
        <p className="mb-0">[HYBRID CONFERENCE]</p>
        <h1>ICEES 2023</h1>
        <p>March 23-25, 2023</p>
        <span className="text-2xl pt-4">In Association with </span>
        <h2>
          Renewable Energy Lab <br /> Prince Sultan University,
          Riyadh, Saudi Arabia.
        </h2>
      </main>

      <footer className="lg:flex py-10 px-2 lg:p-12">
        <ol className="p-0 md:pl-3">
          <li className="pb-4">
            <h4>CONFERENCE CHAIR</h4>
            <a href="https://www.ssn.edu.in/staff-members/dr-v-rajini/"target="_blank" >
              Dr. V Rajini
            </a>
            <p>Professor & Head, SSNCE</p>
          </li>
          <li>
            <h4>CONFERENCE CO-CHAIR</h4>
            <p>Dr. Umashankar Subramaniam</p>
            <p>
              Renewable Energy Lab,<br /> Prince Sultan University, Riyadh, Saudi
              Arabia.
            </p>
          </li>
        </ol>
        <ul className="p-0 md:pl-3">
          <h4>CONVENERS</h4>
          <li>
            <a
              href="https://www.ssn.edu.in/staff-members/dr-v-thiyagarajan/"
              target="_blank"
            >
              Dr. Thiyagarajan V
            </a>
            <p>Associate Professor, SSNCE</p>
          </li>
          <li>
            <a
              href="https://www.ssn.edu.in/staff-members/dr-n-b-muthu-selvan/"
              target="_blank"
            >
              Dr. Muthu Selvan N B
            </a>
            <p>Associate Professor, SSNCE</p>
          </li>
          <li>
            <a
              href="https://www.ssn.edu.in/staff-members/dr-m-devesh-raj/"
              target="_blank"
            >
              Dr. DEVESH RAJ M
            </a>
            <p>Associate Professor, SSNCE</p>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default HeroSection;
