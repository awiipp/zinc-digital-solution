import { useState, useRef, useEffect } from "react";
import { router } from "@inertiajs/react";
import { FaGlobe, FaChevronDown } from "react-icons/fa";

export default function LanguageSwitcher({ currentLocale = "en" }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const languages = [
        { code: "en", label: "EN" },
        { code: "id", label: "ID" },
    ];

    const handleLanguageChange = (lang) => {
        router.post(
            route("language.switch"),
            {
                lang: lang,
            },
            {
                preserveState: true,
                preserveScroll: true,
                onSuccess: () => {
                    setIsOpen(false);
                },
            },
        );
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 text-zinc-600 focus:outline-none"
            >
                <FaGlobe className="w-4 h-4" />
                <span className="font-medium">
                    {currentLocale.toUpperCase()}
                </span>
                <FaChevronDown
                    className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white shadow-lg border-2 border-zinc-900 py-1">
                    {languages.map((language) => (
                        <button
                            key={language.code}
                            onClick={() => handleLanguageChange(language.code)}
                            className={`block w-full text-left px-4 py-2 text-sm hover:bg-zinc-200 ${
                                currentLocale === language.code
                                    ? "bg-white text-zinc-900 font-semibold"
                                    : "text-zinc-700"
                            }`}
                        >
                            {language.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
