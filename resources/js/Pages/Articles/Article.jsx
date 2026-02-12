import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { FaArrowLeft, FaEdit, FaTrash } from "react-icons/fa";
import t from "@/utils/t";

export default function Article({ article, newest_articles }) {
    const user = usePage().props.auth?.user ?? null;

    const truncate = (text, length) => {
        return text.length > length ? text.slice(0, length) + "..." : text;
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Article" />

            <main className="min-h-screen">
                <div className="px-28 pt-14">
                    <div className="max-w-4xl">
                        <Link
                            href={route("articles.index")}
                            className="text-zinc-800 font-medium hover:text-zinc-600 mb-4 flex items-center gap-2"
                        >
                            <FaArrowLeft />
                            {t("article.back")}
                        </Link>
                        <div className="flex justify-between w-full">
                            <div>
                                <h1 className="text-5xl font-bold mt-4">
                                    {article.title}
                                </h1>
                                <div className="mt-4">
                                    <span className="text-xl">
                                        {article.published_at
                                            ? formatDate(article.published_at)
                                            : "not published yet"}
                                    </span>
                                </div>
                            </div>
                            {user && (
                                <div className="flex gap-3 mt-5">
                                    <Link
                                        href={route(
                                            "articles.edit",
                                            article.slug,
                                        )}
                                        className="border-2 border-zinc-900 px-5 py-2 font-bold hover:bg-zinc-900 hover:text-white transition flex h-fit justify-center items-center gap-1"
                                    >
                                        <FaEdit className="text-sm" />
                                        Edit
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
                                        className="border-2 border-red-500 px-5 py-2 font-bold hover:bg-red-500 transition flex h-fit justify-center items-center gap-1 group"
                                    >
                                        <FaTrash className="text-sm text-red-500 group-hover:text-black" />
                                        Delete
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="px-28 py-12 bg-white">
                    <div className="mx-auto">
                        <div className="relative">
                            <div className="absolute inset-0 bg-zinc-900 translate-x-2 translate-y-2"></div>
                            <img
                                src={`/storage/${article.image}`}
                                alt={article.title}
                                className="relative w-full h-[450px] object-cover border-4 border-zinc-900"
                            />
                        </div>
                    </div>
                </div>

                <article className="px-28 pb-20 bg-white">
                    <div className="mx-auto">
                        {article.introduction && (
                            <div className="relative w-[90%] mx-auto mb-12">
                                <div className="absolute inset-0 bg-zinc-900 translate-x-1.5 translate-y-1.5"></div>
                                <div className="relative bg-zinc-50 border-4 border-zinc-900 px-8 py-5 rotate-1">
                                    <p className="text-lg leading-relaxed text-zinc-700">
                                        {article.introduction}
                                    </p>
                                </div>
                            </div>
                        )}

                        <div className="space-y-10 text-lg text-zinc-700 leading-relaxed">
                            <section>
                                {article.body
                                    .split(/\r?\n\r?\n/)
                                    .map((paragraph, index) => (
                                        <p key={index} className="mb-4">
                                            {paragraph}
                                        </p>
                                    ))}
                            </section>
                        </div>

                        {article.conclusion && (
                            <div className="relative mt-12">
                                <div className="absolute inset-0 bg-zinc-400 translate-x-2 translate-y-2"></div>
                                <div className="relative bg-zinc-900 border-4 border-zinc-900 px-8 py-5 text-white rotate-1">
                                    <h2 className="text-2xl font-bold mb-4">
                                        {t("article.conclusion")}
                                    </h2>
                                    <p className="text-zinc-300 leading-relaxed">
                                        {article.conclusion}
                                    </p>
                                </div>
                            </div>
                        )}

                        <div className="mt-14 text-center">
                            <p className="text-xl text-zinc-700 mb-6">
                                {t("article.cta")}
                            </p>
                            <Link
                                href={route("products.index")}
                                className="relative inline-block group"
                            >
                                <div className="absolute inset-0 bg-zinc-900 translate-x-1.5 translate-y-1.5 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
                                <div className="relative bg-white border-4 border-zinc-900 px-8 py-4 font-bold text-lg hover:-rotate-1 transition-all">
                                    {t("article.cta.button")} →
                                </div>
                            </Link>
                        </div>
                    </div>
                </article>

                <section className="px-20 pt-16 pb-32 bg-zinc-50 border-t-4 border-zinc-900">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-1 bg-zinc-900"></div>
                            <h2 className="text-3xl font-bold text-zinc-900">
                                {t("article.newest")}
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {newest_articles.map((newest) => (
                                <Link
                                    href={route("articles.show", newest.slug)}
                                    className="relative group h-fit"
                                >
                                    <div className="absolute inset-0 bg-zinc-900 translate-x-1.5 translate-y-1.5 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
                                    <div className="relative bg-white border-4 border-zinc-900 p-6 rotate-1 group-hover:rotate-0 transition-all">
                                        <h3 className="text-xl font-bold text-zinc-900 mb-2">
                                            {newest.title}
                                        </h3>
                                        <p className="text-zinc-600">
                                            {truncate(newest.excerpt, 200)}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </AuthenticatedLayout>
    );
}
