import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import {
    FaEnvelope,
    FaFacebookSquare,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Contact" />

            <main className="mb-32">
                <section className="flex justify-center mt-[90px] gap-16">
                    <div className="">
                        <h1 className="text-5xl font-bold mb-2">
                            Get in Touch
                        </h1>
                        <h2 className="text-xl font-bold mb-3">
                            I'd like to hear from you!
                        </h2>
                        <p className="text-xl w-[360px] mb-3">
                            If you have any inquiries or just want to say hi,
                            please use the contact form!
                        </p>
                        <div className="flex flex-col gap-5">
                            <div className="flex justify-start gap-3 text-base items-center">
                                <FaInstagram className="text-xl" />
                                <span>@zinccreative</span>
                            </div>
                            <div className="flex justify-start gap-3 text-base items-center">
                                <FaLinkedin className="text-xl" />
                                <span>@Zinccreativestudio</span>
                            </div>
                            <div className="flex justify-start gap-3 text-base items-center">
                                <FaFacebookSquare className="text-xl" />
                                <span>Zinc Creative Studio</span>
                            </div>
                            <div className="flex justify-start gap-3 text-base items-center">
                                <FaEnvelope className="text-xl" />
                                <span>zinccreativestudio@zinc.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-[400px]">
                        <form
                            className="flex flex-col gap-5"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-col">
                                <label>Name</label>
                                <div className="relative">
                                    <div className="absolute bg-zinc-900 inset-0 translate-x-1.5 translate-y-2"></div>
                                    <input
                                        type="text"
                                        className="relative border-2 border-zinc-900 w-full mt-1 focus:border-zinc-700 focus:border-[3px] focus:ring-0"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                name: e.target.value,
                                            })
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label>Email</label>
                                <div className="relative">
                                    <div className="absolute bg-zinc-900 inset-0 translate-x-1.5 translate-y-2"></div>
                                    <input
                                        type="email"
                                        className="relative border-2 border-zinc-900 w-full mt-1 focus:border-zinc-700 focus:border-[3px] focus:ring-0"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                email: e.target.value,
                                            })
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label>Message</label>
                                <div className="relative">
                                    <div className="absolute bg-zinc-900 inset-1 translate-x-2.5 translate-y-1.5"></div>
                                    <textarea
                                        className="relative border-2 border-zinc-900 w-full mt-1 focus:border-zinc-700 focus:border-[3px] focus:ring-0"
                                        value={data.message}
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                message: e.target.value,
                                            })
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            <div className="relative w-fit group mt-2">
                                <div className="absolute group-hover:rotate-2 group inset-0 bg-white border-[3px] border-zinc-900 translate-x-2 translate-y-1 z-0"></div>
                                <button
                                    type="submit"
                                    className="relative z-10 block w-fit text-lg font-bold px-5 py-2 bg-zinc-900 text-white transition rotate-2 group-hover:rotate-0"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </AuthenticatedLayout>
    );
}
