import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useState } from "react";
import { FaPaperPlane, FaTimes } from "react-icons/fa";

export default function MailSend({ order, tracking_url }) {
    const { post } = useForm();

    const [orderData] = useState({
        orderNumber: order.order_number,
        customerName: order.full_name,
        productName: order.product.name,
        productQuantity: order.quantity,
        totalEstimate: order.total_estimate,
        orderUrl: tracking_url,
    });

    const formatRupiah = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(price);
    };

    const handleSend = () => {
        post(route("orders.send", order.order_number));
    };

    const handleCancel = () => {
        window.history.back();
    };

    return (
        <AuthenticatedLayout>
            <Head title="Send Mail Orders" />

            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-zinc-900">
                            Send Mail Order Confirmation
                        </h1>
                        <p className="text-zinc-600 mt-2">
                            Preview and send order confirmation email to{" "}
                            <span className="font-bold">{order.email}</span>
                        </p>
                    </div>

                    <div className="flex gap-4 justify-start mb-5">
                        <button
                            onClick={handleCancel}
                            className=" bg-white border-[3px] border-zinc-900 text-sm px-5 py-2 font-bold text-zinc-900 hover:bg-zinc-100 transition flex items-center gap-2"
                        >
                            <FaTimes />
                            Cancel
                        </button>

                        <button
                            onClick={handleSend}
                            className=" bg-zinc-900 border-[3px] border-zinc-900 text-sm px-5 py-2 font-bold text-white hover:bg-zinc-800 transition flex items-center gap-2"
                        >
                            <FaPaperPlane />
                            Send Email
                        </button>
                    </div>

                    <div className="relative mb-8">
                        <div className="absolute inset-0 bg-zinc-900 translate-x-2 translate-y-2"></div>
                        <div className="relative bg-white border-[3px] border-zinc-900 p-8">
                            <div className="border-b-2 border-zinc-200 pb-4 mb-6">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="relative w-fit">
                                        <div className="absolute inset-0 bg-zinc-900 translate-x-1 translate-y-1"></div>
                                        <div className="relative text-lg font-bold bg-white border-2 px-3 py-1.5 border-zinc-900">
                                            Zn
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-zinc-900">
                                            Zinc Creative Studio
                                        </h2>
                                        <p className="text-sm text-zinc-600">
                                            Konfirmasi Pesanan
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-zinc-900 text-lg">
                                        Halo{" "}
                                        <span className="font-bold">
                                            {orderData.customerName}
                                        </span>
                                        ,
                                    </p>
                                </div>

                                <p className="text-zinc-700 leading-relaxed">
                                    Terima kasih telah melakukan pemesanan di
                                    Zinc Creative Studio. Pesanan Anda telah
                                    kami terima dengan rincian sebagai berikut:
                                </p>

                                <div className="relative">
                                    <div className="absolute inset-0 bg-zinc-900 translate-x-1.5 translate-y-1.5"></div>
                                    <div className="relative bg-zinc-50 border-2 border-zinc-900 p-5">
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="font-semibold text-zinc-900">
                                                    Nomor Order:
                                                </span>
                                                <span className="font-mono font-bold text-zinc-900">
                                                    {orderData.orderNumber}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="font-semibold text-zinc-900">
                                                    Nama Pemesan:
                                                </span>
                                                <span className="text-zinc-900">
                                                    {orderData.customerName}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="font-semibold text-zinc-900">
                                                    Nama Produk:
                                                </span>
                                                <span className="text-zinc-900">
                                                    {orderData.productName}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="font-semibold text-zinc-900">
                                                    Jumlah:
                                                </span>
                                                <span className="text-zinc-900">
                                                    {orderData.productQuantity}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="font-semibold text-zinc-900">
                                                    Total estimasi produk:
                                                </span>
                                                <span className="font-bold text-zinc-900">
                                                    {formatRupiah(
                                                        orderData.totalEstimate,
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-zinc-700 leading-relaxed mb-4">
                                        Sebelum kami melanjutkan ke proses
                                        berikutnya, kami memerlukan konfirmasi
                                        dari Anda terkait:
                                    </p>

                                    <div className="space-y-4 ml-4">
                                        <div>
                                            <p className="font-semibold text-zinc-900 mb-2">
                                                1. Alamat pengiriman lengkap
                                            </p>
                                            <p className="text-zinc-600 text-sm ml-4">
                                                (Nama penerima, alamat lengkap,
                                                kecamatan/kota, dan kode pos)
                                            </p>
                                        </div>

                                        <div>
                                            <p className="font-semibold text-zinc-900 mb-2">
                                                2. Kebutuhan desain
                                            </p>
                                            <p className="text-zinc-700 text-sm ml-4 mb-2">
                                                Apakah Anda ingin menggunakan:
                                            </p>
                                            <ul className="ml-8 space-y-1 text-zinc-700 text-sm">
                                                <li className="flex items-start gap-2">
                                                    <span className="font-bold">
                                                        •
                                                    </span>
                                                    <span>
                                                        Desain custom dari tim
                                                        kami, atau
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="font-bold">
                                                        •
                                                    </span>
                                                    <span>
                                                        Desain sendiri / tidak
                                                        memerlukan desain custom
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="absolute inset-0 bg-zinc-900 translate-x-1.5 translate-y-1.5"></div>
                                    <div className="relative bg-white border-2 border-zinc-900 p-4">
                                        <p className="text-zinc-900 mb-2">
                                            Untuk memantau status pesanan Anda,
                                            silakan kunjungi halaman berikut:
                                        </p>
                                        <a
                                            href={orderData.orderUrl}
                                            className="text-zinc-900 font-mono text-sm underline break-all hover:text-zinc-700"
                                        >
                                            {orderData.orderUrl}
                                        </a>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-zinc-700 leading-relaxed">
                                        Setelah kami menerima konfirmasi
                                        tersebut, kami akan melakukan
                                        perhitungan ongkos kirim dan menghubungi
                                        Anda kembali.
                                    </p>
                                    <p className="text-zinc-700 leading-relaxed">
                                        Terima kasih atas kepercayaan Anda
                                        kepada Zinc Creative Studio. Kami
                                        menunggu konfirmasi dari Anda.
                                    </p>
                                </div>

                                <div className="pt-4 border-t-2 border-zinc-200">
                                    <p className="font-semibold text-zinc-900">
                                        Hormat Kami,
                                    </p>
                                    <p className="font-bold text-zinc-900 text-lg">
                                        Zinc Creative Studio
                                    </p>
                                    <p className="text-sm text-zinc-600">
                                        zinccreativestudio@zinc.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
