import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FaPlus } from "react-icons/fa";

export default function ProductsTable() {
    const products = [
        {
            id: 1,
            name: "Custom T-Shirt",
            image: "/images/product-test.jpeg",
            description:
                "High-quality custom t-shirt designed for events, brand activations, and corporate gifts.",
        },
        {
            id: 2,
            name: "Custom T-Shirt",
            image: "/images/product-test.jpeg",
            description:
                "High-quality custom t-shirt designed for events, brand activations, and corporate gifts.",
        },
        {
            id: 3,
            name: "Custom T-Shirt",
            image: "/images/product-test.jpeg",
            description:
                "High-quality custom t-shirt designed for events, brand activations, and corporate gifts.",
        },
        {
            id: 4,
            name: "Custom T-Shirt",
            image: "/images/product-test.jpeg",
            description:
                "High-quality custom t-shirt designed for events, brand activations, and corporate gifts.",
        },
    ];

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
                    <div className="relative w-fit mb-5">
                        <Link
                            href={route('products.create')}
                            className="relative z-10 w-fit font-bold px-5 py-2 hover:bg-zinc-900 text-zinc-900 border-[3px] border-zinc-900 hover:text-white justify-center items-center gap-3 transition hover:rotate-2 flex"
                        >
                            <FaPlus />
                            New Product
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
                                        Name
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
                                {products.map((product, index) => (
                                    <tr key={product.id}>
                                        <td className="text-sm border-b-[3px] border-zinc-900 text-center">
                                            {index + 1}
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 py-3">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="border-[3px] border-zinc-900 h-20 w-[130px] object-cover mx-auto"
                                            />
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 text-center">
                                            {product.name}
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 px-5">
                                            {product.description}
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
