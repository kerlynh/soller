import { Avatar } from "../Avatar";

interface CardProps {
  user: {
    comment: string;
    img: string;
    name: string;
    text: string;
  };
  activeCard: boolean;
}

export function Card({ user, activeCard }: CardProps) {
  return (
    <div
      className={`lg:w-[364px] lg:min-w-0 min-w-full ${
        activeCard ? "lg:h-[490px] lg:py-6 h-[442px] py-0" : "h-[442px]"
      } px-7 rounded-[10px] bg-white`}
    >
      <div className="w-full h-full pb-7 space-y-4 flex flex-col justify-end">
        <p className="text-[18px] leading-[28.8px] font-normal line-clamp-[8]">
          {user.comment}
        </p>
        <Avatar img={user.img} name={user.name} text={user.text} />
      </div>
    </div>
  );
}
