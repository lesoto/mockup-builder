import React from 'react';

export const ProductCollection = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="flex justify-between items-end gap-4 mb-6">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">Products</h2>
          <a
            href="/"
            className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
          >
            Show more
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-6">
          <div>
            <a href="/" className="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 lg:mb-3">
              <img
                src="images/photo-1552374196-1ab2a1c593e8.avif"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
              />
            </a>
            <div className="flex flex-col">
              <span className="text-gray-500">Men</span>
              <a
                href="/"
                className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
              >
                Business Causual
              </a>
            </div>
          </div>
          <div>
            <a href="/" className="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 lg:mb-3">
              <img
                src="images/photo-1603344797033-f0f4f587ab60.avif"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
              />
            </a>
            <div className="flex flex-col">
              <span className="text-gray-500">Women</span>
              <a
                href="/"
                className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
              >
                Summer Season
              </a>
            </div>
          </div>
          <div>
            <a href="/" className="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 lg:mb-3">
              <img
                src="images/photo-1552668693-d0738e00eca8.avif"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
              />
            </a>
            <div className="flex flex-col">
              <span className="text-gray-500">Men</span>
              <a
                href="/"
                className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
              >
                Streetwear
              </a>
            </div>
          </div>
          <div>
            <a href="/" className="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 lg:mb-3">
              <img
                src="images/photo-1560269999-cef6ebd23ad3.avif"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
              />
            </a>
            <div className="flex flex-col">
              <span className="text-gray-500">Women</span>
              <a
                href="/"
                className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
              >
                Sale
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductOne = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden relative">
              <img
                src="images/photo-1571366992942-be878c7b10c0.avif"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center"
              />

              <span className="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">
                sale
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="images/photo-1571366992791-2ad2078656cb.avif"
                  loading="lazy"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="images/photo-1571366992968-15b65708ee76.avif"
                  loading="lazy"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="inline-block text-gray-500 mb-0.5">Fancy Brand</span>
              <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">Pullover with pattern</h2>
            </div>

            <div className="flex items-center mb-6 md:mb-10">
              <div className="flex gap-0.5 -ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <span className="text-gray-500 text-sm ml-2">4.2</span>

              <a
                href="/"
                className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm font-semibold transition duration-100 ml-4"
              >
                view all 47 reviews
              </a>
            </div>

            <div className="mb-4 md:mb-6">
              <span className="inline-block text-gray-500 text-sm md:text-base font-semibold mb-3">Color</span>

              <div className="flex flex-wrap gap-2">
                <span className="w-8 h-8 bg-gray-800 border ring-2 ring-offset-1 ring-gray-800 rounded-full transition duration-100"></span>
                <button
                  type="button"
                  className="w-8 h-8 bg-gray-500 border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-full transition duration-100"
                ></button>
                <button
                  type="button"
                  className="w-8 h-8 bg-gray-200 border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-full transition duration-100"
                ></button>
                <button
                  type="button"
                  className="w-8 h-8 bg-white border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-full transition duration-100"
                ></button>
              </div>
            </div>

            <div className="mb-8 md:mb-10">
              <span className="inline-block text-gray-500 text-sm md:text-base font-semibold mb-3">Size</span>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="w-12 h-8 flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100"
                >
                  XS
                </button>
                <button
                  type="button"
                  className="w-12 h-8 flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100"
                >
                  S
                </button>
                <span className="w-12 h-8 flex justify-center items-center bg-indigo-500 text-white text-sm font-semibold text-center border border-indigo-500 rounded-md cursor-default">
                  M
                </span>
                <button
                  type="button"
                  className="w-12 h-8 flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100"
                >
                  L
                </button>
                <span className="w-12 h-8 flex justify-center items-center bg-white text-gray-400 text-sm font-semibold text-center border border-transparent rounded-md cursor-not-allowed">
                  XL
                </span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-gray-800 text-xl md:text-2xl font-bold">$15.00</span>
                <span className="text-red-500 line-through mb-0.5">$30.00</span>
              </div>

              <span className="text-gray-500 text-sm">incl. VAT plus shipping</span>
            </div>

            <div className="flex items-center text-gray-500 gap-2 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                />
              </svg>

              <span className="text-sm">2-4 day shipping</span>
            </div>

            <div className="flex gap-2.5">
              <a
                href="/"
                className="inline-block flex-1 sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Add to cart
              </a>

              <a
                href="/"
                className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </a>
            </div>

            <div className="mt-10 md:mt-16 lg:mt-20">
              <div className="text-gray-800 text-lg font-semibold mb-3">Description</div>

              <p className="text-gray-500">
                This is a section of some simple filler text, also known as placeholder text. It shares some
                characteristics of a real written text but is random or otherwise generated. It may be used to display a
                sample of fonts or generate text for testing.
                <br />
                <br />
                This is a section of some simple filler text, also known as placeholder text. It shares some
                characteristics of a real written text but is random or otherwise generated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductTwo = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="grid lg:grid-cols-5 gap-4">
            <div className="flex lg:flex-col order-last lg:order-none gap-4">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="images/photo-1571366992791-2ad2078656cb.avif"
                  loading="lazy"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="images/photo-1571366992968-15b65708ee76.avif"
                  loading="lazy"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="images/photo-1571366992999-47669b775ef6.avif"
                  loading="lazy"
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="lg:col-span-4 bg-gray-100 rounded-lg overflow-hidden relative">
              <img
                src="images/photo-1571366992942-be878c7b10c0.avif"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center"
              />

              <span className="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">
                sale
              </span>

              <a
                href="/"
                className="inline-block bg-white hover:bg-gray-100 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 border text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 absolute right-4 top-4 px-3.5 py-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="inline-block text-gray-500 mb-0.5">Fancy Brand</span>
              <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">Pullover with pattern</h2>
            </div>

            <div className="flex items-center gap-3 mb-6 md:mb-10">
              <div className="h-7 flex items-center bg-indigo-500 text-white rounded-full gap-1 px-2">
                <span className="text-sm">4.2</span>

                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              <span className="text-gray-500 text-sm transition duration-100">56 ratings</span>
            </div>

            <div className="mb-4 md:mb-6">
              <span className="inline-block text-gray-500 text-sm md:text-base font-semibold mb-3">Color</span>

              <div className="flex flex-wrap gap-2">
                <span className="w-8 h-8 bg-gray-800 border ring-2 ring-offset-1 ring-gray-800 rounded-full transition duration-100"></span>
                <button
                  type="button"
                  className="w-8 h-8 bg-gray-500 border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-full transition duration-100"
                ></button>
                <button
                  type="button"
                  className="w-8 h-8 bg-gray-200 border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-full transition duration-100"
                ></button>
                <button
                  type="button"
                  className="w-8 h-8 bg-white border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-full transition duration-100"
                ></button>
              </div>
            </div>

            <div className="mb-8 md:mb-10">
              <span className="inline-block text-gray-500 text-sm md:text-base font-semibold mb-3">Size</span>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="w-12 h-8 flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100"
                >
                  XS
                </button>
                <button
                  type="button"
                  className="w-12 h-8 flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100"
                >
                  S
                </button>
                <span className="w-12 h-8 flex justify-center items-center bg-indigo-500 text-white text-sm font-semibold text-center border border-indigo-500 rounded-md cursor-default">
                  M
                </span>
                <button
                  type="button"
                  className="w-12 h-8 flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100"
                >
                  L
                </button>
                <span className="w-12 h-8 flex justify-center items-center bg-white text-gray-400 text-sm font-semibold text-center border border-transparent rounded-md cursor-not-allowed">
                  XL
                </span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-gray-800 text-xl md:text-2xl font-bold">$15.00</span>
                <span className="text-red-500 line-through mb-0.5">$30.00</span>
              </div>

              <span className="text-gray-500 text-sm">incl. VAT plus shipping</span>
            </div>

            <div className="flex items-center text-gray-500 gap-2 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                />
              </svg>

              <span className="text-sm">2-4 day shipping</span>
            </div>

            <div className="flex gap-2.5">
              <a
                href="/"
                className="inline-block flex-1 sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Add to cart
              </a>

              <a
                href="/"
                className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
              >
                Buy now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductThree = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="flex justify-between items-end gap-4 mb-6">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">Selected</h2>

          <a
            href="/"
            className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
          >
            Show more
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">
          <div>
            <a href="/" className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
              <img
                src="images/photo-1523275335684-37898b6baf30.avif"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
              />

              <span className="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">
                sale
              </span>
            </a>

            <div>
              <a href="/" className="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">
                Timely Watch
              </a>

              <div className="flex items-end gap-2">
                <span className="text-gray-800 lg:text-lg font-bold">$15.00</span>
                <span className="text-red-500 line-through mb-0.5">$30.00</span>
              </div>
            </div>
          </div>

          <div>
            <a href="/" className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
              <img
                src="images/photo-1485955900006-10f4d324d411.avif"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
              />
            </a>

            <div>
              <a href="/" className="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">
                Fancy Plant
              </a>

              <div className="flex items-end gap-2">
                <span className="text-gray-800 lg:text-lg font-bold">$9.00</span>
              </div>
            </div>
          </div>

          <div>
            <a href="/" className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
              <img
                src="images/photo-1526170375885-4d8ecf77b99f.avif"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
              />
            </a>

            <div>
              <a href="/" className="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">
                Elderly Cam
              </a>

              <div className="flex items-end gap-2">
                <span className="text-gray-800 lg:text-lg font-bold">$45.00</span>
              </div>
            </div>
          </div>

          <div>
            <a href="/" className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
              <img
                src="images/photo-1560343090-f0409e92791a.avif"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
              />
            </a>

            <div>
              <a href="/" className="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">
                Shiny Shoe
              </a>

              <div className="flex items-end gap-2">
                <span className="text-gray-800 lg:text-lg font-bold">$29.00</span>
              </div>
            </div>
          </div>

          <div>
            <a href="/" className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
              <img
                src="images/photo-1528476513691-07e6f563d97f.avif"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
              />
            </a>

            <div>
              <a href="/" className="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">
                Spiky Plant
              </a>

              <div className="flex items-end gap-2">
                <span className="text-gray-800 lg:text-lg font-bold">$4.00</span>
              </div>
            </div>
          </div>

          <div>
            <a href="/" className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
              <img
                src="images/photo-1612033448550-9d6f9c17f07d.avif"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
              />
            </a>

            <div>
              <a href="/" className="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">
                Wieldy Film
              </a>

              <div className="flex items-end gap-2">
                <span className="text-gray-800 lg:text-lg font-bold">$19.00</span>
              </div>
            </div>
          </div>

          <div>
            <a href="/" className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
              <img
                src="images/photo-1579609598065-79f8e5bcfb70.avif"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
              />
              <span className="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">
                sale
              </span>
            </a>

            <div>
              <a href="/" className="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">
                Sturdy Stand
              </a>

              <div className="flex items-end gap-2">
                <span className="text-gray-800 lg:text-lg font-bold">$12.00</span>
                <span className="text-red-500 line-through mb-0.5">$24.00</span>
              </div>
            </div>
          </div>

          <div>
            <a href="/" className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3">
              <img
                src="images/photo-1619066045029-5c7e8537bd8c.avif"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
              />
            </a>

            <div>
              <a href="/" className="text-gray-500 hover:gray-800 lg:text-lg transition duration-100 mb-1">
                Lazy Bottle
              </a>

              <div className="flex items-end gap-2">
                <span className="text-gray-800 lg:text-lg font-bold">$9.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductFour = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">Collections</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          <div>
            <a
              href="/"
              className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
            >
              <img
                src="images/photo-1552374196-1ab2a1c593e8.avif"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                <span className="text-gray-500">Men</span>
                <span className="text-gray-800 text-lg lg:text-xl font-bold">Business Causual</span>
              </div>
            </a>
          </div>

          <div>
            <a
              href="/"
              className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
            >
              <img
                src="images/photo-1603344797033-f0f4f587ab60.avif"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                <span className="text-gray-500">Women</span>
                <span className="text-gray-800 text-lg lg:text-xl font-bold">Summer Season</span>
              </div>
            </a>
          </div>

          <div>
            <a
              href="/"
              className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
            >
              <img
                src="images/photo-1552668693-d0738e00eca8.avif"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                <span className="text-gray-500">Men</span>
                <span className="text-gray-800 text-lg lg:text-xl font-bold">Streetwear</span>
              </div>
            </a>
          </div>
          <div>
            <a
              href="/"
              className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
            >
              <img
                src="images/photo-1560269999-cef6ebd23ad3.avif"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                <span className="text-gray-500">Women</span>
                <span className="text-gray-800 text-lg lg:text-xl font-bold">Sale</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
