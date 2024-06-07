import { SlCalender } from "react-icons/sl";
import { IoPrintOutline } from "react-icons/io5";
import { GoDownload } from "react-icons/go";
import { CiShare2 } from "react-icons/ci";

export function ProfileHeader() {
  const printCV = () => {
    console.log("PrintCV");
  };

  return (
    <>
      <div className="flex justify-between py-5 px-7 text-lg font-medium uppercase">
        <div className="">
          <div className="color-b">cv ÖNİZLEME</div>
          <div className="flex text-xs font-medium">
            <div className="flex">
              <span className="w-4 mr-1">
                <SlCalender size="15" />
              </span>
              <span className="color-a">Güncelleme Tarihi: </span>
              <span className="color-b">05 Haziran 2024</span>
            </div>{" "}
            <div className="flex mx-3">
              <span className="w-4 mr-1">
                <SlCalender size="15" />
              </span>
              <span className="color-a">Son Giriş Tarihi: </span>
              <span className="color-b">07 Haziran 2024</span>
            </div>
          </div>
        </div>
        <div className="flex">
          <button
            type="button"
            className="text-lg box-shadow bg-blue-700 rounded-md p-5 mx-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
            onClick={() => printCV()}
          >
            <IoPrintOutline color="white" />
          </button>{" "}
          <button
            type="button"
            className="text-lg box-shadow bg-blue-700 rounded-md p-5 mx-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
          >
            <GoDownload color="white" />
          </button>{" "}
          <button
            type="button"
            className="text-lg box-shadow bg-blue-700 rounded-md p-5 mx-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
          >
            <CiShare2 color="white" />
          </button>
        </div>
      </div>
    </>
  );
}
