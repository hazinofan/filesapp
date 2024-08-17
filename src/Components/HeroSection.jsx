import React from 'react';

function HeroSection() {
  return (
    <>
      <div className="relative" id="home">
        <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        <div className="relative pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Unlock Premium
              </span>
              Digital Files for Only 1$ !
            </h1>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Welcome to your one-stop shop for top-quality digital files! Whether you need templates, graphics, e-books, music, or software, we have a vast collection of files across various categories, all available for just $1 each. Explore our extensive library and find exactly what you need at unbeatable prices. Start your download journey today!
            </p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <button className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
                Services
                <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
                <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
                <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
                <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"> Explore !</span>
              </button>
              <a
                href="#"
                className="relative flex h-11 w-full justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <button className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
                  Bundles !
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
                  <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
                  <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">Explore!</span>
                </button>
              </a>
            </div>
            <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between gap-10" style={{ textAlignLast: 'center'}}>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white italic">The lowest price</h6>
                <p className="mt-2 text-gray-500 mb-4 ">Top-Quality Files for $1 </p>
                <span className='font-semibokd text-green-300 italic'> Get access to premium digital content at an unbeatable price. Quality doesn't have to be expensive! </span>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white italic">Diverse Selection</h6>
                <p className="mt-2 text-gray-500 mb-4">Files for Every Need </p>
                <span className='font-semibokd text-green-300 italic'> From templates to music, our vast library caters to all your digital needs. Find what you're looking for easily.</span>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white italic">Instant Access</h6>
                <p className="mt-2 text-gray-500 mb-4">Download Immediately</p>
                <span className='font-semibokd text-green-300 italic'> No waiting time! Enjoy instant access to your purchased files and start using them right away. </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
