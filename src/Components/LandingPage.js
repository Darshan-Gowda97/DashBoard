import React from 'react';
import { FcWorkflow } from 'react-icons/fc';
import { FaCaretDown } from 'react-icons/fa';
import Card from './Partials/Card';

const LandingPage = () => {
  return (
    <div className="w-full bg-background">
      <div className="flex h-14 justify-start items-center gap-5">
        <div className="flex lg:px-28 px-6 gap-1 items-center ">
          <FcWorkflow size="36" />
          <label className="font-semibold text-onBackground text-4xl tracking-normal">
            Rock
          </label>
        </div>
        <div className="flex hidden lg:inline-flex text-onBackground lg:gap-5 lg:pl-52 text-lg">
          <div className="flex gap-1 items-center ">
            <label>Product</label>
            <FaCaretDown />
          </div>
          <div className="flex gap-1 items-center ">
            <label>Pricing</label>
            <FaCaretDown />
          </div>
          <div>
            <label>Download</label>
          </div>
          <div className="flex gap-1 justify-center items-center ">
            <label>More</label>
            <FaCaretDown />
          </div>
        </div>
        <div className="w-full h-auto items-center flex text-onBackground gap-5 lg:pl-12 pl-28 text-lg">
          <div>
            <label>Login</label>
          </div>

          <div className="flex w-24 h-10 bg-button justify-center items-center rounded">
            <button className="w-full h-full font-semibold hover:bg-blue-700 text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-onBackground h-px"></div>
      <div className="flex flex-col justify-center items-center lg:pt-12 pt-8 gap-y-2 lg:text-6xl text-4xl text-onBackground font-bold">
        <label>Your new hub for</label>
        <label>getting work done.</label>
      </div>
      <div className="flex flex-col justify-center items-center lg:py-10 py-6 gap-y-2 lg:text-2xl text-lg text-onBackground font-normal">
        <label>Messaging, tasks, files, notes, and meetings.</label>
        <label>All in one space. All for free.</label>
      </div>
      <div className="flex justify-center items-center ">
        <button className="w-32 h-12 bg-button hover:bg-blue-700 rounded font-semibold text-xl text-white">
          Get Started
        </button>
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-2 justify-evenly items-center py-4 px-4">
        <Card
          header="Everything together"
          p1="With everything in one space, you"
          p2="don't need to switch between"
          p3="different apps to get work done."
        />
        <Card
          header="Keep work at work"
          p1="Switch to a more asynchronous way"
          p2="of working. Less distractions, less"
          p3="meetings, and more time for yourself."
        />
        <Card
          header="Works for everyone"
          p1="Create as many spaces as you want"
          p2="and add as many people as you"
          p3="need. Works across organizations."
        />
      </div>
    </div>
  );
};

export default LandingPage;
