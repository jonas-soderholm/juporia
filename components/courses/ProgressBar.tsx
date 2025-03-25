interface ProgressBarProps {
  progressValue: number;
}

export default function ProgressBar({ progressValue }: ProgressBarProps) {
  const radius = 40; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Full circle circumference
  const progressOffset = circumference - (progressValue / 100) * circumference; // Correct offset calculation

  return (
    <div className="relative w-[50px] h-[50px] flex items-center justify-center">
      {/* Background Circle */}
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle
          className="text-gray-400"
          strokeWidth="6"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
        />
        {/* Progress Circle */}
        <circle
          className="text-blue-600 transition-all duration-300"
          strokeWidth="6"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
        />
      </svg>
      {/* Center text */}
      <span className="absolute text-[12px] font-bold ">
        {Math.round(progressValue)}%
      </span>
    </div>
  );
}
