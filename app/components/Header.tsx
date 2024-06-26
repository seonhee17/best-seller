import Link from "next/link";

export default function Header() {
  return (
    <header className="">
      <nav className="mx-auto flex items-center justify-between p-6 mg-1 bg-neutral-50" aria-label="Global">
        <div className="flex lg:flex-2">
          <Link href="/" className="-m-1.5 p-1.5">
            <div className="h-8 w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="rgba(100,205,138,1)">
                <path d="M13 21V23H11V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H9C10.1947 3 11.2671 3.52375 12 4.35418C12.7329 3.52375 13.8053 3 15 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H13ZM20 19V5H15C13.8954 5 13 5.89543 13 7V19H20ZM11 19V7C11 5.89543 10.1046 5 9 5H4V19H11Z"></path>
            </svg>
            </div>
          </Link>
          <span className="inline-block ml-3">New Your Best Seller Store</span> 
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
            About
          </Link>
        </div>
      </nav>
    </header>
  )
}