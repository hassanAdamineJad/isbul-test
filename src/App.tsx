import { useEffect, useRef, useState } from "react";
import "./App.css";
import { ProfileHeader } from "./components/header/profileHeader";
import { Details } from "./components/details/details";
import { SideBar } from "./components/sideBar/sideBare";
import { IReview } from "./types/reviewCv";
export const BASE_URL = "https://testapi.isbul.net/api";
export const USER_ID = "2138625";
export const TOKEN = "97|RD99iLwWMAeGVN7Wcbnd9kPA1WAsy0l2LpW7OHGu4f11f82a";

function App() {
  const [data, setData] = useState<IReview>();
  const cvHtml = useRef(null);

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
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 my-6 font-medium sm:font-normal">
      <div className="">
        <div className="bg-white mb-2 box-shadow rounded-md hidden md:block">
          {data && (
            <ProfileHeader
              data={{ cv: data.cv, user: data.user }}
              htmlRef={cvHtml}
            />
          )}
        </div>
        {data && (
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
            <div ref={cvHtml} className="flex-grow">
              {data && <Details data={data} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
