import { useEffect, useState } from "react";
import { prepareDataWithTMP } from "../helpers/prepareData";
import { ICvLanguages } from "../../types/languages";
import { ITmp } from "../../types/ITmp";

interface IGenerateRatingRowsProps {
  data: any[];
  tmp: any[];
  title: string;
  subtitle?: string;
  content?: string;
}

export function GenerateRatingRows({
  data,
  tmp,
  title = "",
  subtitle,
  content,
}: IGenerateRatingRowsProps) {
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
      <div className="text-xs mt-3 sm:text-sm">{content}</div>

      {rows?.map((i: any, k: number) => {
        return (
          <div
            key={k}
            className={`${
              k === rows.length - 1 ? "" : "border-b pb-4 sm:border-black"
            }`}
          >
            {i?.map((item: any, index: number) => {
              const rate = new Array(4).fill(1);
              return (
                <div
                  key={index}
                  className={`flex flex-col sm:flex-row item-center mt-1 py-3 sm:font-semibold 
                   ${
                     k === 1
                       ? "sm:border-b border-dashed"
                       : "border-b border-dashed"
                   }
                     `}
                >
                  <div className="color-b sm:w-32 sm:font-semibold">
                    {item.title_tr}:
                  </div>
                  <div className="mx-2"></div>
                  <div className="flex items-center w-32">
                    {rate.map((value: any, index: number) => {
                      return (
                        <svg
                          className={`w-4 h-4 sm:w-6 sm:h-6 ms-1 ${
                            index <= parseInt(item.value || 1)
                              ? "text-blue-900"
                              : "text-gray-300 dark:text-gray-500"
                          }`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                          key={index}
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
