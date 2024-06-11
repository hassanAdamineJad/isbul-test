import { useEffect, useState } from "react";
import { prepareDataWithTMP } from "../helpers/prepareData";
import { ITmp } from "../../types/ITmp";
import moment from "moment";

interface IGenerateRowsProps {
  data: any[];
  tmp: ITmp[];
  title: string;
  subtitle?: string;
  content?: string;
}

export function GenerateRows({
  data = [],
  tmp,
  title = "",
  subtitle = "",
  content = "",
}: IGenerateRowsProps) {
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    const prepareData = data?.map((d: any) => {
      return prepareDataWithTMP(d, tmp);
    });
    setRows(prepareData);
  }, [data]);

  return (
    <div
      className={`border-b-0 sm:border-b p-3 sm:p-0 sm:pb-7 mb-3 bg-white rounded-lg sm:rounded-none sm:bg-transparent  `}
    >
      <div className="text-xs sm:text-2xl color-b mt-5 font-semibold">
        {title}
      </div>
      <div className="text-xs mt-3 color-b sm:text-lg sm:font-semibold">
        {subtitle}
      </div>
      <div className="text-xs mt-3 sm:text-sm"></div>

      {rows?.map((i: any, k: any) => {
        return (
          <div
            className={`${
              k === rows.length - 1 ? "" : "border-b pb-4 sm:border-black"
            }`}
          >
            {i?.map((item: any, index: number) => (
              <div key={index}>
                <div
                  className={`flex flex-col sm:flex-row mt-1 py-3 sm:font-semibold border-b border-dashed ${
                    index === i.length - 1 ? "" : ""
                  }`}
                >
                  <div className="sm:w-1/3 color-b">
                    {item.title_tr}
                    <span className="sm:hidden">:</span>
                  </div>
                  <div className="hidden sm:block mx-2">:</div>
                  <div className="text-xs font-normal mt-2 sm:mt-0  sm:text-sm  sm:mx-2">
                    {item.key === "start_date" || item.key === "end_date"
                      ? `${
                          JSON.parse(item.value)?.month > 9
                            ? JSON.parse(item.value)?.month
                            : `0${JSON.parse(item.value)?.month}`
                        } ${JSON.parse(item.value)?.year} `
                      : item.format
                      ? moment(item.value)
                          .locale("tr")
                          .format(item.format)
                          .toString()
                      : typeof item.value === "object" && item.value !== null
                      ? item.value.name || item.value.title || item.value.value
                      : item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
