import React from 'react';

export const PricingOne = () => {
  return (
    <div className="container px-6 py-8 mx-auto bg-green dark:bg-gray-800">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Simple, transparent pricing</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">No Contracts. No surorise fees.</p>
        </div>

        <div className="overflow-hidden p-0.5 mt-6 border rounded-lg dark:border-gray-700">
          <div className="sm:-mx-0.5 flex">
            <button className=" focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-white bg-blue-500 rounded-lg">
              Monthly
            </button>
            <button className=" focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 bg-transparent rounded-lg hover:bg-gray-200">
              Yearly
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
          <p className="text-lg font-medium text-gray-800 dark:text-gray-100">Intro</p>
          <h4 className="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">
            $19 <span className="text-base font-normal text-gray-600 dark:text-gray-400">/ Month</span>
          </h4>
          <p className="mt-4 text-gray-500 dark:text-gray-300">
            For most businesses that want to optimaize web queries.
          </p>

          <div className="mt-8 space-y-8">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="mx-4 text-gray-700 dark:text-gray-300">All limited links</span>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="mx-4 text-gray-700 dark:text-gray-300">Own analytics platform</span>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="mx-4 text-gray-700 dark:text-gray-300">Unlimited users</span>
            </div>
          </div>

          <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Choose plan
          </button>
        </div>

        <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
          <p className="text-lg font-medium text-gray-800 dark:text-gray-100">Base</p>
          <h4 className="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">
            $39 <span className="text-base font-normal text-gray-600 dark:text-gray-400">/ Month</span>
          </h4>
          <p className="mt-4 text-gray-500 dark:text-gray-300">
            For most businesses that want to optimaize web queries.
          </p>

          <div className="mt-8 space-y-8">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="mx-4 text-gray-700 dark:text-gray-300">All limited links</span>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="mx-4 text-gray-700 dark:text-gray-300">Own analytics platform</span>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="mx-4 text-gray-700 dark:text-gray-300">Unlimited users</span>
            </div>
          </div>

          <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Choose plan
          </button>
        </div>

        <div className="px-6 py-4 transition-colors duration-200 transform bg-gray-700 rounded-lg dark:bg-gray-600">
          <p className="text-lg font-medium text-gray-100">Popular</p>
          <h4 className="mt-2 text-4xl font-semibold text-gray-100">
            $99 <span className="text-base font-normal text-gray-400">/ Month</span>
          </h4>
          <p className="mt-4 text-gray-300">For most businesses that want to optimaize web queries.</p>

          <div className="mt-8 space-y-8">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="mx-4 text-gray-300">All limited links</span>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="mx-4 text-gray-300">Own analytics platform</span>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="mx-4 text-gray-300">Chat support</span>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="mx-4 text-gray-300">Optimize hashtags</span>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="mx-4 text-gray-300">Unlimited users</span>
            </div>
          </div>

          <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Choose plan
          </button>
        </div>

        <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
          <p className="text-lg font-medium text-gray-800 dark:text-gray-100">Exterprise</p>
          <h4 className="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">
            $199 <span className="text-base font-normal text-gray-600 dark:text-gray-400">/ Month</span>
          </h4>
          <p className="mt-4 text-gray-500 dark:text-gray-300">
            For most businesses that want to optimaize web queries.
          </p>

          <div className="mt-8 space-y-8">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="mx-4 text-gray-700 dark:text-gray-300">All limited links</span>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="mx-4 text-gray-700 dark:text-gray-300">Own analytics platform</span>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="mx-4 text-gray-700 dark:text-gray-300">Unlimited users</span>
            </div>
          </div>

          <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Choose plan
          </button>
        </div>
      </div>
    </div>
  );
};

export const PricingTwo = () => {
  return (
    <div className="card-deck pricing-table">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title pt-3">Personal</h3>
          <h2 className="card-title text-primary mb-0 pt-4">$59</h2>
          <div className="text-muted font-weight-medium mt-2">per month</div>
          <ul className="list-unstyled pricing-list">
            <li>1 user</li>
            <li>10 websites</li>
            <li>Access to premium templates</li>
            <li>Basic support</li>
          </ul>
          <a href="/" className="btn btn-primary">
            Start free trial
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title pt-3">Agency</h3>
          <h2 className="card-title text-info mb-0 pt-4">$159</h2>
          <div className="text-muted font-weight-medium mt-2">per month</div>
          <ul className="list-unstyled pricing-list">
            <li>2-15 users</li>
            <li>50 websites</li>
            <li>Access to premium templates</li>
            <li>Priority support</li>
          </ul>
          <a href="/" className="btn btn-info">
            Start free trial
          </a>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title pt-3">Enterprise</h3>
          <h2 className="card-title text-primary mb-0 pt-4">$499</h2>
          <div className="text-muted font-weight-medium mt-2">per month</div>
          <ul className="list-unstyled pricing-list">
            <li>Unlimited users</li>
            <li>Unlimited websites</li>
            <li>Access to premium templates</li>
            <li>24/7 support</li>
          </ul>
          <a href="/" className="btn btn-primary">
            Start free trial
          </a>
        </div>
      </div>
    </div>
  );
};

export const PricingThree = () => {
  return (
    <div className="antialiased max-w-6xl mx-auto my-12 bg-gray-300 px-8">
      <div className="relative block md:flex items-center">
        <div className="w-full md:w-1/2 relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
          <div className="text-lg font-medium text-green-500 uppercase p-8 text-center border-b border-gray-200 tracking-wide">
            Pay as you go
          </div>
          <div className="block sm:flex md:block lg:flex items-center justify-center">
            <div className="mt-8 sm:m-8 md:m-0 md:mt-8 lg:m-8 text-center">
              <div className="inline-flex items-center">
                <span className="text-3xl font-medium">1.4%</span>
                <span className="text-xl text-gray-600 ml-2">+</span>
                <span className="text-xl ml-2">20p</span>
              </div>
              <span className="block text-sm text-gray-600 mt-2">for European cards</span>
            </div>
            <div className="mt-4 mb-8 sm:m-8 md:m-0 md:mt-4 md:mb-8 lg:m-8 text-center">
              <div className="inline-flex items-center">
                <span className="text-3xl font-medium">2.9%</span>
                <span className="text-xl text-gray-600 ml-2">+</span>
                <span className="text-xl ml-2">20p</span>
              </div>
              <span className="block text-sm text-gray-600 mt-2">for non-European cards</span>
            </div>
          </div>
          <div className="flex justify-center mt-3">
            <ul>
              <li className="flex items-center">
                <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 icon-umbrella">
                    <path
                      className="primary"
                      d="M11 3.05V2a1 1 0 0 1 2 0v1.05A10 10 0 0 1 22 13c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a2 2 0 1 0-4 0c0 1.33-2 1.33-2 0a10 10 0 0 1 9-9.95z"
                    />
                    <path
                      className="secondary"
                      d="M11 14a1 1 0 0 1 2 0v5a3 3 0 0 1-6 0 1 1 0 0 1 2 0 1 1 0 0 0 2 0v-5z"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg ml-3">No setup, monthly, or hidden fees</span>
              </li>
              <li className="flex items-center mt-3">
                <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                  <svg className="w-4 h-4 icon-shopping-bag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      className="primary"
                      d="M5 8h14a1 1 0 0 1 1 .92l1 12A1 1 0 0 1 20 22H4a1 1 0 0 1-1-1.08l1-12A1 1 0 0 1 5 8z"
                    />
                    <path
                      className="secondary"
                      d="M9 10a1 1 0 0 1-2 0V7a5 5 0 1 1 10 0v3a1 1 0 0 1-2 0V7a3 3 0 0 0-6 0v3z"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg ml-3">Pay only for what you use</span>
              </li>
              <li className="flex items-center mt-3">
                <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                  <svg className="w-4 h-4 icon-pie-chart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      className="primary"
                      d="M14 13h6.78a1 1 0 0 1 .97 1.22A10 10 0 1 1 9.78 2.25a1 1 0 0 1 1.22.97V10a3 3 0 0 0 3 3z"
                    />
                    <path
                      className="secondary"
                      d="M20.78 11H14a1 1 0 0 1-1-1V3.22a1 1 0 0 1 1.22-.97c3.74.85 6.68 3.79 7.53 7.53a1 1 0 0 1-.97 1.22z"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg ml-3">Real-time fee reporting</span>
              </li>
            </ul>
          </div>
          <a
            className="block flex items-center justify-center bg-gray-200 hover:bg-gray-300 p-8 text-md font-semibold text-gray-800 uppercase mt-16"
            href="/"
          >
            <span>Create account</span>
            <span className="font-medium text-gray-700 ml-2">➔</span>
          </a>
        </div>
        <div className="w-full md:w-1/2 relative z-0 px-8 md:px-0 md:py-16">
          <div className="bg-blue-900 text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
            <div className="text-lg font-medium uppercase p-8 text-center border-b border-blue-800 tracking-wide">
              Enterprise
            </div>
            <div className="text-center text-sm sm:text-md max-w-sm mx-auto mt-8 text-blue-200 px-8 lg:px-0">
              Stripe offers everything needed to run an online business at scale. Get in touch for details.
            </div>
            <div className="mt-8 border border-blue-800 mx-8 lg:mx-16 flex flex-wrap">
              <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-b border-blue-800">
                Account management
              </div>
              <div className="flex items-center justify-center w-1/2 text-center p-4 border-b border-blue-800">
                Volume discounts
              </div>
              <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-blue-800">
                Migration assistance
              </div>
              <div className="flex items-center justify-center w-1/2 text-center p-4">Dedicated support</div>
            </div>
            <a
              className="block flex items-center justify-center bg-blue-800 hover:bg-blue-700 p-8 text-md font-semibold text-gray-300 uppercase mt-8"
              href="/"
            >
              <span>Contact sales</span>
              <span className="font-medium text-gray-300 ml-2">➔</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PricingFour = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Choose a Bundle</h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics
            of a real written text but is random or otherwise generated.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-0">
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-gray-800 rounded-lg sm:rounded-r-none p-6 sm:p-8">
            <div className="mb-4">
              <h3 className="text-gray-100 text-2xl sm:text-3xl font-semibold">Basic Bundle</h3>
              <p className="text-gray-300">Ebook</p>
            </div>

            <div className="space-x-2 mb-4">
              <span className="text-gray-100 text-4xl font-bold">$29</span>
              <span className="text-gray-300 text-2xl line-through">$49</span>
            </div>

            <ul className="text-gray-300 space-y-2 mb-6">
              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>Ebook</span>
              </li>

              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>Multiple examples</span>
              </li>

              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>Basic support</span>
              </li>
            </ul>

            <a
              href="/"
              className="block bg-gray-500 hover:bg-gray-600 focus-visible:ring ring-indigo-300 text-gray-100 active:text-gray-300 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Get the Basic Bundle
            </a>
          </div>

          <div className="w-full sm:w-1/2 bg-gradient-to-tr from-indigo-500 to-violet-400 rounded-lg shadow-xl p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="text-white text-2xl sm:text-3xl font-semibold">Pro Bundle</h3>
                <p className="text-indigo-100">Ebook + Video course</p>
              </div>

              <span className="inline-block order-first lg:order-none bg-indigo-200 bg-opacity-50 text-white text-xs font-semibold tracking-wider uppercase rounded-full px-3 py-1">
                Best value
              </span>
            </div>

            <div className="space-x-2 mb-4">
              <span className="text-white text-4xl font-bold">$49</span>
              <span className="text-indigo-100 text-2xl line-through">$89</span>
            </div>

            <ul className="text-indigo-100 space-y-2 mb-6">
              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>Ebook</span>
              </li>

              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>Video course</span>
              </li>

              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>Multiple examples</span>
              </li>

              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>Work sheets</span>
              </li>

              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>Premium support</span>
              </li>
            </ul>

            <a
              href="/"
              className="block bg-indigo-200 bg-opacity-50 hover:bg-indigo-300 active:bg-indigo-400 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Get the Pro Bundle
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
