interface SectionTextProps {
  caption: string;
  main: string;
  text?: string;
  isColorChanged?: boolean;
}

export function SectionText({
  caption,
  main,
  text,
  isColorChanged,
}: SectionTextProps) {
  return (
    <>
      <p
        className={`lg:text-[20px] lg:leading-[22px] font-medium mb-2 text-[16px] leading-[17.6px] ${
          isColorChanged ? "text-mustard" : "text-ochre"
        }`}
      >
        {caption}
      </p>
      <h2
        className={`lg:text-[56px] lg:leading-[61.6px] font-extrabold mb-6 text-[32px] leading-[35.2px] ${
          isColorChanged ? "text-white" : "text-darkBlueBlack"
        }`}
      >
        {main}
      </h2>
      {text && (
        <p
          className={`text-[20px] leading-[36px] font-normal ${
            isColorChanged ? "text-white" : "text-darkBlueBlack"
          }`}
        >
          {text}
        </p>
      )}
    </>
  );
}
