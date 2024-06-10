import React, { useEffect, useState } from "react";
import "./App.css";
import { SideBar } from "./components/sideBare";
import { ProfileHeader } from "./components/profileHeader";
import { Details } from "./components/details";
const BASE_URL = "https://testapi.isbul.net/api";
const USER_ID = "2138625";
const TOKEN = "97|RD99iLwWMAeGVN7Wcbnd9kPA1WAsy0l2LpW7OHGu4f11f82a";

interface IData {
  user: {
    [key: string]: string;
  };
  cv: {
    [key: string]: string;
  };
  cv_live_info: {
    address: string;
    city: {
      [key: string]: string;
    };
    country: {
      [key: string]: string;
    };
  };
}

function App() {
  const [data, setData] = useState<IData>();

  async function fetchData() {
    await fetch(`${BASE_URL}/v1/user/profilim/cv/preview/${USER_ID}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + TOKEN,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    console.log("call");
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 my-6 font-medium sm:font-normal">
      <div className="">
        <div className="bg-white mb-2 box-shadow rounded-md hidden md:block">
          <ProfileHeader />
        </div>
        <div className="flex flex-col sm:flex-row ">
          <div className=" w-full  sm:w-1/4">
            {data?.user && (
              <SideBar
                user={data?.user}
                cv={data.cv}
                liveInfo={data?.cv_live_info}
              />
            )}
          </div>
          <div className="flex-grow">{data && <Details data={data} />}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
