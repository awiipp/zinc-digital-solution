import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import t from "@/utils/t";

export default function TrackOrder({ order }) {
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

    return (
        <AuthenticatedLayout>
            <Head title="Track Your Order" />

            <main className="px-20 pt-12 pb-14 min-h-screen">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold mb-12">
                        {t("order.track.title")}
                    </h1>

                    <div className="flex w-1/2">
                        <form className="w-full items-end">
                            <input
                                type="text"
                                name="number"
                                className="border-2 w-full px-4 py-2 h-[45px] border-zinc-900 focus:border-zinc-900 focus:border-[3px] focus:ring-0"
                                placeholder={t("order.placeholder")}
                            />
                        </form>
                        <Link
                            className="bg-zinc-900 text-white px-5 font-bold"
                            href={route("orders.track")}
                            as="button"
                            preserveScroll
                        >
                            Reset
                        </Link>
                    </div>

                    <div className="mt-8">
                        {order ? (
                            <div key={order.id} className="w-full">
                                <div className="bg-white border-[3px] border-zinc-900 px-7 py-5">
                                    <div className="mb-3">
                                        <div className="flex gap-5">
                                            <p
                                                className={getStatusStyle(
                                                    order.status,
                                                )}
                                            >
                                                {capitalize(order.status)}
                                            </p>
                                            <div>
                                                <h1 className="text-2xl font-bold">
                                                    {order.order_number}
                                                </h1>
                                                <p className="text-lg font-medium">
                                                    {order.full_name}
                                                </p>
                                            </div>
                                        </div>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="w-full">
                                <div className="bg-white border-[3px] border-zinc-400 px-7 py-10 text-center">
                                    <h1 className="text-2xl text-zinc-500 font-bold mb-2">
                                        {t("order.none")}
                                    </h1>

                                    <p className="text-zinc-400 mb-6">
                                        {t("order.none.desc")}
                                    </p>

                                    <div className="text-sm text-zinc-400">
                                        {t("order.ex")}:
                                        <span className="font-medium text-zinc-500 ml-1">
                                            ORD-Z6FU-948
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
