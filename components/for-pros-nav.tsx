import Link from "next/link"
import { cn } from "@/lib/utils"

type ForProsNavProps = {
  currentPage?: string
  className?: string
}

export function ForProsNav({ currentPage, className }: ForProsNavProps) {
  const navItems = [
    { name: "Overview", href: "/partners" },
    { name: "Lawn Care", href: "/partners/lawn-care" },
    { name: "Pest Control", href: "/partners/pest-control" },
    { name: "Irrigation", href: "/partners/irrigation" },
    { name: "Landscape Design", href: "/partners/landscape-design" },
    { name: "Tree Care", href: "/partners/tree-care" },
    { name: "Pressure Washing", href: "/partners/pressure-washing" },
  ]

  return (
    <div className={cn("bg-slate-800 p-4 rounded-lg border border-slate-700", className)}>
      <h3 className="text-lg font-semibold mb-4 text-white">Partner Programs</h3>
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "block px-3 py-2 rounded-md transition-colors",
                  currentPage === item.href
                    ? "bg-green-800 text-white font-medium"
                    : "text-gray-300 hover:bg-slate-700 hover:text-white",
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link
        href="#ready-to-transform"
        className="block mt-4 px-3 py-2 rounded-md bg-green-500 text-white font-medium hover:bg-green-600 transition-colors"
      >
        Apply
      </Link>
    </div>
  )
}
