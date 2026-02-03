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
} from "react-icons/fa";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth?.user ?? null;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen">
            <nav className="border-b border-gray-100 bg-white fixed w-full z-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link href="/" className="text-lg font-bold">
                                    Zinc #Creative
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route("home")}
                                    active={route().current("home")}
                                >
                                    Home
                                </NavLink>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route("about-us")}
                                    active={route().current("about-us")}
                                >
                                    About Us
                                </NavLink>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route("company-profile")}
                                    active={route().current("company-profile")}
                                >
                                    Profile
                                </NavLink>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route("products.index")}
                                    active={route().current("products.index")}
                                >
                                    Products
                                </NavLink>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route("contact")}
                                    active={route().current("contact")}
                                >
                                    Contact
                                </NavLink>
                            </div>
                        </div>

                        {user ? (
                            <div className="hidden sm:ms-6 sm:flex sm:items-center">
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
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        ) : (
                            <div className="hidden space-x-8 sm:ms-10 sm:flex sm:items-center">
                                <Link
                                    href={route("login")}
                                    className="inline-flex items-center px-3 py-1.5 text-sm font-bold leading-5"
                                >
                                    Login
                                </Link>
                            </div>
                        )}

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState,
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
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
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
                                    Profile
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>
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
                <aside className="w-56 bg-white border-r min-h-screen fixed pt-20">
                    <nav className="px-8 py-5 space-y-4 flex flex-col">
                        {user && (
                            <h1 className="font-bold text-2xl">Admin Panel</h1>
                        )}

                        {user && (
                            <>
                                <NavLink
                                    href={route("dashboard")}
                                    active={route().current("dashboard")}
                                >
                                    Dashboard
                                </NavLink>

                                <NavLink
                                    href={route("products.table")}
                                    active={route().current("products.*")}
                                >
                                    Products
                                </NavLink>
                            </>
                        )}

                        <NavLink
                            href={
                                user
                                    ? route("articles.table")
                                    : route("articles.index")
                            }
                            active={route().current("articles.*")}
                        >
                            Articles
                        </NavLink>

                        <NavLink
                            href={
                                user
                                    ? route("events.table")
                                    : route("events.index")
                            }
                            active={route().current("events.*")}
                        >
                            Events
                        </NavLink>

                        <NavLink
                            href={
                                user
                                    ? route("galleries.table")
                                    : route("galleries.index")
                            }
                            active={route().current("galleries.*")}
                        >
                            Galleries
                        </NavLink>

                        <NavLink
                            href={
                                user
                                    ? route("clients.table")
                                    : route("clients.index")
                            }
                            active={route().current("clients.*")}
                        >
                            Clients
                        </NavLink>

                        {user && (
                            <>
                                <NavLink
                                    href={route("orders.index")}
                                    active={route().current("orders.*")}
                                >
                                    Orders
                                </NavLink>

                                <NavLink
                                    href={route("messages.index")}
                                    active={route().current("messages.*")}
                                >
                                    Messages
                                </NavLink>
                            </>
                        )}
                    </nav>
                </aside>

                <main className="flex-1 ml-56 mt-16">
                    {children}
                    <footer className="bg-zinc-900 px-20 pt-14">
                        <div className="flex justify-between items-start">
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
                                <p className="text-zinc-400 font-medium w-[300px] text-base mt-5">
                                    Zinc Creative Studio is a creative brand
                                    specializing in custom merchandise and event
                                    branding solutions.
                                </p>
                            </div>
                            <div className="text-white">
                                <h1 className="text-2xl font-bold mb-3">
                                    Navigation
                                </h1>
                                <div className="flex text-lg gap-14">
                                    <div className="flex flex-col gap-2">
                                        <Link
                                            className="hover:underline underline-offset-[5px] decoration-[2px] transition"
                                            href={route("home")}
                                        >
                                            Home
                                        </Link>
                                        <Link
                                            className="hover:underline underline-offset-[5px] decoration-[2px] transition"
                                            href={route("about-us")}
                                        >
                                            About Us
                                        </Link>
                                        <Link
                                            className="hover:underline underline-offset-[5px] decoration-[2px] transition"
                                            href={route("company-profile")}
                                        >
                                            Profile
                                        </Link>
                                        <Link
                                            className="hover:underline underline-offset-[5px] decoration-[2px] transition"
                                            href={route("products.index")}
                                        >
                                            Products
                                        </Link>
                                        <Link
                                            className="hover:underline underline-offset-[5px] decoration-[2px] transition"
                                            href={route("contact")}
                                        >
                                            Contact
                                        </Link>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Link
                                            className="hover:underline underline-offset-[5px] decoration-[2px] transition"
                                            href={route("articles.index")}
                                        >
                                            Articles
                                        </Link>
                                        <Link
                                            className="hover:underline underline-offset-[5px] decoration-[2px] transition"
                                            href={route("events.index")}
                                        >
                                            Events
                                        </Link>
                                        <Link
                                            className="hover:underline underline-offset-[5px] decoration-[2px] transition"
                                            href={route("galleries.index")}
                                        >
                                            Galleries
                                        </Link>
                                        <Link
                                            className="hover:underline underline-offset-[5px] decoration-[2px] transition"
                                            href={route("clients.index")}
                                        >
                                            Clients
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="text-white">
                                <h1 className="text-2xl font-bold mb-3">
                                    Follow Us!
                                </h1>
                                <div className="flex text-lg gap-14">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex justify-start gap-3 text-base items-center">
                                            <FaInstagram className="text-xl" />
                                            <span>@zinccreative</span>
                                        </div>
                                        <div className="flex justify-start gap-3 text-base items-center">
                                            <FaLinkedin className="text-xl" />
                                            <span>@Zinccreativestudio</span>
                                        </div>
                                        <div className="flex justify-start gap-3 text-base items-center">
                                            <FaFacebookSquare className="text-xl" />
                                            <span>Zinc Creative Studio</span>
                                        </div>
                                        <div className="flex justify-start gap-3 text-base items-center">
                                            <FaEnvelope className="text-xl" />
                                            <span>
                                                zinccreativestudio@zinc.com
                                            </span>
                                        </div>
                                    </div>
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
