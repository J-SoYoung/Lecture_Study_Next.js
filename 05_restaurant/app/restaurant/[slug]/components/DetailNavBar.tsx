import Link from "next/link";

export default function DetailNavBar(){
  return (
    <nav className="flex text-reg border-b pb-2">
      <Link href="/restaurant/milestones-Grill" className="mr-7">
        Overview
      </Link>
      <Link href="/restaurant/milestones-Grill/menu" className="mr-7">
        Menu
      </Link>
    </nav>
  )
}