import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Events({ events }) {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

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

                <section className="px-20 pb-32">
                    {events.length === 0 ? (
                        <div className="relative max-w-2xl mx-auto mt-20">
                            <div className="absolute bg-zinc-400 inset-0 translate-x-2 translate-y-2"></div>
                            <div className="relative bg-white border-4 border-zinc-400 p-12 text-center">
                                <h2 className="text-3xl font-bold text-zinc-400 mb-4">
                                    No Events Yet
                                </h2>
                                <p className="text-lg text-zinc-400">
                                    We're preparing exciting events for you.
                                    Please check back soon!
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-3 gap-8">
                            {events.map((event) => (
                                <div className="relative h-fit">
                                    <div className="absolute inset-0 bg-zinc-900 translate-x-1.5 translate-y-1.5"></div>
                                    <div className="relative hover:translate-x-1.5 hover:translate-y-1.5 h-full border-[3px] border-zinc-900  bg-white hover:shadow-md transition">
                                        <img
                                            src={`/storage/${event.image}`}
                                            alt={event.title}
                                            className="w-full h-48 object-cover"
                                        />

                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold mb-2">
                                                {event.title}
                                            </h3>

                                            <p className="text-sm text-zinc-600 mb-4">
                                                {event.description}
                                            </p>

                                            <div className="text-sm text-zinc-900 mb-5">
                                                <p>
                                                    {formatDate(
                                                        event.event_date,
                                                    )}
                                                </p>
                                                <p>{event.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </main>
        </AuthenticatedLayout>
    );
}
