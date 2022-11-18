import React from 'react';

export const Benefits = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div className="mb-8 md:mb-12">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Our Team by the numbers
          </h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
            of a real written text but is random or otherwise generated.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
          <div className="flex flex-col justify-center items-center bg-gray-100 rounded-lg p-4 lg:p-8">
            <div className="text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold">200</div>
            <div className="text-sm sm:text-base font-semibold">People</div>
          </div>
          <div className="flex flex-col justify-center items-center bg-gray-100 rounded-lg p-4 md:p-8">
            <div className="text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold">500+</div>
            <div className="text-sm sm:text-base font-semibold">People</div>
          </div>

          <div className="flex flex-col justify-center items-center bg-gray-100 rounded-lg p-4 md:p-8">
            <div className="text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold">1000+</div>
            <div className="text-sm sm:text-base font-semibold">Customers</div>
          </div>
          <div className="flex flex-col justify-center items-center bg-gray-100 rounded-lg p-4 md:p-8">
            <div className="text-indigo-500 text-xl sm:text-2xl md:text-3xl font-bold">A couple</div>
            <div className="text-sm sm:text-base font-semibold">Coffee breaks</div>
          </div>
        </div>
      </div>
    </div>
  );
};
