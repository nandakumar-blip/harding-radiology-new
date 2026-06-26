import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

type NavItem = { label: string; to?: string };

const servicesItems: NavItem[] = [
    { label: "3D Mammography" },
    { label: "3D Breast Ultrasound" },
    { label: "CT Scans" },
    { label: "Open MRI" },
    { label: "Ultrasound" },
    { label: "X-Ray", to: "/services/xray" },
    { label: "DEXA Scan" },
];

const preventiveItems: NavItem[] = [
    { label: "Whole-Body MRI" },
    { label: "Low-Dose Lung CT" },
    { label: "Cardiac Calcium Scoring" },
    { label: "Bone Density (DEXA)" },
    { label: "Breast Cancer Screening" },
    { label: "Abdominal Screening" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const isSubPage = pathname !== '/';
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const isDark = isSubPage || isScrolled;

    const linkCls = `mx-3 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 ${
        isDark ? 'after:bg-white' : 'after:bg-[#1a4d7a]'
    } after:transition-all after:duration-300 hover:after:w-full`;

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY >= 1);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const itemCls = "block px-5 py-2.5 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white transition-colors duration-150";
    const DropdownMenu = ({ items }: { items: NavItem[] }) => (
        <div className="absolute top-full left-0 mt-2 w-56 rounded-lg shadow-xl overflow-hidden z-50"
            style={{ background: '#1a4d7a' }}>
            {items.map(({ label, to }) => (
                to
                    ? <Link key={label} to={to} className={itemCls}>{label}</Link>
                    : <a key={label} href="#" className={itemCls}>{label}</a>
            ))}
        </div>
    );

    const chevron = (open: boolean) => (
        <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor"
            className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
            <path d="M0 0L5 6L10 0H0Z" />
        </svg>
    );

    return (
        <nav
            ref={navRef}
            className={`flex items-center justify-between w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-60 py-2 fixed z-50 transition-colors duration-500 ${
                isDark ? "bg-[#1a2b5e]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
            }`}
        >
            <div>
                <img
                    src={logo}
                    alt="Prenuvo logo"
                    className={`transition-all duration-500 ${isDark ? 'brightness-0 invert drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]' : 'brightness-110'}`}
                />
            </div>

            {/* Desktop nav */}
            <div className={`hidden md:flex items-center font-semibold transition-colors duration-500 ${isDark ? 'text-white' : 'text-[#1a2b5e]'}`}>
                <a className={linkCls}>About</a>

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

                <a className={linkCls}>Whole Body MRI</a>
                <a className={linkCls}>Appointment</a>
                <a className={linkCls}>Make Payment</a>
                <a className={linkCls}>Contact Us</a>
                <button type="button" className="mx-3 px-5 py-2 text-white font-semibold rounded-full border-0 bg-[#00c2c7] hover:opacity-90 transition-opacity">
                    Book scan
                </button>
            </div>

            {/* Hamburger */}
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

            {/* Mobile menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-[#1a4d7a]/97 flex flex-col px-6 py-4 text-white font-bold md:hidden backdrop-blur-md">
                    <a className="py-3 border-b border-white/10 cursor-pointer">About</a>

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

                    <a className="py-3 border-b border-white/10 cursor-pointer">Whole Body MRI</a>
                    <a className="py-3 border-b border-white/10 cursor-pointer">Appointment</a>
                    <a className="py-3 border-b border-white/10 cursor-pointer">Make Payment</a>
                    <a className="py-3 border-b border-white/10 cursor-pointer">Contact Us</a>
                    <button type="button" className="mt-4 px-6 py-3 text-white font-semibold rounded-full border-0 bg-[#00c2c7] self-start">
                        Book scan
                    </button>
                </div>
            )}
        </nav>
    );
};
