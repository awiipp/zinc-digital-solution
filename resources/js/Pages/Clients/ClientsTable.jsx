import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import {
    FaCheck,
    FaEdit,
    FaPlus,
    FaStar,
    FaTimes,
    FaTrash,
} from "react-icons/fa";

export default function ClientsTable({ clients, status }) {
    const activeStatus = status;

    const getStatusLabel = (status) => {
        const map = {
            draft: "Draft",
            published: "Published",
        };

        return map[status] ?? "-";
    };

    const filterClass = (status) => {
        return `text-sm z-10 w-fit h-fit font-bold px-3 py-1 hover:bg-zinc-900 border-2 border-zinc-900 hover:text-white justify-center items-center gap-3 transition flex ${
            activeStatus === status ? "bg-zinc-900 text-white" : "text-zinc-900"
        }`;
    };

    const truncate = (text, length) => {
        return text.length > length ? text.slice(0, length) + "..." : text;
    };

    return (
        <AuthenticatedLayout>
            <Head title="Clients Table" />

            <main className="px-20 pt-12 pb-14 min-h-screen">
                <div className="">
                    <h1 className="text-5xl font-bold">
                        <span className="underline decoration-4 underline-offset-[10px] decoration-zinc-900">
                            Reviews
                        </span>{" "}
                        Table
                    </h1>
                </div>

                <section className="mt-10 w-full">
                    <div className="relative w-full mb-3 flex justify-between">
                        <Link
                            href={route("clients.create")}
                            className="w-fit text-sm font-bold px-5 py-2 hover:bg-zinc-900 text-zinc-900 border-[3px] border-zinc-900 hover:text-white justify-center items-center gap-3 transition hover:rotate-2 flex"
                        >
                            <FaPlus />
                            New Review
                        </Link>
                        <div className="flex gap-3 items-end">
                            <Link
                                href={route("clients.table")}
                                className={filterClass("all")}
                                preserveScroll
                            >
                                All
                            </Link>
                            <Link
                                href={route("clients.table", {
                                    status: "draft",
                                })}
                                className={filterClass("draft")}
                                preserveScroll
                            >
                                Draft
                            </Link>
                            <Link
                                href={route("clients.table", {
                                    status: "published",
                                })}
                                className={filterClass("published")}
                                preserveScroll
                            >
                                Published
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-zinc-900 translate-x-2 translate-y-2"></div>
                        <table className="relative w-full bg-white border-[4px] border-zinc-900">
                            <thead>
                                <tr>
                                    <th className="py-3 w-[50px] border-b-[3px] border-zinc-900">
                                        #
                                    </th>
                                    <th className="py-3 w-[150px] border-b-[3px] border-zinc-900">
                                        Name
                                    </th>
                                    <th className="py-3 w-[150px] border-b-[3px] border-zinc-900">
                                        Company
                                    </th>
                                    <th className="py-3 px-4 border-b-[3px] border-zinc-900">
                                        Message
                                    </th>
                                    <th className="py-3 px-4 border-b-[3px] border-zinc-900">
                                        Rating
                                    </th>
                                    <th className="py-3 px-4 border-b-[3px] border-zinc-900">
                                        Status
                                    </th>
                                    <th className="py-3 w-[200px] border-b-[3px] border-zinc-900">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {clients.data.map((client, index) => (
                                    <tr key={client.id}>
                                        <td className="text-sm border-b-[3px] border-zinc-900 text-center">
                                            {index + 1}
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 text-center">
                                            {client.name}
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 text-center">
                                            {client.company}, <br />
                                            {client.role ? (
                                                client.role
                                            ) : (
                                                <span className="text-zinc-500">
                                                    no role
                                                </span>
                                            )}
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 px-5 py-2">
                                            {truncate(client.message, 100)}
                                        </td>
                                        <td className="text-sm w-[90px] border-b-[3px] border-zinc-900 px-5">
                                            <div className="flex justify-center flex-wrap w-full gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar
                                                        key={i}
                                                        className={`${
                                                            i < client.rating
                                                                ? "text-zinc-900"
                                                                : "text-zinc-300"
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                        </td>
                                        <td className="text-xs border-b-[3px] border-zinc-900 px-5">
                                            <div className="min-h-14 flex items-center w-full">
                                                <div className="text-center mx-auto border-2 w-fit border-zinc-900 px-5 py-1 font-bold">
                                                    {getStatusLabel(
                                                        client.status,
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 px-5">
                                            <div className="flex justify-center items-center gap-2">
                                                {client.status === "draft" ? (
                                                    <Link
                                                        href={route(
                                                            "clients.publish",
                                                            client.id,
                                                        )}
                                                        method="put"
                                                        as="button"
                                                        className="border-2 border-zinc-900 bg-zinc-900 text-white p-2 hover:bg-zinc-700 transition"
                                                    >
                                                        <FaCheck className="text-sm" />
                                                    </Link>
                                                ) : (
                                                    <Link
                                                        href={route(
                                                            "clients.draft",
                                                            client.id,
                                                        )}
                                                        method="put"
                                                        as="button"
                                                        className="border-2 border-zinc-900 p-2 bg-zinc-300 hover:bg-white transition"
                                                    >
                                                        <FaTimes className="text-sm" />
                                                    </Link>
                                                )}

                                                <Link
                                                    href={route(
                                                        "clients.edit",
                                                        client.id,
                                                    )}
                                                    className="border-2 border-zinc-900 p-2 hover:bg-zinc-300 transition"
                                                >
                                                    <FaEdit className="text-sm" />
                                                </Link>

                                                <Link
                                                    href={route(
                                                        "clients.destroy",
                                                        client.id,
                                                    )}
                                                    method="delete"
                                                    as="button"
                                                    onBefore={() =>
                                                        confirm(
                                                            "Are you sure you want to delete this client review?",
                                                        )
                                                    }
                                                    className="border-2 border-red-500 p-2 hover:bg-zinc-300 transition"
                                                >
                                                    <FaTrash className="text-sm" />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {clients.last_page > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-10">
                        {clients.links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url || "#"}
                                preserveScroll
                                className={`
                                    px-3 py-1 border-2 border-zinc-900 font-bold text-sm transition
                                    ${
                                        link.active
                                            ? "bg-zinc-900 text-white"
                                            : "bg-white text-zinc-900 hover:bg-zinc-100"
                                    }
                                    ${!link.url && "opacity-40 pointer-events-none"}
                                `}
                                dangerouslySetInnerHTML={{
                                    __html: link.label,
                                }}
                            />
                        ))}
                    </div>
                )}
            </main>
        </AuthenticatedLayout>
    );
}
