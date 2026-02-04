import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Messages({ messages, status }) {
    const activeStatus = status;

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const filterClass = (status) => {
        return `text-sm z-10 w-fit h-fit font-bold px-3 py-1 hover:bg-zinc-900 border-2 border-zinc-900 hover:text-white justify-center items-center gap-3 transition flex ${
            activeStatus === status ? "bg-zinc-900 text-white" : "text-zinc-900"
        }`;
    };

    return (
        <AuthenticatedLayout>
            <Head title="Contact Messages" />

            <main className="px-20 pt-12 pb-14 min-h-screen">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-5xl font-bold">Contact Messages</h1>
                </div>

                <div className="flex gap-3 mb-5 items-end">
                    <Link
                        href={route("messages.index")}
                        className={filterClass("all")}
                        preserveScroll
                    >
                        All
                    </Link>
                    <Link
                        href={route("messages.index", {
                            status: "unread",
                        })}
                        className={filterClass("unread")}
                        preserveScroll
                    >
                        Unread
                    </Link>
                    <Link
                        href={route("messages.index", {
                            status: "readed",
                        })}
                        className={filterClass("readed")}
                        preserveScroll
                    >
                        Readed
                    </Link>
                </div>

                <section className="flex flex-wrap w-full gap-5">
                    {messages.data.length === 0 ? (
                        <div className="relative w-full max-w-2xl mx-auto mt-20">
                            <div className="absolute bg-zinc-400 inset-0 translate-x-2 translate-y-2"></div>
                            <div className="relative bg-white border-4 border-zinc-400 p-12 text-center">
                                <h2 className="text-3xl font-bold text-zinc-400 mb-4">
                                    No Messages Yet
                                </h2>
                                <p className="text-lg text-zinc-400">
                                    You haven’t received any messages from
                                    users. When they do, they’ll appear here.
                                </p>
                            </div>
                        </div>
                    ) : (
                        messages.data.map((message) => (
                            <div className="w-full">
                                <div className="border-[3px] border-zinc-900 px-5 py-3 bg-white">
                                    <div className="flex gap-10 justify-between mb-8">
                                        <div className="flex flex-col">
                                            <h1 className="font-bold text-xl flex items-center">
                                                {message.name}
                                                {!message.read_at && (
                                                    <span className="ml-3 text-xs text-white bg-zinc-900 rounded-full px-2 py-0.5">
                                                        unread
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
                                        <div className="w-[600px] text-sm flex border-l-4 border-zinc-900 rounded px-3 py-1">
                                            <p>{message.message}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        {!message.read_at && (
                                            <Link
                                                href={route(
                                                    "messages.read",
                                                    message.id,
                                                )}
                                                method="put"
                                                as="button"
                                                className="border-2 border-zinc-900 font-medium text-sm px-3 py-1 hover:text-white hover:border-zinc-900 hover:bg-zinc-900 transition"
                                            >
                                                Mark as Read
                                            </Link>
                                        )}
                                        {/* <button className="bg-zinc-900 font-medium text-sm px-3 py-1 text-white hover:bg-zinc-800 transition">
                                            Reply via Email
                                        </button>*/}
                                        <Link
                                            href={route(
                                                "messages.destroy",
                                                message.id,
                                            )}
                                            method="delete"
                                            as="button"
                                            onBefore={() =>
                                                confirm(
                                                    "Are you sure you want to delete this message?",
                                                )
                                            }
                                            className="border-2 border-red-500 hover:bg-red-500 hover:text-white transition font-medium text-sm px-3 py-1"
                                        >
                                            Delete
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </section>

                {messages.last_page > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-10">
                        {messages.links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.url || "#"}
                                preserveScroll
                                className={`
                                    px-3 py-1 border-2 border-zinc-900 font-bold text-sm transition
                                    ${
                                        link.active
                                            ? "bg-zinc-900 text-white"
                                            : "bg-white text-zinc-900 hover:bg-zinc-100"
                                    }
                                    ${!link.url && "opacity-40 pointer-events-none"}
                                `}
                                dangerouslySetInnerHTML={{
                                    __html: link.label,
                                }}
                            />
                        ))}
                    </div>
                )}
            </main>
        </AuthenticatedLayout>
    );
}
