import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Articles() {
    const articles = [
        {
            id: 1,
            title: "Choosing the Right Merchandise for Your Event",
            excerpt:
                "Learn how the right merchandise can strengthen your brand presence and create memorable event experiences.",
        },
        {
            id: 2,
            title: "Why Custom Merchandise Matters for Branding",
            excerpt:
                "Custom products help brands communicate identity and values through tangible experiences.",
        },
        {
            id: 3,
            title: "Event Merchandise Trends in 2025",
            excerpt:
                "Discover the latest trends in event merchandise that brands are using to stand out.",
        },
        {
            id: 4,
            title: "Event Merchandise Trends in 2025",
            excerpt:
                "Discover the latest trends in event merchandise that brands are using to stand out.",
        },
    ];

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

                <div className="grid grid-cols-3 gap-8 mt-10 px-20 pb-32">
                    {articles.map((article) => (
                        <div key={article.id} className="relative">
                            <div className="absolute inset-0 bg-zinc-900 translate-x-2 translate-y-2"></div>
                            <div className="relative hover:rotate-2 h-full border-[3px] border-zinc-900 bg-white hover:shadow-md transition">
                                <img
                                    src="/images/product-test.jpeg"
                                    alt="Article Thumbnail"
                                    className="w-full h-48 object-cover"
                                />

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3">
                                        {article.title}
                                    </h3>

                                    <p className="text-sm text-zinc-600 mb-5">
                                        {article.excerpt}
                                    </p>

                                    <button className="text-sm font-medium underline underline-offset-4">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
