import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import {
    FaShoppingCart,
    FaClock,
    FaSpinner,
    FaCheckCircle,
    FaDollarSign,
    FaBox,
    FaNewspaper,
    FaEnvelope,
} from "react-icons/fa";

export default function Dashboard({ auth, stats }) {
    const {
        totalOrders,
        ordersPending,
        ordersProgress,
        ordersCompleted,
        totalPrice,
        totalProducts,
        totalArticles,
        unreadMessages,
    } = stats;

    const formatRupiah = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(price);
    };

    const statsCards = [
        {
            title: "Total Orders",
            value: totalOrders,
            icon: FaShoppingCart,
            color: "bg-zinc-900",
            link: route("orders.index"),
        },
        {
            title: "Orders Pending",
            value: ordersPending,
            icon: FaClock,
            color: "bg-zinc-900",
            link: route("orders.index") + "?status=pending",
        },
        {
            title: "Orders In Progress",
            value: ordersProgress,
            icon: FaSpinner,
            color: "bg-zinc-900",
            link: route("orders.index") + "?status=progress",
        },
        {
            title: "Completed Orders",
            value: ordersCompleted,
            icon: FaCheckCircle,
            color: "bg-zinc-900",
            link: route("orders.index") + "?status=completed",
        },
        {
            title: "Total Revenue",
            value: formatRupiah(totalPrice),
            icon: FaDollarSign,
            color: "bg-zinc-900",
            isRevenue: true,
        },
        {
            title: "Total Products",
            value: totalProducts,
            icon: FaBox,
            color: "bg-zinc-900",
            link: route("products.table"),
        },
        {
            title: "Total Articles",
            value: totalArticles,
            icon: FaNewspaper,
            color: "bg-zinc-900",
            link: route("articles.table"),
        },
        {
            title: "Unread Messages",
            value: unreadMessages,
            icon: FaEnvelope,
            color: "bg-zinc-900",
            link: route("messages.index") + "?status=unread",
            badge: unreadMessages > 0,
        },
    ];

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <section className="pt-12 px-12 mb-32">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
                        <p className="text-zinc-600 text-lg">
                            Welcome back, {auth.user?.name}! Here's what's
                            happening with your store today.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {statsCards.map((stat, index) => (
                            <StatCard key={index} {...stat} />
                        ))}
                    </div>

                    <div className="mb-16">
                        <h2 className="text-2xl font-bold mb-4">
                            Quick Actions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <QuickActionButton
                                href={route("products.create")}
                                title="Add Product"
                                description="Create new product"
                            />
                            <QuickActionButton
                                href={route("articles.create")}
                                title="Write Article"
                                description="Publish new article"
                            />
                            <QuickActionButton
                                href={route("orders.index")}
                                title="View Orders"
                                description="Manage customer orders"
                            />
                            <QuickActionButton
                                href={route("messages.index")}
                                title="Check Messages"
                                description="Reply to customers"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                        <div className="relative h-full">
                            <div className="absolute inset-0 translate-x-2 translate-y-2 bg-zinc-900"></div>
                            <div className="relative h-full border-2 border-zinc-900 bg-white p-6 flex flex-col">
                                <h3 className="text-xl font-bold mb-4">
                                    Order Status Overview
                                </h3>
                                <div className="space-y-3">
                                    <ProgressBar
                                        label="Pending"
                                        value={ordersPending}
                                        total={totalOrders}
                                        color="bg-zinc-900"
                                    />
                                    <ProgressBar
                                        label="In Progress"
                                        value={ordersProgress}
                                        total={totalOrders}
                                        color="bg-zinc-900"
                                    />
                                    <ProgressBar
                                        label="Completed"
                                        value={ordersCompleted}
                                        total={totalOrders}
                                        color="bg-zinc-900"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="relative h-full">
                            <div className="absolute inset-0 translate-x-2 translate-y-2 bg-zinc-900"></div>
                            <div className="relative h-full border-2 border-zinc-900 bg-white p-6 flex flex-col">
                                <h3 className="text-xl font-bold mb-4">
                                    Performance Metrics
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-zinc-600">
                                            Average Order Value
                                        </span>
                                        <span className="font-bold text-lg">
                                            {totalOrders > 0
                                                ? formatRupiah(
                                                      totalPrice / totalOrders,
                                                  )
                                                : "Rp 0"}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-zinc-600">
                                            Completion Rate
                                        </span>
                                        <span className="font-bold text-lg">
                                            {totalOrders > 0
                                                ? (
                                                      (ordersCompleted /
                                                          totalOrders) *
                                                      100
                                                  ).toFixed(1)
                                                : "0"}
                                            %
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-zinc-600">
                                            Active Orders
                                        </span>
                                        <span className="font-bold text-lg">
                                            {ordersPending + ordersProgress}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}

function StatCard({ title, value, icon: Icon, color, link, badge, isRevenue }) {
    const CardContent = () => (
        <>
            <div className="absolute inset-0 translate-x-2 translate-y-2 bg-zinc-900"></div>
            <div className="relative border-2 border-zinc-900 bg-white p-6 hover:translate-x-1 hover:translate-y-1 transition-transform duration-200">
                <div className="flex items-start justify-between mb-4">
                    <div
                        className={`${color} p-3 rounded-lg text-white shadow-lg`}
                    >
                        <Icon className="text-2xl" />
                    </div>
                    {badge && (
                        <span className="bg-zinc-900 text-white text-xs font-bold px-2 py-1 rounded-full">
                            Unread
                        </span>
                    )}
                </div>
                <h3 className="text-zinc-600 text-sm font-medium mb-1">
                    {title}
                </h3>
                <p
                    className={`font-bold ${isRevenue ? "text-2xl" : "text-3xl"}`}
                >
                    {value}
                </p>
            </div>
        </>
    );

    return link ? (
        <Link href={link} className="relative block">
            <CardContent />
        </Link>
    ) : (
        <div className="relative">
            <CardContent />
        </div>
    );
}

function QuickActionButton({ href, title, description }) {
    return (
        <Link href={href} className="relative block group">
            <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-zinc-900 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
            <div className="relative border-2 border-zinc-900 bg-white p-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform">
                <h4 className="font-bold text-lg mb-1">{title}</h4>
                <p className="text-zinc-600 text-sm">{description}</p>
            </div>
        </Link>
    );
}

function ProgressBar({ label, value, total, color }) {
    const percentage = (value / total) * 100;

    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-zinc-700">
                    {label}
                </span>
                <span className="text-sm font-bold">
                    {value} / {total}
                </span>
            </div>
            <div className="w-full bg-zinc-200 rounded-full h-2.5">
                <div
                    className={`${color} h-2.5 rounded-full transition-all duration-300`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}
