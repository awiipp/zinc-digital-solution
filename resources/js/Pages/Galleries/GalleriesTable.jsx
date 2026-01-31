import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FaPlus } from "react-icons/fa";

export default function GalleriesTable() {
    const galleries = [
        {
            id: 1,
            title: "Brand Activation Event",
            image: "/images/product-test.jpeg",
            description:
                "Creative merchandise and branding setup for a brand activation event.",
        },
        {
            id: 2,
            title: "Custom Merchandise Display",
            image: "/images/product-test.jpeg",
        },
        {
            id: 3,
            title: "Corporate Event Setup",
            image: "/images/product-test.jpeg",
            description:
                "Event merchandise and visual branding for a corporate gathering.",
        },
        {
            id: 4,
            title: "Creative Collaboration",
            image: "/images/product-test.jpeg",
        },
    ];

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
                    <div className="relative w-fit mb-5">
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
                                {galleries.map((gallery, index) => (
                                    <tr key={gallery.id}>
                                        <td className="text-sm border-b-[3px] border-zinc-900 text-center">
                                            {index + 1}
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 py-3">
                                            <img
                                                src={gallery.image}
                                                alt={gallery.title}
                                                className="border-[3px] border-zinc-900 h-20 w-[130px] object-cover mx-auto"
                                            />
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 text-center">
                                            {gallery.title}
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 px-5">
                                            {gallery.description ? (
                                                gallery.description
                                            ) : (
                                                <p className="text-zinc-500">
                                                    no description
                                                </p>
                                            )}
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
