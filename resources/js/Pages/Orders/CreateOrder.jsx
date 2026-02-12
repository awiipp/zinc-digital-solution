import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import t from "@/utils/t";

export default function OrderCreate({ product }) {
    const { data, setData, post } = useForm({
        full_name: "",
        email: "",
        whatsapp: "",
        quantity: 1,
        note: "",
        total_estimate: 0,
    });

    const formatRupiah = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(price);
    };

    const calculateTotal = () => {
        return parseInt(product.price) * data.quantity;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("orders.store", product.product_code));
    };

    useEffect(() => {
        setData("total_estimate", calculateTotal());
    }, [data.quantity]);

    return (
        <AuthenticatedLayout>
            <Head title="Request Order" />
            <main className="md:px-20 px-10 pt-12 pb-14 min-h-screen">
                <div className="mb-8">
                    <Link
                        href={route("products.index")}
                        className="text-zinc-800 font-medium hover:text-zinc-600 mb-4 flex items-center gap-2"
                    >
                        <FaArrowLeft />
                        {t("product.back")}
                    </Link>
                </div>

                <div className="mb-8">
                    <h1 className="text-5xl font-bold">
                        <span className="underline decoration-4 underline-offset-[10px] decoration-zinc-900">
                            Request
                        </span>{" "}
                        Order!
                    </h1>
                    <p className="text-lg text-zinc-600 mt-3">
                        {t("order.desc")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                    <div className="relative h-fit">
                        <div className="absolute bg-zinc-900 inset-0 translate-x-2 translate-y-2"></div>
                        <div className="relative border-[4px] border-zinc-900 overflow-hidden bg-white">
                            <img
                                src={`/storage/${product.image}`}
                                alt={product.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">
                                    {product.name}
                                </h3>
                                <p className="text-zinc-600 mb-4">
                                    {product.description}
                                </p>
                                <div className="text-3xl font-bold text-zinc-900">
                                    {formatRupiah(product.price)}
                                </div>
                                <p className="text-sm text-zinc-500 mt-1">
                                    per pcs
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute bg-zinc-900 inset-0 translate-x-2 translate-y-2"></div>
                        <div className="relative border-[4px] border-zinc-900 bg-white p-8">
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold mb-2">
                                            {t("order.name")}
                                        </label>
                                        <input
                                            type="text"
                                            name="full_name"
                                            value={data.full_name}
                                            onChange={(e) =>
                                                setData(
                                                    "full_name",
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full px-4 py-2 border-[3px] border-zinc-900 focus:border-zinc-900 focus:border-4 focus:ring-0"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            className="w-full px-4 py-2 border-[3px] border-zinc-900 focus:border-zinc-900 focus:border-4 focus:ring-0"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold mb-2">
                                            {t("order.whatsapp")}
                                        </label>
                                        <input
                                            type="tel"
                                            name="whatsapp"
                                            value={data.whatsapp}
                                            onChange={(e) =>
                                                setData(
                                                    "whatsapp",
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full px-4 py-2 border-[3px] border-zinc-900 focus:border-zinc-900 focus:border-4 focus:ring-0"
                                            placeholder="ex: 08xxxxxxxxxx"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold mb-2">
                                            {t("order.quantity")}
                                        </label>
                                        <input
                                            type="number"
                                            name="quantity"
                                            value={data.quantity}
                                            onChange={(e) =>
                                                setData(
                                                    "quantity",
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full px-4 py-2 border-[3px] border-zinc-900 focus:border-zinc-900 focus:border-4 focus:ring-0"
                                            min="1"
                                            required
                                        />
                                        <p className="text-xs text-zinc-500 mt-1">
                                            {t("order.min")}
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold mb-2">
                                            {t("order.note")}
                                        </label>
                                        <textarea
                                            name="note"
                                            value={data.note}
                                            onChange={(e) =>
                                                setData("note", e.target.value)
                                            }
                                            className="w-full px-4 py-2 border-[3px] border-zinc-900 focus:border-zinc-900 focus:border-4 focus:ring-0 h-32 resize-none"
                                        ></textarea>
                                        <p className="text-xs text-zinc-500 mt-1">
                                            {t("order.note.desc")}
                                        </p>
                                    </div>

                                    <div className="bg-zinc-100 p-4 border-[3px] border-zinc-900">
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold">
                                                {t("order.total")}:
                                            </span>
                                            <span className="text-2xl font-bold">
                                                {formatRupiah(calculateTotal())}
                                            </span>
                                        </div>
                                        <p className="text-xs text-zinc-600 mt-2">
                                            {t("order.total.desc")}
                                        </p>
                                    </div>

                                    <div className="relative w-full">
                                        <button
                                            type="submit"
                                            className="relative z-10 w-full font-bold px-5 py-3 hover:bg-zinc-900 text-zinc-900 border-[3px] border-zinc-900 hover:text-white justify-center items-center gap-2 transition hover:rotate-1 flex"
                                        >
                                            Submit Order
                                        </button>
                                    </div>

                                    <p className="text-xs text-center text-zinc-500">
                                        {t("order.submit.desc")}
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
