import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Products() {
    const products = [
        {
            id: 1,
            title: "Custom T-Shirt",
            image: "/images/product-test.jpeg",
            description:
                "High-quality custom t-shirt designed for events, brand activations, and corporate gifts.",
        },
        {
            id: 2,
            title: "Custom T-Shirt",
            image: "/images/product-test.jpeg",
            description:
                "High-quality custom t-shirt designed for events, brand activations, and corporate gifts.",
        },
        {
            id: 3,
            title: "Custom T-Shirt",
            image: "/images/product-test.jpeg",
            description:
                "High-quality custom t-shirt designed for events, brand activations, and corporate gifts.",
        },
        {
            id: 4,
            title: "Custom T-Shirt",
            image: "/images/product-test.jpeg",
            description:
                "High-quality custom t-shirt designed for events, brand activations, and corporate gifts.",
        },
    ];

    return (
        <AuthenticatedLayout>
            <Head title="Product" />

            <main>
                <div className="bg-zinc-900 px-20 pt-14 pb-14 text-white">
                    <h1 className="text-5xl font-bold">
                        Zinc{" "}
                        <span className="underline decoration-4 underline-offset-[10px] decoration-white">
                            Products
                        </span>
                    </h1>
                    <p className="text-xl mt-3 text-zinc-300">
                        Creative merchandise for meaningful moments.
                    </p>
                </div>

                <section className="grid grid-cols-3 gap-8 mt-10 pb-32 px-20">
                    {products.map((product) => (
                        <div key={product.id} className="relative">
                            <div className="absolute bg-zinc-900 inset-0 translate-x-2 translate-y-2"></div>
                            <div className="relative hover:rotate-2 border-[3px] border-zinc-900 overflow-hidden bg-white shadow-sm hover:shadow-md transition">
                                <img
                                    src={product.image}
                                    alt="Custom T-shirt"
                                    className="w-full h-44 object-cover"
                                />

                                <div className="p-5">
                                    <h3 className="text-xl font-semibold mb-2">
                                        {product.title}
                                    </h3>

                                    <p className="text-sm text-zinc-600 mb-4">
                                        {product.description}
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
