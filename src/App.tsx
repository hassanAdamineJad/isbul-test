import React from "react";
import "./App.css";
import { SideBar } from "./components/sideBare";
import { ProfileHeader } from "./components/profileHeader";
import { Details } from "./components/details";

function App() {
  return (
    <div className="container mx-auto px-4 my-6 font-medium">
      <div className="">
        <div className="bg-white mb-2 box-shadow rounded-md hidden md:block">
          <ProfileHeader />
        </div>
        <div className="flex flex-col sm:flex-row ">
          <div className=" w-full  sm:w-1/4">
            <SideBar />
          </div>
          <div className="flex-grow">
            <Details />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
