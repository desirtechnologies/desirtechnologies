

export const Component = () => {
  return (
    <div id='webcrumbs'>
      <div className='w-full flex justify-center'>
        <div className='w-full mx-auto bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 border-t border-gray-700 py-4 sm:py-6 px-3 sm:px-4 lg:px-6 font-sans backdrop-blur-sm relative overflow-hidden'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4 relative z-10'>
            <div className='md:col-span-2 lg:col-span-2 bg-gradient-to-br from-indigo-900/30 via-gray-800/20 to-purple-900/30 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-indigo-700/50 shadow-xl transform transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-[8px] hover:shadow-indigo-500/30 hover:border-indigo-500/50'>
              <div className='flex items-center mb-4 relative'>
                <svg
                  className='h-8 w-8 text-primary-500 mr-2 animate-pulse filter drop-shadow-[0_0_8px_rgba(59,130,246,0.7)]'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 2L2 7L12 12L22 7L12 2Z'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='animate-glow'
                  />
                  <path
                    d='M2 17L12 22L22 17'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M2 12L12 17L22 12'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>

                <h2 className='text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent flex items-center'>
                  <svg
                    className='h-6 w-6 text-emerald-400 mr-2'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M5 7L10 3L19 3L19 21L10 21L5 17V7Z'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M10 8L15 8'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                    />
                    <path
                      d='M10 12L13 12'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                    />
                    <path
                      d='M10 16L15 16'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                    />
                  </svg>
                  TechStack
                </h2>
              </div>
              <p className='text-gray-300 mb-6 leading-relaxed backdrop-blur-sm'>
                Your ultimate resource for tech innovations, tutorials, and
                industry insights. Stay updated with the latest trends and
                enhance your skills with our comprehensive guides.
              </p>
              <div className='flex flex-wrap space-x-2 sm:space-x-4 mb-6 bg-gray-900/40 p-2 sm:p-3 rounded-lg backdrop-blur-md'>
                <a
                  href='https://webcrumbs.cloud/placeholder'
                  className='text-gray-800 hover:text-primary-600 transition-colors duration-300 transform hover:scale-110'
                >
                  <i className='fa-brands fa-twitter text-xl'></i>
                </a>
                <a
                  href='https://webcrumbs.cloud/placeholder'
                  className='text-gray-400 hover:text-primary-400 transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-primary-500/20'
                >
                  <i className='fa-brands fa-facebook text-xl'></i>
                </a>
                <a
                  href='https://webcrumbs.cloud/placeholder'
                  className='text-pink-400 hover:text-fuchsia-400 transition-colors duration-300 transform hover:scale-110'
                >
                  <i className='fa-brands fa-instagram text-xl'></i>
                </a>
                <a
                  href='https://webcrumbs.cloud/placeholder'
                  className='text-blue-400 hover:text-sky-400 transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-sky-500/20'
                >
                  <i className='fa-brands fa-linkedin text-xl'></i>
                </a>
                <a
                  href='https://webcrumbs.cloud/placeholder'
                  className='text-gray-400 hover:text-primary-400 transition-all duration-300 transform hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-primary-500/20'
                >
                  <i className='fa-brands fa-github text-xl'></i>
                </a>
              </div>
              <div className='mb-3 backdrop-blur-sm'>
                <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider after:content-[''] after:block after:w-12 after:h-[2px] after:bg-primary-500 after:mt-1">
                  Subscribe to our newsletter
                </h3>
                <div className='flex relative w-full'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    className='w-full px-4 py-2 bg-gray-800/60 border-none rounded-l-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-300 placeholder-gray-500 backdrop-blur-sm transition-all duration-300'
                  />

                  <button className='bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-md transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20 group flex items-center'>
                    <svg
                      className='h-5 w-5 mr-1 group-hover:animate-pulse'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z'
                        fill='currentColor'
                      />
                    </svg>
                    <span className='hidden sm:inline'>Subscribe</span>
                  </button>
                </div>
              </div>
            </div>

            <div className='md:col-span-1 lg:col-span-1 bg-gray-800/20 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-gray-700/50 shadow-xl transform transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-[8px] hover:shadow-primary-500/20'>
              <h3 className="text-sm font-semibold text-cyan-400 mb-6 uppercase tracking-wider flex items-center after:content-[''] after:block after:w-12 after:h-[2px] after:bg-cyan-500 after:mt-1 after:ml-2">
                <span className='material-symbols-outlined mr-2 text-primary-500'>
                  explore
                </span>
                Explore
              </h3>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='text-gray-300 hover:text-primary-400 transition-all duration-300 flex items-center hover:translate-x-2 backdrop-blur-sm p-1 rounded hover:bg-gray-700/30 border-l-2 border-transparent hover:border-primary-500 whitespace-nowrap text-xs sm:text-sm'
                  >
                    <svg
                      className='h-4 w-4 text-cyan-500/80 mr-2 animate-pulse'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M19 5V19H5V5H19ZM21 3H3V21H21V3ZM17 17H7V16H17V17ZM17 15H7V14H17V15ZM17 12H7V7H17V12Z'
                        fill='currentColor'
                      />
                    </svg>
                    Blog
                  </a>
                </li>

                <li>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='text-white hover:text-primary-400 transition-all duration-300 flex items-center hover:translate-x-1'
                  >
                    <svg
                      className='h-4 w-4 text-primary-500/80 mr-2'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V16H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z'
                        fill='currentColor'
                      />
                    </svg>
                    Tutorials
                  </a>
                </li>

                <li>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='text-gray-300 hover:text-primary-400 transition-all duration-300 flex items-center hover:translate-x-2 backdrop-blur-sm p-2 rounded hover:bg-gray-700/30 border-l-2 border-transparent hover:border-primary-500'
                  >
                    <svg
                      className='h-4 w-4 mr-2'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V18H6V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H24V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z'
                        fill='currentColor'
                      />
                    </svg>
                    Community
                  </a>
                </li>

                <li>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='text-white hover:text-violet-400 transition-all duration-300 flex items-center hover:translate-x-2 backdrop-blur-sm p-2 rounded hover:bg-violet-800/40 border-l-2 border-transparent hover:border-violet-500'
                  >
                    <span className='material-symbols-outlined mr-2 text-sm text-violet-500/80 animate-pulse'>
                      event
                    </span>
                    Events
                  </a>
                </li>

                <li>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='text-gray-300 hover:text-primary-400 transition-all duration-300 flex items-center hover:translate-x-2 backdrop-blur-sm p-2 rounded hover:bg-gray-700/30 border-l-2 border-transparent hover:border-primary-500'
                  >
                    <svg
                      className='h-4 w-4 text-primary-500/80 mr-2'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z'
                        fill='currentColor'
                      />
                      <path
                        d='M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z'
                        fill='currentColor'
                      />
                      <path
                        d='M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z'
                        fill='currentColor'
                      />
                      <path
                        d='M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z'
                        fill='currentColor'
                      />
                      <path
                        d='M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z'
                        fill='currentColor'
                      />
                      <path
                        d='M16.6 19.4C15.8 18.6 15.8 17.2 16.6 16.4C17.4 15.6 18.8 15.6 19.6 16.4C20.4 17.2 20.4 18.6 19.6 19.4C18.8 20.2 17.4 20.2 16.6 19.4Z'
                        fill='currentColor'
                      />
                      <path
                        d='M4.4 19.4C3.6 18.6 3.6 17.2 4.4 16.4C5.2 15.6 6.6 15.6 7.4 16.4C8.2 17.2 8.2 18.6 7.4 19.4C6.6 20.2 5.2 20.2 4.4 19.4Z'
                        fill='currentColor'
                      />
                      <path
                        d='M4.4 7.6C3.6 6.8 3.6 5.4 4.4 4.6C5.2 3.8 6.6 3.8 7.4 4.6C8.2 5.4 8.2 6.8 7.4 7.6C6.6 8.4 5.2 8.4 4.4 7.6Z'
                        fill='currentColor'
                      />
                      <path
                        d='M16.6 7.6C15.8 6.8 15.8 5.4 16.6 4.6C17.4 3.8 18.8 3.8 19.6 4.6C20.4 5.4 20.4 6.8 19.6 7.6C18.8 8.4 17.4 8.4 16.6 7.6Z'
                        fill='currentColor'
                      />
                    </svg>
                    Podcast
                  </a>
                </li>
              </ul>
            </div>

            <div className='md:col-span-1 lg:col-span-1 bg-gray-800/20 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-gray-700/50 shadow-xl transform transition-all duration-500 hover:translate-y-[-8px] hover:shadow-primary-500/20'>
              <h3 className="text-sm font-semibold text-teal-400 mb-6 uppercase tracking-wider flex items-center after:content-[''] after:block after:w-12 after:h-[2px] after:bg-teal-500 after:mt-1 after:ml-2">
                <span className='material-symbols-outlined mr-2 text-teal-500 animate-spin'>
                  category
                </span>
                Categories
              </h3>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='text-gray-300 hover:text-primary-400 transition-all duration-300 flex items-center hover:translate-x-2 backdrop-blur-sm p-1 rounded hover:bg-gray-700/30 border-l-2 border-transparent hover:border-primary-500 whitespace-nowrap text-xs sm:text-sm'
                  >
                    <svg
                      className='h-4 w-4 text-cyan-400 mr-2'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z'
                        fill='currentColor'
                      />
                    </svg>
                    Development
                  </a>
                </li>

                <li>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='text-white hover:text-primary-400 transition-all duration-300 flex items-center hover:translate-x-2 backdrop-blur-sm p-1 rounded hover:bg-gray-800/50 border-l-2 border-transparent hover:border-primary-500 whitespace-nowrap text-xs sm:text-sm'
                  >
                    <svg
                      className='h-4 w-4 text-emerald-400 mr-2'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M20.71 4.04C20.37 3.7 19.84 3.7 19.5 4.04L18 5.54L20.5 8.04L22 6.54C22.34 6.2 22.34 5.67 22 5.33L20.71 4.04ZM17.29 6.24L11 12.54V15.04H13.5L19.79 8.75L17.29 6.24ZM5 10H7V11H5V10ZM2 19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V17H2V19ZM2 3V7H10V3H2ZM5 5H7V6H5V5ZM2 9V15H10V9H2Z'
                        fill='currentColor'
                      />
                    </svg>
                    Design
                  </a>
                </li>

                <li>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='text-gray-300 hover:text-lime-400 transition-all duration-300 flex items-center hover:translate-x-2 backdrop-blur-sm p-2 rounded hover:bg-lime-700/30 border-l-2 border-transparent hover:border-lime-500'
                  >
                    <svg
                      className='h-4 w-4 text-lime-400 mr-2'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z'
                        fill='currentColor'
                      />
                    </svg>
                    Data Science
                  </a>
                </li>

                <li>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='text-white hover:text-primary-400 transition-all duration-300 flex items-center hover:translate-x-2 backdrop-blur-sm p-2 rounded hover:bg-gray-800/50 border-l-2 border-transparent hover:border-primary-500'
                  >
                    <svg
                      className='h-4 w-4 text-primary-500/80 mr-2'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M21 10.5H3C2.4 10.5 2 10.95 2 11.5V13.5C2 14.05 2.4 14.5 3 14.5H21C21.6 14.5 22 14.05 22 13.5V11.5C22 10.95 21.6 10.5 21 10.5ZM18.5 12.5C18.5 13.05 18.05 13.5 17.5 13.5C16.95 13.5 16.5 13.05 16.5 12.5C16.5 11.95 16.95 11.5 17.5 11.5C18.05 11.5 18.5 11.95 18.5 12.5ZM7.5 6H10.5V8H7.5V6ZM13.5 6H16.5V8H13.5V6ZM21 4.5H3C2.4 4.5 2 4.95 2 5.5V7.5C2 8.05 2.4 8.5 3 8.5H21C21.6 8.5 22 8.05 22 7.5V5.5C22 4.95 21.6 4.5 21 4.5ZM18.5 6.5C18.5 7.05 18.05 7.5 17.5 7.5C16.95 7.5 16.5 7.05 16.5 6.5C16.5 5.95 16.95 5.5 17.5 5.5C18.05 5.5 18.5 5.95 18.5 6.5ZM21 16.5H3C2.4 16.5 2 16.95 2 17.5V19.5C2 20.05 2.4 20.5 3 20.5H21C21.6 20.5 22 20.05 22 19.5V17.5C22 16.95 21.6 16.5 21 16.5ZM18.5 18.5C18.5 19.05 18.05 19.5 17.5 19.5C16.95 19.5 16.5 19.05 16.5 18.5C16.5 17.95 16.95 17.5 17.5 17.5C18.05 17.5 18.5 17.95 18.5 18.5ZM7.5 18H10.5V20H7.5V18ZM13.5 18H16.5V20H13.5V18ZM7.5 12H10.5V14H7.5V12ZM13.5 12H16.5V14H13.5V12Z'
                        fill='currentColor'
                      />
                      <path
                        d='M7 9.5V15.5'
                        stroke='currentColor'
                        strokeWidth='1.5'
                      />
                      <circle cx='7' cy='9.5' r='1.5' fill='currentColor' />
                      <circle cx='7' cy='15.5' r='1.5' fill='currentColor' />
                    </svg>
                    AI & ML
                  </a>
                </li>

                <li>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='text-gray-300 hover:text-primary-400 transition-all duration-300 flex items-center hover:translate-x-2 backdrop-blur-sm p-2 rounded hover:bg-gray-700/30 border-l-2 border-transparent hover:border-primary-500'
                  >
                    <svg
                      className='h-4 w-4 text-yellow-600 mr-2 animate-pulse'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z'
                        fill='currentColor'
                      />
                    </svg>
                    Cybersecurity
                  </a>
                </li>
              </ul>
            </div>

            <div className='col-span-1 lg:col-span-1 bg-gradient-to-br from-pink-900/30 via-gray-800/20 to-rose-900/30 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-pink-700/50 shadow-xl transform transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-[8px] hover:shadow-pink-500/30 hover:border-pink-500/50'>
              <h3 className="text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider flex items-center after:content-[''] after:block after:w-12 after:h-[2px] after:bg-primary-500 after:mt-1 after:ml-2">
                <span className='material-symbols-outlined mr-2 text-primary-500'>
                  support_agent
                </span>
                Support
              </h3>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='text-gray-300 hover:text-primary-400 transition-all duration-300 flex items-center hover:translate-x-2 backdrop-blur-sm p-1 rounded hover:bg-gray-700/30 border-l-2 border-transparent hover:border-primary-500 whitespace-nowrap text-xs sm:text-sm'
                  >
                    <svg
                      className='h-4 w-4 text-primary-500/80 mr-2'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M11 18H13V16H11V18ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10H10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 12 11 11.75 11 15H13C13 12.75 16 12.5 16 10C16 7.79 14.21 6 12 6Z'
                        fill='currentColor'
                      />
                    </svg>
                    Help Center
                  </a>
                </li>

                <li>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='text-gray-300 hover:text-pink-400 transition-all duration-300 flex items-center hover:translate-x-2 backdrop-blur-sm p-2 rounded hover:bg-pink-700/30 border-l-2 border-transparent hover:border-pink-500'
                  >
                    <svg
                      className='h-4 w-4 text-primary-500/80 mr-2'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z'
                        fill='currentColor'
                      />
                      <path
                        d='M11 18H13V16H11V18ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10H10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 12 11 11.75 11 15H13C13 12.75 16 12.5 16 10C16 7.79 14.21 6 12 6Z'
                        fill='currentColor'
                      />
                    </svg>
                    FAQs
                  </a>
                </li>

                <li>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='text-gray-300 hover:text-primary-400 transition-all duration-300 flex items-center hover:translate-x-2 backdrop-blur-sm p-2 rounded hover:bg-gray-700/30 border-l-2 border-transparent hover:border-primary-500'
                  >
                    <svg
                      className='h-4 w-4 text-primary-500/80 mr-2'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z'
                        fill='currentColor'
                      />
                    </svg>
                    Contact Us
                  </a>
                </li>

                <li>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='text-white hover:text-purple-400 transition-all duration-300 flex items-center hover:translate-x-2 backdrop-blur-sm p-2 rounded hover:bg-purple-800/40 border-l-2 border-transparent hover:border-purple-500'
                  >
                    <span className='material-symbols-outlined mr-2 text-sm text-purple-500/80 animate-pulse'>
                      bug_report
                    </span>
                    Report a Bug
                  </a>
                </li>

                <li>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='text-gray-300 hover:text-violet-400 transition-all duration-300 flex items-center hover:translate-x-2 backdrop-blur-sm p-2 rounded hover:bg-violet-700/30 border-l-2 border-transparent hover:border-violet-500'
                  >
                    <svg
                      className='h-4 w-4 text-primary-500/80 mr-2'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16ZM11 12H13V14H11V12ZM11 6H13V10H11V6Z'
                        fill='currentColor'
                      />
                    </svg>
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-span-1 lg:col-span-1 bg-gradient-to-br from-amber-900/30 via-gray-800/20 to-orange-900/30 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-amber-700/50 shadow-xl transform transition-all duration-500 hover:translate-y-[-8px] hover:shadow-amber-500/30 hover:border-amber-500/50'>
              <h3 className="text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider flex items-center after:content-[''] after:block after:w-12 after:h-[2px] after:bg-amber-500 after:mt-1 after:ml-2">
                <span className='material-symbols-outlined mr-2 text-amber-500'>
                  lightbulb
                </span>
                Resources
              </h3>
              <ul className='space-y-2'>
                <li>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='text-gray-300 hover:text-amber-400 transition-all duration-300 flex items-center hover:translate-x-2 backdrop-blur-sm p-1 rounded hover:bg-amber-700/30 border-l-2 border-transparent hover:border-amber-500 whitespace-nowrap text-xs sm:text-sm'
                  >
                    <svg
                      className='h-4 w-4 text-amber-500/80 mr-2'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z'
                        fill='currentColor'
                      />
                    </svg>
                    Latest News
                  </a>
                </li>
                <li>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='text-gray-300 hover:text-amber-400 transition-all duration-300 flex items-center hover:translate-x-2 backdrop-blur-sm p-2 rounded hover:bg-amber-700/30 border-l-2 border-transparent hover:border-amber-500'
                  >
                    <svg
                      className='h-4 w-4 text-amber-500/80 mr-2'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z'
                        fill='currentColor'
                      />
                    </svg>
                    Research Papers
                  </a>
                </li>
                <li>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='text-gray-300 hover:text-amber-400 transition-all duration-300 flex items-center hover:translate-x-2 backdrop-blur-sm p-2 rounded hover:bg-amber-700/30 border-l-2 border-transparent hover:border-amber-500'
                  >
                    <svg
                      className='h-4 w-4 text-amber-500/80 mr-2'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z'
                        fill='currentColor'
                      />
                    </svg>
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='text-white hover:text-amber-400 transition-all duration-300 flex items-center hover:translate-x-2 backdrop-blur-sm p-2 rounded hover:bg-amber-800/40 border-l-2 border-transparent hover:border-amber-500'
                  >
                    <span className='material-symbols-outlined mr-2 text-sm text-amber-500/80 animate-pulse'>
                      code
                    </span>
                    Open Source
                  </a>
                </li>
                <li>
                  <a
                    href='https://webcrumbs.cloud/placeholder'
                    className='text-gray-300 hover:text-amber-400 transition-all duration-300 flex items-center hover:translate-x-2 backdrop-blur-sm p-2 rounded hover:bg-amber-700/30 border-l-2 border-transparent hover:border-amber-500'
                  >
                    <svg
                      className='h-4 w-4 text-amber-500/80 mr-2'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5ZM12 4.15L5 8.09V15.91L12 19.85L19 15.91V8.09L12 4.15Z'
                        fill='currentColor'
                      />
                    </svg>
                    API Services
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='mt-6 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4'>
            <details className='relative inline-block text-left group w-full sm:w-auto'>
              <summary className='flex items-center justify-center space-x-2 cursor-pointer text-gray-300 hover:text-primary-400 transition-all duration-300 outline-none bg-gray-800/30 px-3 py-1 rounded-full border border-gray-700/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary-500/20 whitespace-nowrap text-xs sm:text-sm w-full sm:w-auto'>
                <span className='material-symbols-outlined text-sm text-cyan-500 animate-spin flex items-center'>
                  <svg
                    className='h-4 w-4'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z'
                      fill='currentColor'
                    />
                  </svg>
                </span>

                <span>English</span>
                <span className='material-symbols-outlined text-sm'>
                  expand_more
                </span>
              </summary>
              <div className='absolute z-50 mt-2 w-full sm:w-40 origin-top-right rounded-md bg-gray-800/90 shadow-lg ring-1 ring-primary-500 ring-opacity-20 focus:outline-none backdrop-blur-md border border-gray-700/50 max-h-[calc(100vh-100px)] overflow-y-auto sm:transform sm:translate-y-0 left-0 sm:left-auto sm:right-0'>
                <div className='py-1'>
                  <div className='border-b border-gray-700/50 pb-2 mb-1'>
                    <h4 className='px-3 py-1 text-xs uppercase tracking-wider text-gray-300 whitespace-nowrap'>
                      Language
                    </h4>
                    <a
                      href='https://webcrumbs.cloud/placeholder'
                      className='flex items-center px-3 py-1 text-xs text-gray-300 hover:bg-gray-700/60 transition-colors duration-200 hover:text-primary-400 whitespace-nowrap'
                    >
                      <span className='mr-2'>🇺🇸</span> English
                    </a>
                    <a
                      href='https://webcrumbs.cloud/placeholder'
                      className='flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/60 transition-colors duration-200 hover:text-primary-400'
                    >
                      <span className='mr-2'>🇫🇷</span> Français
                    </a>
                    <a
                      href='https://webcrumbs.cloud/placeholder'
                      className='flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/60 transition-colors duration-200 hover:text-primary-400'
                    >
                      <span className='mr-2'>🇪🇸</span> Español
                    </a>
                    <a
                      href='https://webcrumbs.cloud/placeholder'
                      className='flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700/60 transition-colors duration-200 hover:text-primary-400'
                    >
                      <span className='mr-2'>🇩🇪</span> Deutsch
                    </a>
                    <a
                      href='https://webcrumbs.cloud/placeholder'
                      className='flex items-center px-4 py-2 text-sm text-white hover:bg-gray-700/60 transition-colors duration-200 hover:text-primary-400'
                    >
                      <span className='mr-2'>🇯🇵</span> 日本語
                    </a>
                  </div>
                  <div>
                    <h4 className='px-4 py-1 text-xs uppercase tracking-wider text-gray-300'>
                      Country/Region
                    </h4>
                    <a
                      href='https://webcrumbs.cloud/placeholder'
                      className='flex items-center px-3 py-1 text-xs text-white hover:bg-gray-700/60 transition-colors duration-200 hover:text-primary-400 whitespace-nowrap'
                    >
                      <span className='mr-2'>🇺🇸</span> United States
                    </a>
                    <a
                      href='https://webcrumbs.cloud/placeholder'
                      className='flex items-center px-3 py-1 text-xs text-gray-300 hover:bg-gray-700/60 transition-colors duration-200 hover:text-primary-400 whitespace-nowrap'
                    >
                      <span className='mr-2'>🇬🇧</span> United Kingdom
                    </a>
                    <a
                      href='https://webcrumbs.cloud/placeholder'
                      className='flex items-center px-3 py-1 text-xs text-gray-300 hover:bg-gray-700/60 transition-colors duration-200 hover:text-primary-400 whitespace-nowrap'
                    >
                      <span className='mr-2'>🇨🇦</span> Canada
                    </a>
                    <a
                      href='https://webcrumbs.cloud/placeholder'
                      className='flex items-center px-3 py-1 text-xs text-gray-300 hover:bg-gray-700/60 transition-colors duration-200 hover:text-primary-400 whitespace-nowrap'
                    >
                      <span className='mr-2'>🇦🇺</span> Australia
                    </a>
                    <a
                      href='https://webcrumbs.cloud/placeholder'
                      className='flex items-center px-3 py-1 text-xs text-gray-300 hover:bg-gray-700/60 transition-colors duration-200 hover:text-primary-400 group whitespace-nowrap'
                    >
                      <span className='material-symbols-outlined mr-2 text-sm text-primary-500 group-hover:rotate-90 transition-transform duration-300'>
                        add_circle
                      </span>{" "}
                      See all regions
                    </a>
                  </div>
                </div>
              </div>
            </details>
          </div>
          <div className='flex items-center justify-center mx-4 mt-3 sm:mt-0'>
            <button className='flex items-center space-x-2 bg-gradient-to-r from-gray-800/40 to-green-900/30 px-3 py-1 rounded-full border border-green-700/50 backdrop-blur-sm hover:shadow-lg hover:shadow-green-500/20 text-gray-300 hover:text-green-400 transition-all duration-300 transform hover:scale-105 group whitespace-nowrap text-xs'>
              <svg
                className='h-4 w-4 text-green-500 group-hover:rotate-180 transition-transform duration-500'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM12 19C8.14 19 5 15.86 5 12C5 8.14 8.14 5 12 5C15.86 5 19 8.14 19 12C19 15.86 15.86 19 12 19ZM10 17L15 12L10 7V17Z'
                  fill='currentColor'
                />
              </svg>
              <span className='text-sm'>Toggle Dark Mode</span>
            </button>
          </div>
          <div className='mt-6 pt-4 border-t border-gray-200'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
              <div className='flex flex-wrap justify-center md:justify-start gap-1 sm:gap-2 mb-3 md:mb-0'>
                <a
                  href='https://webcrumbs.cloud/placeholder'
                  className='text-xs text-gray-400 hover:text-primary-400 transition-colors duration-300'
                >
                  Terms of Service
                </a>
                <span className='text-gray-700'>|</span>
                <a
                  href='https://webcrumbs.cloud/placeholder'
                  className='text-xs text-gray-400 hover:text-primary-400 transition-colors duration-300'
                >
                  Privacy Policy
                </a>
                <span className='text-gray-700'>|</span>
                <a
                  href='https://webcrumbs.cloud/placeholder'
                  className='text-xs text-gray-400 hover:text-primary-400 transition-colors duration-300'
                >
                  Cookie Policy
                </a>
                <span className='text-gray-700'>|</span>
                <a
                  href='https://webcrumbs.cloud/placeholder'
                  className='text-xs text-gray-400 hover:text-primary-400 transition-colors duration-300'
                >
                  Security
                </a>
                <span className='text-gray-700'>|</span>
                <a
                  href='https://webcrumbs.cloud/placeholder'
                  className='text-xs text-white hover:text-primary-400 transition-colors duration-300'
                >
                  Accessibility
                </a>
              </div>

              <p className='text-[10px] sm:text-xs text-gray-400 flex items-center whitespace-nowrap'>
                <span className='material-symbols-outlined mr-1 text-xs text-primary-500 animate-pulse'>
                  favorite
                </span>
                Made with love by Jeffrey Desir
              </p>
            </div>

            <div className='mt-2 sm:mt-3 flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0'>
              <p className='text-[10px] sm:text-xs text-white mb-2 md:mb-0 font-mono whitespace-normal text-center md:text-left'>
                © 2023 TechStack. All rights reserved.
              </p>
              <div className='flex items-center justify-center md:justify-end'>
                <span className='text-[10px] sm:text-xs text-gray-400 mr-2 font-mono whitespace-nowrap'>
                  Version 2.4.1
                </span>
                <span className='inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-gray-800 text-primary-400 border border-primary-500/30 backdrop-blur-sm shadow-inner whitespace-nowrap'>
                  <span className='w-2 h-2 mr-1 rounded-full bg-primary-500 animate-pulse'></span>
                  System Online
                </span>
              </div>
            </div>
          </div>

          {/* Next: "Add Cookie Consent Banner" */}

          <div>
            <div className='absolute inset-0 bg-grid-pattern bg-opacity-5 pointer-events-none'></div>
            <div className='absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary-500/5 to-transparent pointer-events-none'></div>
            <div className='absolute top-40 left-20 w-32 h-32 rounded-full bg-emerald-500/30 blur-3xl pointer-events-none animate-pulse'></div>
            <div className='absolute bottom-40 right-20 w-32 h-32 rounded-full bg-primary-600/20 blur-3xl pointer-events-none'></div>

            <div>
              <div className='absolute bottom-1/3 left-1/3 w-36 h-36 rounded-full bg-pink-600/20 blur-3xl pointer-events-none animate-pulse'></div>
            </div>

            <div>
              <div className='absolute top-1/4 right-1/3 w-24 h-24 rounded-full bg-purple-600/20 blur-3xl pointer-events-none animate-pulse'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
