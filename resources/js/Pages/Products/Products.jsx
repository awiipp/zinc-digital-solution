import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FaShoppingCart } from "react-icons/fa";

export default function Products({ products }) {
    const formatRupiah = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(price);
    };

    const truncate = (text, length) => {
        return text.length > length ? text.slice(0, length) + "..." : text;
    };

    return (
        <AuthenticatedLayout>
            <Head title="Product" />
            <main>
                <div className="bg-zinc-900 relative w-full px-20 py-16 text-white overflow-hidden">
                    <h1 className="text-5xl font-bold">
                        Zinc{" "}
                        <span className="underline decoration-4 underline-offset-[10px] decoration-white">
                            Products
                        </span>
                    </h1>
                    <p className="text-xl mt-3 text-zinc-300">
                        Creative merchandise for meaningful moments.
                    </p>
                    <img
                        src="/images/product.png"
                        className="absolute w-[20rem] right-[5rem] top-[20px]"
                    />
                </div>

                <section className="mt-10 pb-32 px-20">
                    {products.length === 0 ? (
                        <div className="relative max-w-2xl mx-auto mt-20">
                            <div className="absolute bg-zinc-400 inset-0 translate-x-2 translate-y-2"></div>
                            <div className="relative bg-white border-4 border-zinc-400 p-12 text-center">
                                <h2 className="text-3xl font-bold text-zinc-400 mb-4">
                                    No Products Available
                                </h2>
                                <p className="text-lg text-zinc-400">
                                    We're currently updating our product
                                    catalog. Please check back soon!
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-3 gap-8">
                            {products.map((product) => (
                                <Link
                                    key={product.product_code}
                                    href={route(
                                        "products.show",
                                        product.product_code,
                                    )}
                                    className="relative h-fit block"
                                >
                                    <div className="absolute bg-zinc-900 inset-0 translate-x-2 translate-y-2"></div>
                                    <div className="relative hover:translate-x-2 hover:translate-y-2 border-[3px] border-zinc-900 overflow-hidden bg-white shadow-sm hover:shadow-md transition">
                                        <img
                                            src={`/storage/${product.image}`}
                                            alt="Custom T-shirt"
                                            className="w-full h-44 object-cover"
                                        />
                                        <div className="p-5">
                                            {product.status === "soldout" && (
                                                <div className="bg-zinc-900 text-white text-sm h-fit w-fit font-bold px-5 py-1 mb-2">
                                                    Sold Out
                                                </div>
                                            )}
                                            <h3 className="text-xl font-semibold mb-2">
                                                {truncate(product.name, 80)}
                                            </h3>
                                            <p className="text-sm text-zinc-600 mb-4">
                                                {truncate(
                                                    product.description,
                                                    150,
                                                )}
                                            </p>
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-xl font-bold text-zinc-900">
                                                    {formatRupiah(
                                                        product.price,
                                                    )}
                                                </span>
                                            </div>
                                            <div className="relative w-full">
                                                {product.status ===
                                                "available" ? (
                                                    <Link
                                                        href={route(
                                                            "orders.create",
                                                            product.product_code,
                                                        )}
                                                        className="relative z-10 w-full font-bold px-5 py-2 hover:bg-zinc-900 text-zinc-900 border-[3px] border-zinc-900 hover:text-white justify-center items-center gap-2 transition hover:rotate-1 flex"
                                                    >
                                                        <FaShoppingCart />
                                                        Request Order
                                                    </Link>
                                                ) : (
                                                    <div className="relative z-10 w-full font-bold px-5 py-2 text-zinc-900 border-[3px] border-zinc-900 justify-center items-center gap-2 transition cursor-pointer bg-zinc-300 flex">
                                                        <FaShoppingCart />
                                                        Sold Out
                                                    </div>
                                                )}
                                            </div>
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
