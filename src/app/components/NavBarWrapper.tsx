// component responsible for showing/hiding the navbar

"use client";

import { usePathname } from "next/navigation";
import Navbar from './NavBar';

const ROUTES = ['/feed', '/new-shrug']; // navbar shown

export default function NavBarWrapper()
{
    const pathname = usePathname();
    return !ROUTES.includes(pathname) ? null : <Navbar />;
}