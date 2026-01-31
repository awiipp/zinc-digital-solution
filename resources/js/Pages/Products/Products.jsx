import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FaShoppingCart } from "react-icons/fa";

export default function Products() {
    const products = [
        {
            id: 1,
            title: "Custom T-Shirt",
            image: "/images/product-test.jpeg",
            price: "500000",
            description:
                "High-quality custom t-shirt designed for events, brand activations, and corporate gifts.",
        },
        {
            id: 2,
            title: "Custom T-Shirt",
            image: "/images/product-test.jpeg",
            price: "500000",
            description:
                "High-quality custom t-shirt designed for events, brand activations, and corporate gifts.",
        },
        {
            id: 3,
            title: "Custom T-Shirt",
            image: "/images/product-test.jpeg",
            price: "500000",
            description:
                "High-quality custom t-shirt designed for events, brand activations, and corporate gifts.",
        },
        {
            id: 4,
            title: "Custom T-Shirt",
            image: "/images/product-test.jpeg",
            price: "500000",
            description:
                "High-quality custom t-shirt designed for events, brand activations, and corporate gifts.",
        },
    ];

    // Fungsi untuk format harga ke Rupiah
    const formatRupiah = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(price);
    };

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
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-xl font-bold text-zinc-900">
                                            {formatRupiah(product.price)}
                                        </span>
                                    </div>
                                    <div className="relative w-full">
                                        <Link
                                            // href={route("orders.create", {
                                            //     product_id: product.id,
                                            // })}
                                            className="relative z-10 w-full font-bold px-5 py-2 hover:bg-zinc-900 text-zinc-900 border-[3px] border-zinc-900 hover:text-white justify-center items-center gap-2 transition hover:rotate-1 flex"
                                        >
                                            <FaShoppingCart />
                                            Request Order
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </AuthenticatedLayout>
    );
}
