import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Orders() {
    const orders = [
        {
            id: 1,
            order_number: "ORD-2026-001",
            full_name: "John Doe",
            email: "john@example.com",
            whatsapp: "+62812345678",
            product: "Custom T-Shirt",
            quantity: 50,
            custom_note: "Logo harus di tengah, warna hitam",
            total_estimate: "Rp 2.500.000",
            status: "Pending",
        },
        {
            id: 2,
            order_number: "ORD-2026-002",
            full_name: "Jane Smith",
            email: "jane@example.com",
            whatsapp: "+62898765432",
            product: "Tote Bag",
            quantity: 100,
            custom_note:
                "Desain sesuai mockup yang dikirim, proses dipercepat karena deadline mepet. kirimkan dulu mockup product yang akan dibuat.",
            total_estimate: "Rp 5.000.000",
            status: "Progress",
        },
        {
            id: 3,
            order_number: "ORD-2026-003",
            full_name: "Bob Wilson",
            email: "bob@example.com",
            whatsapp: "+62856789012",
            product: "Custom Mug",
            quantity: 25,
            custom_note:
                "Untuk souvenir pernikahan pokoknya yang bagus, jangan ada cacat, harus sesuai. Makasih.",
            total_estimate: "Rp 1.250.000",
            status: "Completed",
        },
        {
            id: 4,
            order_number: "ORD-2026-004",
            full_name: "Bob Neega",
            email: "bob@example.com",
            whatsapp: "+62856789012",
            product: "Custom Mug",
            quantity: 25,
            custom_note: "Untuk souvenir pernikahan",
            total_estimate: "Rp 1.250.000",
            status: "Cancelled",
        },
    ];

    const getStatusStyle = (status) => {
        const colors = {
            Pending:
                "h-fit border-[3px] border-zinc-500 bg-zinc-300 text-zinc-700 px-3 py-1 text-sm font-bold",
            Progress:
                "h-fit border-[3px] border-zinc-500 bg-zinc-900 text-white px-3 py-1 text-sm font-bold",
            Completed:
                "h-fit border-[3px] border-zinc-500 bg-zinc-700 text-white px-3 py-1 text-sm font-bold",
            Cancelled:
                "h-fit border-[3px] border-zinc-900 bg-zinc-300 text-zinc-900 px-3 py-1 text-sm font-bold",
        };
        return colors[status];
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

                <section className="flex flex-wrap w-full gap-5 mb-32">
                    {orders.map((order) => (
                        <div className="w-full">
                            {/* <div className="absolute inset-0 bg-zinc-900 translate-x-1 translate-y-1"></div>*/}
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
                                    <p className={getStatusStyle(order.status)}>
                                        {order.status}
                                    </p>
                                </div>
                                <div className="flex">
                                    <div className="flex gap-2 w-[320px]">
                                        <div className="flex flex-col gap-2">
                                            <h2 className="font-bold">Email</h2>
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
                                            <p>: {order.product}</p>
                                            <p>: {order.quantity}</p>
                                            <p>: {order.whatsapp}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="pb-5 w-[400px] mr-10">
                                        <h2 className="font-bold mb-1">
                                            Custom Note
                                        </h2>
                                        <p className="w-full text-sm border-2 border-zinc-200 px-3 py-1">
                                            {order.custom_note}
                                        </p>
                                    </div>
                                    
                                    <div className="flex flex-col justify-between">
                                        <div>
                                            <h1 className="font-bold text-zinc-900">
                                                Total Estimate
                                            </h1>
                                            <p className="font-bold text-xl">
                                                {order.total_estimate}
                                            </p>
                                        </div>
                                        <button className="text-white font-bold text-sm px-5 py-2 h-fit bg-zinc-900 hover:bg-white border-[3px] border-white hover:border-zinc-900 hover:text-zinc-900 transition">
                                            Edit Status
                                        </button>
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
