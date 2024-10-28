import { header } from "@/app/utils/header";
import { Button } from "../../../components/Button";
import { Headset } from "../../../components/Icons/Headset";
import { List } from "@/app/components/List";

export function Header() {
  return (
    <header className="w-full h-[56px] sm:h-[112px] flex items-center justify-between px-4 lg:px-[80px] py-[10px] lg:py-6 relative z-[3]">
      <div className="flex items-center space-x-[38px]">
        <h2 className="text-[32px] font-bold text-darkBlueBlack leading-[35.2px]">
          soller
        </h2>
        <nav className="lg:flex hidden">
          <ul className="flex items-center space-x-4">
            {header.map((item, idx) => (
              <List
                key={idx}
                className="text-[16px] leading-6 tarcking-[0.5px] font-medium"
                link={item.link}
                label={item.name}
              />
            ))}
          </ul>
        </nav>
      </div>
      <div className="lg:flex hidden items-center space-x-10">
        <div className="flex items-center space-x-4">
          <Headset />
          <p className="text-[16px] leading-6 tarcking-[0.5px] text-mediumPersianBlue font-medium">
            555 818 282
          </p>
        </div>
        <Button color="indigo" label="Request a Quote" hasIcon />
      </div>
    </header>
  );
}
