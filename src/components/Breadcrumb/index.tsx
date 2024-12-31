import React from "react";
import "./breadcrumb.scss";
import Link from "next/link";
interface Link {
  label: string;
  url: string;
}

interface BreadcrumbProps {
  links: Link[];
  activeLink: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ links, activeLink }) => {
  return (
    <nav className="breadcrumb">
      {links.map((link) => (
        <span
          key={link.url}
          className={link.url === activeLink ? "activeLink" : ""}
        >
          <Link href={link.url}>{link.label}</Link>
          {link.url !== activeLink && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              ></path>
            </svg>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
