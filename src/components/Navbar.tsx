"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const currentPathname = usePathname();
  const tabData = [
    {
      title: "About",
      path: "/",
    },
    {
      title: "Qualifications",
      path: "/qualifications",
    },
    {
      title: "Skills",
      path: "/skills",
    },
    {
      title: "Experience",
      path: "/experience",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Portfolio",
      path: "/portfolio",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="p-2 bg-base-100/70 backdrop-blur-md rounded-lg sticky top-0 shadow-lg">
      <div role="tablist" className="tabs overflow-x-auto">
        {tabData.map(
          (
            tab: {
              title: string;
              path: string;
            },
            index
          ) => (
            <React.Fragment key={index}>
              <Link
                href={tab.path}
                className={`tab font-bold btn-sm btn border-none btn-ghost ${
                  currentPathname === tab.path && "bg-accent/20  text-accent"
                } `}
                aria-label={tab.title}
              >
                {tab.title}
              </Link>
            </React.Fragment>
          )
        )}
      </div>
    </div>
  );
}
