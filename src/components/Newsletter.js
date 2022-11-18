import React from 'react';

export function Subscription() {
  return (
    <div className="bg-indigo-500 py-6">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="text-center md:text-left mb-3 md:mb-0">
            <span className="text-gray-100 font-bold uppercase tracking-widest">Newsletter</span>
            <p className="text-indigo-200">Subscribe to our newsletter</p>
            <p className="my-2">Social Media</p>
            <div>
              <i className="fa-2x mx-2 fab fa-facebook"></i>
              <i className="fa-2x mx-2 fab fa-twitter"></i>
              <i className="fa-2x mx-2 fab fa-youtube"></i>
            </div>
          </div>

          <form className="w-full md:max-w-md flex gap-2">
            <input
              placeholder="Email"
              className="w-full flex-1 bg-indigo-400 text-white placeholder-indigo-100 border border-white focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
            />

            <button className="inline-block bg-white hover:bg-gray-100 focus-visible:ring ring-indigo-300 text-indigo-500 active:text-indigo-600 text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export function NewsletterContent() {
  return (
    <section className="section-01">
      <div className="row">
        <div className="col-12 col-md-4 align-self-center">
          <img src="../images/Person-Using-Macbook-Pro.jpg" className="img-fluid section-01-img" alt="" />
        </div>
        <div className="col-12 col-md-8 align-self-center px-2">
          <h2 className="mb-2">Newsletter Content</h2>
          <p className="text-break">Newsletter Content goes here.</p>
          <p className="text-break hidden-p">Newsletter Content about Digital marketing and services.</p>
        </div>
      </div>
    </section>
  );
}
