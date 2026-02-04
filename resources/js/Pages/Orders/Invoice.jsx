import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FaCheckCircle } from "react-icons/fa";

export default function Invoice({ order, product, message_url }) {
    const formatRupiah = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(price);
    };

    const calculateTotal = () => {
        return parseInt(product.price) * order.quantity;
    };

    return (
        <AuthenticatedLayout>
            <Head title="Order Submitted" />
            <main className="px-20 pt-12 pb-14 min-h-screen">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="relative mb-8">
                        <div className="absolute bg-zinc-900 inset-0 translate-x-2 translate-y-2"></div>
                        <div className="relative bg-white border-[4px] border-zinc-900 p-12">
                            <FaCheckCircle className="text-6xl text-zinc-900 mx-auto mb-6" />
                            <h1 className="text-4xl font-bold mb-4">
                                Order Sent Successfully!
                            </h1>
                            <p className="text-lg text-zinc-600 mb-6">
                                Thank you for your order. We will contact you
                                soon for further confirmation.
                            </p>
                            <div className="bg-yellow-50 border-[3px] border-yellow-500 p-4 mb-6">
                                <p className="font-bold text-zinc-900">
                                    Status: Pending Confirmation
                                </p>
                                <p className="text-sm text-zinc-900 mt-2">
                                    Our team will contact you within 1x24 hours
                                    to confirm order details and payment.
                                </p>
                            </div>
                            <div className="text-left bg-zinc-50 p-6 border-[3px] border-zinc-900 mb-6">
                                <h3 className="font-bold text-lg mb-3">
                                    Order Details:
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-zinc-600">
                                            Order Number:
                                        </span>
                                        <span className="font-semibold">
                                            {order.order_number}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-600">
                                            Product:
                                        </span>
                                        <span className="font-semibold">
                                            {product.name}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-600">
                                            Quantity:
                                        </span>
                                        <span className="font-semibold">
                                            {order.quantity} pcs
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-600">
                                            Name:
                                        </span>
                                        <span className="font-semibold">
                                            {order.full_name}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-600">
                                            Email:
                                        </span>
                                        <span className="font-semibold">
                                            {order.email}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-zinc-600">
                                            WhatsApp:
                                        </span>
                                        <span className="font-semibold">
                                            {order.whatsapp}
                                        </span>
                                    </div>
                                    <div className="border-t-2 border-zinc-400 pt-2 mt-2">
                                        <div className="flex justify-between">
                                            <span className="font-bold">
                                                Total Estimate:
                                            </span>
                                            <span className="font-bold text-lg">
                                                {formatRupiah(calculateTotal())}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full flex flex-col gap-3">
                                <a
                                    href={message_url}
                                    target="_blank"
                                    as="button"
                                    className="relative z-10 w-full font-bold px-5 py-3 hover:bg-green-600 hover:border-green-600 text-zinc-900 border-[3px] border-green-500 bg-green-500 justify-center items-center gap-2 transition flex"
                                >
                                    Cofirm via WhatsApp
                                </a>
                                <a
                                    href={route(
                                        "orders.download",
                                        order.order_number,
                                    )}
                                    target="_blank"
                                    as="button"
                                    className="relative z-10 w-full font-bold px-5 py-3 hover:bg-zinc-800 text-white border-[3px] border-zinc-900 bg-zinc-900 justify-center items-center gap-2 transition flex"
                                >
                                    Download Invoice
                                </a>
                                <Link
                                    href={route("products.index")}
                                    className="relative z-10 w-full font-bold px-5 py-3 hover:bg-zinc-900 text-zinc-900 border-[3px] border-zinc-900 hover:text-white justify-center items-center gap-2 transition flex"
                                >
                                    Back to Products
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
