import React from "react";

const CallForPapers = () => {
  const domains = [
    "Smart Grid Systems",
    "Power Electronic Converters and Drives",
    "Energy Storage Technologies",
    "Renewable Energy Systems",
    "Embedded Systems",
    'Computational Intelligence and Optimization',
    'Smart Electric Vehicles',
    'Information Security and Privacy',
    'Machine Learning and Data Analytics in Smart Grid',
    'IoT technologies in electrical engineering'
  ];
  return (
    <div className="lg:w-4/5 ml-auto p-8 flex justify-center items-center min-h-screen">
      <div className="max-w-[800px]">
        <h2 className="capitalize">call for papers</h2>
        <div>
          <p>
            The authors are invited to submit full length original research
            contributions and review articles which are NOT Published /
            Submitted / Under consideration anywhere in other journals /
            magazines or conference proceedings, in Electronic Format covered
            under the areas mentioned.
          </p>
          <p>
            All submitted papers will undergo a rigorous peer-review process and
            authors of selected papers will be invited to present their work at
            ICEES - 2023, after registration.
          </p>
          <p className="text-left">
            Technical papers are solicited on the topics pertaining to the scope
            of the Conference will include, but are not limited to:
          </p>
          <ol className="text-left list-decimal">
            {domains.map((item, index) => <li key={index} className="list-decimal">{item}</li>)}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;
