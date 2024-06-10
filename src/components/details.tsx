import { useEffect } from "react";
import { DETAILS_CONTENT } from "../constants/details";
import { prepareDataWithTMP } from "./helpers/prepareData";
import {
  TMP_EDUCATION,
  TMP_EXPERIENCES,
  TMP_LANGS,
  TMP_PERSONAL_INFO,
  TMP_REF,
  TMP_SEMINAR,
  TMP_WORK,
} from "../constants/tmp";
import { Educations } from "./education";

interface DetailsProps {}

export function Details({ data }: any) {
  console.log({ data });
  const {
    user,
    cv_languages,
    cv_job_experiences,
    cv_exams,
    cv_educations,
    cv_certificates,
    cv,
    cv_job_preferences,
    cv_live_info,
    cv_references,
    cv_seminars,
  } = data;
  useEffect(() => {
    console.log(prepareDataWithTMP(cv_educations[0], TMP_EDUCATION));
    console.log(prepareDataWithTMP(cv_job_experiences[0], TMP_EXPERIENCES));
  }, [data]);

  return (
    <div className="w-full box-shadow pb-36 my-5 sm:px-7 sm:bg-white  sm:my-0 sm:rounded-r-lg">
      <div className="sm:flex justify-center sm:justify-end py-3 opacity-15 hidden">
        <img
          className="cv-logo w-32"
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>

      <div className="border-b p-3 mb-3 sm:mb-0 bg-white rounded-lg sm:rounded-none sm:p-0 sm:bg-transparent">
        <h2 className="color-b text-4xl hidden sm:block font-semibold">
          {user.name} {user.surname}
          <span className="text-xl text-black px-3">(60)</span>
        </h2>
        <div className="text-xs sm:hidden font-semibold">
          Kişisel Ve Mesleki Bilgiler
        </div>
        <div className="hidden sm:block">{cv.title}</div>
        <div className="mt-2 mb-4 text-xs sm:text-sm">fff</div>
      </div>

      {/* <Educations data={cv_educations} /> */}

      {DETAILS_CONTENT.map((item, key) => {
        const isRate = item.meta?.isRate;
        const order = item.meta?.order || false;
        return (
          <div
            className={`border-b-0 sm:border-b p-3 sm:p-0 sm:pb-7 mb-3 bg-white rounded-lg sm:rounded-none sm:bg-transparent  ${
              item?.meta?.borderBlack ? "sm:border-black" : ""
            } ${order ? order : ""} sm:order-none`}
            key={key}
          >
            <div className="text-xs sm:text-2xl color-b mt-5 font-semibold">
              {item.title}
            </div>
            <div className="text-xs mt-3 color-b sm:text-lg sm:font-semibold">
              {item.subtitle}
            </div>
            <div className="text-xs mt-3 sm:text-sm">{item.content}</div>

            {item?.data.map((i, k) => (
              <div key={k}>
                {isRate ? (
                  <div
                    className={`flex flex-col sm:flex-row item-center mt-1 py-3 sm:font-semibold ${
                      k === item?.data.length - 1
                        ? "sm:border-b border-dashed"
                        : "border-b border-dashed"
                    }`}
                  >
                    <div className="color-b sm:w-32 sm:font-semibold">
                      {i.title}:
                    </div>
                    <div className="mx-2"></div>
                    <div className="flex items-center w-32">
                      <svg
                        className="w-4 h-4 sm:w-6 sm:h-6  text-blue-900 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 sm:w-6 sm:h-6  text-blue-900 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 sm:w-6 sm:h-6  text-blue-900 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>

                      <svg
                        className="w-4 h-4 sm:w-6 sm:h-6  ms-1 text-gray-300 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`flex flex-col sm:flex-row mt-1 py-3 sm:font-semibold ${
                      k === item?.data.length - 1
                        ? "sm:border-b border-dashed"
                        : "border-b border-dashed"
                    }`}
                  >
                    <div className="sm:w-1/3 color-b">
                      {i.title}
                      <span className="sm:hidden">:</span>
                    </div>
                    <div className="hidden sm:block mx-2">:</div>
                    <div className="text-xs font-normal mt-2 sm:mt-0  sm:text-sm  sm:mx-2">
                      {i.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
