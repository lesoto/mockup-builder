import React from 'react';

export const Blog = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Blog</h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
            of a real written text but is random or otherwise generated.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6 xl:gap-8">
          <div className="flex flex-col md:flex-row items-center border rounded-lg overflow-hidden">
            <a
              href="/"
              className="group w-full md:w-32 lg:w-48 h-48 md:h-full block self-start shrink-0 bg-gray-100 overflow-hidden relative"
            >
              <img
                src="images/photo-1593508512255-86ab42a8e620.avif"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />
            </a>

            <div className="flex flex-col gap-2 p-4 lg:p-6">
              <span className="text-gray-400 text-sm">July 19, 2022</span>

              <h2 className="text-gray-800 text-xl font-bold">
                <a href="/" className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">
                  New trends in Tech
                </a>
              </h2>
              <p className="text-gray-500">
                This is a section of some simple filler text, also known as placeholder text.
              </p>
              <div>
                <a
                  href="/"
                  className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center border rounded-lg overflow-hidden">
            <a
              href="/"
              className="group w-full md:w-32 lg:w-48 h-48 md:h-full block self-start shrink-0 bg-gray-100 overflow-hidden relative"
            >
              <img
                src="images/photo-1550745165-9bc0b252726f.avif"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />
            </a>
            <div className="flex flex-col gap-2 p-4 lg:p-6">
              <span className="text-gray-400 text-sm">April 07, 2022</span>
              <h2 className="text-gray-800 text-xl font-bold">
                <a href="/" className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">
                  Working with legacy stacks
                </a>
              </h2>
              <p className="text-gray-500">
                This is a section of some simple filler text, also known as placeholder text.
              </p>
              <div>
                <a
                  href="/"
                  className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center border rounded-lg overflow-hidden">
            <a
              href="/"
              className="group w-full md:w-32 lg:w-48 h-48 md:h-full block self-start shrink-0 bg-gray-100 overflow-hidden relative"
            >
              <img
                src="images/photo-1542759564-7ccbb6ac450a.avif"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />
            </a>
            <div className="flex flex-col gap-2 p-4 lg:p-6">
              <span className="text-gray-400 text-sm">March 15, 2022</span>
              <h2 className="text-gray-800 text-xl font-bold">
                <a href="/" className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">
                  10 best smartphones for devs
                </a>
              </h2>
              <p className="text-gray-500">
                This is a section of some simple filler text, also known as placeholder text.
              </p>
              <div>
                <a
                  href="/"
                  className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center border rounded-lg overflow-hidden">
            <a
              href="/"
              className="group w-full md:w-32 lg:w-48 h-48 md:h-full block self-start shrink-0 bg-gray-100 overflow-hidden relative"
            >
              <img
                src="images/photo-1610465299996-30f240ac2b1c.avif"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />
            </a>
            <div className="flex flex-col gap-2 p-4 lg:p-6">
              <span className="text-gray-400 text-sm">January 27, 2022</span>
              <h2 className="text-gray-800 text-xl font-bold">
                <a href="/" className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">
                  8 High performance Notebooks
                </a>
              </h2>
              <p className="text-gray-500">
                This is a section of some simple filler text, also known as placeholder text.
              </p>
              <div>
                <a
                  href="/"
                  className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100"
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
