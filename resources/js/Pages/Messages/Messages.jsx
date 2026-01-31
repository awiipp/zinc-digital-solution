import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

export default function Messages() {
    const messages = [
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            message:
                "Hi, I'm interested in ordering custom t-shirts for my company event. We need about 50 pieces with our company logo. Can you provide a quote?",
            is_read: false,
            created_at: "2026-01-30T10:30:00Z",
        },
        {
            id: 2,
            name: "Sarah Johnson",
            email: "sarah.j@marketing.com",
            message:
                "Hello! I saw your portfolio and I'm impressed with your work. We're planning a product launch event next month and need branding materials including banners, posters, and merchandise. Would love to discuss this further.",
            is_read: false,
            created_at: "2026-01-29T15:45:00Z",
        },
        {
            id: 3,
            name: "Michael Chen",
            email: "m.chen@techstartup.io",
            message:
                "Quick question - do you offer rush orders? We have an urgent need for 30 custom hoodies for our team building event next week.",
            is_read: true,
            created_at: "2026-01-28T09:20:00Z",
        },
        {
            id: 4,
            name: "Emily Rodriguez",
            email: "emily.rodriguez@university.edu",
            message:
                "Hello Zinc Creative! Our student organization is hosting a music festival and we need help with event branding. This includes stage backdrops, wristbands, and promotional materials. What's your pricing structure for bulk orders?",
            is_read: true,
            created_at: "2026-01-27T14:15:00Z",
        },
        {
            id: 5,
            name: "David Kim",
            email: "david.kim@gmail.com",
            message:
                "Hi there! I'm getting married in 3 months and looking for someone to create custom wedding merchandise - tote bags, mugs, and t-shirts for my guests. Do you handle personal events like this?",
            is_read: false,
            created_at: "2026-01-26T11:00:00Z",
        },
        {
            id: 6,
            name: "Lisa Anderson",
            email: "l.anderson@nonprofit.org",
            message:
                "Good afternoon! Our nonprofit is organizing a charity run and we need custom race bibs, medals, and participant shirts. We're working with a limited budget - do you offer discounts for nonprofit organizations?",
            is_read: true,
            created_at: "2026-01-25T16:30:00Z",
        },
        {
            id: 7,
            name: "Robert Taylor",
            email: "robert.t@design.studio",
            message:
                "Hey! Fellow designer here. I have a client who needs merchandise for their cafe - custom tote bags, coasters, and stickers. Your aesthetic matches perfectly what they're looking for. Can we collaborate on this project?",
            is_read: false,
            created_at: "2026-01-24T13:45:00Z",
        },
        {
            id: 8,
            name: "Amanda White",
            email: "amanda.white@corporate.com",
            message:
                "Hello, I represent a corporate client interested in your services for their annual conference. We need branded notebooks, pens, lanyards, and tote bags for 200 attendees. Please send me your catalog and pricing.",
            is_read: true,
            created_at: "2026-01-23T10:00:00Z",
        },
    ];

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Contact Messages" />

            <main className="px-20 pt-12 pb-14 min-h-screen">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-5xl font-bold">Contact Messages</h1>
                </div>

                <section className="flex flex-wrap w-full gap-5">
                    {messages.map((message) => (
                        <div className="w-full">
                            <div className="border-[3px] border-zinc-900 px-5 py-3 bg-white">
                                <div className="flex gap-10 justify-between mb-8">
                                    <div className="flex flex-col">
                                        <h1 className="font-bold text-xl flex items-center">
                                            {message.name}
                                            {!message.is_read && (
                                                <span className="ml-3 text-xs text-white bg-zinc-900 rounded-full px-2 py-0.5">
                                                    New
                                                </span>
                                            )}
                                        </h1>
                                        <p className="font-medium">
                                            {message.email}
                                        </p>
                                        <p className="text-sm font-medium text-zinc-400 mt-1">
                                            {formatDate(message.created_at)}
                                        </p>
                                    </div>
                                    <div className="w-[600px] text-sm flex justify-center items-center border-l-4 border-zinc-900 rounded px-3 py-1">
                                        <p>{message.message}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button className="border-2 border-zinc-900 font-medium text-sm px-3 py-1 hover:text-white hover:border-zinc-900 hover:bg-zinc-900 transition">
                                        Mark as Read
                                    </button>
                                    <button className="bg-zinc-900 font-medium text-sm px-3 py-1 text-white hover:bg-zinc-800 transition">
                                        Reply via Email
                                    </button>
                                    <button className="border-2 border-red-500 hover:bg-red-500 hover:text-white transition font-medium text-sm px-3 py-1">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </AuthenticatedLayout>
    );
}
