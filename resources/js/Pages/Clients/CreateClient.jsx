import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function CreateClient() {
    const { data, setData, post } = useForm({
        name: "",
        company: "",
        role: "",
        rating: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("clients.store"));
    };

    return (
        <AuthenticatedLayout>
            <Head title="Create Review" />

            <main className="px-20 pt-14 min-h-screen">
                <h1 className="text-4xl font-bold mb-10">Create Review</h1>

                <section className="max-w-4xl pb-32">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-10"
                    >
                        <div className="flex flex-col">
                            <label className="text-xl font-bold">
                                Client Name
                            </label>
                            <div className="relative">
                                <div className="absolute bg-zinc-900 inset-0 translate-x-1.5 translate-y-2"></div>
                                <input
                                    type="text"
                                    name="name"
                                    className="relative border-2 border-zinc-900 w-full mt-1 focus:border-zinc-700 focus:border-[3px] focus:ring-0"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex gap-14">
                            <div className="flex flex-col flex-1">
                                <label className="text-xl font-bold">
                                    Company
                                </label>
                                <div className="relative">
                                    <div className="absolute bg-zinc-900 inset-0 translate-x-1.5 translate-y-2"></div>
                                    <input
                                        type="text"
                                        name="company"
                                        className="relative border-2 border-zinc-900 w-full mt-1 focus:border-zinc-700 focus:border-[3px] focus:ring-0"
                                        value={data.company}
                                        onChange={(e) =>
                                            setData("company", e.target.value)
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col flex-1">
                                <label className="text-xl font-bold">
                                    Client Role
                                    <span className="text-xs font-regular ml-1">
                                        (optional)
                                    </span>
                                </label>
                                <div className="relative">
                                    <div className="absolute bg-zinc-900 inset-0 translate-x-1.5 translate-y-2"></div>
                                    <input
                                        type="text"
                                        name="role"
                                        className="relative border-2 border-zinc-900 w-full mt-1 focus:border-zinc-700 focus:border-[3px] focus:ring-0"
                                        value={data.role}
                                        onChange={(e) =>
                                            setData("role", e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xl font-bold">Rating</label>
                            <div className="flex gap-2 mt-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setData("rating", star)}
                                        className="text-4xl focus:outline-none transition-colors"
                                    >
                                        <span
                                            className={
                                                star <= data.rating
                                                    ? "text-zinc-900"
                                                    : "text-gray-300"
                                            }
                                        >
                                            ★
                                        </span>
                                    </button>
                                ))}
                            </div>
                            {data.rating > 0 && (
                                <span className="text-sm text-gray-600 mt-1">
                                    {data.rating} / 5 stars
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col -mt-5">
                            <label className="text-xl font-bold">
                                Review Message
                            </label>
                            <div className="relative h-[100px]">
                                <div className="absolute bg-zinc-900 inset-0 translate-x-2 translate-y-3"></div>
                                <textarea
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                        }
                                    }}
                                    name="message"
                                    className="relative border-2 border-zinc-900 w-full mt-1 focus:border-zinc-700 focus:border-[3px] focus:ring-0 h-full"
                                    value={data.message}
                                    onChange={(e) =>
                                        setData("message", e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <p className="text-sm mt-7 font-medium">
                                (Your review has a chance to be featured on our
                                Clients & Reviews page)
                            </p>
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
