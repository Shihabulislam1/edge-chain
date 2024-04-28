function Hero() {
  return (
    <section className="pt-2 w-full min-h-screen pb-12 px-4 items-center lg:flex md:px-8 bg-[#03112d]">
      <div className="space-y-4 flex-1 sm:text-center lg:text-left">
        <h1 className="text-white font-bold text-4xl xl:text-5xl">
        Revolutionizing Data Security:
          <span className="text-indigo-400">Blockchain & Edge Computing at the Helm</span>
        </h1>
        <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
        Welcome to the forefront of data innovation! Our revolutionary project combines the power of blockchain technology with the efficiency of edge computing to redefine how data is securely managed and accessed. Experience real-time data insights and unparalleled security like never before.
        </p>
        <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
          <a
            href="javascript:void(0)"
            className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto"
          >
            Get started
          </a>
          <a
            href="javascript:void(0)"
            className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto"
          >
            Try it out
          </a>
        </div>
      </div>
      <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
        <img
          src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
          className="w-full mx-auto sm:w-10/12  lg:w-full"
        />
      </div>
    </section>
  );
}

export default Hero;
