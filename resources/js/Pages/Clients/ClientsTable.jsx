import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FaPlus, FaStar } from "react-icons/fa";

export default function ClientsTable() {
    const clients = [
        {
            id: 1,
            name: "Sarah Johnson",
            company: "Tech Innovators Inc.",
            role: "Marketing Director",
            status: "Pending",
            message:
                "Outstanding quality and service! The custom merchandise exceeded our expectations for our annual tech conference.",
            rating: 4,
        },
        {
            id: 2,
            name: "Michael Chen",
            company: "Green Earth Foundation",
            role: "Event Coordinator",
            status: "Pending",
            message:
                "Professional team with great attention to detail. Our eco-friendly tote bags were a huge hit at the sustainability summit.",
            rating: 5,
        },
        {
            id: 3,
            name: "Amanda Williams",
            company: "Startup Hub",
            role: "Community Manager",
            status: "Pending",
            message:
                "Fast turnaround and creative solutions. They helped us create unique swag for our startup pitch event.",
            rating: 5,
        },
        {
            id: 4,
            name: "David Rodriguez",
            company: "Metro Sports Club",
            role: "Brand Manager",
            status: "Accepted",
            message:
                "The custom apparel quality is top-notch. Our team members love their branded gear!",
            rating: 5,
        },
        {
            id: 5,
            name: "Lisa Anderson",
            company: "Creative Agency Co.",
            role: "CEO",
            status: "Accepted",
            message:
                "Excellent collaboration from start to finish. They understood our vision and delivered perfectly.",
            rating: 2,
        },
        {
            id: 6,
            name: "James Parker",
            company: "University Student Union",
            role: "President",
            status: "Pending",
            message:
                "Great pricing for students and amazing product quality. Highly recommend for any campus event!",
            rating: 5,
        },
    ];

    return (
        <AuthenticatedLayout>
            <Head title="Clients Table" />

            <main className="px-20 pt-12 pb-14 min-h-screen">
                <div className="">
                    <h1 className="text-5xl font-bold">
                        <span className="underline decoration-4 underline-offset-[10px] decoration-zinc-900">
                            Clients
                        </span>{" "}
                        Table
                    </h1>
                </div>

                <section className="mt-10 w-full">
                    <div className="relative w-fit mb-5">
                        <Link
                            href={route("clients.create")}
                            className="relative z-10 w-fit font-bold px-5 py-2 hover:bg-zinc-900 text-zinc-900 border-[3px] border-zinc-900 hover:text-white justify-center items-center gap-3 transition hover:rotate-2 flex"
                        >
                            <FaPlus />
                            New Client
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
                                        Name
                                    </th>
                                    <th className="py-3 w-[150px] border-b-[3px] border-zinc-900">
                                        Company
                                    </th>
                                    <th className="py-3 px-4 border-b-[3px] border-zinc-900">
                                        Message
                                    </th>
                                    <th className="py-3 px-4 border-b-[3px] border-zinc-900">
                                        Rating
                                    </th>
                                    <th className="py-3 px-4 border-b-[3px] border-zinc-900">
                                        Status
                                    </th>
                                    <th className="py-3 w-[200px] border-b-[3px] border-zinc-900">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {clients.map((client, index) => (
                                    <tr key={client.id}>
                                        <td className="text-sm border-b-[3px] border-zinc-900 text-center">
                                            {index + 1}
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 text-center">
                                            {client.name}
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 text-center">
                                            {client.company}
                                        </td>
                                        <td className="text-sm border-b-[3px] border-zinc-900 px-5 py-2">
                                            {client.message}
                                        </td>
                                        <td className="text-sm w-[90px] border-b-[3px] border-zinc-900 px-5">
                                            <div className="flex justify-center flex-wrap w-full gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar
                                                        key={i}
                                                        className={`${
                                                            i < client.rating
                                                                ? "text-zinc-900"
                                                                : "text-zinc-300"
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                        </td>
                                        <td className="text-xs border-b-[3px] border-zinc-900 px-5">
                                            <div>
                                                <div></div>
                                                <div className="text-center border-2 border-zinc-900 px-2 py-1 font-bold">
                                                    {client.status}
                                                </div>
                                            </div>
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
