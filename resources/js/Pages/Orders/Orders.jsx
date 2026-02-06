import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Orders({ orders, status }) {
    const activeStatus = status;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const { data, setData, post, processing } = useForm({
        status: "",
        _method: "PUT",
    });

    const getStatusStyle = (status) => {
        const colors = {
            pending:
                "h-fit border-[3px] border-zinc-500 bg-zinc-300 text-zinc-700 px-3 py-1 text-sm font-bold",
            progress:
                "h-fit border-[3px] border-zinc-500 bg-zinc-900 text-white px-3 py-1 text-sm font-bold",
            completed:
                "h-fit border-[3px] border-zinc-500 bg-zinc-700 text-white px-3 py-1 text-sm font-bold",
            cancelled:
                "h-fit border-[3px] border-zinc-900 bg-zinc-300 text-zinc-900 px-3 py-1 text-sm font-bold",
        };
        return colors[status];
    };

    const capitalize = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    };

    const formatRupiah = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(price);
    };

    const filterClass = (status) => {
        return `text-sm z-10 w-fit h-fit font-bold px-3 py-1 hover:bg-zinc-900 border-2 border-zinc-900 hover:text-white justify-center items-center gap-3 transition flex ${
            activeStatus === status ? "bg-zinc-900 text-white" : "text-zinc-900"
        }`;
    };

    const openModal = (order) => {
        setSelectedOrder(order);
        setData("status", order.status);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedOrder(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("orders.update", selectedOrder.id), {
            onSuccess: () => closeModal(),
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Orders" />
            <main className="px-20 pt-12 pb-14 min-h-screen">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-5xl font-bold">
                        <span className="underline decoration-4 underline-offset-[10px] decoration-zinc-900">
                            Orders
                        </span>{" "}
                        Management
                    </h1>
                </div>

                <div className="flex gap-3 items-end mb-5">
                    <Link
                        href={route("orders.index")}
                        className={filterClass("all")}
                        preserveScroll
                    >
                        All
                    </Link>
                    <Link
                        href={route("orders.index", {
                            status: "pending",
                        })}
                        className={filterClass("pending")}
                        preserveScroll
                    >
                        Pending
                    </Link>
                    <Link
                        href={route("orders.index", {
                            status: "progress",
                        })}
                        className={filterClass("progress")}
                        preserveScroll
                    >
                        Progress
                    </Link>
                    <Link
                        href={route("orders.index", {
                            status: "completed",
                        })}
                        className={filterClass("completed")}
                        preserveScroll
                    >
                        Completed
                    </Link>
                    <Link
                        href={route("orders.index", {
                            status: "cancelled",
                        })}
                        className={filterClass("cancelled")}
                        preserveScroll
                    >
                        Cancelled
                    </Link>
                </div>

                <div>
                    <form>
                        <div className="flex flex-col">
                            <label>Search Order Number</label>
                            <input type="text" name="order_number" />
                        </div>
                    </form>
                </div>

                <section className="flex flex-wrap w-full gap-5 mb-32">
                    {orders.data.length === 0 ? (
                        <div className="relative w-full max-w-2xl mx-auto mt-20">
                            <div className="absolute bg-zinc-400 inset-0 translate-x-2 translate-y-2"></div>
                            <div className="relative bg-white border-4 border-zinc-400 p-12 text-center">
                                <h2 className="text-3xl font-bold text-zinc-400 mb-4">
                                    No Orders Yet
                                </h2>
                                <p className="text-lg text-zinc-400">
                                    There are no orders at the moment. Orders
                                    will appear here once customers place them.
                                </p>
                            </div>
                        </div>
                    ) : (
                        orders.data.map((order) => (
                            <div key={order.id} className="w-full">
                                <div className="bg-white border-[3px] border-zinc-900 px-7 py-5">
                                    <div className="flex justify-between mb-3">
                                        <div>
                                            <h1 className="text-2xl font-bold">
                                                {order.order_number}
                                            </h1>
                                            <p className="text-lg font-medium">
                                                {order.full_name}
                                            </p>
                                        </div>
                                        <p
                                            className={getStatusStyle(
                                                order.status,
                                            )}
                                        >
                                            {capitalize(order.status)}
                                        </p>
                                    </div>
                                    <div className="flex">
                                        <div className="flex gap-2 w-[320px]">
                                            <div className="flex flex-col gap-2">
                                                <h2 className="font-bold">
                                                    Email
                                                </h2>
                                                <h2 className="font-bold">
                                                    Product
                                                </h2>
                                                <h2 className="font-bold">
                                                    Quantity
                                                </h2>
                                                <h2 className="font-bold">
                                                    WhatsApp
                                                </h2>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <p>: {order.email}</p>
                                                <p>: {order.product.name}</p>
                                                <p>: {order.quantity}</p>
                                                <p>: {order.whatsapp}</p>
                                            </div>
                                        </div>

                                        <div className="pb-5 w-[400px] mr-10">
                                            <h2 className="font-bold mb-1">
                                                Custom Note
                                            </h2>
                                            <p className="w-full text-sm border-2 border-zinc-200 px-3 py-1">
                                                {order.note ? (
                                                    order.note
                                                ) : (
                                                    <span className="text-zinc-400">
                                                        no custom note
                                                    </span>
                                                )}
                                            </p>
                                        </div>

                                        <div className="flex flex-col justify-between">
                                            <div>
                                                <h1 className="font-bold text-zinc-900">
                                                    Total Estimate
                                                </h1>
                                                <p className="font-bold text-xl">
                                                    {formatRupiah(
                                                        order.total_estimate,
                                                    )}
                                                </p>
                                            </div>

                                            <div>
                                                <div className="flex justify-center items-center gap-2">
                                                    <button
                                                        onClick={() =>
                                                            openModal(order)
                                                        }
                                                        className="text-white font-bold text-xs px-3 py-2 h-fit w-fit bg-zinc-900 hover:bg-white border-2 border-white hover:border-zinc-900 hover:text-zinc-900 transition"
                                                    >
                                                        Edit Status
                                                    </button>
                                                    <Link
                                                        href={route(
                                                            "orders.destroy",
                                                            order.id,
                                                        )}
                                                        method="delete"
                                                        as="button"
                                                        onBefore={() =>
                                                            confirm(
                                                                "Are you sure you want to delete this order?",
                                                            )
                                                        }
                                                        className="border-2 border-red-500 p-2 hover:bg-red-500 transition"
                                                    >
                                                        <FaTrash className="text-sm" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}

                    {orders.last_page > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-10 mx-auto">
                            {orders.links.map((link, index) => (
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

                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="relative">
                            <div className="absolute bg-zinc-900 inset-0 translate-x-2 translate-y-2"></div>
                            <div className="relative bg-white border-[4px] border-zinc-900 p-8 w-96">
                                <h2 className="text-2xl font-bold mb-4">
                                    Edit Order Status
                                </h2>
                                <p className="text-sm text-zinc-600 mb-6">
                                    Order:{" "}
                                    <span className="font-bold">
                                        {selectedOrder?.order_number}
                                    </span>
                                </p>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-6">
                                        <label className="block font-bold mb-2">
                                            Status
                                        </label>
                                        <select
                                            value={data.status}
                                            onChange={(e) =>
                                                setData(
                                                    "status",
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full px-4 py-2 border-[3px] border-zinc-900 focus:outline-none focus:ring-0 focus:border-zinc-900 focus:border-[3px]"
                                        >
                                            <option
                                                value="pending"
                                                className="focus:border-y-zinc-900 focus:border-[3px] focus:ring-0"
                                            >
                                                Pending
                                            </option>
                                            <option
                                                value="progress"
                                                className="focus:border-y-zinc-900 focus:border-[3px] focus:ring-0"
                                            >
                                                Progress
                                            </option>
                                            <option
                                                value="completed"
                                                className="focus:border-y-zinc-900 focus:border-[3px] focus:ring-0"
                                            >
                                                Completed
                                            </option>
                                            <option
                                                value="cancelled"
                                                className="focus:border-y-zinc-900 focus:border-[3px] focus:ring-0"
                                            >
                                                Cancelled
                                            </option>
                                        </select>
                                    </div>
                                    <div className="flex gap-3">
                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            className="flex-1 px-4 py-2 border-[3px] border-zinc-900 font-bold hover:bg-zinc-100 transition"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="flex-1 px-4 py-2 bg-zinc-900 text-white font-bold border-[3px] border-zinc-900 hover:bg-zinc-700 transition disabled:opacity-50"
                                        >
                                            {processing ? "Saving..." : "Save"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </AuthenticatedLayout>
    );
}
