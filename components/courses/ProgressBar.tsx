type ProgressBarProps = {
  progressValue: number; // Precomputed progress value
};

export default function ProgressBar({ progressValue }: ProgressBarProps) {
  return (
    <div
      className="radial-progress absolute text-[12px] sm:text-[12px] bg-secondary top-2 right-2"
      style={
        {
          "--value": progressValue,
          "--size": "2rem",
          "--thickness": "4px",
        } as React.CSSProperties
      }
      role="progressbar"
    >
      {Math.round(progressValue)}%
    </div>
  );
}
