import React from 'react';

function Footer() {
  return (
    <>
      <footer className="py-20 md:py-40">
        <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
          <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
            <div
              className="flex w-full justify-center space-x-12 text-gray-600 dark:text-gray-300 sm:w-7/12 md:justify-start"
            >
              <ul className="list-inside list-disc space-y-8">
                <li><a href="#" className="transition hover:text-primary">Home</a></li>
                <li><a href="#" className="transition hover:text-primary">About</a></li>
                <li><a href="#" className="transition hover:text-primary">Guide</a></li>
                <li><a href="#" className="transition hover:text-primary">Blocks</a></li>
                <li><a href="#" className="transition hover:text-primary">Contact</a></li>
                <li><a href="#" className="transition hover:text-primary">Terms of Use</a></li>
              </ul>
              <ul role="list" className="space-y-8">
                <li>
                  <a href="#" className="flex items-center space-x-3 transition hover:text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-5"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                      />
                    </svg>
                    <span>Github</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-3 transition hover:text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-5"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                      />
                    </svg>
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-3 transition hover:text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-5"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                      />
                    </svg>
                    <span>YouTube</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-3 transition hover:text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-5"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05a8.002 8.002 0 0 0 5.46 7.636c-.08-.652-.15-1.654.031-2.366.166-.704 1.07-4.485 1.07-4.485s-.271-.545-.271-1.349c0-1.264.734-2.207 1.645-2.207.775 0 1.149.583 1.149 1.282 0 .78-.497 1.946-.753 3.03-.214.908.454 1.65 1.345 1.65 1.614 0 2.704-2.07 2.704-4.514 0-1.862-1.257-3.257-3.546-3.257-2.582 0-4.191 1.935-4.191 4.09 0 .73.214 1.243.547 1.639.153.183.174.256.119.466-.04.154-.13.525-.167.674-.055.21-.226.285-.417.208-1.165-.475-1.703-1.749-1.703-3.177 0-2.364 1.997-5.195 5.948-5.195 3.174 0 5.265 2.298 5.265 4.76 0 3.25-1.815 5.683-4.479 5.683-0.896 0-1.741-.482-2.029-.956l-.551 2.094c-.2.769-.743 1.73-1.113 2.316A8.003 8.003 0 0 0 16 8.049z"
                      />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
