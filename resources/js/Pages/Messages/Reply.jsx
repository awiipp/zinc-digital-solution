import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Reply({ message }) {
    const { data, setData, post } = useForm({
        title: "",
        reply: "",
    });

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("messages.send", message.id));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Reply Message" />

            <main className="px-20 pt-14 min-h-screen">
                <h1 className="text-2xl font-bold">Message</h1>
                <div className="max-w-4xl">
                    <div className="px-5 py-5 bg-white">
                        <div className="flex gap-10 justify-between">
                            <div className="flex flex-col">
                                <h1 className="font-bold text-xl flex items-center">
                                    {message.name}
                                </h1>
                                <p className="font-medium">{message.email}</p>
                                <p className="text-sm font-medium text-zinc-400 mt-1">
                                    {formatDate(message.created_at)}
                                </p>
                            </div>
                            <div className="w-[600px] text-sm flex border-l-4 border-zinc-900 rounded px-3 py-1">
                                <p>{message.message}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className="text-3xl font-bold mb-5 mt-10">Reply Message</h1>

                <section className="max-w-4xl pb-32">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-10"
                    >
                        <div className="flex flex-col">
                            <label className="text-xl font-bold">
                                Email Title
                            </label>
                            <div className="relative">
                                <div className="absolute bg-zinc-900 inset-0 translate-x-1 translate-y-1.5"></div>
                                <input
                                    type="text"
                                    name="title"
                                    className="relative border-2 border-zinc-900 w-full mt-1 focus:border-zinc-700 focus:border-[3px] focus:ring-0"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xl font-bold">
                                Reply Message
                            </label>
                            <div className="relative h-[100px]">
                                <div className="absolute bg-zinc-900 inset-0 translate-x-1 translate-y-2"></div>
                                <textarea
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                        }
                                    }}
                                    name="message"
                                    className="relative border-2 border-zinc-900 w-full mt-1 focus:border-zinc-700 focus:border-[3px] focus:ring-0 h-full"
                                    value={data.reply}
                                    onChange={(e) =>
                                        setData("reply", e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </div>

                        <div className="relative w-fit group">
                            <div className="absolute group-hover:rotate-2 group inset-0 bg-white border-[3px] border-zinc-900 translate-x-2 translate-y-1 z-0"></div>
                            <button
                                type="submit"
                                className="relative z-10 block w-fit text-lg font-bold px-5 py-2 bg-zinc-900 text-white transition rotate-2 group-hover:rotate-0"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </section>
            </main>
        </AuthenticatedLayout>
    );
}
