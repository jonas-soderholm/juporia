type ProgressBarProps = {
  amountOfLessons: number;
};

export default function ProgressBar({ amountOfLessons }: ProgressBarProps) {
  return (
    <>
      <div className="mx-auto  max-w-auto md:max-w-[42rem] my-4 ">
        <input
          type="range"
          min={0}
          max={100}
          value="25"
          className="progress h-2 cursor-default range-accent"
          step={100 / amountOfLessons}
          style={{ height: "16px", WebkitAppearance: "none" }}
          disabled
        />
        <div className="flex w-full justify-between px-2 text-xs ">
          {Array.from({ length: amountOfLessons }, (_, index) => (
            <span key={index}></span>
          ))}
        </div>
      </div>
    </>
  );
}
