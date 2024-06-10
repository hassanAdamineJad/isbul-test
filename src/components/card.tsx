import { CiLocationOn } from "react-icons/ci";

export interface CardInfoProps {
  title: string;
  content: string;
  icon: any; //TODO
  isTruncate?: boolean;
}

export function CardInfo({
  title,
  icon,
  content,
  isTruncate = false,
}: CardInfoProps) {
  //   const IconComponent = Icons[icon]; // ToDo
  return (
    <div className="flex flex-col text-sm">
      <div className="sm:font-medium flex">
        <span className="">
          <CiLocationOn size={16} />
        </span>
        <span className="sm:font-semibold px-1">{title}</span>
      </div>
      <div className={`text-xs sm:text-sm ${isTruncate ? "truncate" : ""}`}>
        {content}
      </div>
    </div>
  );
}
