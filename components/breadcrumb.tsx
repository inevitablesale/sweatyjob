import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="bg-gray-100 py-3 px-4 text-sm" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 container mx-auto">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />}
            {index === items.length - 1 ? (
              <span className="font-medium text-gray-800">{item.label}</span>
            ) : (
              <Link href={item.href} className="text-gray-600 hover:text-gray-900">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
