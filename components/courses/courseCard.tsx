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
    <div className="card image-full w-full sm:w-[16rem] md:w-[24rem] lg:w-[32rem] shadow-lg h-auto max-h-48">
      <figure className="w-full h-full">
        <img
          src={image}
          alt="Course image"
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </figure>
      <div className="card-body w-full h-full flex flex-col justify-between p-3">
        <div>
          <h1 className="card-title text-base sm:text-lg md:text-xl text-white">
            {title}
          </h1>
          <p className="text-white text-xs sm:text-sm">{description}</p>
        </div>

        <div className="card-actions mt-2">
          <Link href={linkUrl}>
            <button className="btn btn-accent text-xs sm:text-sm px-3 py-1">
              {buttonText}
            </button>
          </Link>
        </div>

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
    </div>
  );
}
