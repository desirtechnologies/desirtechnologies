const Component = () => {
  return (
    <div className="w-full max-w-5xl mx-auto font-sans relative z-10 backdrop-blur-sm backdrop-filter">
      <div className="flex flex-col gap-4">
        <header className="sticky top-0 bg- bg-opacity-80 rounded-full py-1.5 px-2 sm:px-4 shadow-[5px_5px_15px_rgba(0,0,0,0.3),-5px_-5px_15px_rgba(40,40,60,0.2)] border border-[#2a3045] backdrop-blur-sm transition-all duration-300 ease-in-out transform hover:shadow-[8px_8px_20px_rgba(0,0,0,0.4),-8px_-8px_20px_rgba(40,40,60,0.3)] z-50 mt-4 mb-8 hover:scale-[1.01] group">
        </header>
        <nav className="flex items-center justify-between w-full overflow-x-auto scrollbar-hide relative py-1 gap-1 px-1">
          <div className="flex items-center flex-shrink-0 w-auto justify-start mb-0 mr-4 relative z-20">
            <a
              href="https://webcrumbs.cloud/placeholder"
              className="group flex items-center gap-1 text-primary-400 font-bold text-lg transition-all duration-300 hover:scale-105 hover:text-white px-2 py-1 rounded-lg hover:bg-[#1a1f2e] ml-2 mr-1 relative"
            >
              <svg
                className="w-7 h-7 text-primary-500 transition-all duration-300 group-hover:rotate-12 group-hover:text-[#00ff9d] drop-shadow-[0_0_3px_rgba(0,255,157,0.6)]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Matrix
              <span className="ml-1 text-sm tracking-widest font-mono relative overflow-hidden text-primary-400">
                <span className="animate-pulse inline-block transform translate-y-0 animate-[pulse_1s_ease-in-out_infinite]">
                  _
                </span>
              </span>
            </a>
          </div>

          <div className="flex items-center flex-grow justify-start gap-0.5 md:gap-1 overflow-x-auto px-2 py-0.5 scrollbar-hide mx-2 relative z-10">
            <details className="relative group inline-block hover:scale-[1.02] transition-transform duration-300">
              <summary className="flex items-center gap-2 px-3 py-2 cursor-pointer text-primary-600 hover:text-white list-none rounded-xl transition-all duration-300 ease-in-out hover:bg-neutral-800 border border-transparent hover:border-primary-800/50 shadow-sm hover:shadow-md hover:shadow-primary-900/20">
                <span className="material-symbols-outlined text-lg group-hover:animate-float">
                  dashboard
                </span>
                <span className="font-medium hidden sm:hidden md:inline text-xs">
                  Dashboard
                </span>
                <span className="material-symbols-outlined text-sm transition-transform duration-300 ease-in-out group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="absolute mt-2 w-64 rounded-xl overflow-hidden shadow-lg bg-neutral-950/95 backdrop-blur-xl border border-neutral-800 shadow-[0_10px_25px_rgba(0,0,0,0.3)] z-40 transition-all duration-300 ease-in-out">
                <div className="p-2 space-y-1">
                  <a
                    href="https://webcrumbs.cloud/placeholder"
                    className="flex items-center gap-3 px-3 py-2 rounded hover:bg-[#1f243a] transition-all duration-300 ease-in-out text-neutral-100 hover:text-primary-400 relative overflow-hidden before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-primary-500/10 hover:before:w-full before:transition-all before:duration-300"
                  >
                    <span className="material-symbols-outlined">
                      analytics
                    </span>
                    <span>Analytics</span>
                  </a>

                  <a
                    href="https://webcrumbs.cloud/placeholder"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-neutral-800 transition-all duration-300 ease-in-out text-neutral-200 hover:text-primary-400 group"
                  >
                    <span className="material-symbols-outlined transition-transform duration-300 group-hover:scale-110">
                      monitoring
                    </span>
                    <span className="font-medium">Monitoring</span>
                  </a>

                  <a
                    href="https://webcrumbs.cloud/placeholder"
                    className="flex items-center gap-3 px-3 py-2 rounded hover:bg-[#1f243a] hover:bg-primary-800 active:bg-primary-900 transition-all duration-300 ease-in-out text-neutral-200 hover:text-primary-600 relative overflow-hidden before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-primary-500/10 hover:before:w-full before:transition-all before:duration-300"
                  >
                    <span className="material-symbols-outlined">
                      bug_report
                    </span>
                    <span>Reports</span>
                  </a>
                </div>
                <div className="bg-[#121624] py-2 px-3 text-xs text-gray-500">
                  <div className="text-xs flex items-center justify-between">
                    <span className="text-primary-600">v1.2.0</span>

                    <a
                      href="https://webcrumbs.cloud/placeholder"
                      className="text-primary-400 hover:text-white hover:bg-primary-800 active:bg-primary-900 transition-all duration-300 ease-in-out"
                    >
                      Release Notes
                    </a>
                  </div>
                </div>
              </div>
            </details>

            <details className="relative group inline-block">
              <summary className="flex items-center gap-2 px-3 sm:px-4 py-2 cursor-pointer text-primary-500 hover:text-white hover:bg-gray-100 active:bg-gray-200 list-none rounded-full transition-all duration-300 ease-in-out hover:bg-[#1a1f2e] border border-transparent hover:border-[#2a3045]">
                <span className="material-symbols-outlined text-lg group-hover:animate-float">
                  code
                </span>
                <span className="font-medium hidden sm:hidden md:inline text-xs">
                  Developer
                </span>
                <span className="material-symbols-outlined text-sm transition-transform duration-300 ease-in-out group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="absolute mt-2 w-72 rounded-lg overflow-hidden shadow-lg bg-[#0f1320] border border-[#2a3045] shadow-[0_8px_16px_rgba(0,0,0,0.6)] z-40 right-0 transition-all duration-300 ease-in-out transform origin-top scale-95 opacity-0 pointer-events-none group-open:scale-100 group-open:opacity-100 group-open:pointer-events-auto backdrop-blur-lg">
                <div className="p-2 space-y-1">
                  <a
                    href="https://webcrumbs.cloud/placeholder"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-neutral-800 transition-all duration-300 ease-in-out text-neutral-200 hover:text-primary-400 group"
                  >
                    <span className="material-symbols-outlined transition-transform duration-300 group-hover:scale-110">
                      terminal
                    </span>
                    <span className="font-medium">Command Line</span>
                  </a>

                  <a
                    href="https://webcrumbs.cloud/placeholder"
                    className="flex items-center gap-3 px-3 py-2 rounded hover:bg-[#1f243a] hover:bg-primary-800 active:bg-primary-900 transition-all duration-300 ease-in-out text-neutral-200 hover:text-primary-500"
                  >
                    <span className="material-symbols-outlined">api</span>
                    <span>API Documentation</span>
                  </a>

                  <a
                    href="https://webcrumbs.cloud/placeholder"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-neutral-800 transition-all duration-300 ease-in-out text-neutral-300 hover:text-primary-400 group"
                  >
                    <span className="material-symbols-outlined transition-transform duration-300 group-hover:scale-110">
                      library_books
                    </span>
                    <span className="font-medium">Code Samples</span>
                  </a>

                  <a
                    href="https://webcrumbs.cloud/placeholder"
                    className="flex items-center gap-3 px-3 py-2 rounded hover:bg-[#1f243a] hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 ease-in-out text-gray-300 hover:text-primary-500"
                  >
                    <span className="material-symbols-outlined">
                      settings_applications
                    </span>
                    <span>Settings</span>
                  </a>
                </div>
                <div className="bg-[#121624] py-2 px-3 text-xs text-gray-500">
                  <div className="text-xs flex items-center justify-between">
                    <span className="text-primary-600">v1.2.0</span>

                    <a
                      href="https://webcrumbs.cloud/placeholder"
                      className="text-primary-500 hover:text-white hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 ease-in-out"
                    >
                      Release Notes
                    </a>
                  </div>
                </div>
              </div>
            </details>

            <details className="relative group inline-block">
              <summary className="flex items-center gap-2 px-3 sm:px-4 py-2.5 cursor-pointer text-primary-700 hover:text-white list-none rounded-full transition-all duration-300 ease-in-out hover:bg-[#1a1f2e] border border-primary-600/30 hover:border-primary-700 backdrop-blur-sm shadow-lg shadow-primary-500/10 hover:shadow-primary-600/20 group">
                <span className="material-symbols-outlined text-lg transform group-hover:scale-110 transition-all duration-300 ease-in-out">
                  groups
                </span>
                <span className="font-medium hidden sm:inline relative overflow-hidden group-hover:text-[#00ff9d] text-neutral-100 transition-colors duration-300">
                  <span className="relative z-10 inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out group-hover:after:w-full">
                    Team
                  </span>
                </span>
                <div className="relative -mr-1 flex items-center justify-center w-5 h-5 bg-primary-700 rounded-full text-white text-xs font-bold animate-pulse hover:animate-none group-hover:scale-110 transition-transform duration-300 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-primary-700/50 before:animate-ping before:opacity-0 group-hover:before:opacity-70 shadow-[0_0_10px_rgba(0,255,157,0.3)]">
                  3
                </div>
                <span className="material-symbols-outlined text-sm transition-all duration-500 transform group-hover:rotate-180 group-open:rotate-180 group-hover:text-primary-500 group-open:text-primary-500">
                  expand_more
                </span>
              </summary>

              <div className="absolute mt-2 w-72 rounded-lg overflow-hidden shadow-lg bg-[#171b29] border border-[#2a3045] shadow-[0_8px_16px_rgba(0,0,0,0.6)] z-40 right-0 transition-all duration-300 ease-in-out transform origin-top scale-95 opacity-0 pointer-events-none group-open:scale-100 group-open:opacity-100 group-open:pointer-events-auto backdrop-blur-lg">
                <div className="p-3 bg-[#121620]">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-400 relative before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-12 before:h-[1px] before:bg-primary-600">
                      TEAM MEMBERS
                    </h3>
                    <span className="material-symbols-outlined text-sm text-[#00ff9d] cursor-pointer hover:text-white transition-colors duration-200">
                      add_circle
                    </span>
                  </div>
                  <div className="space-y-2 text-neutral-100">
                    <div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-neutral-800 transition-all duration-300 ease-in-out cursor-pointer group">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-[#2a3045] flex items-center justify-center text-primary-600 border border-[#3a4055]">
                          TN
                        </div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#171b29] animate-pulse">
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-neutral-200">
                          Thomas Neo
                        </div>
                        <div className="text-xs text-neutral-400">
                          System Architect
                        </div>
                      </div>
                      <div className="ml-auto flex items-center justify-center min-w-[20px] h-5 px-1.5 bg-primary-700 rounded-full text-white text-xs font-bold">
                        2
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-neutral-800 transition-all duration-300 ease-in-out cursor-pointer group">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-[#2a3045] flex items-center justify-center text-primary-600 border border-[#3a4055]">
                          MT
                        </div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-gray-500 rounded-full border-2 border-[#171b29]">
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-neutral-200">
                          Morpheus Trinity
                        </div>
                        <div className="text-xs text-neutral-400">
                          Project Lead
                        </div>
                      </div>
                      <div className="ml-auto flex items-center justify-center min-w-[20px] h-5 px-1.5 bg-primary-700 rounded-full text-white text-xs font-bold shadow-[0_0_10px_rgba(0,255,157,0.2)] group-hover:shadow-[0_0_15px_rgba(0,255,157,0.3)] transition-all duration-300">
                        1
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-neutral-800 transition-all duration-300 ease-in-out cursor-pointer group">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-[#2a3045] flex items-center justify-center text-primary-600 border border-[#3a4055]">
                          OS
                        </div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-yellow-500 rounded-full border-2 border-[#171b29]">
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-neutral-200">
                          Oracle Smith
                        </div>
                        <div className="text-xs text-neutral-400">
                          Data Analyst
                        </div>
                      </div>

                      <div className="flex items-center gap-1 ml-1">
                        <span className="inline-flex items-center justify-center bg-[#121624] text-xs text-yellow-500 px-1.5 py-0.5 rounded border border-[#2a3045]">
                          New
                        </span>
                      </div>

                      <div className="ml-auto text-xs text-neutral-400">
                        Away
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded hover:bg-[#1f243a] hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 ease-in-out cursor-pointer">
                      <div className="relative z-10">
                        <div className="w-10 h-10 rounded-full bg-[#2a3045] flex items-center justify-center text-[#00ff9d] border border-[#3a4055] shadow-inner group-hover:shadow-[0_0_10px_rgba(0,255,157,0.3)] transition-all duration-300">
                          CA
                        </div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#171b29] animate-pulse">
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-300">
                          Cipher Anderson
                        </div>
                        <div className="text-xs text-gray-500">
                          Security Expert
                        </div>
                      </div>
                      <div className="ml-auto flex items-center justify-center min-w-[20px] h-5 px-1.5 bg-[#ff3366] rounded-full text-white text-xs font-bold">
                        5
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-[#2a3045] p-3 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('https://webcrumbs.cloud/placeholder')] before:opacity-10 before:pointer-events-none">
                  <h3 className="text-sm font-medium text-gray-400 mb-3 flex items-center justify-between relative before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-12 before:h-[1px] before:bg-primary-600">
                    <span>TEAM CHAT</span>
                    <span className="material-symbols-outlined text-sm text-primary-600 cursor-pointer hover:text-white hover:bg-primary-800 active:bg-primary-900 transition-all duration-300 ease-in-out hover:rotate-12 transform">
                      chat
                    </span>
                  </h3>
                  <div className="max-h-[200px] overflow-y-auto space-y-2 mb-3 scrollbar-hide pr-1 relative z-10">
                    <div className="p-2 rounded bg-[#151a2d] border-l-2 border-[#00ff9d] transform hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,255,157,0.1)] group">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-primary-400">
                          Thomas Neo
                        </span>

                        <span className="text-gray-500">10:45 AM</span>
                      </div>
                      <p className="text-sm text-neutral-200">
                        Have you checked the new system update? It's critical we
                        deploy today.
                      </p>
                    </div>
                    <div className="p-2 rounded bg-[#151a2d] border-l-2 border-[#00ff9d]">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-primary-400">
                          Morpheus Trinity
                        </span>

                        <span className="text-gray-500">11:30 AM</span>
                      </div>
                      <p className="text-sm text-neutral-200">
                        I need everyone to review the security protocols before
                        the next simulation.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 relative z-10">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="w-full bg-[#121624] border border-[#2a3045] rounded px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-primary-600 hover:bg-[#1a1f2e] transition-all duration-300 ease-in-out focus:ring-2 focus:ring-primary-500/20 shadow-inner"
                    />

                    <button className="bg-[#1a1f2e] hover:bg-primary-800 active:bg-primary-900 text-primary-600 p-2 rounded flex items-center justify-center transition-all duration-300 ease-in-out border border-[#2a3045] hover:border-primary-600">
                      <span className="material-symbols-outlined text-sm">
                        send
                      </span>
                    </button>
                  </div>
                </div>
                <div className="bg-[#121624] py-2 px-3 text-xs text-gray-500">
                  <div className="text-xs flex items-center justify-between">
                    <span className="text-primary-500">v1.2.0</span>

                    <a
                      href="https://webcrumbs.cloud/placeholder"
                      className="text-primary-400 hover:text-white transition-all duration-300 ease-in-out hover:underline"
                    >
                      Release Notes
                    </a>
                  </div>
                </div>
              </div>
            </details>

            <a
              href="https://webcrumbs.cloud/placeholder"
              className="flex items-center gap-2 px-3 py-2 cursor-pointer text-primary-600 hover:text-white hover:bg-neutral-800 rounded-xl transition-all duration-300 ease-in-out border border-transparent hover:border-primary-700/50 whitespace-nowrap flex-shrink-0 transform hover:scale-105 hover:shadow-md hover:shadow-primary-900/20 group"
            >
              <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:rotate-12">
                palette
              </span>
              <span className="font-medium text-xs whitespace-nowrap">
                Art
              </span>
            </a>

            <a
              href="https://webcrumbs.cloud/placeholder"
              className="flex items-center gap-1 px-3 py-2 cursor-pointer text-primary-500 hover:text-white hover:bg-[#1a1f2e] rounded-full transition-all duration-300 ease-in-out border border-transparent hover:border-primary-700 whitespace-nowrap flex-shrink-0"
            >
              <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:scale-110">
                developer_board
              </span>
              <span className="font-medium text-xs whitespace-nowrap">
                Projects
              </span>
            </a>

            <a
              href="https://webcrumbs.cloud/placeholder"
              className="flex items-center gap-1 px-3 py-2 cursor-pointer text-primary-500 hover:text-white hover:bg-[#1a1f2e] rounded-full transition-all duration-300 ease-in-out border border-transparent hover:border-primary-700 whitespace-nowrap flex-shrink-0 group"
            >
              <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:scale-110">
                feed
              </span>
              <span className="font-medium text-xs whitespace-nowrap">
                News
              </span>
            </a>

            <a className="flex items-center gap-1 px-2 py-2 text-primary-500 hover:text-white hover:bg-gray-100 active:bg-gray-200 rounded-full transition-all duration-300 ease-in-out hover:bg-[#1a1f2e] border border-transparent hover:border-[#2a3045] hover:shadow-[0_0_10px_rgba(0,255,157,0.2)] hover:rotate-45 transform">
              <span className="material-symbols-outlined text-sm">
                settings
              </span>
            </a>

            <a
              href="https://webcrumbs.cloud/placeholder"
              className="flex items-center gap-2 px-3 py-2 cursor-pointer text-primary-600 hover:text-white hover:bg-neutral-800 rounded-xl transition-all duration-300 ease-in-out border border-transparent hover:border-primary-700/50 whitespace-nowrap flex-shrink-0 group transform hover:scale-105 hover:shadow-md hover:shadow-primary-900/20 relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-primary-600/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:rounded-xl"
            >
              <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:scale-110">
                menu_book
              </span>
              <span className="font-medium text-xs whitespace-nowrap">
                Resources
              </span>
            </a>

            <a className="flex items-center justify-center w-9 h-9 bg-neutral-800 text-primary-500 rounded-xl transition-all duration-300 ease-in-out hover:bg-primary-600 hover:text-neutral-100 hover:scale-105 border border-neutral-700 hover:border-primary-500 shadow-md relative group ml-1 hover:shadow-[0_0_15px_rgba(0,255,157,0.3)]">
              <span className="material-symbols-outlined">person</span>

              <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-full border-2 border-[#0f111a] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </span>
            </a>
            <details className="relative group inline-block md:hidden ml-auto">
              <summary className="flex items-center justify-center w-9 h-9 bg-neutral-800 text-primary-500 rounded-xl transition-all duration-300 ease-in-out hover:bg-primary-600 hover:text-neutral-100 border border-neutral-700 hover:border-primary-500 shadow-md">
                <span className="material-symbols-outlined">menu</span>
              </summary>
              <div className="absolute mt-2 w-56 rounded-xl overflow-hidden shadow-lg bg-neutral-950/95 backdrop-blur-xl border border-neutral-800 shadow-[0_10px_25px_rgba(0,0,0,0.3)] z-50 right-0 transition-all duration-300 ease-in-out">
                <div className="py-2 px-1">
                  <a
                    href="https://webcrumbs.cloud/placeholder"
                    className="flex items-center gap-3 px-3 py-2 rounded hover:bg-[#1a1f2e] transition-all duration-300 ease-in-out text-neutral-200 hover:text-primary-400"
                  >
                    <span className="material-symbols-outlined">
                      dashboard
                    </span>
                    <span>Dashboard</span>
                  </a>
                  <a
                    href="https://webcrumbs.cloud/placeholder"
                    className="flex items-center gap-3 px-3 py-2 rounded hover:bg-[#1a1f2e] transition-all duration-300 ease-in-out text-neutral-200 hover:text-primary-400"
                  >
                    <span className="material-symbols-outlined">code</span>
                    <span>Developer</span>
                  </a>
                  <a
                    href="https://webcrumbs.cloud/placeholder"
                    className="flex items-center gap-3 px-3 py-2 rounded hover:bg-[#1a1f2e] transition-all duration-300 ease-in-out text-neutral-200 hover:text-primary-400"
                  >
                    <span className="material-symbols-outlined">
                      groups
                    </span>
                    <span>Team</span>
                    <div className="ml-auto flex items-center justify-center min-w-[20px] h-5 px-1.5 bg-primary-700 rounded-full text-white text-xs font-bold">
                      3
                    </div>
                  </a>
                  <a
                    href="https://webcrumbs.cloud/placeholder"
                    className="flex items-center gap-3 px-3 py-2 rounded hover:bg-[#1a1f2e] transition-all duration-300 ease-in-out text-neutral-200 hover:text-primary-400"
                  >
                    <span className="material-symbols-outlined">
                      palette
                    </span>
                    <span>Art</span>
                  </a>
                  <a
                    href="https://webcrumbs.cloud/placeholder"
                    className="flex items-center gap-3 px-3 py-2 rounded hover:bg-[#1a1f2e] transition-all duration-300 ease-in-out text-neutral-200 hover:text-primary-400"
                  >
                    <span className="material-symbols-outlined">
                      developer_board
                    </span>
                    <span>Projects</span>
                  </a>
                  <a
                    href="https://webcrumbs.cloud/placeholder"
                    className="flex items-center gap-3 px-3 py-2 rounded hover:bg-[#1a1f2e] transition-all duration-300 ease-in-out text-neutral-200 hover:text-primary-400"
                  >
                    <span className="material-symbols-outlined">feed</span>
                    <span>News</span>
                  </a>
                  <a
                    href="https://webcrumbs.cloud/placeholder"
                    className="flex items-center gap-3 px-3 py-2 rounded hover:bg-[#1a1f2e] transition-all duration-300 ease-in-out text-neutral-200 hover:text-primary-400"
                  >
                    <span className="material-symbols-outlined">
                      menu_book
                    </span>
                    <span>Resources</span>
                  </a>
                  <a
                    href="https://webcrumbs.cloud/placeholder"
                    className="flex items-center gap-3 px-3 py-2 rounded hover:bg-[#1a1f2e] transition-all duration-300 ease-in-out text-neutral-200 hover:text-primary-400"
                  >
                    <span className="material-symbols-outlined">
                      description
                    </span>
                    <span>Services</span>
                  </a>
                </div>
                <div className="border-t border-neutral-800 py-2 px-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-400">v1.2.0</span>
                    <a
                      href="https://webcrumbs.cloud/placeholder"
                      className="text-xs text-primary-400 hover:text-white transition-all duration-300"
                    >
                      Settings
                    </a>
                  </div>
                </div>
              </div>
            </details>
          </div>
          <details className="relative group inline-block">
            <summary className="flex items-center gap-2 px-3 py-2 cursor-pointer text-primary-600 hover:text-white list-none rounded-xl transition-all duration-300 ease-in-out hover:bg-neutral-800 border border-transparent hover:border-primary-700/50 whitespace-nowrap flex-shrink-0 group">
              <span className="material-symbols-outlined text-lg group-hover:animate-float">
                verified
              </span>
              <span className="font-medium text-xs whitespace-nowrap">
                v1.2.0
              </span>
              <span className="material-symbols-outlined text-sm transition-transform duration-300 ease-in-out group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="absolute mt-2 w-64 rounded-xl overflow-hidden shadow-lg bg-neutral-950/95 backdrop-blur-xl border border-neutral-800 shadow-[0_10px_25px_rgba(0,0,0,0.3)] z-40 transition-all duration-300 ease-in-out right-0 sm:right-auto">
              <div className="p-3 space-y-1">
                <h3 className="text-sm font-medium text-gray-400 mb-2 flex items-center justify-between relative before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-12 before:h-[1px] before:bg-primary-600">
                  <span>SYSTEM VERSION</span>
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-neutral-400">
                      Current Version:
                    </span>
                    <span className="text-xs font-medium text-primary-400 bg-primary-900/30 px-2 py-0.5 rounded">
                      v1.2.0
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-neutral-400">
                      Latest Update:
                    </span>
                    <span className="text-xs text-neutral-300">
                      March 15, 2023
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-neutral-400">
                      Build Number:
                    </span>
                    <span className="text-xs text-neutral-300">
                      #2756.8
                    </span>
                  </div>
                </div>
                <div className="pt-2 mt-2 border-t border-neutral-800">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-green-500 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">
                        check_circle
                      </span>
                      System Up-to-date
                    </span>
                    <a
                      href="https://webcrumbs.cloud/placeholder"
                      className="text-xs text-primary-400 hover:text-white transition-all duration-300 ease-in-out hover:underline"
                    >
                      Check Updates
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-[#121624] py-2 px-3">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://webcrumbs.cloud/placeholder"
                    className="text-xs text-primary-400 hover:text-white hover:bg-primary-800/30 px-2 py-1 rounded transition-all duration-300 flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      description
                    </span>
                    Release Notes
                  </a>
                  <a
                    href="https://webcrumbs.cloud/placeholder"
                    className="text-xs text-primary-400 hover:text-white hover:bg-primary-800/30 px-2 py-1 rounded transition-all duration-300 flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      history
                    </span>
                    Version History
                  </a>
                </div>
              </div>
            </div>
          </details>

          <a
            href="https://webcrumbs.cloud/placeholder"
            className="flex items-center gap-1 px-3 py-2 cursor-pointer text-primary-500 hover:text-white hover:bg-[#1a1f2e] rounded-full transition-all duration-300 ease-in-out border border-transparent hover:border-primary-700 whitespace-nowrap flex-shrink-0 group"
          >
            <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:scale-110">
              description
            </span>
            <span className="font-medium text-xs whitespace-nowrap">
              Services
            </span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Component;
