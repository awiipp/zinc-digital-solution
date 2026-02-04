import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FaEdit, FaEye, FaPlus, FaTrash } from "react-icons/fa";

export default function ArticlesTable({ articles, status }) {
    const activeStatus = status;

    const getStatusBadge = (status) => {
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
            <Head title="Articles Table" />

            <main className="px-20 pt-12 pb-14 min-h-screen">
                <div className="">
                    <h1 className="text-5xl font-bold">
                        <span className="underline decoration-4 underline-offset-[10px] decoration-zinc-900">
                            Articles
                        </span>{" "}
                        Table
                    </h1>
                </div>

                <section className="mt-10 w-full">
                    <div className="relative w-full mb-3 flex justify-between">
                        <Link
                            href={route("articles.create")}
                            className="w-fit text-sm font-bold px-5 py-2 hover:bg-zinc-900 text-zinc-900 border-[3px] border-zinc-900 hover:text-white justify-center items-center gap-3 transition hover:rotate-2 flex"
                        >
                            <FaPlus />
                            New Article
                        </Link>
                        <div className="flex gap-3 items-end">
                            <Link
                                href={route("articles.table")}
                                className={filterClass("all")}
                                preserveScroll
                            >
                                All
                            </Link>
                            <Link
                                href={route("articles.table", {
                                    status: "draft",
                                })}
                                className={filterClass("draft")}
                                preserveScroll
                            >
                                Draft
                            </Link>
                            <Link
                                href={route("articles.table", {
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
                                        Thumbnail
                                    </th>
                                    <th className="py-3 w-[150px] border-b-[3px] border-zinc-900">
                                        Title
                                    </th>
                                    <th className="py-3 px-4 border-b-[3px] border-zinc-900">
                                        Excerpt
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
                                {articles.data.map((article, index) => (
                                    <tr key={article.id}>
                                        <td className="text-sm border-b-[3px] border-zinc-900 text-center">
                                            {(articles.current_page - 1) *
                                                articles.per_page +
                                                index +
                                                1}
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 py-3">
                                            <img
                                                src={`/storage/${article.image}`}
                                                alt={article.title}
                                                className="border-[3px] border-zinc-900 h-20 w-[130px] object-cover mx-auto"
                                            />
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 text-center">
                                            {truncate(article.title, 55)}
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 px-5">
                                            {truncate(article.excerpt, 100)}
                                        </td>
                                        <td className="text-xs border-b-[3px] border-zinc-900 px-5">
                                            <div className="text-center mx-auto border-2 w-fit border-zinc-900 px-5 py-1 font-bold">
                                                {getStatusBadge(article.status)}
                                            </div>
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 px-5">
                                            <div className="flex justify-center items-center gap-2">
                                                <Link
                                                    href={route(
                                                        "articles.show",
                                                        article.slug,
                                                    )}
                                                    className="bg-zinc-900 text-white p-2 border-2 border-zinc-900 hover:bg-zinc-800 transition"
                                                >
                                                    <FaEye className="text-sm" />
                                                </Link>

                                                <Link
                                                    href={route(
                                                        "articles.edit",
                                                        article.slug,
                                                    )}
                                                    className="border-2 border-zinc-900 p-2 hover:bg-zinc-300 transition"
                                                >
                                                    <FaEdit className="text-sm" />
                                                </Link>

                                                <Link
                                                    href={route(
                                                        "articles.destroy",
                                                        article.slug,
                                                    )}
                                                    method="delete"
                                                    as="button"
                                                    onBefore={() =>
                                                        confirm(
                                                            "Are you sure you want to delete this article?",
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

                {articles.last_page > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-10">
                        {articles.links.map((link, index) => (
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
