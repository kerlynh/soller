import { List } from "@/app/components/List";
import { footer } from "@/app/utils/footer";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full lg:h-[95px] h-auto lg:px-[80px] px-4 lg:py-0 py-6 flex lg:flex-row flex-col items-center justify-between lg:space-x-6 lg:space-y-0 space-y-6 space-x-0">
      <div className="w-auto h-auto flex lg:flex-row flex-col items-center lg:space-x-6 lg:space-y-0 space-y-6 space-x-0">
        <Image src="/images/logo.webp" width={127} height={32} alt="logo" />
        <p className="text-[16px] leading-[22.4px] font-normal">
          @ 2023 Soller, Inc. All rights reserved.
        </p>
      </div>

      <ul className="flex items-center space-x-6 lg:py-0 py-3">
        {footer.map((item, idx) => (
          <List
            key={idx}
            className="text-[16px] leading-[22.4px] font-normal"
            link={item.link}
            label={item.name}
          />
        ))}
      </ul>
    </footer>
  );
}
