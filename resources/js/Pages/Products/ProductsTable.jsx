import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FaPlus, FaEye, FaEdit, FaTrash } from "react-icons/fa";

export default function ProductsTable({ products, status }) {
    const activeStatus = status;

    const getStatusLabel = (status) => {
        const map = {
            available: "Available",
            soldout: "Sold Out",
        };

        return map[status] ?? "-";
    };

    const filterClass = (status) => {
        return `text-sm z-10 w-fit h-fit font-bold px-3 py-1 hover:bg-zinc-900 border-2 border-zinc-900 hover:text-white justify-center items-center gap-3 transition flex ${
            activeStatus === status ? "bg-zinc-900 text-white" : "text-zinc-900"
        }`;
    };

    const truncate = (text, length) => {
        return text.length > length ? text.slice(0, length) + "..." : text;
    };

    return (
        <AuthenticatedLayout>
            <Head title="Products Table" />

            <main className="px-20 pt-12 pb-14 min-h-screen">
                <div className="">
                    <h1 className="text-5xl font-bold">
                        <span className="underline decoration-4 underline-offset-[10px] decoration-zinc-900">
                            Products
                        </span>{" "}
                        Table
                    </h1>
                </div>

                <section className="mt-10 w-full">
                    <div className="relative w-full mb-3 flex justify-between">
                        <Link
                            href={route("products.create")}
                            className="w-fit text-sm font-bold px-5 py-2 hover:bg-zinc-900 text-zinc-900 border-[3px] border-zinc-900 hover:text-white justify-center items-center gap-3 transition hover:rotate-2 flex"
                        >
                            <FaPlus />
                            New Product
                        </Link>
                        <div className="flex gap-3 items-end">
                            <Link
                                href={route("products.table")}
                                className={filterClass("all")}
                                preserveScroll
                            >
                                All
                            </Link>
                            <Link
                                href={route("products.table", {
                                    status: "available",
                                })}
                                className={filterClass("available")}
                                preserveScroll
                            >
                                Available
                            </Link>
                            <Link
                                href={route("products.table", {
                                    status: "soldout",
                                })}
                                className={filterClass("soldout")}
                                preserveScroll
                            >
                                Sold Out
                            </Link>
                        </div>
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
                                        Name
                                    </th>
                                    <th className="py-3 px-4 border-b-[3px] border-zinc-900">
                                        Description
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
                                {products.data.map((product, index) => (
                                    <tr key={product.id}>
                                        <td className="text-sm border-b-[3px] border-zinc-900 text-center">
                                            {(products.current_page - 1) *
                                                products.per_page +
                                                index +
                                                1}
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 py-3">
                                            <img
                                                src={`/storage/${product.image}`}
                                                alt={product.name}
                                                className="border-[3px] border-zinc-900 h-20 w-[130px] object-cover mx-auto"
                                            />
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 text-center">
                                            {truncate(product.name, 80)}
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 px-5">
                                            {truncate(product.description, 150)}
                                        </td>
                                        <td className="text-xs border-b-[3px] border-zinc-900 px-5">
                                            <div className="flex w-full justify-center">
                                                <div className="text-center w-fit border-2 border-zinc-900 px-2 py-1 font-bold">
                                                    {getStatusLabel(
                                                        product.status,
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 px-5">
                                            <div className="flex justify-center items-center gap-2">
                                                <Link
                                                    href={route(
                                                        "products.show",
                                                        product.product_code,
                                                    )}
                                                    className="bg-zinc-900 text-white p-2 border-2 border-zinc-900 hover:bg-white hover:text-zinc-900 transition"
                                                >
                                                    <FaEye className="text-sm" />
                                                </Link>

                                                <Link
                                                    href={route(
                                                        "products.edit",
                                                        product.product_code,
                                                    )}
                                                    className="border-2 border-zinc-900 p-2 hover:bg-zinc-900 hover:text-white transition"
                                                >
                                                    <FaEdit className="text-sm" />
                                                </Link>

                                                <Link
                                                    href={route(
                                                        "products.destroy",
                                                        product.product_code,
                                                    )}
                                                    method="delete"
                                                    as="button"
                                                    onBefore={() =>
                                                        confirm(
                                                            "Are you sure you want to delete this product?",
                                                        )
                                                    }
                                                    className="border-2 border-red-500 p-2 hover:bg-red-500 transition"
                                                >
                                                    <FaTrash className="text-sm" />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {products.last_page > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-10">
                            {products.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url || "#"}
                                    preserveScroll
                                    className={`
                                        px-3 py-1 border-2 border-zinc-900 font-bold text-sm transition
                                        ${
                                            link.active
                                                ? "bg-zinc-900 text-white"
                                                : "bg-white text-zinc-900 hover:bg-zinc-100"
                                        }
                                        ${!link.url && "opacity-40 pointer-events-none"}
                                    `}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </section>
            </main>
        </AuthenticatedLayout>
    );
}
