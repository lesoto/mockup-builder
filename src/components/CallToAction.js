import React from 'react';

export const CallToActionOne = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="md:h-80 flex flex-col sm:flex-row bg-gray-900 rounded-lg overflow-hidden">
          <div className="w-full sm:w-1/2 lg:w-2/5 flex flex-col p-4 sm:p-8">
            <h2 className="text-white text-xl md:text-2xl lg:text-4xl font-bold mb-4">
              Summer Sale
              <br />
              Up to 70% off.
            </h2>
            <p className="max-w-md text-gray-400 mb-8">
              This is a section of some simple filler text, also known as placeholder text. It shares some
              characteristics of a real written text.
            </p>
            <div className="mt-auto">
              <a
                href="/"
                className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Save now
              </a>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-3/5 h-48 sm:h-auto order-first sm:order-none bg-gray-700">
            <img
              src="images/photo-1505846951821-e25bacf2eccd.avif"
              loading="lazy"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const CallToActionTwo = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="max-w-xl flex flex-col items-center text-center mx-auto">
          <p className="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">Proud to introduce</p>
          <h1 className="text-black-800 text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">
            Revolutionary way to build the web
          </h1>
          <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
            <a
              href="/"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Start now
            </a>
            <a
              href="/"
              className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Take tour
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CallToActionThree = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 rounded-lg gap-4 p-4 md:p-8">
          <div>
            <h2 className="text-indigo-500 text-xl md:text-2xl font-bold">Start your free trial</h2>
            <p className="text-gray-600">No Credit Card required</p>
          </div>
          <a
            href="/"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
          >
            Start now
          </a>
        </div>
      </div>
    </div>
  );
};
