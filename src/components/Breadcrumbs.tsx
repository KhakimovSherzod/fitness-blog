"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();

  const locales = ["en", "ru", "uz"];

  const segments = pathname
    .split("/")
    .filter(Boolean)
    .filter((segment) => !locales.includes(segment));

  return (
    <nav aria-label="Breadcrumb" className=" py-3 px-5 rounded-lg mb-4">
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        <li>
          <Link href="/">Home</Link>
        </li>

        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");

          const label = segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());

          return (
            <li key={href}>
              {" / "}
              <Link href={href}>{label}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}