import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"
import { auth } from "@/lib/auth"
import UserAvatar from "../user/user-avatar"
import { ModeToggle } from "./mode-toggle"

export default async function Navbar() {
    const session = await auth()
    return (
        <header className="sticky top-0 z-50 w-full bg-background ">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <MountainIcon className="h-6 w-6" />
                    <span className="sr-only">Your Name</span>
                </Link>
                <div className=" flex flex-wrap gap-3 md:gap-6">
                    <nav className="hidden items-center gap-6 md:flex">
                        <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                            Home
                        </Link>
                        <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                            About
                        </Link>
                        <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                            Services
                        </Link>
                        <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                            Contact
                        </Link>

                    </nav>
                    <ModeToggle />
                    <UserAvatar />
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <MenuIcon className="h-6 w-6" />
                                <span className="sr-only">Toggle navigation</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
                            <div className="flex flex-col gap-6">
                                <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
                                    <MountainIcon className="h-6 w-6" />
                                    <span className="sr-only">Your Name</span>
                                </Link>
                                <nav className="flex flex-col gap-4">
                                    <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                                        Home
                                    </Link>
                                    <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                                        About
                                    </Link>
                                    <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                                        Services
                                    </Link>
                                    <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
                                        Contact
                                    </Link>

                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}




function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}


