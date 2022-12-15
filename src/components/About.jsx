import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Myself Anshul, I am from Delhi and I am in my last year of BCA which
          I am pursuing from GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY 
          . I started Web Development when I was in college 1st year and loved it.
           Till now I have worked with many tech stacks live HTML, CSS, JAVASCRIPT,
           REACT JS, REDUX, MATERIAL UI, BOOTSTRAP, TAILWIND CSS. 
        </p>

        <br />

        <p className="text-xl">
        I have also done an internship in  Web Development from THE DIGITAL PLANETS. There I worked on many 
        projects live building a website for a CA firm and worked in a team to make and improve existing sites.
        I worked there for 3 months and learned a lot from that organization that how corporate life works and how
        to implement my skills in an efficient manner.
        </p>
      </div>
    </div>
  );
};

export default About;
