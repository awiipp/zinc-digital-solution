import { usePage } from "@inertiajs/react";

export default function t(key) {
    const { lang } = usePage().props;
    return lang?.[key] ?? key;
}
