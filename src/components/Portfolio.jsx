import React from "react";
import expense_tracker from "../assets/portfolio/expense_tracker.jpg";
import weather_app from "../assets/portfolio/weather_app.jpg";
import quiz_app from "../assets/portfolio/quiz_app.jpg";


const Portfolio = () => {


  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here
          
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        
           <div  className="shadow-md shadow-gray-600 rounded-lg">
              <p className="text-2xl font-bold inline  border-gray-500">EXPENSE-TRACKER</p>
              <img
                src={expense_tracker}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a target="_blank"
              rel="noreferrer" href="https://expense-tracker-anshul.netlify.app/"> Demo</a>
                 
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a target="_blank"
              rel="noreferrer" href="https://github.com/AnshulRawat543/Expense_Tracker"> Code</a>
                 
                </button>
              </div>
            </div>
           <div  className="shadow-md shadow-gray-600 rounded-lg">
           <p className="text-2xl font-bold inline  border-gray-500">WEATHER-APP</p>
              <img
                src={weather_app}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a target="_blank"
              rel="noreferrer" href="https://anshulrawat543.github.io/weather-app.github.io/"> Demo</a>
                 
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a target="_blank"
              rel="noreferrer" href=" https://github.com/AnshulRawat543/weather-app.github.io"> Code</a>
                 
                </button>
              </div>
            </div>
           <div  className="shadow-md shadow-gray-600 rounded-lg">
           <p className="text-2xl font-bold inline  border-gray-500">QUIZ-APP</p>
              <img
                src={quiz_app}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a target="_blank"
              rel="noreferrer" href="https://anshulrawat543.github.io/quizz-app.github.io/"> Demo</a>
                 
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a target="_blank"
              rel="noreferrer" href="https://github.com/AnshulRawat543/quizz-app.github.io"> Code</a>
                 
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
  };

export default Portfolio;