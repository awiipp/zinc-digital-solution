import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function Articles({ articles }) {
    const truncate = (text, length) => {
        return text.length > length ? text.slice(0, length) + "..." : text;
    };

    return (
        <AuthenticatedLayout>
            <Head title="Articles" />
            <main>
                <div className="px-20 pt-14 bg-zinc-900 text-white pb-14">
                    <h1 className="text-5xl font-bold mb-3">
                        Our{" "}
                        <span className="underline decoration-4 underline-offset-[10px] decoration-white">
                            Articles
                        </span>
                    </h1>
                    <p className="text-xl text-zinc-300">
                        Insights and stories related to our products, events,
                        and creative process.
                    </p>
                </div>

                <section className="mt-10 px-20 pb-32">
                    {articles.length === 0 ? (
                        <div className="relative max-w-2xl mx-auto mt-20">
                            <div className="absolute bg-zinc-400 inset-0 translate-x-2 translate-y-2"></div>
                            <div className="relative bg-white border-4 border-zinc-400 p-12 text-center">
                                <h2 className="text-3xl font-bold text-zinc-400 mb-4">
                                    No Articles Yet
                                </h2>
                                <p className="text-lg text-zinc-400">
                                    We're working on creating amazing content.
                                    Stay tuned!
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-3 gap-8">
                            {articles.map((article) => (
                                <Link
                                    key={article.id}
                                    href={route("articles.show", article.slug)}
                                    className="relative block group h-fit"
                                >
                                    <div className="absolute inset-0 bg-zinc-900 translate-x-2 translate-y-2"></div>
                                    <div className="relative hover:translate-x-2 hover:translate-y-2 h-full border-[3px] border-zinc-900 bg-white hover:shadow-md transition">
                                        <img
                                            src={`/storage/${article.image}`}
                                            alt={article.title}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold mb-3">
                                                {truncate(article.title, 50)}
                                            </h3>
                                            <p className="text-sm text-zinc-600 mb-5">
                                                {truncate(article.excerpt, 200)}
                                            </p>
                                            <button className="text-sm font-medium underline underline-offset-4 group-hover:bg-zinc-900 transition duration-300 group-hover:text-white px-5 py-1">
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </section>
            </main>
        </AuthenticatedLayout>
    );
}
