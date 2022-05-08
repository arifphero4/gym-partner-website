/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Me = () => {
  return (
    <div className="container mx-auto px-5 py-6">
      <div className="grid grid-cols-1 gap-6 items-center md:grid-cols-2">
        <div className="text-justify shadow-lg p-5 border-2 border-gray-600">
          <h1 className="text-4xl font-bold text-gray-900 mb-3 ">About</h1>
          <h3 className="text-2xl font-bold text-gray-700 pb-3">
            Hello myself Arif Ahammad. I'm a courious person about programming.
          </h3>
          <p className="text-gray-600 pb-3">
            I am a Full Stack Web Developer and have great experience in
            MERN-Stack development. I build high-end, user-friendly, responsive
            websites and maintain all the following parts like Security,
            Performance, User friendly, Bug-free (security + frontend view),
            Proper maintainability code, etc. Always eager to adopt new
            technologies to become a High-level programmer.
          </p>
          <ul>
            <li className="text-gray-700 font-medium">
              • Expertise: React.js, JavaScript, ES6, Bootstrap, Material UI,
              firebase authentication, and Rest API.
            </li>
            <li className="text-gray-700 font-medium">
              • Comfortable: Node.js, Express.js, React Native, and MongoDB.
            </li>
            <li className="text-gray-700 font-medium">• Tools: Github, VS Code, Chrome Dev tool, Heroku, Netlify.</li>
          </ul>
        </div>
        <div className="border-2 border-gray-600 rounded-lg shadow-xl overflow-hidden">
          <img
            className="w-full"
            src="https://i.ibb.co/5F5h4J0/Screenshot-6.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Me;
