import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function CreateArticle() {
    const [preview, setPreview] = useState(null);
    const [excerptLength, setExcerptLength] = useState(0);

    const { data, setData, post } = useForm({
        title: "",
        image: null,
        status: "draft",
        excerpt: "",
        introduction: "",
        body: "",
        conclusion: "",
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                setPreview(reader.result);
            };

            reader.readAsDataURL(file);

            setData("image", file);
        }
    };

    const handleExcerptChange = (e) => {
        const value = e.target.value;

        setData("excerpt", value);
        setExcerptLength(value.length);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("articles.store"), {
            forceFormData: true,
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Create Article" />

            <main className="px-20 pt-14 min-h-screen">
                <h1 className="text-4xl font-bold mb-10">Create New Article</h1>

                <section className="max-w-4xl pb-32">
                    <form
                        className="flex flex-col gap-10"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col">
                            <label className="text-xl font-bold">Title</label>
                            <div className="relative">
                                <div className="absolute bg-zinc-900 inset-0 translate-x-1.5 translate-y-2"></div>
                                <input
                                    type="text"
                                    name="title"
                                    className="relative border-2 border-zinc-900 w-full mt-1 focus:border-zinc-900 focus:border-[3px] focus:ring-0"
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
                                Thumbnail
                            </label>

                            {preview && (
                                <img
                                    src={preview}
                                    className="w-[430px] h-[250px] object-cover mt-2 border-[3px] border-zinc-900"
                                />
                            )}

                            <div className="relative mt-3">
                                <div className="absolute bg-zinc-900 inset-0 translate-x-1.5 translate-y-2"></div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    name="image"
                                    onChange={handleImageChange}
                                    className="relative border-2 border-zinc-900 w-full mt-1 focus:border-zinc-900 focus:border-[3px] focus:ring-0 bg-white file:py-2 file:px-3 file:font-bold file:border-0 file:bg-zinc-900 file:text-white file:hover:cursor-pointer"
                                    required
                                />
                            </div>
                            <p className="text-xs text-zinc-600 mt-4">
                                Max file size: 2MB. Formats: JPG, PNG, GIF
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xl font-bold">Status</label>
                            <div className="relative">
                                <div className="absolute bg-zinc-900 inset-0 translate-x-1.5 translate-y-2"></div>
                                <select
                                    className="relative w-full mt-1 border-2 border-zinc-900 appearance-none focus:outline-none focus:ring-0 focus:border-zinc-900 focus:border-[3px]"
                                    name="status"
                                    value={data.status}
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                    required
                                >
                                    <option
                                        className="focus:border-y-zinc-900 focus:border-[3px] focus:ring-0"
                                        value="draft"
                                    >
                                        Draft
                                    </option>
                                    <option
                                        className="focus:border-y-zinc-900 focus:border-[3px] focus:ring-0"
                                        value="published"
                                    >
                                        Published
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xl font-bold">
                                Excerpt{" "}
                                <span className="text-xs text-zinc-900 font-regular">
                                    (recomended excerpt length is 200 chars.
                                    Currently: {excerptLength})
                                </span>
                            </label>
                            <div className="relative h-[120px]">
                                <div className="absolute bg-zinc-900 inset-0 translate-x-2 translate-y-3"></div>
                                <textarea
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                        }
                                    }}
                                    name="excerpt"
                                    className="relative border-2 border-zinc-900 w-full mt-1 focus:border-zinc-900 focus:border-[3px] focus:ring-0 h-full resize-none"
                                    value={data.excerpt}
                                    onChange={handleExcerptChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xl font-bold">
                                Introduction{" "}
                                <span className="text-xs font-regular">
                                    (optional)
                                </span>
                            </label>
                            <div className="relative h-[120px]">
                                <div className="absolute bg-zinc-900 inset-0 translate-x-2 translate-y-3"></div>
                                <textarea
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                        }
                                    }}
                                    name="introduction"
                                    className="relative border-2 border-zinc-900 w-full mt-1 focus:border-zinc-900 focus:border-[3px] focus:ring-0 h-full resize-none"
                                    value={data.introduction}
                                    onChange={(e) =>
                                        setData("introduction", e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xl font-bold">
                                Article Body
                            </label>
                            <div className="relative h-[120px]">
                                <div className="absolute bg-zinc-900 inset-0 translate-x-2 translate-y-3"></div>
                                <textarea
                                    name="body"
                                    className="relative border-2 border-zinc-900 w-full mt-1 focus:border-zinc-900 focus:border-[3px] focus:ring-0 h-full resize-none"
                                    value={data.body}
                                    onChange={(e) =>
                                        setData("body", e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xl font-bold">
                                Conclusion{" "}
                                <span className="text-xs font-regular">
                                    (optional)
                                </span>
                            </label>
                            <div className="relative h-[120px]">
                                <div className="absolute bg-zinc-900 inset-0 translate-x-2 translate-y-3"></div>
                                <textarea
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                        }
                                    }}
                                    name="conclusion"
                                    className="relative border-2 border-zinc-900 w-full mt-1 focus:border-zinc-900 focus:border-[3px] focus:ring-0 h-full resize-none"
                                    value={data.conclusion}
                                    onChange={(e) =>
                                        setData("conclusion", e.target.value)
                                    }
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
                </section>
            </main>
        </AuthenticatedLayout>
    );
}
