import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FaPlus } from "react-icons/fa";

export default function ArticlesTable() {
    const articles = [
        {
            id: 1,
            image: "/images/product-test.jpeg",
            title: "Choosing the Right Merchandise for Your Event",
            status: "Publised",
            excerpt:
                "Learn how the right merchandise can strengthen your brand presence and create memorable event experiences.",
        },
        {
            id: 2,
            image: "/images/product-test.jpeg",
            title: "Why Custom Merchandise Matters for Branding",
            status: "Publised",
            excerpt:
                "Custom products help brands communicate identity and values through tangible experiences.",
        },
        {
            id: 3,
            image: "/images/product-test.jpeg",
            title: "Event Merchandise Trends in 2025",
            status: "Publised",
            excerpt:
                "Discover the latest trends in event merchandise that brands are using to stand out.",
        },
        {
            id: 4,
            image: "/images/product-test.jpeg",
            title: "Event Merchandise Trends in 2025",
            status: "Draft",
            excerpt:
                "Discover the latest trends in event merchandise that brands are using to stand out.",
        },
    ];

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
                    <div className="relative w-fit mb-5">
                        <Link
                            href={route("articles.create")}
                            className="relative z-10 w-fit font-bold px-5 py-2 hover:bg-zinc-900 text-zinc-900 border-[3px] border-zinc-900 hover:text-white justify-center items-center gap-3 transition hover:rotate-2 flex"
                        >
                            <FaPlus />
                            New Article
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
                                {articles.map((article, index) => (
                                    <tr key={article.id}>
                                        <td className="text-sm border-b-[3px] border-zinc-900 text-center">
                                            {index + 1}
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 py-3">
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="border-[3px] border-zinc-900 h-20 w-[130px] object-cover mx-auto"
                                            />
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 text-center">
                                            {article.title}
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 px-5">
                                            {article.excerpt}
                                        </td>
                                        <td className="text-xs border-b-[3px] border-zinc-900 px-5">
                                            <div>
                                                <div></div>
                                                <div className="text-center border-2 border-zinc-900 px-2 py-1 font-bold">
                                                    {article.status}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 px-5"></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </AuthenticatedLayout>
    );
}
