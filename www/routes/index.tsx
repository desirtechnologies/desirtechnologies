
const Component = () => {
  return (
    <div id='webcrumbs'>
      <div className='w-full mx-auto border-2 border-neutral-800 rounded-full overflow-hidden transition-all duration-700 sticky top-4 z-50 mt-4 max-w-full lg:max-w-7xl transform hover:-translate-y-1 hover:scale-[1.01] shadow-[0_8px_30px_rgba(0,0,0,0.2)] bg-neutral-800 backdrop-blur-lg'>
        <nav className='flex flex-row justify-between items-center p-2 bg-transparent backdrop-blur-lg'>
          {/* Logo */}
          <div className='flex items-center justify-center md:justify-start space-x-2 w-auto bg-neutral-900 rounded-full shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(40,40,40,0.3)] p-2 transform transition-all duration-500 hover:shadow-[inset_5px_5px_15px_rgba(0,0,0,0.2),inset_-5px_-5px_15px_rgba(40,40,40,0.2)]'>
            <img
              src='https://tools-api.webcrumbs.org/image-placeholder/60/60/logo'
              alt='Logo'
              width='60'
              height='60'
              className='object-cover rounded-full w-10 h-10 md:w-[55px] md:h-[55px] shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(40,40,40,0.3)] transform hover:scale-125 transition-transform duration-500 border-3 border-white/40 hover:border-primary-400 hover:rotate-12 hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]'
            />
            <span className='font-title text-xl md:text-2xl font-extrabold text-white tracking-tight hover:tracking-wide transition-all duration-300 transform hover:scale-105'>
              BrandName
            </span>

            <div></div>
          </div>

          {/* Links (Desktop) */}
          <div className='hidden md:flex justify-center space-x-2 lg:space-x-4 overflow-x-auto scrollbar-hide whitespace-nowrap p-1.5 px-4 transition-all duration-500 bg-neutral-900 rounded-full shadow-[5px_5px_15px_rgba(0,0,0,0.2),-5px_-5px_15px_rgba(40,40,40,0.2)]'>
            <a className='flex items-center space-x-1 text-base lg:text-lg font-medium text-neutral-950 transition-all duration-300 hover:text-primary-700 hover:translate-y-[-4px] hover:scale-110 hover:bg-primary-100/40 active:bg-primary-200/40 backdrop-blur-sm rounded-2xl px-3 py-2 whitespace-nowrap shadow-sm hover:shadow-md'>
              <span className='material-symbols-outlined'>home</span>
              <span>Home</span>
            </a>
            <a className='flex items-center space-x-1 text-xs sm:text-sm lg:text-base text-white transition-all duration-300 hover:text-primary-600 hover:translate-y-[-1px] hover:bg-primary-100 active:bg-primary-200 rounded-full px-2 py-1 whitespace-nowrap'>
              <span className='material-symbols-outlined text-primary-400'>
                info
              </span>
              <span>About</span>
            </a>

            <a className='flex items-center space-x-1 text-xs sm:text-sm lg:text-base text-white transition-all duration-300 hover:text-primary-300 hover:translate-y-[-1px] hover:bg-neutral-800 active:bg-neutral-700 rounded-full px-2 py-1 whitespace-nowrap shadow-[2px_2px_5px_rgba(0,0,0,0.2),-2px_-2px_5px_rgba(40,40,40,0.2)]'>
              <span className='material-symbols-outlined text-lg text-primary-400'>
                palette
              </span>
              <span>Art</span>
            </a>

            <a className='flex items-center space-x-1 text-base lg:text-lg text-white transition-all duration-300 hover:text-primary-700 hover:translate-y-[-2px] hover:bg-primary-200/50 active:bg-primary-300/50 backdrop-blur-sm rounded-2xl px-3 py-2 whitespace-nowrap shadow-sm hover:shadow-md'>
              <span className='material-symbols-outlined text-primary-300'>
                newspaper
              </span>
              <span>News</span>
            </a>

            <a className='flex items-center space-x-1 text-sm sm:text-base lg:text-lg text-white transition-all duration-300 hover:translate-y-[-2px] border border-neutral-950 rounded-2xl px-2 sm:px-3 py-1.5 sm:py-2 whitespace-nowrap hover:shadow-md'>
              <span className='material-symbols-outlined text-xl text-primary-300'>
                work
              </span>
              <span>Projects</span>
            </a>

            <a className='flex items-center space-x-1.5 text-sm sm:text-base lg:text-lg text-white transition-all duration-500 hover:text-primary-600 hover:translate-y-[-3px] hover:bg-neutral-100/70 active:bg-neutral-200/70 rounded-lg px-3 sm:px-3.5 py-2 sm:py-2.5 whitespace-nowrap shadow-[0_3px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)]'>
              <span className='material-symbols-outlined text-xl'>person</span>
              <span>About Me</span>
            </a>

            <a className='flex items-center space-x-1 text-xs sm:text-sm lg:text-base text-white transition-all duration-300 hover:text-primary-300 hover:translate-y-[-1px] hover:bg-neutral-800 active:bg-neutral-700 backdrop-blur-sm rounded-full px-2 py-1 whitespace-nowrap shadow-[2px_2px_5px_rgba(0,0,0,0.2),-2px_-2px_5px_rgba(40,40,40,0.2)]'>
              <span className='material-symbols-outlined text-primary-400'>
                article
              </span>
              <span>Resources</span>
            </a>

            {/* Services Dropdown */}
            <details className='relative group'>
              <summary className='flex items-center space-x-1 cursor-pointer text-xs sm:text-sm lg:text-base font-medium text-white transition-all duration-300 hover:text-primary-800 hover:translate-y-[-2px] hover:scale-105 hover:bg-primary-200/50 active:bg-primary-300/50 backdrop-blur-sm rounded-full px-2 py-1 outline-none whitespace-nowrap shadow-sm hover:shadow-md'>
                <span className='material-symbols-outlined'>build</span>
                <span>Services</span>
                <span className='material-symbols-outlined text-sm transition-transform duration-300 group-open:rotate-180'>
                  expand_more
                </span>
              </summary>
              <ul className='absolute right-0 bg-neutral-900/95 backdrop-blur-xl shadow-[5px_5px_20px_rgba(0,0,0,0.3),-5px_-5px_20px_rgba(40,40,40,0.3)] rounded-3xl p-4 mt-2 z-10 space-y-2 min-w-[240px] max-w-[300px] transition-all duration-300 border-2 border-neutral-800 transform origin-top scale-y-0 group-open:scale-y-100 group-open:shadow-[8px_8px_25px_rgba(0,0,0,0.3),-8px_-8px_25px_rgba(40,40,40,0.3)]'>
                <li className='transition-all duration-300 border border-black rounded-2xl p-2 hover:translate-x-1'>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='flex items-center space-x-2 text-base text-white transition-all duration-300 hover:text-primary-700 hover:translate-x-1 w-full hover:bg-primary-100 active:bg-primary-200 whitespace-nowrap'
                  >
                    <span className='material-symbols-outlined text-primary-300'>
                      web
                    </span>
                    <span>Web Design</span>
                  </a>
                </li>
                <li className='transition-all duration-500 hover:bg-neutral-800 active:bg-neutral-700 rounded-2xl p-2.5 hover:translate-x-2 shadow-[3px_3px_10px_rgba(0,0,0,0.2),-3px_-3px_10px_rgba(40,40,40,0.2)] hover:shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(40,40,40,0.3)] border-2 border-primary-400'>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='flex items-center space-x-2.5 text-base text-white transition-all duration-500 hover:text-primary-600 hover:translate-x-1 w-full whitespace-nowrap'
                  >
                    <span className='material-symbols-outlined text-lg'>
                      campaign
                    </span>
                    <span>Online Marketing</span>
                  </a>
                </li>
                <li className='transition-all duration-300 hover:bg-primary-200/70 active:bg-primary-300/70 rounded-2xl p-2 backdrop-blur-sm'>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='flex items-center space-x-2 text-base text-white transition-all duration-300 hover:text-primary-700 hover:translate-x-1 w-full hover:bg-primary-200/50 active:bg-primary-300/50 whitespace-nowrap'
                  >
                    <span className='material-symbols-outlined text-primary-300'>
                      support_agent
                    </span>
                    <span>Consultation</span>
                  </a>
                </li>
              </ul>
            </details>

            <a className='flex items-center space-x-1 text-xs sm:text-sm lg:text-base font-medium text-white transition-all duration-300 hover:text-primary-600 hover:translate-y-[-2px] hover:scale-105 hover:bg-primary-100/80 active:bg-primary-200 rounded-full px-2 py-1 whitespace-nowrap'>
              <span className='material-symbols-outlined text-lg'>mail</span>
              <span>Contact</span>
            </a>
          </div>

          {/* User-related features */}
          <div className='flex items-center justify-center md:justify-end space-x-2 md:space-x-3 col-span-1 whitespace-nowrap w-auto mt-2 md:mt-0 border-2 border-primary-400 rounded-full p-1.5 transition-all duration-500 bg-neutral-900 shadow-[3px_3px_10px_rgba(0,0,0,0.2),-3px_-3px_10px_rgba(40,40,40,0.2)]'>
            <span className='material-symbols-outlined w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px] cursor-pointer text-white transition-all duration-300 hover:scale-115 p-2 sm:p-2.5 md:p-3 rounded-full flex items-center justify-center relative transform hover:rotate-12 bg-neutral-800 shadow-[inset_3px_3px_10px_rgba(0,0,0,0.2),inset_-3px_-3px_10px_rgba(40,40,40,0.2)] hover:shadow-[inset_5px_5px_15px_rgba(0,0,0,0.3),inset_-5px_-5px_15px_rgba(40,40,40,0.3)] hover:bg-neutral-700'>
              notifications
              <span className='absolute -top-1 -right-1 bg-primary-400 border border-neutral-800 text-neutral-800 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                3
              </span>
            </span>

            <span className='material-symbols-outlined w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px] cursor-pointer transition-all duration-500 hover:scale-120 border border-neutral-800 p-1.5 sm:p-2 md:p-2.5 rounded-full flex items-center justify-center relative'>
              shopping_cart
              <span className='absolute -top-1 -right-1 border border-neutral-800 bg-primary-400 text-neutral-800 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                2
              </span>
            </span>
            <img
              src='https://tools-api.webcrumbs.org/placeholder/40/40/user'
              alt='User Avatar'
              width='40'
              height='40'
              className='object-cover rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 shadow-[3px_3px_10px_rgba(0,0,0,0.2),-3px_-3px_10px_rgba(40,40,40,0.2)] border border-primary-400'
            />

            <div></div>

            <button className='flex items-center justify-center p-1 sm:p-1.5 md:p-2 rounded-full border border-neutral-800 transition-all duration-300 hover:scale-110'>
              <span className='material-symbols-outlined text-xl text-white transition-transform duration-500 hover:rotate-[360deg] hover:text-primary-300'>
                dark_mode
              </span>
              {/* Next: "Add toggle functionality to switch between light and dark themes" */}
            </button>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <details className='md:hidden w-full flex justify-center mt-1'>
            <summary className='material-symbols-outlined cursor-pointer w-[26px] h-[26px] sm:w-[28px] sm:h-[28px] text-white transition-transform duration-300 hover:scale-110 p-2 rounded-full flex items-center justify-center mx-auto hover:shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(40,40,40,0.3)] bg-neutral-800 shadow-[3px_3px_10px_rgba(0,0,0,0.2),-3px_-3px_10px_rgba(40,40,40,0.2)] hover:bg-neutral-700'>
              menu
            </summary>
            <ul className='bg-neutral-900/95 backdrop-blur-lg rounded-xl p-3 sm:p-4 space-y-2 sm:space-y-3 absolute left-0 right-0 mx-2 sm:mx-4 mt-2 z-20 transition-all duration-300 whitespace-nowrap overflow-x-auto max-h-[60vh] sm:max-h-[70vh] md:max-h-[80vh] overflow-y-auto shadow-[5px_5px_20px_rgba(0,0,0,0.3),-5px_-5px_20px_rgba(40,40,40,0.3)] border-2 border-neutral-800'>
              <li className='flex items-center space-x-3 transition-all duration-300 border-2 border-primary-400 rounded-2xl p-3 hover:translate-x-1 hover:shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(40,40,40,0.3)] bg-neutral-800 shadow-[3px_3px_10px_rgba(0,0,0,0.2),-3px_-3px_10px_rgba(40,40,40,0.2)]'>
                <span className='material-symbols-outlined text-xl text-primary-300'>
                  home
                </span>
                <a className='text-base sm:text-lg text-white transition-all duration-300 hover:translate-x-1 hover:text-primary-300'>
                  Home
                </a>
              </li>

              <li className='flex items-center space-x-2 sm:space-x-3 transition-all duration-300 border-2 border-primary-400 rounded-2xl p-2 sm:p-3 hover:translate-x-1 hover:shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(40,40,40,0.3)] bg-neutral-800 shadow-[3px_3px_10px_rgba(0,0,0,0.2),-3px_-3px_10px_rgba(40,40,40,0.2)]'>
                <span className='material-symbols-outlined text-primary-300'>
                  palette
                </span>
                <a className='text-lg text-neutral-100 transition-all duration-300 hover:translate-x-1 hover:text-primary-300'>
                  Art
                </a>
              </li>

              <li className='flex items-center space-x-3 transition-all duration-300 border-2 border-primary-400 rounded-2xl p-3 hover:translate-x-1 hover:shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(40,40,40,0.3)] bg-neutral-800 shadow-[3px_3px_10px_rgba(0,0,0,0.2),-3px_-3px_10px_rgba(40,40,40,0.2)]'>
                <span className='material-symbols-outlined text-xl text-primary-300'>
                  newspaper
                </span>
                <a className='text-base sm:text-lg text-neutral-100 transition-all duration-500 hover:translate-x-1 w-full py-1 px-2 rounded-lg hover:text-primary-300'>
                  News
                </a>
              </li>

              <li className='flex items-center space-x-3 transition-all duration-500 border-2 border-primary-400 rounded-2xl p-3 sm:p-3.5 hover:translate-x-2 hover:shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(40,40,40,0.3)] bg-neutral-800 shadow-[3px_3px_10px_rgba(0,0,0,0.2),-3px_-3px_10px_rgba(40,40,40,0.2)]'>
                <span className='material-symbols-outlined text-primary-300'>
                  work
                </span>
                <a className='text-base sm:text-lg text-neutral-100 transition-all duration-300 hover:translate-x-1 hover:text-primary-300'>
                  Projects
                </a>
              </li>

              <li className='flex items-center space-x-2 sm:space-x-3 transition-all duration-300 border-2 border-primary-400 rounded-2xl p-2 sm:p-3 hover:translate-x-1 hover:shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(40,40,40,0.3)] bg-neutral-800 shadow-[3px_3px_10px_rgba(0,0,0,0.2),-3px_-3px_10px_rgba(40,40,40,0.2)]'>
                <span className='material-symbols-outlined text-primary-300'>
                  person
                </span>
                <a className='text-base sm:text-lg text-neutral-100 transition-all duration-300 hover:translate-x-1 hover:text-primary-300'>
                  About Me
                </a>
              </li>

              <li className='flex items-center space-x-3 transition-all duration-500 border-2 border-primary-400 rounded-2xl p-3 sm:p-3.5 hover:translate-x-2 hover:shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(40,40,40,0.3)] bg-neutral-800 shadow-[3px_3px_10px_rgba(0,0,0,0.2),-3px_-3px_10px_rgba(40,40,40,0.2)]'>
                <span className='material-symbols-outlined text-xl text-primary-300'>
                  info
                </span>
                <a className='text-base sm:text-lg text-white transition-all duration-300 hover:translate-x-1 hover:text-primary-300'>
                  About
                </a>
              </li>
              <details className='transition-all duration-300 border-2 border-primary-400 rounded-2xl p-2 sm:p-3 hover:shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(40,40,40,0.3)] bg-neutral-800 shadow-[3px_3px_10px_rgba(0,0,0,0.2),-3px_-3px_10px_rgba(40,40,40,0.2)]'>
                <summary className='flex items-center space-x-2 sm:space-x-3 cursor-pointer text-base sm:text-lg font-medium text-white transition-all duration-300 rounded-2xl outline-none hover:translate-x-1 hover:text-primary-300'>
                  <span className='material-symbols-outlined text-primary-300'>
                    build
                  </span>
                  <span>Services</span>
                  <span className='material-symbols-outlined'>expand_more</span>
                </summary>
                <ul className='bg-neutral-900 border-2 border-primary-400 rounded-3xl p-4 sm:p-5 mt-3 sm:mt-4 space-y-3 sm:space-y-4 max-w-full transform origin-top transition-all duration-500 shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(40,40,40,0.3)]'>
                  <li className='flex items-center space-x-2 sm:space-x-3 transition-all duration-300 border-2 border-primary-400 rounded-2xl p-1.5 sm:p-2 hover:translate-x-1 hover:shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(40,40,40,0.3)] bg-neutral-800 shadow-[3px_3px_10px_rgba(0,0,0,0.2),-3px_-3px_10px_rgba(40,40,40,0.2)]'>
                    <span className='material-symbols-outlined text-primary-300'>
                      web
                    </span>
                    <a className='text-sm sm:text-base text-white transition-all duration-300 hover:translate-x-1 w-full hover:text-primary-300'>
                      Web Design
                    </a>
                  </li>
                  <li className='flex items-center space-x-3 transition-all duration-300 border-2 border-primary-400 rounded-md p-2 hover:translate-x-1 hover:shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(40,40,40,0.3)] bg-neutral-800 shadow-[3px_3px_10px_rgba(0,0,0,0.2),-3px_-3px_10px_rgba(40,40,40,0.2)]'>
                    <span className='material-symbols-outlined text-primary-300'>
                      campaign
                    </span>
                    <a className='text-sm sm:text-base text-white transition-all duration-500 hover:translate-x-1 w-full py-1 px-2 rounded-lg hover:text-primary-300'>
                      Online Marketing
                    </a>
                  </li>
                  <li className='flex items-center space-x-2 sm:space-x-3 transition-all duration-300 border-2 border-primary-400 rounded-2xl p-1.5 sm:p-2 hover:translate-x-1 hover:shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(40,40,40,0.3)] bg-neutral-800 shadow-[3px_3px_10px_rgba(0,0,0,0.2),-3px_-3px_10px_rgba(40,40,40,0.2)]'>
                    <span className='material-symbols-outlined text-primary-300'>
                      support_agent
                    </span>
                    <a className='text-sm sm:text-base text-neutral-100 transition-all duration-300 hover:translate-x-1 w-full hover:text-primary-300'>
                      Consultation
                    </a>
                  </li>
                </ul>
              </details>
              <li className='flex items-center space-x-2 sm:space-x-3 transition-all duration-300 border border-black rounded-2xl p-2 sm:p-3 hover:translate-x-1 hover:shadow-md'>
                <span className='material-symbols-outlined text-xl text-white'>
                  mail
                </span>
                <a className='text-base sm:text-lg font-medium text-white transition-all duration-500 hover:translate-x-1 w-full py-1 px-2 rounded-lg hover:text-primary-300'>
                  Contact
                </a>
              </li>
            </ul>
          </details>
        </nav>
      </div>
    </div>
  );
};


export default Component