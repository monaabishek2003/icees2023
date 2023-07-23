import React from "react";

function IeeePdfExpress() {
  return (
    <div className="lg:w-4/5 ml-auto p-8 flex justify-center items-center min-h-screen">
      <div className="max-w-[800px]">
        <div className="head">
          <h2>IEEE PDF EXPRESS</h2>
          <a
            href="https://ieee-pdf-express.org/"
            className="button"
            target="_blank"
          >
            IEEE eXpress Link
          </a>
          <p>
            All papers submitted for inclusion in IEEE Xplore must adhere to the
            IEEE Xplore PDF specificationfor compatibility. IEEE PDF eXpress is
            a free service to IEEE conferences, allowing their authors to make
            IEEE Xplore-compatible PDFs (Conversion function) or to check PDFs
            that authors have made themselves for IEEE Xplore compatibility (PDF
            Check function).
          </p>
          <h4 className="py-4">
            IEEE express site:{" "}
            <a href="https://ieee-pdf-express.org/">ieee-pdf-express.org</a>
          </h4>
          <p className="text-2xl"> <strong>Conference ID:57979X</strong></p>

          <div className="text-left">

            <h4 className="pt-4">INSTRUCTIONS:</h4>

            <p>
                Access the IEEE PDF eXpress site:
                <a href="https://ieee-pdf-express.org/" className="button">
                ieee-pdf-express.org
                </a>
            </p>

            <p><span className="font-semibold text-2xl">a) First-Time Users</span></p>
            <li>Select the 'New Users - Click Here link'.</li>
            <li>
                Enter the following:
                <ul className="sublist">
                <li>for the Conference ID</li>
                <li>Your email address</li>
                <li>A password</li>
                </ul>
            </li>

            <li>Continue to enter information as prompted.</li>
            <p>
                [An Online confirmation will be displayed and an email confirmation
                will be sent verifying your account setup]
            </p>

            <p><span className="font-semibold text-2xl">b) Previous Users of IEEE PDF eXpress or IEEE PDF eXpress Plus</span>  need
                to follow the above steps, but should enter the same password that
                was used for previous conferences. Verify that your contact
                information is valid.
            </p>

            <p className="text-xl font-medium">● If the submitted file fails the PDF check:</p>
            <ul>
                <li className="list-disc">
                    Submit your source file for conversion by clicking Try Again, the
                    Submit Source Files for Conversion, [or].
                </li>
                <li className="list-disc">
                    Read the PDF Check report, then click “The PDF Check Report” in the
                    sidebar to get information on possible solutions, [or]
                </li>
                <li className="list-disc">“Request Technical Help” through your account.</li>
            </ul>
            <p className="text-xl font-medium">
                    ● If you are not satisfied with the IEEE PDF eXpress-Plus-converted
                    PDF:
                </p>
                <li className="list-disc">
                    Resubmit your source file with corrections (Try Again, then Submit
                    Source Files for Conversion), [or]
                </li>
                <li className="list-disc">
                    Submit the PDF by clicking Try Again, then Submit PDF for Checking,
                    [or]
                </li>
                <li className="list-disc">“Request a Manual Conversion” through your account.</li>
            <div className="foot text-center pt-8">
                <a href="https://ieee-pdf-express.org/" className="button">
                IEEE eXpress Link
                </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default IeeePdfExpress;
