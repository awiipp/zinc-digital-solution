import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FaPlus } from "react-icons/fa";

export default function EventsTable() {
    const events = [
        {
            id: 1,
            image: "/images/product-test.jpeg",
            title: "Brand Activation Expo 2024",
            description:
                "We supported this event with custom merchandise and on-site branding solutions.",
            date: "March 2024",
            location: "Jakarta",
        },
        {
            id: 2,
            image: "/images/product-test.jpeg",
            title: "Creative Market Festival",
            description:
                "Showcasing our creative merchandise and collaborating with local brands.",
            date: "July 2024",
            location: "Bandung",
        },
        {
            id: 3,
            image: "/images/product-test.jpeg",
            title: "Corporate Gathering & Product Launch",
            description:
                "Providing exclusive corporate gift sets and event merchandise.",
            date: "October 2024",
            location: "Surabaya",
        },
        {
            id: 4,
            image: "/images/product-test.jpeg",
            title: "Corporate Gathering & Product Launch",
            description:
                "Providing exclusive corporate gift sets and event merchandise.",
            date: "October 2024",
            location: "Surabaya",
        },
    ];

    return (
        <AuthenticatedLayout>
            <Head title="Events Table" />

            <main className="px-20 pt-12 pb-14 min-h-screen">
                <div className="">
                    <h1 className="text-5xl font-bold">
                        <span className="underline decoration-4 underline-offset-[10px] decoration-zinc-900">
                            Events
                        </span>{" "}
                        Table
                    </h1>
                </div>

                <section className="mt-10 w-full">
                    <div className="relative w-fit mb-5">
                        <Link
                            href={route("events.create")}
                            className="relative z-10 w-fit font-bold px-5 py-2 hover:bg-zinc-900 text-zinc-900 border-[3px] border-zinc-900 hover:text-white justify-center items-center gap-3 transition hover:rotate-2 flex"
                        >
                            <FaPlus />
                            New Event
                        </Link>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-zinc-900 translate-x-2 translate-y-2"></div>
                        <table className="relative w-full bg-white border-[4px] border-zinc-900">
                            <thead>
                                <tr>
                                    <th className="py-3 w-[50px] border-b-[3px] border-zinc-900">
                                        #
                                    </th>
                                    <th className="py-3 w-[150px] border-b-[3px] border-zinc-900">
                                        Image
                                    </th>
                                    <th className="py-3 w-[150px] border-b-[3px] border-zinc-900">
                                        Title
                                    </th>
                                    <th className="py-3 px-4 border-b-[3px] border-zinc-900">
                                        Description
                                    </th>
                                    <th className="py-3 w-[200px] border-b-[3px] border-zinc-900">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.map((event, index) => (
                                    <tr key={event.id}>
                                        <td className="text-sm border-b-[3px] border-zinc-900 text-center">
                                            {index + 1}
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 py-3">
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                className="border-[3px] border-zinc-900 h-20 w-[130px] object-cover mx-auto"
                                            />
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 text-center">
                                            {event.title}
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 px-5">
                                            {event.description}
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 px-5"></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </AuthenticatedLayout>
    );
}
