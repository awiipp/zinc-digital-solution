import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { FaArrowLeft, FaEdit, FaShoppingCart, FaTrash } from "react-icons/fa";

export default function Product({ product }) {
    const user = usePage().props.auth?.user ?? null;

    const formatRupiah = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(price);
    };

    const getStatusBadge = (status) => {
        const badges = {
            available: "bg-zinc-900 text-white",
            soldout: "bg-white text-zinc-900 border-2 border-zinc-900",
        };
        return (
            badges[status] || "bg-white text-zinc-900 border-2 border-zinc-900"
        );
    };

    const getStatusLabel = (status) => {
        const map = {
            available: "Available",
            soldout: "Sold Out",
        };

        return map[status] ?? "-";
    };

    return (
        <AuthenticatedLayout>
            <Head title={`Product - ${product.name}`} />
            <main className="min-h-screen pb-20">
                <div className="px-28 pt-14">
                    <div className="max-w-6xl">
                        <Link
                            href={route("products.table")}
                            className="text-zinc-800 font-medium hover:text-zinc-600 mb-6 flex items-center gap-2 w-fit"
                        >
                            <FaArrowLeft />
                            Back to Products
                        </Link>

                        <div className="flex items-start justify-between mb-8">
                            <h1 className="text-5xl font-bold mb-3">
                                {product.name}
                            </h1>

                            {user && (
                                <div className="flex gap-3">
                                    <Link
                                        href={route(
                                            "products.edit",
                                            product.product_code,
                                        )}
                                        className="border-2 border-zinc-900 px-5 py-2 font-bold hover:bg-zinc-300 transition flex h-fit justify-center items-center gap-1"
                                    >
                                        <FaEdit className="text-sm" />
                                        Edit
                                    </Link>

                                    <Link
                                        href={route(
                                            "products.destroy",
                                            product.id,
                                        )}
                                        method="delete"
                                        as="button"
                                        onBefore={() =>
                                            confirm(
                                                "Are you sure you want to delete this product?",
                                            )
                                        }
                                        className="border-2 border-red-500 px-5 py-2 font-bold hover:bg-zinc-300 transition flex h-fit justify-center items-center gap-1"
                                    >
                                        <FaTrash className="text-sm text-red-500" />
                                        Delete
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <div className="h-fit mb-5">
                                    <div className="border-[4px] border-zinc-900 bg-white overflow-hidden">
                                        <img
                                            src={`/storage/${product.image}`}
                                            alt={product.name}
                                            className="w-full h-[300px] object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="relative w-full">
                                    {product.status === "available" ? (
                                        <>
                                            <div className="absolute inset-0 bg-zinc-900 translate-x-1 translate-y-1"></div>
                                            <Link
                                                href={route(
                                                    "orders.create",
                                                    product.product_code,
                                                )}
                                                className="relative bg-white z-10 w-full font-bold px-5 py-2 hover:bg-zinc-900 text-zinc-900 border-[3px] border-zinc-900 hover:text-white hover:translate-x-1 hover:translate-y-1 justify-center items-center gap-2 transition flex"
                                            >
                                                <FaShoppingCart />
                                                Request Order
                                            </Link>
                                        </>
                                    ) : (
                                        <div className="relative bg-zinc-300 z-10 w-full font-bold px-5 py-2 text-zinc-900 border-[3px] border-zinc-900 justify-center items-center gap-2 transition flex cursor-pointer">
                                            <FaShoppingCart />
                                            Sold Out
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-zinc-900 translate-x-2 translate-y-2"></div>
                                    <div className="relative border-[3px] border-zinc-900 bg-white p-6">
                                        <h2 className="text-2xl font-bold mb-4">
                                            Product Information
                                        </h2>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center border-b-2 border-zinc-200 pb-3">
                                                <span className="text-zinc-600 w-[120px] font-medium">
                                                    Product Name
                                                </span>
                                                <span className="font-bold text-zinc-900 flex-1 text-right">
                                                    {product.name}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center border-b-2 border-zinc-200 pb-3">
                                                <span className="text-zinc-600 font-medium">
                                                    Price
                                                </span>
                                                <span className="font-bold text-zinc-900 text-lg">
                                                    {formatRupiah(
                                                        product.price,
                                                    )}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center border-b-2 border-zinc-200 pb-3">
                                                <span className="text-zinc-600 font-medium">
                                                    Status
                                                </span>
                                                <span
                                                    className={`${getStatusBadge(
                                                        product.status,
                                                    )} px-3 py-1 font-bold text-xs uppercase`}
                                                >
                                                    {getStatusLabel(
                                                        product.status,
                                                    )}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center pt-1">
                                                <span className="text-zinc-600 font-medium">
                                                    Product Code
                                                </span>
                                                <span className="font-mono text-zinc-500">
                                                    #{product.product_code}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="absolute inset-0 bg-zinc-900 translate-x-2 translate-y-2"></div>
                                    <div className="relative border-[3px] border-zinc-900 bg-white p-6">
                                        <h2 className="text-2xl font-bold mb-4">
                                            Description
                                        </h2>
                                        <p className="text-zinc-700 leading-relaxed text-lg whitespace-pre-wrap">
                                            {product.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
