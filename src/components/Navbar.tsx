import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";

const linkCls =
    "mx-3 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full";

const servicesItems = [
    "3D Mammography",
    "3D Breast Ultrasound",
    "CT Scans",
    "Open MRI",
    "Ultrasound",
    "X-Ray",
    "DEXA Scan",
];

const preventiveItems = [
    "Whole-Body MRI",
    "Low-Dose Lung CT",
    "Cardiac Calcium Scoring",
    "Bone Density (DEXA)",
    "Breast Cancer Screening",
    "Abdominal Screening",
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
    const navRef = useRef<HTMLDivElement>(null);

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

    const DropdownMenu = ({ items }: { items: string[] }) => (
        <div className="absolute top-full left-0 mt-2 w-56 rounded-lg shadow-xl overflow-hidden z-50"
            style={{ background: '#1a2535' }}>
            {items.map((item) => (
                <a
                    key={item}
                    href="#"
                    className="block px-5 py-2.5 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white transition-colors duration-150"
                >
                    {item}
                </a>
            ))}
        </div>
    );

    return (
        <nav
            ref={navRef}
            className={`flex items-center justify-between w-full md:px-60 py-2 fixed z-50 transition-colors duration-500 ${
                isScrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
            }`}
        >
            <div className="text-white">
                <img src={logo} alt="Prenuvo logo" className="brightness-0 invert drop-shadow-lg" />
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center text-white font-bold">
                <a className={linkCls}>About</a>

                {/* Services dropdown */}
                <div className="relative">
                    <button
                        type="button"
                        className={`${linkCls} flex items-center gap-1`}
                        onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                    >
                        Services
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" className={`transition-transform duration-200 ${openDropdown === 'services' ? 'rotate-180' : ''}`}><path d="M0 0L5 6L10 0H0Z"/></svg>
                    </button>
                    {openDropdown === 'services' && <DropdownMenu items={servicesItems} />}
                </div>

                {/* Preventive Screening Tests dropdown */}
                <div className="relative">
                    <button
                        type="button"
                        className={`${linkCls} flex items-center gap-1`}
                        onClick={() => setOpenDropdown(openDropdown === 'preventive' ? null : 'preventive')}
                    >
                        Preventive Screening Tests
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" className={`transition-transform duration-200 ${openDropdown === 'preventive' ? 'rotate-180' : ''}`}><path d="M0 0L5 6L10 0H0Z"/></svg>
                    </button>
                    {openDropdown === 'preventive' && <DropdownMenu items={preventiveItems} />}
                </div>

                <a className={linkCls}>Whole Body MRI</a>
                <a className={linkCls}>Appointment</a>
                <a className={linkCls}>Make Payment</a>
                <a className={linkCls}>Contact Us</a>
                <button
                    type="button"
                    className="mx-3 px-5 py-2 text-white font-semibold rounded bg-[#00c2c7] hover:opacity-90"
                >
                    Book scan
                </button>
            </div>

            {/* Hamburger button */}
            <button
                className="md:hidden flex flex-col justify-center gap-1.5 p-2 text-white"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-black/95 flex flex-col px-6 py-4 text-white font-bold md:hidden">
                    <a className="py-3 border-b border-white/10 cursor-pointer">About</a>

                    {/* Mobile Services */}
                    <div className="border-b border-white/10">
                        <button
                            type="button"
                            className="w-full flex items-center justify-between py-3 cursor-pointer"
                            onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
                        >
                            Services
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" className={`transition-transform duration-200 ${mobileExpanded === 'services' ? 'rotate-180' : ''}`}><path d="M0 0L5 6L10 0H0Z"/></svg>
                        </button>
                        {mobileExpanded === 'services' && (
                            <div className="pb-2 pl-4 flex flex-col gap-2">
                                {servicesItems.map(item => (
                                    <a key={item} href="#" className="text-sm text-white/75 py-1 hover:text-white">{item}</a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Mobile Preventive */}
                    <div className="border-b border-white/10">
                        <button
                            type="button"
                            className="w-full flex items-center justify-between py-3 cursor-pointer"
                            onClick={() => setMobileExpanded(mobileExpanded === 'preventive' ? null : 'preventive')}
                        >
                            Preventive Tests
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor" className={`transition-transform duration-200 ${mobileExpanded === 'preventive' ? 'rotate-180' : ''}`}><path d="M0 0L5 6L10 0H0Z"/></svg>
                        </button>
                        {mobileExpanded === 'preventive' && (
                            <div className="pb-2 pl-4 flex flex-col gap-2">
                                {preventiveItems.map(item => (
                                    <a key={item} href="#" className="text-sm text-white/75 py-1 hover:text-white">{item}</a>
                                ))}
                            </div>
                        )}
                    </div>

                    <a className="py-3 border-b border-white/10 cursor-pointer">Whole Body MRI</a>
                    <a className="py-3 border-b border-white/10 cursor-pointer">Appointment</a>
                    <a className="py-3 border-b border-white/10 cursor-pointer">Make Payment</a>
                    <a className="py-3 border-b border-white/10 cursor-pointer">Contact Us</a>
                    <button
                        type="button"
                        className="mt-4 px-6 py-3 text-white font-semibold rounded bg-[#00c2c7] self-start"
                    >
                        Book scan
                    </button>
                </div>
            )}
        </nav>
    );
};
