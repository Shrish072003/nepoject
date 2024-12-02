import './App.css';
import React from "react";
import LineChartCard from './LineChartCard';
import ChartCircle from './ChartCircle';
import LeadsInfoCard from './LeadsInfoCard';
import ProfitInfoCard from './ProfitInfoCard';
import Carousel from './Carousel';
import SearchBar from './SearchBar'
import ProgressBar from './ProgressBar';
import ProgressBar1 from './ProgressBar1';
import ProgressBar2 from './ProgressBar2';
import ProgressBar3 from './ProgressBar3';
import logosh from "./logosh.png"

function App() {
  return (
    <>
      <div className='ap'>
        <div className="bg-gray-200 text-white min-h-screen flex">
          <div
            class="relative flex h-full w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
            <div class="flex items-center gap-4 p-4 mb-2">
              <img src={logosh} alt="" class="w-9 h-9" />
              <h5 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                TECH AP
              </h5>
            </div>

            <nav class="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
              <div class="relative block w-full">
                <div role="button"
                  class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                  <button type="button"
                    class="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-blue-gray-900">
                    <div class="grid mr-4 place-items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                        class="w-5 h-5">
                        <path fill-rule="evenodd"
                          d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <p class="block mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
                      Dashboard
                    </p>
                    <span class="ml-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                        stroke="currentColor" aria-hidden="true" class="w-4 h-4 mx-auto transition-transform">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="overflow-hidden">
                  <div class="block w-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-700">
                    <nav class="flex min-w-[240px] flex-col gap-1 p-0 font-sans text-base font-normal text-blue-gray-700">
                      <div role="button"
                        class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                        <div class="grid mr-4 place-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                            stroke="currentColor" aria-hidden="true" class="w-5 h-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                          </svg>
                        </div>
                        Analytics
                      </div>
                      <div role="button"
                        class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                        <div class="grid mr-4 place-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                            stroke="currentColor" aria-hidden="true" class="w-5 h-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                          </svg>
                        </div>
                        Reporting
                      </div>
                      <div role="button"
                        class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                        <div class="grid mr-4 place-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                            stroke="currentColor" aria-hidden="true" class="w-5 h-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                          </svg>
                        </div>
                        Projects
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
              <div class="relative block w-full">
                <div role="button"
                  class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                  <button type="button"
                    class="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-blue-gray-900">
                    <div class="grid mr-4 place-items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                        class="w-5 h-5">
                        <path fill-rule="evenodd"
                          d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <p class="block mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
                      E-Commerce
                    </p>
                    <span class="ml-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                        stroke="currentColor" aria-hidden="true" class="w-4 h-4 mx-auto transition-transform">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="overflow-hidden">
                  <div class="block w-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-700">
                    <nav class="flex min-w-[240px] flex-col gap-1 p-0 font-sans text-base font-normal text-blue-gray-700">
                      <div role="button"
                        class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                        <div class="grid mr-4 place-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                            stroke="currentColor" aria-hidden="true" class="w-5 h-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                          </svg>
                        </div>
                        Orders
                      </div>
                      <div role="button"
                        class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                        <div class="grid mr-4 place-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                            stroke="currentColor" aria-hidden="true" class="w-5 h-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                          </svg>
                        </div>
                        Products
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
              <hr class="my-2 border-blue-gray-50" />
              <div role="button"
                class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                <div class="grid mr-4 place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                    class="w-5 h-5">
                    <path fill-rule="evenodd"
                      d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                Inbox
                <div class="grid ml-auto place-items-center justify-self-end">
                  <div
                    class="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-full select-none whitespace-nowrap bg-blue-gray-500/20 text-blue-gray-900">
                    <span class="">14</span>
                  </div>
                </div>
              </div>
              <div role="button"
                class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                <div class="grid mr-4 place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                    class="w-5 h-5">
                    <path fill-rule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                Profile
              </div>
              <div role="button"
                class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                <div class="grid mr-4 place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                    class="w-5 h-5">
                    <path fill-rule="evenodd"
                      d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                Settings
              </div>
              <div role="button"
                class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                <div class="grid mr-4 place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                    class="w-5 h-5">
                    <path fill-rule="evenodd"
                      d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                Log Out
              </div>
            </nav>
            <div role="alert"
              class="relative block w-full px-4 py-4 mt-auto text-base text-white bg-gray-900 rounded-lg font-regular">
              <div class="mr-12">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  aria-hidden="true" class="w-12 h-12 mb-4">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25">
                  </path>
                </svg>
                <h6
                  class="block mb-1 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit">
                  Upgrade to PRO
                </h6>
                <p class="block font-sans text-sm antialiased font-normal leading-normal text-inherit opacity-80">
                  Upgrade to Material Tailwind PRO and get even more components,
                  plugins, advanced features and premium.
                </p>
                <div class="flex gap-3 mt-4">
                  <a href="#" class="block font-sans text-sm antialiased font-medium leading-normal text-inherit opacity-80">
                    Dismiss
                  </a>
                  <a href="#" class="block font-sans text-sm antialiased font-medium leading-normal text-inherit">
                    Upgrade Now
                  </a>
                </div>
              </div>
              <button
                class="!absolute  top-3 right-3 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button">
                <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class="w-6 h-6" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>










        </div>
        <div className='x1'>
          <SearchBar></SearchBar>
          <div className='a1'>
            <div className='aa'>
              <Carousel></Carousel>
            </div>
            <div className='bb'>
              <p className='bb1 font-sans'> Average Daily Sales</p>
              <p className='bb2 font-sans'> Total Sale this Month</p>
              <p className='bb3 font-sans'> $28,450</p>
              <LineChartCard></LineChartCard>
            </div>
            <div className='cc'>
              <div className='cc1'>
                <p className='p1' font-sans>Sales OverView</p>
                <p className='p2' font-sans>$42.5k</p>
                <div className='comp'>
                  <div className='sp1'>
                    <p className='sp2' font-sans>Order</p>
                    <p className='p3' font-sans >62.2%</p>
                    <p className='p4' font-sans>6,440</p>
                  </div>
                  <div className='sp3'>
                    <p className='sp2' font-sans>Return</p>
                    <p className='p3' font-sans>37.8%</p>
                    <p className='p4' font-sans>3,780</p>
                  </div>
                </div>
              </div>
              <ProgressBar></ProgressBar>
            </div>
          </div>
          <div className='a2'>
            <div className='dd'>
              <div className='dd1'>
                <div className='dd2'>
                  <p className='ddp1' font-sans>Earning Report</p>
                  <p className='ddp2' font-sans>Weekly Earning Overview</p>
                  <p className='ddp3' font-sans>$468</p>
                  <p className='ddp4' font-sans>You informed of this week compared to last week</p>
                </div>

                <LeadsInfoCard></LeadsInfoCard>
              </div>
              <hr></hr>

              <div className='mainrr' >
                <div className='rr'>
                  <span>
                    <p className='rp1' font-sans>Earnings</p>
                  </span>
                  <p className='rp2' font-sans>$545.69</p>
                  <ProgressBar1></ProgressBar1>
                </div>
                <div className='rr'>
                  <span>
                    <p className='rp1' font-sans>Earnings</p>
                  </span>
                  <p className='rp2' font-sans>$545.69</p>
                  <ProgressBar2></ProgressBar2>
                </div>
                <div className='rr'>
                  <span>
                    <p className='rp1' font-sans>Earnings</p>
                  </span>
                  <p className='rp2' font-sans>$545.69</p>
                  <ProgressBar3></ProgressBar3>
                </div>
              </div>
              {/* <ProfitInfoCard></ProfitInfoCard> */}
            </div>
            <div className='ee'>
              <div className='ee1'>
                <p className='ee2' font-sans> Support Tracker</p>
                <p className='ee4' font-sans > Last 7 Days </p>
                <p className='ee3' font-sans > 164 </p>
                <p className='ee5' font-sans> Last 7 Days </p>

                <span className='doIcn'>
                  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32" viewBox="0 0 32 32" width="50"
                    height="50" id="javascript">
                    <path fill="#E3F8FA" d="M26,32H6c-3.314,0-6-2.686-6-6V6c0-3.314,2.686-6,6-6h20c3.314,0,6,2.686,6,6v20C32,29.314,29.314,32,26,32z"></path>
                    <path fill="#26C6DA" d="M8,24H24V8H8V24z M21.19,20.419c-0.17-0.641-1.501-0.79-2.411-1.47c-0.92-0.62-1.139-2.12-0.379-2.981c0.26-0.32,0.689-0.56,1.14-0.67l0.47-0.059c0.91-0.021,1.469,0.219,1.889,0.689c0.121,0.119,0.211,0.24,0.391,0.52c-0.481,0.299-0.481,0.299-1.17,0.75c-0.151-0.32-0.391-0.52-0.651-0.6c-0.4-0.12-0.91,0.009-1.01,0.44c-0.039,0.13-0.03,0.25,0.031,0.47c0.162,0.37,0.707,0.53,1.198,0.76c1.41,0.572,1.885,1.185,2.002,1.915l-0.031-0.045c0.111,0.63-0.03,1.04-0.049,1.1c-0.521,1.78-3.421,1.84-4.581,0.669c-0.24-0.28-0.4-0.419-0.54-0.739l1.22-0.701c0.33,0.5,0.629,0.771,1.17,0.891C20.61,21.449,21.35,21.199,21.19,20.419z M13.422,20.651c0.011,0,0.043,0.061,0.085,0.131c0.155,0.259,0.289,0.439,0.553,0.57c0.257,0.081,0.824,0.139,1.044-0.32c0.134-0.232,0.092-0.986,0.092-1.807c0-1.294,0.006-2.578,0.006-3.87h1.499l-0.003,0.037c0,1.38,0.008,2.75,0,4.119c0.003,0.851,0.075,1.611-0.265,2.231c-0.235,0.48-0.685,0.79-1.207,0.941c-0.802,0.18-1.568,0.07-2.138-0.27c-0.383-0.23-0.679-0.591-0.883-1.011L13.422,20.651z"></path>
                  </svg>
                  <p className='tick' font-sans>New Tickets
                    <p className='tickSub' font-sans>28</p>
                  </p>
                </span>

                <span className='doIcn'>
                  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32" viewBox="0 0 32 32" width="50"
                    height="50" id="ionic">
                    <path fill="#F5E6FE" d="M26,32H6c-3.314,0-6-2.686-6-6V6c0-3.314,2.686-6,6-6h20c3.314,0,6,2.686,6,6v20C32,29.314,29.314,32,26,32z"></path>
                    <path fill="#BE63F9" d="M16,12.353L16,12.353c-2.014,0.002-3.646,1.633-3.647,3.647c0.002,2.013,1.633,3.645,3.647,3.647c2.013-0.002,3.645-1.633,3.647-3.647C19.643,13.987,18.012,12.356,16,12.353z"></path>
                    <path fill="#D9A4FC" d="M21.234,12.677c0.918,0,1.663-0.745,1.663-1.663s-0.745-1.663-1.663-1.663c-0.918,0-1.663,0.745-1.663,1.663S20.316,12.677,21.234,12.677z"></path>
                    <path fill="#D9A4FC" d="M16,24c4.413,0,8-3.587,8-8c0-1.153-0.241-2.269-0.719-3.315l-0.001-0.001l-0.069-0.153L23.1,12.656c-0.272,0.309-0.619,0.547-1.003,0.691l-0.106,0.041l0.044,0.103c0.316,0.738,0.5,1.597,0.5,2.499c0,0.002,0,0.004,0,0.007c0,3.603-2.931,6.537-6.538,6.537s-6.535-2.931-6.535-6.535s2.935-6.537,6.538-6.537c0.978,0,1.922,0.213,2.8,0.631l0.103,0.05l0.044-0.103c0.169-0.388,0.42-0.713,0.733-0.965l0.005-0.004l0.131-0.106l-0.15-0.078C18.607,8.328,17.351,8,16.019,8C16.012,8,16.006,8,16,8c-4.413,0-8,3.587-8,8C8,20.413,11.587,24,16,24z"></path>
                  </svg>
                  <p className='tick' font-sans>Open Tickets
                    <p className='tickSub' font-sans>28</p>
                  </p>
                </span>

                <span className='doIcn'>
                  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32" viewBox="0 0 32 32" width="50"
                    height="50" id="justgiving">
                    <path fill="#FFE6E2" d="M26,32H6c-3.314,0-6-2.686-6-6V6c0-3.314,2.686-6,6-6h20c3.314,0,6,2.686,6,6v20C32,29.314,29.314,32,26,32z"></path>
                    <path fill="#FC573B" d="M16,24c4.42,0,8-3.41,8-7.825c0-0.597-0.069-0.9-0.189-1.558H18.22l-3.266,3.279h4.485c-0.59,1.317-1.91,2.041-3.44,2.041c-2.069,0-3.76-1.78-3.76-3.847c0-2.076,1.691-3.809,3.76-3.809c0.756,0,1.459,0.197,2.041,0.581l3.028-3.041C19.694,8.687,17.929,8,16,8c-4.42,0-8,3.578-8,8C8,20.415,11.58,24,16,24z"></path>
                  </svg>
                  <p className='tick' font-sans>Response Time
                    <p className='tickSub' font-sans>28</p>
                  </p>
                </span>
              </div>
              <ChartCircle ></ChartCircle>

            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default App;
