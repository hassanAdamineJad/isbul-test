import { useEffect, useState } from "react";
import { prepareDataWithTMP } from "./helpers/prepareData";
import { TMP_EDUCATION } from "../constants/tmp";

export function Educations({ data = [] }: any) {
  const [rows, setRows] = useState([]);

  console.log({ data });
  useEffect(() => {
    const r = data?.map((d: any) => {
      return prepareDataWithTMP(d, TMP_EDUCATION);
    });
    setRows(r);
  }, []);

  console.log({ rows });

  return (
    <div
      className={`border-b-0 sm:border-b p-3 sm:p-0 sm:pb-7 mb-3 bg-white rounded-lg sm:rounded-none sm:bg-transparent  `}
    >
      <div className="text-xs sm:text-2xl color-b mt-5 font-semibold">
        Eğitim Bilgileri
      </div>
      <div className="text-xs mt-3 color-b sm:text-lg sm:font-semibold"></div>
      <div className="text-xs mt-3 sm:text-sm"></div>

      {rows?.map((i: any, k: any) => (
        <div key={k}>
          <div
            className={`flex flex-col sm:flex-row mt-1 py-3 sm:font-semibold border-b border-dashed `}
          >
            <div className="sm:w-1/3 color-b">
              {i.title_tr}
              <span className="sm:hidden">:</span>
            </div>
            <div className="hidden sm:block mx-2">:</div>
            <div className="text-xs font-normal mt-2 sm:mt-0  sm:text-sm  sm:mx-2">
              {typeof i.value === "object" && i.value !== null
                ? i.value.name || i.value.title || i.value.value
                : i.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
