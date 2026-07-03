import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Header() {
    return (
        <header
        className="fixed top-0 right-0 left-0 z-[999] bg-white shadow-md z-50 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/"
                className = "text-3xl font-bold text-zinc-900"
                >
                Odonto<span className="text-emerald-500">Pro</span>
                </Link>

                <nav className="hidden md:flex items-center">
                    <a href="#">Profissionais</a>
                </nav>

                <Sheet>
                    <SheetTrigger className="md:hidden">
                        <Button className="text-black hover:bg-transparent"
                        variant="ghost"
                        size="icon"
                        >
                            <Menu className="h-6 w-6"/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[240px] sm:w-[300px] z-[9999]">
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                            <SheetDescription>
                                        Veja nossos Links

                                        <nav>
                                            <a href="#">Profissionais</a>
                                        </nav>
                                
                                
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}