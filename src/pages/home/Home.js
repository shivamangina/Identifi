/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { Link } from "react-router-dom";
import TrendingCreators from "./trending-creators/TrendingCreators";
import Quote from "./Quote";
import { ReactComponent as HeroIllustration } from "./Hero.svg";

export default function Home() {
  return (
    <>
      <section className="px-2 py-20 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl">
                  <span className="block xl:inline">We are not creatures,</span>
                  <br className="hidden md:block" />
                  <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline">
                    We are creators!
                  </span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  It never been easier to fund the creators on chain.
                </p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <Link
                    to="/creator/discover"
                    className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
                    Discover Creators
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                  <Link
                    to="/creator/profile"
                    className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                    Make a Creator Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden sm:rounded-xl">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrendingCreators />
      <Quote />
    </>
  );
}
