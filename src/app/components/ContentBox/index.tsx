interface ContentBoxProps {
  title: string;
  text: string;
}

export function ContentBox({ title, text }: ContentBoxProps) {
  return (
    <div className="w-full h-full space-y-4">
      <p className="lg:text-[24px] lg:leading-[26.4px] lg:font-bold text-[20x] leading-[22px] font-medium">
        {title}
      </p>
      <p className="lg:text-[18px] lg:leading-[28.8px] lg:font-normal text-[16x] leading-[22.4px] font-normal">
        {text}
      </p>
    </div>
  );
}
