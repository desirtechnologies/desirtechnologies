
export const Hero = () => {
  return (
    <div id='webcrumbs'>
      <section className='w-full min-h-screen relative overflow-hidden bg-gradient-to-tr from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 transform rotate-0 font-sans'>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 pointer-events-none mix-blend-screen bg-blend-overlay"></div>

        <div className='flex flex-col gap-4 z-20 w-full max-w-7xl mx-auto'>
          <div className='mt-2 text-gray-300 text-center text-lg tracking-wider transform hover:scale-105 transition-all duration-300'>
            ✓ Installation complete
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full max-w-7xl mx-auto relative z-10 transform -rotate-0'>
            <div className='flex flex-col justify-center space-y-5 sm:space-y-6 md:space-y-8 transform hover:scale-105 transition-all duration-500 backdrop-filter px-2 sm:px-4 md:px-6'>
              <div className='relative md:ml-0 lg:ml-6'>
                <div className='absolute -left-4 sm:-left-6 -top-4 sm:-top-6 w-12 sm:w-16 h-12 sm:h-16 bg-primary-200 rounded-md opacity-40 animate-pulse shadow-lg group-hover:scale-125 group-hover:opacity-60 transition-all duration-500'></div>
                <span className='inline-block py-2 sm:py-3 px-3 sm:px-4 md:px-5 rounded-full bg-neutral-900/80 border-2 border-primary-500 text-neutral-100 text-xs sm:text-sm md:text-base font-mono mb-4 sm:mb-6 hover:bg-neutral-800 transition-all duration-300 transform hover:-rotate-3 hover:scale-110 shadow-lg hover:shadow-primary-500/50 backdrop-blur-sm'>
                  npm install dev-forge
                </span>
              </div>

              <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight'>
                <span className='relative text-gray-400 font-thin'>
                  Dev Forge
                  <span className='absolute -top-2 sm:-top-3 -right-3 sm:-right-4 text-2xs sm:text-xs text-neutral-50 bg-primary-600 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full transform -rotate-12 hover:rotate-12 transition-all duration-500 animate-pulse shadow-xl backdrop-blur-sm'>
                    Beta
                  </span>
                  :
                </span>
                <span className='block mt-2 sm:mt-3 text-gray-400 text-glow border-t border-gray-800/50 pt-2 sm:pt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
                  Code. Ship. Scale.
                </span>
              </h1>

              <div className='text-neutral-100 text-sm sm:text-base md:text-lg max-w-full md:max-w-lg leading-relaxed backdrop-blur-sm p-3 sm:p-4 md:p-5 rounded-lg bg-neutral-50/5 shadow-xl border border-neutral-50/20 transform hover:translate-y-[-4px] transition-all duration-300 hover:shadow-primary-500/30'>
                <div className='relative'>
                  <span className='absolute -left-1.5 sm:-left-2 -top-1.5 sm:-top-2 w-3 sm:w-4 h-3 sm:h-4 bg-primary-400 rounded-full animate-ping'></span>
                </div>
                <div className='flex items-center mb-1 sm:mb-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 sm:h-5 w-4 sm:w-5 text-primary-400 mr-1.5 sm:mr-2'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='text-primary-300 font-semibold text-sm sm:text-base'>
                    Supercharged Workflow
                  </span>
                </div>
                <p className='text-sm sm:text-base'>
                  The ultimate developer toolchain that adapts to{" "}
                  <span className='not-italic text-primary-300 font-medium'>
                    your workflow
                  </span>
                  , not the other way around. Build faster with less cognitive
                  overhead.
                </p>
              </div>

              <div className='flex flex-col xs:flex-row gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 md:mt-10'>
                <div className='group relative px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-4 lg:py-5 bg-gradient-to-r from-primary-500 to-purple-600 text-gray-50 rounded-none font-medium shadow-xl overflow-hidden transition-all duration-500 hover:shadow-primary-500/50 transform hover:translate-y-[-8px] sm:hover:translate-y-[-12px] hover:scale-105 sm:hover:scale-110 hover:bg-gray-900 active:bg-gray-800 text-center clip-path-trapezoid border-l-4 border-t-4 border-primary-300 backdrop-blur-sm'>
                  <div className='flex items-center justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 sm:h-5 w-4 sm:w-5 mr-1.5 sm:mr-2 animate-pulse'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <span className='relative z-10 tracking-wider uppercase font-mono text-xs sm:text-sm md:text-base'>
                      Start Building Now
                    </span>
                  </div>
                  <span className='absolute inset-0 bg-black opacity-0 group-hover:opacity-90 transition-opacity duration-300'></span>
                </div>

                <div className='group px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-transparent border border-gray-300 text-gray-300 rounded-md font-light relative overflow-hidden transition-all hover:border-gray-800 shadow-md hover:shadow-purple-400/30 hover:bg-gray-100 active:bg-gray-200 text-center'>
                  <span className='relative z-10 flex items-center justify-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 sm:h-5 w-4 sm:w-5 mr-1.5 sm:mr-2'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z' />
                    </svg>
                    <span className='text-sm sm:text-base'>Read the Docs</span>
                  </span>
                  <span className='absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 group-hover:backdrop-blur-sm'></span>
                </div>
              </div>

              <div className='flex items-center space-x-2 sm:space-x-3 md:space-x-6 mt-3 sm:mt-4 md:mt-8'>
                <div className='flex -space-x-2 sm:-space-x-4'>
                  <img
                    src='https://randomuser.me/api/portraits/men/32.jpg'
                    alt='User'
                    className='w-6 sm:w-8 h-6 sm:h-8 rounded-full border-2 border-gray-50'
                  />
                  <img
                    src='https://randomuser.me/api/portraits/women/44.jpg'
                    alt='User'
                    className='w-6 sm:w-8 h-6 sm:h-8 rounded-full border-2 border-neutral-50 hover:scale-110 transition-all duration-300 z-20'
                  />
                  <img
                    src='https://randomuser.me/api/portraits/men/46.jpg'
                    alt='User'
                    className='w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full border-3 border-purple-400 transform hover:scale-110 transition-all duration-300 z-40 shadow-lg'
                  />
                  <div className='flex items-center justify-center w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full bg-pink-500 border-3 border-purple-400 text-xs sm:text-sm text-gray-50 font-bold transform hover:scale-125 transition-all duration-300 shadow-lg animate-pulse'>
                    12k+
                  </div>
                </div>
                <p className='text-gray-300 text-2xs xs:text-xs sm:text-sm font-mono tracking-wider'>
                  Trusted by developers worldwide
                </p>
              </div>
            </div>

            <div className='flex justify-center items-center mt-8 lg:mt-0 px-2 sm:px-3 md:px-4 lg:px-6'>
              <div className='relative w-full mx-auto md:max-w-md lg:max-w-lg perspective-1000 preserve-3d'>
                <div className='absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 bg-blue-100 rounded-md opacity-60 animate-pulse delay-300'></div>
                <div className='absolute -bottom-6 sm:-bottom-10 -left-6 sm:-left-10 w-24 sm:w-36 h-24 sm:h-36 bg-neutral-200 rounded-md opacity-60 animate-pulse delay-700 shadow-lg shadow-primary-400/30'></div>

                <div className='bg-neutral-50 border border-neutral-200 p-0.5 sm:p-1 rounded-lg shadow-xl transform hover:translate-y-[-8px] hover:rotate-1 transition-all duration-500 backdrop-blur-md hover:shadow-primary-400/30 hover:border-primary-300/50 w-full'>
                  <div className='bg-gray-800 rounded-md overflow-hidden'>
                    <div className='flex items-center px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 border-b border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900'>
                      <div className='flex space-x-2 sm:space-x-4'>
                        <div className='w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-none bg-pink-500 animate-pulse clip-path-square'></div>
                        <div className='w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-purple-500 animate-pulse delay-150'></div>
                        <div className='w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-blue-500 animate-pulse delay-300'></div>
                      </div>
                      <div className='mx-auto text-gray-300 text-xs sm:text-sm font-mono bg-gray-800/70 px-2 sm:px-3 py-0.5 sm:py-1 rounded-sm hidden sm:block'>
                        ~ terminal
                      </div>
                    </div>
                    <div className='p-2 sm:p-3 md:p-4 lg:p-6 font-mono text-2xs xs:text-xs leading-relaxed bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300'>
                      <div className='flex items-center'>
                        <span className='text-gray-600 mr-1.5 sm:mr-2'>$</span>
                        <span className='text-gray-700'>
                          npm install dev-forge -g
                        </span>
                      </div>
                      <div className='mt-1 sm:mt-2 text-gray-500'>
                        Installing dependencies...
                      </div>

                      <div className='mt-2 sm:mt-4 flex items-center'>
                        <span className='text-gray-300 mr-1.5 sm:mr-2'>$</span>
                        <span className='text-gray-700'>
                          forge init my-awesome-app
                        </span>
                      </div>
                      <div className='mt-1 sm:mt-2 text-gray-700'>
                        ? Select your stack:{" "}
                        <span className='text-gray-800 font-medium'>
                          React + Tailwind
                        </span>
                        <div>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='inline-block h-3 sm:h-4 w-3 sm:w-4 text-primary-400 ml-1 animate-pulse'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path
                              fillRule='evenodd'
                              d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </div>
                      </div>
                      <div className='mt-1 sm:mt-2 text-gray-700'>
                        ? Set up CI/CD pipeline?{" "}
                        <span className='text-gray-800 font-medium'>Yes</span>
                      </div>
                      <div className='mt-1 sm:mt-2 text-gray-700'>
                        ? Configure serverless functions?{" "}
                        <span className='text-primary-400 font-medium'>
                          Yes
                        </span>
                      </div>
                      <div className='mt-1 sm:mt-2 text-gray-500'>
                        Creating project structure...
                      </div>
                      <div className='mt-1 sm:mt-2 text-gray-600'>
                        ✓ Project initialized
                      </div>
                      <div className='mt-2 sm:mt-4 flex items-center'>
                        <span className='text-gray-600 mr-1.5 sm:mr-2'>$</span>
                        <span className='text-gray-700 break-words'>
                          cd my-awesome-app && forge dev
                        </span>
                      </div>
                      <div className='mt-1 sm:mt-2 text-primary-500 text-2xs xs:text-xs sm:text-sm break-words glow-text'>
                        ⚡ Development server running at http://localhost:3000
                        <div>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='inline-block h-3 sm:h-4 w-3 sm:w-4 text-primary-400 ml-1 animate-spin-slow'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path
                              fillRule='evenodd'
                              d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </div>
                      </div>
                      <div className='mt-1 sm:mt-2 text-primary-500 text-2xs xs:text-xs sm:text-sm break-all md:break-normal glow-text'>
                        ✨ GraphQL playground available at
                        http://localhost:3000/api/graphql
                        <div>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='inline-block h-3 sm:h-4 w-3 sm:w-4 text-primary-400 ml-1 animate-pulse'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path
                              fillRule='evenodd'
                              d='M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </div>
                      </div>
                      <div className='mt-1 sm:mt-2 text-primary-500 text-2xs xs:text-xs sm:text-sm glow-text'>
                        🔧 Admin dashboard at http://localhost:3000/admin
                        <div>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='inline-block h-3 sm:h-4 w-3 sm:w-4 text-primary-400 ml-1 animate-float'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path
                              fillRule='evenodd'
                              d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
                              clipRule='evenodd'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='absolute top-4 sm:top-8 -right-3 sm:-right-4 md:-right-8 lg:-right-12 bg-gray-900 py-1.5 sm:py-2 px-2 sm:px-3 md:px-4 rounded-md shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-110'>
                  <div className='text-gray-50 text-xs sm:text-sm md:text-base font-medium flex items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 sm:h-5 w-4 sm:w-5 mr-1.5 sm:mr-2 text-primary-400'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M3.3 1a1 1 0 01.7.3l.8.8a1 1 0 010 1.4L4.1 4.2l2.7 2.7 1.4-1.4a1 1 0 111.4 1.4l-.7.7 2.7 2.7 4.2-4.2-2.6-2.6a1 1 0 010-1.4 1 1 0 011.4 0L17 4l.3-.3a1 1 0 011.4 1.4l-3 3a1 1 0 01-1.4 0L9 2.8 8.2 3.5a1 1 0 01-1.4 0L5.7 2.4l-.7.7a1 1 0 01-1.4-1.4l.7-.7.9-.9A1 1 0 013.3 1zM0 10.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-1zm9 0a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-1zm-9 5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-1zm9 0a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-1z'
                        clipRule='evenodd'
                      />
                    </svg>
                    3x faster builds
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full max-w-4xl mx-auto border-t border-gray-700/30 my-6 sm:my-8'></div>

        <div className='absolute bottom-2 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 space-x-0 sm:space-x-2 md:space-x-4 text-gray-300 backdrop-blur-sm py-1.5 sm:py-2 px-2 sm:px-3 md:px-4 rounded-full bg-gray-800/40 shadow-lg'>
          <div className='flex items-center hover:text-primary-400 transition-colors duration-300 transform hover:scale-110 hover:translate-y-[-4px] cursor-pointer px-2 py-1 rounded hover:bg-gray-700/20'></div>
        </div>
      </section>
    </div>
  );
};
