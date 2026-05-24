import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import {
    FaEnvelope,
    FaFacebookSquare,
    FaInstagram,
    FaLinkedin,
    FaTachometerAlt,
    FaBox,
    FaNewspaper,
    FaCalendarAlt,
    FaImages,
    FaUsers,
    FaShoppingCart,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";
import t from "@/utils/t";
import LanguageSwitcher from "@/Components/LanguageSwitcher";

export default function AuthenticatedLayout({ header, children }) {
    const { locale } = usePage().props;
    const user = usePage().props.auth?.user ?? null;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const [showingSidebar, setShowingSidebar] = useState(false);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const navLinks = [
        { href: "home", label: "navbar.home" },
        { href: "about-us", label: "navbar.about_us" },
        { href: "company-profile", label: "navbar.profile" },
        { href: "products.index", label: "navbar.products" },
        { href: "contact", label: "navbar.contact" },
    ];

    const sidebarIconMap = {
        dashboard: FaTachometerAlt,
        products: FaBox,
        articles: FaNewspaper,
        events: FaCalendarAlt,
        galleries: FaImages,
        clients: FaUsers,
        orders: FaShoppingCart,
        messages: FaEnvelope,
    };

    const sidebarLinks = [
        ...(user
            ? [
                  { href: "dashboard", label: "Dashboard" },
                  {
                      href: "products.table",
                      label: "navbar.products",
                  },
              ]
            : []),
        {
            href: user ? "articles.table" : "articles.index",
            label: "navbar.articles",
        },
        {
            href: user ? "events.table" : "events.index",
            label: "navbar.events",
        },
        {
            href: user ? "galleries.table" : "galleries.index",
            label: "navbar.galleries",
        },
        {
            href: user ? "clients.table" : "clients.index",
            label: "navbar.clients",
        },
        ...(user
            ? [
                  {
                      href: "orders.index",
                      label: "navbar.orders",
                  },
                  {
                      href: "messages.index",
                      label: "navbar.messages",
                  },
              ]
            : []),
    ];

    const getIcon = (href) => {
        const key = href.split(".")[0];
        return sidebarIconMap[key] || FaBox;
    };

    const isActive = (href) => route().current(href.split(".")[0] + ".*");

    const footerNavigation = {
        column1: [
            { href: "home", label: "navbar.home" },
            { href: "about-us", label: "navbar.about_us" },
            { href: "company-profile", label: "navbar.profile" },
            { href: "products.index", label: "navbar.products" },
            { href: "contact", label: "navbar.contact" },
        ],
        column2: [
            { href: "articles.index", label: "navbar.articles" },
            { href: "events.index", label: "navbar.events" },
            { href: "galleries.index", label: "navbar.galleries" },
            { href: "clients.index", label: "navbar.clients" },
        ],
    };

    const socialMedia = [
        { icon: FaInstagram, text: "@zinccreative" },
        { icon: FaLinkedin, text: "@Zinccreativestudio" },
        { icon: FaFacebookSquare, text: "Zinc Creative Studio" },
        { icon: FaEnvelope, text: "zinccreativestudio@zinc.com" },
    ];

    return (
        <div className="min-h-screen bg-zinc-50">
            <nav className="border-b border-gray-100 bg-white fixed w-full z-30">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link href="/" className="text-lg font-bold">
                                    Zinc #Creative
                                </Link>
                            </div>

                            <div className="hidden lg:flex lg:space-x-8 lg:ms-10">
                                {navLinks.map((link) => (
                                    <NavLink
                                        key={link.href}
                                        href={route(link.href)}
                                        active={route().current(link.href)}
                                    >
                                        {t(link.label)}
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        {user ? (
                            <div className="hidden sm:flex sm:items-center sm:ms-6">
                                <LanguageSwitcher currentLocale={locale} />
                                <div className="relative ms-3">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                                >
                                                    {user.name}
                                                    <svg
                                                        className="-me-0.5 ms-2 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                {t("navbar.logout")}
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        ) : (
                            <div className="hidden sm:flex sm:items-center sm:space-x-5 sm:ms-10">
                                <LanguageSwitcher currentLocale={locale} />
                                <Link
                                    href={route("login")}
                                    className="inline-flex items-center px-3 py-1.5 text-sm font-bold leading-5"
                                >
                                    {t("navbar.login")}
                                </Link>
                            </div>
                        )}

                        <div className="flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (prev) => !prev,
                                    )
                                }
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={`${showingNavigationDropdown ? "block" : "hidden"} sm:hidden pt-16`}
                >
                    <div className="space-y-1 pb-3 pt-2">
                        {navLinks.map((link) => (
                            <ResponsiveNavLink
                                key={link.href}
                                href={route(link.href)}
                                active={route().current(link.href)}
                            >
                                {t(link.label)}
                            </ResponsiveNavLink>
                        ))}
                    </div>

                    {user && (
                        <div className="border-t border-gray-200 pb-1 pt-4">
                            <div className="px-4">
                                <div className="text-base font-medium text-gray-800">
                                    {user.name}
                                </div>
                                <div className="text-sm font-medium text-gray-500">
                                    {user.email}
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route("profile.edit")}>
                                    {t("navbar.profile")}
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    {t("navbar.logout")}
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    )}

                    {!user && (
                        <div className="border-t border-gray-200 pb-3 pt-4">
                            <div className="px-4 flex items-center justify-between">
                                <LanguageSwitcher currentLocale={locale} />
                                <Link
                                    href={route("login")}
                                    className="inline-flex items-center px-3 py-1.5 text-sm font-bold leading-5"
                                >
                                    {t("navbar.login")}
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <div className="flex">
                <aside
                    className={`
                    fixed left-0 top-16 z-20 h-[calc(100vh-4rem)]
                    bg-white border-r border-zinc-200
                    transition-all duration-300 ease-in-out
                    lg:translate-x-0
                    ${sidebarCollapsed ? "w-16" : "w-56"}
                    ${showingSidebar ? "translate-x-0" : "-translate-x-full"}
                `}
                >
                    <div className="flex flex-col h-full">
                        <div
                            className={`
                            flex items-center border-b border-zinc-100 py-3
                            ${sidebarCollapsed ? "justify-center" : "justify-between px-4"}
                        `}
                        >
                            {!sidebarCollapsed && (
                                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                                    Menu
                                </span>
                            )}
                            <button
                                onClick={() =>
                                    setSidebarCollapsed((prev) => !prev)
                                }
                                className="hidden lg:flex items-center justify-center w-7 h-7 rounded-md text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
                            >
                                {sidebarCollapsed ? (
                                    <FaChevronRight className="text-xs" />
                                ) : (
                                    <FaChevronLeft className="text-xs" />
                                )}
                            </button>
                        </div>

                        <nav className="flex-1 overflow-y-auto py-3 space-y-0.5">
                            {sidebarLinks.map((link, index) => {
                                const Icon = getIcon(link.href);
                                const active = isActive(link.href);
                                const label = link.label.includes(".")
                                    ? t(link.label)
                                    : link.label;

                                return (
                                    <Link
                                        key={index}
                                        href={route(link.href)}
                                        className={`
                                            flex items-center gap-3 py-2.5 text-sm transition-colors duration-150 relative
                                            ${sidebarCollapsed ? "justify-center mx-2" : "mx-2 px-3"}
                                            ${
                                                active
                                                    ? "text-zinc-900 font-medium"
                                                    : "text-zinc-500 hover:text-zinc-800"
                                            }
                                            ${active ? "bg-zinc-100" : "hover:bg-zinc-50"}
                                            rounded-lg
                                        `}
                                    >
                                        {active && (
                                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-zinc-900 rounded-r-full" />
                                        )}
                                        <Icon className="text-lg shrink-0" />
                                        {!sidebarCollapsed && (
                                            <span className="truncate">
                                                {label}
                                            </span>
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </aside>

                <button
                    onClick={() => setShowingSidebar((prev) => !prev)}
                    className="lg:hidden fixed left-0 top-20 z-20 bg-white border border-zinc-200 rounded-r-md p-2 shadow-md"
                >
                    <svg
                        className="h-5 w-5 text-zinc-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={
                                showingSidebar
                                    ? "M15 19l-7-7 7-7"
                                    : "M9 5l7 7-7 7"
                            }
                        />
                    </svg>
                </button>

                {showingSidebar && (
                    <div
                        className="lg:hidden fixed inset-0 bg-black/50 z-10"
                        onClick={() => setShowingSidebar(false)}
                    />
                )}

                <main
                    className={`
                    flex-1 mt-16 transition-all duration-300 ease-in-out
                    ${sidebarCollapsed ? "lg:ml-16" : "lg:ml-56"}
                `}
                >
                    {children}

                    <footer className="bg-zinc-900 px-6 sm:px-12 lg:px-20 pt-14">
                        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-4">
                            <div className="text-white">
                                <div className="flex gap-6 items-center">
                                    <div className="relative w-fit mb-3">
                                        <div className="absolute inset-0 bg-white translate-x-1.5 translate-y-1.5"></div>
                                        <div className="w-fit relative text-xl font-bold bg-zinc-900 border-2 px-2.5 py-1.5 border-white">
                                            Zn
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="text-3xl font-bold">
                                            Zinc #Creative
                                        </h1>
                                        <h2 className="font-medium">
                                            Zinc Creative Studio
                                        </h2>
                                    </div>
                                </div>
                                <p className="text-zinc-400 font-medium max-w-[300px] text-base mt-5">
                                    {t("footer.description")}
                                </p>
                            </div>

                            <div className="text-white">
                                <h1 className="text-2xl font-bold mb-3">
                                    {t("footer.navigation")}
                                </h1>
                                <div className="flex text-lg gap-8 sm:gap-14">
                                    <div className="flex flex-col gap-2">
                                        {footerNavigation.column1.map(
                                            (link) => (
                                                <Link
                                                    key={link.href}
                                                    className="hover:underline underline-offset-[5px] decoration-[2px] transition"
                                                    href={route(link.href)}
                                                >
                                                    {t(link.label)}
                                                </Link>
                                            ),
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {footerNavigation.column2.map(
                                            (link) => (
                                                <Link
                                                    key={link.href}
                                                    className="hover:underline underline-offset-[5px] decoration-[2px] transition"
                                                    href={route(link.href)}
                                                >
                                                    {t(link.label)}
                                                </Link>
                                            ),
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="text-white">
                                <h1 className="text-2xl font-bold mb-3">
                                    {t("footer.follow_us")}
                                </h1>
                                <div className="flex flex-col gap-4">
                                    {socialMedia.map((social, index) => {
                                        const Icon = social.icon;
                                        return (
                                            <div
                                                key={index}
                                                className="flex justify-start gap-3 text-base items-center"
                                            >
                                                <Icon className="text-xl" />
                                                <span>{social.text}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="text-white w-full pb-10 pt-12">
                            <p className="font-medium text-sm">
                                ©2026 Zinc Creative Studio. All rights reserved.
                            </p>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
}
