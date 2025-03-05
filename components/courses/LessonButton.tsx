// import Link from "next/link";

// type Lesson = {
//   lessonName: string;
//   link: string;
//   disabled?: boolean;
//   done?: boolean;
//   onClick?: () => void; // Add an optional onClick prop
// };

// export function LessonButton({
//   lessonName,
//   link,
//   disabled,
//   done,
//   onClick,
// }: Lesson) {
//   return (
//     <div className=" w-full">
//       {disabled ? (
//         <button
//           className={`btn-custom-primary-lesson !bg-gray-800 !text-gray-600 cursor-not-allowed`}
//           style={{ pointerEvents: "none" }}
//           disabled
//         >
//           {lessonName}
//         </button>
//       ) : (
//         <Link href={link}>
//           <button
//             className={`btn-custom-primary-lesson hover:border-transparent  ${
//               done ? "!bg-gray-500  !text-gray-400" : ""
//             }`}
//             onClick={onClick} // Attach the click handler
//           >
//             {lessonName}
//           </button>
//         </Link>
//       )}
//     </div>
//   );
// }

import Link from "next/link";

type Lesson = {
  lessonName: string;
  link: string;
  disabled?: boolean;
  done?: boolean;
  onClick?: () => void;
};

export function LessonButton({
  lessonName,
  link,
  disabled,
  done,
  onClick,
}: Lesson) {
  return (
    <div className="relative w-full flex flex-col items-center shadow-lg shadow-[#333333]">
      {/* Green square for finished lessons */}
      {done && (
        <div className="absolute -top-[0.8rem] px-2 h-4 text-green-600 border-green-600 border-2  md:text-[10px] text-[8px] font-bold flex items-center justify-center rounded">
          Completed
        </div>
      )}

      {disabled ? (
        <button
          className="btn-custom-primary-lesson !bg-gray-800 !text-gray-600 cursor-not-allowed !rounded-sm "
          style={{ pointerEvents: "none" }}
          disabled
        >
          {lessonName}
        </button>
      ) : (
        <Link href={link}>
          <button
            className={`btn-custom-primary-lesson hover:border-transparent !rounded-sm ${
              done ? "!bg-gray-500 !text-gray-400" : ""
            }`}
            onClick={onClick}
          >
            {lessonName}
          </button>
        </Link>
      )}
    </div>
  );
}
