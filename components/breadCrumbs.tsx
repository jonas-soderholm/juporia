"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadCrumbs = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path);

  // Skip rendering breadcrumbs if on the home page
  if (pathname === "/") {
    return null;
  }

  const breadcrumbArray = paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join("/")}`;
    return {
      label: path.replace("-", " ").replace(/^\w/, (c) => c.toUpperCase()), // Capitalize first letter only
      href: href,
    };
  });

  return (
    <div className="breadcrumbs text-[9px] md:text-xs mx-2 flex items-center stop-0 z-10 bg-background">
      <ul className="flex space-x-2">
        <li>
          <Link href="/" className="dark:text-gray-300 hover:underline">
            Home
          </Link>
        </li>
        {breadcrumbArray.map((crumb, index) => (
          <li key={index} className="flex items-center space-x-2">
            {index > 0 && <span className="text-gray-400"></span>}
            <Link
              href={crumb.href}
              className="dark:text-gray-300 hover:underline"
            >
              {crumb.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreadCrumbs;
