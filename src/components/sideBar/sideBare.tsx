import { ICv } from "../../types/cv";
import { ICvLiveInfo } from "../../types/liveInfo";
import { IUser } from "../../types/users";
import { CardInfo } from "../card";

interface SideBarProps {
  user: IUser;
  cv: ICv;
  liveInfo: ICvLiveInfo;
}

export function SideBar({ user, cv, liveInfo }: SideBarProps) {
  const { name, surname, email, profile, phone, phone_code } = user;
  const { website } = cv;
  const { address, city, country } = liveInfo;

  return (
    <div className="flex flex-col h-full rounded-l-lg bg-sidebar box-shadow sm:text-white">
      <div className="flex -space-x-1 overflow-hidden justify-center mt-3">
        <img
          className="inline-block h-36 w-36 rounded-full ring-2 ring-white"
          src={
            profile
              ? profile
              : "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          }
          alt=""
        />
      </div>

      <h2 className="color-b text-2xl  text-center font-semibold py-3 sm:hidden ">
        {name} {surname}
        <span className="text-xl text-black px-3 ">(60)</span>
      </h2>
      <div className=" bg-white sm:bg-transparent rounded-lg sm:rounded-none">
        <h4 className="text-xs p-3 mb-1 font-semibold sm:hidden">İletişim</h4>
        {/* Address */}
        <div className={`mx-4 py-4 sm:border-none border-b `}>
          <CardInfo
            title="Adres"
            content={`${address} / ${city?.name} / ${country?.name_tr}`}
            icon={"i.icon"}
            isTruncate={false}
          />
        </div>
        {/* Telefon */}
        {phone && (
          <div className={`mx-4 py-4 sm:border-none border-b`}>
            <CardInfo
              title="Telefon"
              content={`${phone_code} ${phone}`}
              icon={"i.icon"}
              isTruncate={false}
            />
          </div>
        )}

        {/* email */}
        {email && (
          <div className={`mx-4 py-4 sm:border-none border-b `}>
            <CardInfo
              title="email"
              content={`${email}`}
              icon={"i.icon"}
              isTruncate={false}
            />
          </div>
        )}

        {/* Website */}
        {website && (
          <div className={`mx-4 py-4 sm:border-none `}>
            <CardInfo
              title="Website"
              content={`${website}`}
              icon={"i.icon"}
              isTruncate={false}
            />
          </div>
        )}
      </div>
    </div>
  );
}
