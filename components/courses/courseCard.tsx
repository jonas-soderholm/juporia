import Link from "next/link";

type CourseCardProps = {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  value: number;
  linkUrl: string;
};

export default function CourseCard({
  title,
  description,
  image,
  value,
  buttonText,
  linkUrl,
}: CourseCardProps) {
  return (
    <div className="relative w-full sm:w-[16rem] md:w-[24rem] lg:w-[32rem] overflow-hidden rounded-lg">
      {/* Image */}
      <img
        src={image}
        alt="Course image"
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-[#232424] bg-opacity-65"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-3">
        <div>
          <h1 className="text-base sm:text-lg md:text-xl text-white">
            {title}
          </h1>
          <p className="text-white text-xs sm:text-sm mt-2">{description}</p>
        </div>

        <div className="mt-4">
          <Link href={linkUrl}>
            <button className="btn btn-accent btn-sm md:btn-md  text-xs sm:text-sm px-3 py-1">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>

      {/* Progress Indicator */}
      <div
        className="radial-progress absolute text-[8px] sm:text-[10px] bg-secondary top-2 right-2"
        style={
          {
            "--value": value,
            "--size": "2rem",
            "--thickness": "3px",
          } as React.CSSProperties
        }
        role="progressbar"
      >
        {value}%
      </div>
    </div>
  );
}
