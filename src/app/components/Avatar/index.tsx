import Image from "next/image";

interface AvatarProps {
  img: string;
  name: string;
  text: string;
}

export function Avatar({ img, name, text }: AvatarProps) {
  return (
    <div className="flex space-x-4">
      <div className="min-w-[64px] min-h-[64px] rounded-full overflow-hidden relative flex items-center justify-center box-content">
        <Image
          src={img}
          alt="avatar"
          fill
          sizes="100vh"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-full flex flex-col justify-center">
        <p className="text-[18px] leading-[28.8px] font-normal">{name}</p>
        <p className="text-[16px] leading-[22.4px] font-normal text-midnightHaze">
          {text}
        </p>
      </div>
    </div>
  );
}
