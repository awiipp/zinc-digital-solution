import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";

export default function OrderCreate() {
    const product = {
        id: 1,
        title: "Custom T-Shirt",
        image: "/images/product-test.jpeg",
        price: "500000",
        description:
            "High-quality custom t-shirt designed for events, brand activations, and corporate gifts.",
    };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        whatsapp: "",
        quantity: 1,
        notes: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const formatRupiah = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(price);
    };

    const calculateTotal = () => {
        return parseInt(product.price) * formData.quantity;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In real app, this would send data to backend
        console.log("Order submitted:", {
            ...formData,
            product_id: product.id,
            total: calculateTotal(),
        });
        setIsSubmitted(true);
    };

    if (isSubmitted) {
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
                                    Thank you for your order. We will contact
                                    you soon for further confirmation.
                                </p>
                                <div className="bg-yellow-50 border-[3px] border-yellow-500 p-4 mb-6">
                                    <p className="font-bold text-zinc-900">
                                        Status: Pending Confirmation
                                    </p>
                                    <p className="text-sm text-zinc-900 mt-2">
                                        Our team will contact you within 1x24
                                        hours to confirm order details and
                                        payment.
                                    </p>
                                </div>
                                <div className="text-left bg-zinc-50 p-6 border-[3px] border-zinc-900 mb-6">
                                    <h3 className="font-bold text-lg mb-3">
                                        Order Details:
                                    </h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-zinc-600">
                                                Product:
                                            </span>
                                            <span className="font-semibold">
                                                {product.title}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-zinc-600">
                                                Quantity:
                                            </span>
                                            <span className="font-semibold">
                                                {formData.quantity} pcs
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-zinc-600">
                                                Name:
                                            </span>
                                            <span className="font-semibold">
                                                {formData.name}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-zinc-600">
                                                Email:
                                            </span>
                                            <span className="font-semibold">
                                                {formData.email}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-zinc-600">
                                                WhatsApp:
                                            </span>
                                            <span className="font-semibold">
                                                {formData.whatsapp}
                                            </span>
                                        </div>
                                        <div className="border-t-2 border-zinc-400 pt-2 mt-2">
                                            <div className="flex justify-between">
                                                <span className="font-bold">
                                                    Total Estimate:
                                                </span>
                                                <span className="font-bold text-lg">
                                                    {formatRupiah(
                                                        calculateTotal(),
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative w-full">
                                    <Link
                                        href={route("products.index")}
                                        className="relative z-10 w-full font-bold px-5 py-3 hover:bg-zinc-900 text-zinc-900 border-[3px] border-zinc-900 hover:text-white justify-center items-center gap-2 transition hover:rotate-1 flex"
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

    return (
        <AuthenticatedLayout>
            <Head title="Request Order" />
            <main className="px-20 pt-12 pb-14 min-h-screen">
                <div className="mb-8">
                    <Link
                        href={route("products.index")}
                        className="text-zinc-800 font-medium hover:text-zinc-600 mb-4 flex items-center gap-2"
                    >
                        <FaArrowLeft />
                        Back to Articles
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
                        Fill out the form below to place a product order.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <div className="relative h-fit">
                        <div className="absolute bg-zinc-900 inset-0 translate-x-2 translate-y-2"></div>
                        <div className="relative border-[4px] border-zinc-900 overflow-hidden bg-white">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">
                                    {product.title}
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
                                            Full name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
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
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border-[3px] border-zinc-900 focus:border-zinc-900 focus:border-4 focus:ring-0"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold mb-2">
                                            WhatsApp number
                                        </label>
                                        <input
                                            type="tel"
                                            name="whatsapp"
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border-[3px] border-zinc-900 focus:border-zinc-900 focus:border-4 focus:ring-0"
                                            placeholder="ex: 08xxxxxxxxxx"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold mb-2">
                                            Order quantity
                                        </label>
                                        <input
                                            type="number"
                                            name="quantity"
                                            value={formData.quantity}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border-[3px] border-zinc-900 focus:border-zinc-900 focus:border-4 focus:ring-0"
                                            min="1"
                                            required
                                        />
                                        <p className="text-xs text-zinc-500 mt-1">
                                            Minimum order: 1 pcs
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold mb-2">
                                            Custom note (optional)
                                        </label>
                                        <textarea
                                            name="notes"
                                            value={formData.notes}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border-[3px] border-zinc-900 focus:border-zinc-900 focus:border-4 focus:ring-0 h-32 resize-none"
                                        ></textarea>
                                        <p className="text-xs text-zinc-500 mt-1">
                                            Optional: Specific details for
                                            custom orders
                                        </p>
                                    </div>

                                    <div className="bg-zinc-100 p-4 border-[3px] border-zinc-900">
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold">
                                                Total Estimate:
                                            </span>
                                            <span className="text-2xl font-bold">
                                                {formatRupiah(calculateTotal())}
                                            </span>
                                        </div>
                                        <p className="text-xs text-zinc-600 mt-2">
                                            * Final price will be confirmed by
                                            our team
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
                                        By submitting an order, you agree to be
                                        contacted by our team for order
                                        confirmation.
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
