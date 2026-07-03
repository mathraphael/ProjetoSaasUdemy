"use client"

import {useState} from "react";
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
import { LogIn, Menu } from "lucide-react";

export function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const session = true; // Replace with actual session logic

    const navItems = [
        {href: "#profissionais", label: "Profissionais"}
    ]

    const NavLinks = () => (
        <>
            {navItems.map((item) => (
                <Button
                onClick={() => setIsOpen(false)} 
                key={item.href}
                 className="text-black hover:bg-transparent shadow-none"
                 variant="ghost" size="sm"
                 >
                    <Link href={item.href}>
                    {item.label}
                    </Link>

                </Button>
            ))}

            {session ? (
                <Link href="/dashboard"
                className="flex items-center justify-center gap-2"
                >
                    Acessar Clínica
                </Link>
            ) : (
                <Button>
                    <LogIn/>
                    Portal da Clínica
                </Button>
            )}

        </>
    )

    return (
        <header
        className="fixed top-0 right-0 left-0 z-[999] bg-white shadow-md z-50 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/"
                className = "text-3xl font-bold text-zinc-900"
                >
                Odonto<span className="text-emerald-500">Pro</span>
                </Link>

                <nav className="hidden md:flex items-center space-x-4">
                    <NavLinks/>
                </nav>

                <Sheet open = {isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger className="md:hidden">
                        <Button
                        className="text-black hover:bg-transparent"
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

                                        <nav className="flex flex-col space-y-4 mt-6">
                                            <NavLinks/>
                                        </nav>
                                
                                
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}