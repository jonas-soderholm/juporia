type CourseCardProps = {
  title: string;
  description: string;
  image: string;
  value: number;
};

export default function CourseCard({
  title,
  description,
  image,
  value,
}: CourseCardProps) {
  return (
    <>
      <div className="card image-full w-[40rem] shadow-xl h-48 ">
        <figure className="w-full h-full">
          <img
            src={image}
            alt="Course image"
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
          />
        </figure>
        <div className="card-body w-full h-full flex">
          <div className="">
            <h1 className="card-title text-2xl text-white">{title}</h1>
            <p className="text-white">{description}</p>
          </div>

          <div className="card-actions absolute bottom-0 mb-4">
            <button className="btn btn-primary ">Start</button>
          </div>

          <div
            className="radial-progress absolute text-[13px] bg-secondary top-0 right-0 m-2"
            style={
              {
                "--value": 70,
                "--size": "3rem",
                "--thickness": "4px",
              } as React.CSSProperties
            }
            role="progressbar"
          >
            70%
          </div>
        </div>
      </div>
    </>
  );
}
