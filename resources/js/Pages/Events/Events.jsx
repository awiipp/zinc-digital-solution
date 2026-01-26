import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Events() {
    const events = [
        {
            id: 1,
            title: "Brand Activation Expo 2024",
            description:
                "We supported this event with custom merchandise and on-site branding solutions.",
            date: "March 2024",
            location: "Jakarta",
        },
        {
            id: 2,
            title: "Creative Market Festival",
            description:
                "Showcasing our creative merchandise and collaborating with local brands.",
            date: "July 2024",
            location: "Bandung",
        },
        {
            id: 3,
            title: "Corporate Gathering & Product Launch",
            description:
                "Providing exclusive corporate gift sets and event merchandise.",
            date: "October 2024",
            location: "Surabaya",
        },
        {
            id: 4,
            title: "Corporate Gathering & Product Launch",
            description:
                "Providing exclusive corporate gift sets and event merchandise.",
            date: "October 2024",
            location: "Surabaya",
        },
    ];

    return (
        <AuthenticatedLayout>
            <Head title="Events" />

            <main>
                <div className="mb-10 px-20 pt-14 bg-zinc-900 text-white pb-14">
                    <h1 className="text-5xl font-bold mb-3">
                        #Creative{" "}
                        <span className="underline decoration-4 underline-offset-[10px] decoration-white">
                            Events
                        </span>
                    </h1>
                    <p className="text-xl text-zinc-300">
                        Events and activities where our creative products bring
                        brands to life.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-8 px-20 pb-32">
                    {events.map((event) => (
                        <div className="relative">
                            <div className="absolute inset-0 bg-zinc-900 translate-x-2 translate-y-2"></div>
                            <div className="relative hover:rotate-2 h-full border-[3px] border-zinc-900  bg-white hover:shadow-md transition">
                                <img
                                    src="/images/product-test.jpeg"
                                    alt="Event"
                                    className="w-full h-48 object-cover"
                                />

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">
                                        {event.title}
                                    </h3>

                                    <p className="text-sm text-zinc-600 mb-4">
                                        {event.description}
                                    </p>

                                    <div className="text-sm text-zinc-500 mb-5">
                                        <p>{event.date}</p>
                                        <p>{event.location}</p>
                                    </div>

                                    <button className="text-sm font-medium underline underline-offset-4">
                                        View Event
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </AuthenticatedLayout>
    );
}
