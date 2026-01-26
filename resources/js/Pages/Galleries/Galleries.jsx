import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Galleries() {
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
            description:
                "Showcasing our custom-designed merchandise for promotional use.",
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
            description:
                "A collaborative project with partners to deliver creative products.",
        },
    ];

    return (
        <AuthenticatedLayout>
            <Head title="Galleries" />

            <main>
                <div className="bg-zinc-900 px-20 pt-14 pb-14 text-white">
                    <h1 className="text-5xl font-bold">
                        <span className="underline decoration-4 underline-offset-[10px] decoration-white">
                            Visual
                        </span>{" "}
                        Stories
                    </h1>
                    <p className="text-xl mt-3 text-zinc-300">
                        A collection of moments showcasing our creative works,
                        products, and event collaborations.
                    </p>
                </div>

                <section className="grid grid-cols-3 gap-8 px-20 mt-10 pb-32">
                    {galleries.map((gallery) => (
                        <div className="relative">
                            <div className="absolute bg-zinc-900 inset-0 translate-x-2 translate-y-2"></div>
                            <div
                                key={gallery.id}
                                className="relative h-full border-[3px] border-zinc-900 hover:rotate-2 bg-white hover:shadow-md transition"
                            >
                                <img
                                    src={gallery.image}
                                    alt="Gallery"
                                    className="w-full h-48 object-cover"
                                />

                                <div className="px-6 py-4">
                                    <h3 className="text-xl font-semibold mb-2">
                                        {gallery.title}
                                    </h3>

                                    <p className="text-sm text-zinc-600">
                                        {gallery.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </AuthenticatedLayout>
    );
}
