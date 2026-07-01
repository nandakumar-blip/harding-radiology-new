// Navbar — fixed top navigation bar that switches between a transparent style on the homepage
// and a solid dark style on sub-pages or when the user has scrolled. Includes dropdown menus
// for grouped service categories and a collapsible hamburger menu for mobile viewports.

import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

// NavItem shapes every navigation entry. `to` is optional because future items
// could be external hrefs or anchors handled differently from React Router links.
type NavItem = { label: string; to?: string };

// Services dropdown entries — each maps a display label to its internal route.
// Adding a new service only requires inserting an entry here; no JSX changes needed.
const servicesItems: NavItem[] = [
    { label: "X-RAY", to: "/services/xray"},
    { label: "ULTRASOUND",to :"/services/ultrasound"},
    { label: "OPEN MRI",to:"/services/open-mri" },
    { label: "3D MAMMOGRAM",to:"/services/3d-mammogram" },
    { label: "DEXA SCAN",to:"/services/dexa-scan" },
    { label: "CT SCANS", to: "/services/ct-scans" },
    { label: "3D BREAST ULTRASOUND", to: "/services/3d-breast-ultrasound" }


];

// Preventive screening entries — kept separate from servicesItems so the two
// dropdown groups can be labelled, styled, and updated independently.
const preventiveItems: NavItem[] = [
    { label: "LUNG CANCER SCREENING", to: "/preventive/lung-cancer-screening" },
    { label: "CARDIAC SCORING", to: "/preventive/cardiac-scoring" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();
    // Sub-pages always use the dark theme regardless of scroll position,
    // so the nav is readable against varied page backgrounds.
    const isSubPage = pathname !== '/';
    // Tracks which desktop dropdown is open by key name; null means all closed.
    // Using a single string rather than separate booleans ensures only one
    // dropdown can ever be open at a time without extra coordination logic.
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    // Mirrors openDropdown for the mobile accordion — kept separate because
    // mobile and desktop menus have independent open/close lifecycles.
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
    // navRef lets the click-outside handler check whether a click landed inside
    // the nav element, without coupling the handler to individual child nodes.
    const navRef = useRef<HTMLDivElement>(null);
    // isDark drives the visual mode switch: dark background + white text vs.
    // transparent background + dark text on the homepage hero.
    const isDark = isSubPage || isScrolled;

    // Underline hover effect built entirely with Tailwind's `after:` pseudo-element.
    // Width starts at 0 and expands to full on hover, creating an animated slide-in
    // underline. The underline colour flips with isDark so it stays visible against
    // both the transparent and solid backgrounds.
    const linkCls = `mx-3 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 ${isDark ? 'after:bg-white' : 'after:bg-[#1a4d7a]'
        } after:transition-all after:duration-300 hover:after:w-full`;

    // passive: true tells the browser this listener will never call preventDefault,
    // allowing it to optimise scroll performance (no need to wait on the JS thread).
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY >= 0);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Closes any open desktop dropdown when the user clicks outside the entire nav.
    // Using `mousedown` (not `click`) catches the event before a focused element
    // loses focus, preventing a race where the dropdown closes and then reopens.
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Shared class string for individual dropdown list items — defined once here
    // so both the services and preventive menus render identically.
    const itemCls = "block px-5 py-2.5 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white transition-colors duration-150";

    // Inline component so it can close over `itemCls` without prop drilling.
    // z-50 keeps the panel above the hero section (z-10) and the MRI section (z-30).
    const DropdownMenu = ({ items }: { items: NavItem[] }) => (
        <div className="absolute top-full left-0 mt-2 w-56 rounded-lg shadow-xl overflow-hidden z-50"
            style={{ background: '#1a4d7a' }}>
            {items.map(({ label, to }) => (
                // Use React Router's Link for internal routes to avoid full-page reloads;
                // fall back to a plain anchor for items without a `to` (e.g. future external links).
                to
                    ? <Link key={label} to={to} className={itemCls}>{label}</Link>
                    : <a key={label} href="#" className={itemCls}>{label}</a>
            ))}
        </div>
    );

    // Inline SVG chevron rotates 180° when its dropdown is open, giving a clear
    // open/close affordance without importing an icon library.
    const chevron = (open: boolean) => (
        <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor"
            className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
            <path d="M0 0L5 6L10 0H0Z" />
        </svg>
    );

    return (
        // z-50 places the navbar above all page content. The nav itself is the
        // click-outside boundary, so navRef is attached here at the root element.
        <nav
            ref={navRef}
            className={`flex items-center justify-between w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60 py-2 fixed z-50 transition-colors duration-500 ${isDark ? "bg-[#1a2b5e]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
                }`}
        >
            <div>
               {/* brightness-0 invert converts the coloured logo to pure white when
                   on a dark background; the drop-shadow adds a subtle glow for legibility
                   on the semi-transparent overlay. */}
               <a href="/"><img
                    src={logo}
                    alt="Prenuvo logo"
                    className={`transition-all duration-500 ${isDark ? 'brightness-0 invert drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]' : 'brightness-110'}`}
                /></a>
            </div>

            {/* Desktop nav — hidden below md breakpoint, shown as a flex row above it */}
            <div className={`hidden md:flex items-center font-semibold transition-colors duration-500 ${isDark ? 'text-white' : 'text-[#1a2b5e]'}`}>
                <a className={linkCls} href="/about">About</a>

                {/* relative on the wrapper lets the absolutely-positioned DropdownMenu
                    anchor itself to the button rather than the viewport edge. */}
                <div className="relative">
                    <button type="button" className={`${linkCls} flex items-center gap-1`}
                        onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}>
                        Services {chevron(openDropdown === 'services')}
                    </button>
                    {openDropdown === 'services' && <DropdownMenu items={servicesItems} />}
                </div>

                <div className="relative">
                    <button type="button" className={`${linkCls} flex items-center gap-1`}
                        onClick={() => setOpenDropdown(openDropdown === 'preventive' ? null : 'preventive')}>
                        Preventive Screening Tests {chevron(openDropdown === 'preventive')}
                    </button>
                    {openDropdown === 'preventive' && <DropdownMenu items={preventiveItems} />}
                </div>

                <a className={linkCls} href="/wholebody">Whole Body MRI</a>
                <a className={linkCls} href="/appointment">Appointment</a>
                <a className={linkCls} href="/make-payment">Make Payment</a>
                <a className={linkCls} href="/contact-us">Contact Us</a>
                <button type="button" className="mx-3 px-5 py-2 text-white font-semibold rounded-full border-0 bg-[#00c2c7] hover:opacity-90 transition-opacity">
                    Book scan
                </button>
            </div>

            {/* Hamburger button — three spans animate into an × when the menu is open.
                The transform classes (rotate-45, -translate-y-2, opacity-0) are applied
                per-span via an index-mapped array so the top bar rotates clockwise,
                the middle bar fades out, and the bottom bar rotates counter-clockwise. */}
            <button className="md:hidden flex flex-col justify-center gap-1.5 p-2"
                onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                {[
                    menuOpen ? "rotate-45 translate-y-2" : "",
                    menuOpen ? "opacity-0" : "",
                    menuOpen ? "-rotate-45 -translate-y-2" : "",
                ].map((extra, i) => (
                    <span key={i} className={`block w-6 h-0.5 transition-all duration-300 ${isDark ? 'bg-white' : 'bg-[#1a2b5e]'} ${extra}`} />
                ))}
            </button>

            {/* Mobile menu — absolutely positioned directly below the nav bar (top-full)
                so it slides in without reflowing the page layout. backdrop-blur-md keeps
                it legible over the hero image without a fully opaque background. */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-[#1a4d7a]/97 flex flex-col px-6 py-4 text-white font-bold md:hidden backdrop-blur-md">
                    <a className="py-3 border-b border-white/10 cursor-pointer" href="/about">About</a>

                    {/* Mobile accordion for Services — mobileExpanded tracks the open
                        section independently from the desktop openDropdown state. */}
                    <div className="border-b border-white/10">
                        <button type="button" className="w-full flex items-center justify-between py-3 cursor-pointer"
                            onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}>
                            Services {chevron(mobileExpanded === 'services')}
                        </button>
                        {mobileExpanded === 'services' && (
                            <div className="pb-2 pl-4 flex flex-col gap-2">
                                {servicesItems.map(({ label, to }) => (
                                    to
                                        ? <Link key={label} to={to} className="text-sm text-white/75 py-1 hover:text-white">{label}</Link>
                                        : <a key={label} href="#" className="text-sm text-white/75 py-1 hover:text-white">{label}</a>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="border-b border-white/10">
                        <button type="button" className="w-full flex items-center justify-between py-3 cursor-pointer"
                            onClick={() => setMobileExpanded(mobileExpanded === 'preventive' ? null : 'preventive')}>
                            Preventive Tests {chevron(mobileExpanded === 'preventive')}
                        </button>
                        {mobileExpanded === 'preventive' && (
                            <div className="pb-2 pl-4 flex flex-col gap-2">
                                {preventiveItems.map(({ label, to }) => (
                                    to
                                        ? <Link key={label} to={to} className="text-sm text-white/75 py-1 hover:text-white">{label}</Link>
                                        : <a key={label} href="#" className="text-sm text-white/75 py-1 hover:text-white">{label}</a>
                                ))}
                            </div>
                        )}
                    </div>

                    <a className="py-3 border-b border-white/10 cursor-pointer" href="/wholebody">Whole Body MRI</a>
                    <a className="py-3 border-b border-white/10 cursor-pointer"  href="/appointment">Appointment</a>
                    <a className="py-3 border-b border-white/10 cursor-pointer" href="/payment">Make Payment</a>
                    <a className="py-3 border-b border-white/10 cursor-pointer" href="/contact">Contact Us</a>
                    <button type="button" className="mt-4 px-6 py-3 text-white font-semibold rounded-full border-0 bg-[#00c2c7] self-start">
                        Book scan
                    </button>
                </div>
            )}
        </nav>
    );
};
export default Navbar