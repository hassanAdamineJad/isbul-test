import { CARD_INFO } from "../constants/cardInfo";
import { CardInfo } from "./card";

export function SideBar() {
  return (
    <div className="flex flex-col h-full rounded-l-lg bg-sidebar box-shadow sm:text-white">
      <div className="flex -space-x-1 overflow-hidden justify-center mt-3">
        <img
          className="inline-block h-36 w-36 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>

      <h2 className="color-b text-2xl  text-center py-3 sm:hidden ">
        Habip AĞ
        <span className="text-xl text-black px-3">(60)</span>
      </h2>
      <div className=" bg-white sm:bg-transparent rounded-lg sm:rounded-none">
        <h4 className=" p-3 mb-1 sm:hidden">İletişim</h4>

        {CARD_INFO.map((i, key) => {
          return (
            <div
              className={`mx-4 py-4 sm:border-none ${
                key === CARD_INFO.length - 1 ? "" : "border-b"
              }`}
              key={key}
            >
              <CardInfo
                key={key}
                title={i.title}
                content={i.content}
                icon={i.icon}
                isTruncate={key === CARD_INFO.length - 1}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
