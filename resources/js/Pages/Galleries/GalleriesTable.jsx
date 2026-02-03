import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

export default function GalleriesTable({ galleries }) {
    const truncate = (text, length) => {
        return text.length > length ? text.slice(0, length) + "..." : text;
    };

    return (
        <AuthenticatedLayout>
            <Head title="Galleries Table" />

            <main className="px-20 pt-12 pb-14 min-h-screen">
                <div className="">
                    <h1 className="text-5xl font-bold">
                        <span className="underline decoration-4 underline-offset-[10px] decoration-zinc-900">
                            Galleries
                        </span>{" "}
                        Table
                    </h1>
                </div>

                <section className="mt-10 w-full">
                    <div className="relative w-fit mb-3">
                        <Link
                            href={route("galleries.create")}
                            className="relative z-10 w-fit font-bold px-5 py-2 hover:bg-zinc-900 text-zinc-900 border-[3px] border-zinc-900 hover:text-white justify-center items-center gap-3 transition hover:rotate-2 flex"
                        >
                            <FaPlus />
                            New Gallery
                        </Link>
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
                                        Image
                                    </th>
                                    <th className="py-3 w-[150px] border-b-[3px] border-zinc-900">
                                        Title
                                    </th>
                                    <th className="py-3 px-4 border-b-[3px] border-zinc-900">
                                        Description
                                    </th>
                                    <th className="py-3 w-[200px] border-b-[3px] border-zinc-900">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {galleries.data.map((gallery, index) => (
                                    <tr key={gallery.id}>
                                        <td className="text-sm border-b-[3px] border-zinc-900 text-center">
                                            {(galleries.current_page - 1) *
                                                galleries.per_page +
                                                index +
                                                1}
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 py-3">
                                            <img
                                                src={`/storage/${gallery.image}`}
                                                alt={gallery.title}
                                                className="border-[3px] border-zinc-900 h-20 w-[130px] object-cover mx-auto"
                                            />
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 text-center">
                                            {truncate(gallery.title, 70)}
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 px-5">
                                            {gallery.description ? (
                                                truncate(
                                                    gallery.description,
                                                    200,
                                                )
                                            ) : (
                                                <p className="text-zinc-500">
                                                    no description
                                                </p>
                                            )}
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 px-5">
                                            <div className="flex justify-center items-center gap-2">
                                                <Link
                                                    href={route(
                                                        "galleries.edit",
                                                        gallery.id,
                                                    )}
                                                    className="border-2 border-zinc-900 p-2 hover:bg-zinc-300 transition"
                                                >
                                                    <FaEdit className="text-sm" />
                                                </Link>

                                                <Link
                                                    href={route(
                                                        "galleries.destroy",
                                                        gallery.id,
                                                    )}
                                                    method="delete"
                                                    as="button"
                                                    onBefore={() =>
                                                        confirm(
                                                            "Are you sure you want to delete this gallery?",
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

                {galleries.last_page > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-10">
                        {galleries.links.map((link, index) => (
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
