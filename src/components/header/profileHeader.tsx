import { SlCalender } from "react-icons/sl";
import { IoPrintOutline } from "react-icons/io5";
import { GoDownload } from "react-icons/go";

import { ICv } from "../../types/cv";
import { IUser } from "../../types/users";
import {
  MutableRefObject,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { BASE_URL, TOKEN, USER_ID } from "../../App";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import {
  EmailShareButton,
  FacebookMessengerShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import moment from "moment";
import "moment/locale/tr";
import { jsPDF } from "jspdf";
import ReportTemplate from "./pdfTmp";

interface IProfileHeaderProps {
  data: {
    cv: ICv;
    user: IUser;
  };
  htmlRef: any;
}

export function ProfileHeader({ data, htmlRef }: IProfileHeaderProps) {
  const [pdfUrl, setPdfUrl] = useState<any>();
  const [showModal, setShowModal] = useState(false);
  const { cv, user } = data;
  const reportTemplateRef = useRef<any>(null);

  const shareUrl = "http://github.com";

  async function fetchData() {
    await fetch(`${BASE_URL}/v1/user/profilim/cv/${USER_ID}/get-share-cv-url`, {
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
        setPdfUrl(res.share_url);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    console.log(htmlRef?.current);
    fetchData();
  }, []);

  function onPrint() {
    // const doc = new jsPDF();
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });
    doc.setFont("Inter-Regular", "normal");
    doc.html(htmlRef?.current, {
      async callback(doc) {
        await doc.save("document");
      },
    });
  }

  return (
    <>
      <div className="flex justify-between py-5 px-7 text-lg font-medium ">
        <div className="">
          <h5 className="color-b uppercase ">cv ÖNİZLEME</h5>
          <div className="flex text-xs font-semibold mt-3">
            <div className="flex">
              <span className="w-4 mr-1">
                <SlCalender size="15" />
              </span>
              <span className="color-a">Güncelleme Tarihi: </span>
              <span className="ml-2 color-b">
                {moment(cv.updated_at)
                  .locale("tr")
                  .format("DD MMMM YYYY")
                  .toString()}
              </span>
            </div>{" "}
            <div className="flex mx-3">
              <span className="w-4 mr-1">
                <SlCalender size="15" />
              </span>
              <span className="color-a">Son Giriş Tarihi: </span>
              <span className="ml-2 color-b">
                {moment(user.updated_at)
                  .locale("tr")
                  .format("DD MMMM YYYY")
                  .toString()}
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <button
            type="button"
            className="text-lg box-shadow bg-blue-700 rounded-md p-5 mx-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
            onClick={() => onPrint()}
          >
            {/* <a href={pdfUrl} target="_blank" rel="noopener noreferrer"> */}
            <>
              <IoPrintOutline color="white" />
            </>

            {/* </a> */}
          </button>{" "}
          <button
            type="button"
            className="text-lg box-shadow bg-blue-700 rounded-md p-5 mx-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
          >
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
              <GoDownload color="white" />
            </a>
          </button>{" "}
          <button
            type="button"
            className="text-lg box-shadow bg-blue-700 rounded-md p-5 mx-1 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
            onClick={() => setShowModal(true)}
          >
            <CiShare2 color="white" />
          </button>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-96 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex flex-col items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h5 className="text-xl item-center font-semibold">
                    Özgeçmişi Paylaş
                  </h5>
                  <button
                    className=" background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex flex-col">
                    <div className="flex justify-around">
                      <div className="flex">
                        <FacebookMessengerShareButton
                          url={pdfUrl}
                          appId="521270401588372"
                          className="flex"
                        >
                          <FaFacebook size={"30"} color="#2c2cb5" />
                          <span className="ml-2">facebook</span>
                        </FacebookMessengerShareButton>
                      </div>
                      <div className="flex">
                        <TwitterShareButton
                          url={pdfUrl}
                          title={"CV"}
                          className="flex"
                        >
                          <TwitterIcon size={32} round={true} />
                          <span className="ml-2">Twitter</span>
                        </TwitterShareButton>
                      </div>
                    </div>
                    <div className="flex justify-around mt-5">
                      <div className="flex">
                        <WhatsappShareButton
                          url={pdfUrl}
                          title={"whatsapp"}
                          separator=":: "
                          className="flex"
                        >
                          <FaWhatsapp size={"30"} color="#25d366" />
                          <span className="ml-2">Whatsapp</span>
                        </WhatsappShareButton>
                      </div>
                      <div className="flex">
                        <EmailShareButton url={pdfUrl} className="flex">
                          <CiShare2 size={"30"} color="#777777" />
                          <span className="ml-2"> E-posta</span>
                        </EmailShareButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
