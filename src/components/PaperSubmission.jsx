import React from "react";

const PaperSubmission = () => {
  return (
    <div className="lg:w-4/5 ml-auto p-8 flex justify-center items-center min-h-screen">
      <div className="max-w-[800px]">
        <h2>Paper submission</h2>
        <a href="https://cmt3.research.microsoft.com/ICEES2023" class="button">
          submission link
        </a>
        <div className="text-left">
          <h4>
            Prospective authors are requested to follow the instructions below
            for submitting papers to ICEES - 2023.
          </h4>

          <ol>
            <li>
              ● The paper must be written strictly conforming to IEEE FORMAT and
              not exceeding SIX pages.
            </li>
            <li className="inline-block">IEEE Paper Template can be downloaded from,</li>
            <a
              href="https://www.ieee.org/conferences/publishing/templates.html"
              class="button"
            >
                here
              </a>
            <li>
              ● All papers must be original and not simultaneously submitted to
              another journal or conference.
            </li>
            <li>
              ● Conference strictly abides to Plagiarism Policy and authors are
              advised to check plagiarism prior to paper submission.
            </li>
            <li>● Papers must be submitted in PDF format.</li>
            <li>
              ● Each submission will be assigned a PAPER ID. Authors are advised
              to use this PAPER ID for further correspondences.
            </li>
            <li>
              ● Presentation of an accepted paper at the conference is a
              requirement of publication in the conference proceedings.
            </li>
            <li>
              ● All submitted papers will undergo a rigorous peer-review process
              and authors of selected papers will be invited to present their
              work at ICEES-2023, after registration.
            </li>
            <li>
              ● The conference proceedings will be submitted to IEEE for
              possible inclusion in IEEE Explore, after the papers undergo a
              further round of reviews, at the discretion of IEEE.
            </li>
            <h4 className="pt-8 text-center">
              [Authors should submit their papers online through Microsoft's
              Conference Management Toolkit]
            </h4>
            <div className="text-center">
                <a
                href="https://cmt3.research.microsoft.com/ICEES2023"
                class="button text-center"
                >
                submission link
                </a>
            </div>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PaperSubmission;
