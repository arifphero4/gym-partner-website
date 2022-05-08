import React from "react";

const Everything = () => {
  return (
    <div>
      <div className="container mx-auto px-2 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="ml-8">
            <strong className="text-gray-900 font-bold text-2xl uppercase pb-3">
              Everything Is
            </strong>
            <h2 className="text-gray-900 text-4xl font-bold uppercase">
              Possible with <span className="text-blue-600">Arif</span>
            </h2>
            <p className="text-md font-medium text-gray-700 py-2">
              The Dangerously Fit Academy is committed to producing the very
              best personal trainers in the fitness industry. Our goal is to
              deliver Dhaka personal training courses that go above and beyond
              the certificate 3 and certificate 4 fitness education industry
              norm.
            </p>
            <p className="text-md font-medium text-gray-700 py-2">
              Unlike other Dhaka fitness instructor certification providers that
              mass produce fitness trainers on a production line, we only enroll
              small groups of students into our courses to ensure you receive
              the highest level of coaching and support. You will also be
              offered a chance to train members of the public at our training
              campus under the guidance of a The Dangerously Fit Academy tutor
              so you can gain real-life experience and confidence.
            </p>
          </div>
          <div className="flex items-cener justify-center">
            <div
              className="bg-blue-600 w-full p-4 text-center rounded-lg py-10"
              style={{ maxWidth: "350px" }}
            >
              <strong className="text-gray-50 font-bold text-xl uppercase flex text-center justify-center">
                Live a centered life
              </strong>
              <strong className="text-gray-900 font-bold font-bold text-3xl text-gray-50 uppercase">
                Body Shape
              </strong>
              <h2 className="font-bold text-gray-50 text-lg uppercase">
                Calculator
              </h2>
              <p className="text-gray-50 capitalize text-gray-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                qui odio tempore provident dolor possimus, quibusdam est?
                Blanditiis, mollitia inventore!
              </p>
              <div className="py-3">
                <input
                  className="flex text-md font-medium text-gray-800 bg-gray-50 py-1 px-2 rounded-full w-full"
                  type="text"
                  placeholder="Full Name"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3">
                  <input
                    className="flex text-md font-medium text-gray-800 bg-gray-50 py-1 px-2 rounded-full w-full"
                    type="text"
                    placeholder="Weight(KG)"
                  />
                  <input
                    className="flex text-md font-medium text-gray-800 bg-gray-50 py-1 px-2 rounded-full w-full"
                    type="text"
                    placeholder="Height (CM)"
                  />
                </div>
                <button className="text-gray-50 font-bold bg-gray-900 w-8/12 text-md uppercase rounded-full py-2 cursor-pointer">
                  Calculate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Everything;
