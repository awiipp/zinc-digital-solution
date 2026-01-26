import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function CreateProduct() {
    const [preview, setPreview] = useState(null);

    // Handler untuk preview image - MUDAH DIINGAT!
    const handleImageChange = (e) => {
        const file = e.target.files[0]; // 1. Ambil file pertama

        if (file) {
            const reader = new FileReader(); // 2. Buat FileReader
            reader.onload = () => {
                setPreview(reader.result); // 4. Set preview saat selesai
            };
            reader.readAsDataURL(file); // 3. Baca file sebagai URL
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Create Product" />
            <main className="px-20 pt-14 min-h-screen bg-zinc-50">
                <h1 className="text-4xl font-bold mb-8">Create New Product</h1>

                <section className="max-w-2xl">
                    <div className="space-y-6">
                        {/* Product Name */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold">
                                Product Name
                            </label>
                            <input
                                type="text"
                                className="border-2 border-zinc-900 rounded-md px-4 py-2"
                                placeholder="Enter product name"
                            />
                        </div>

                        {/* Image Upload */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold">
                                Product Image
                            </label>

                            {/* Preview Image */}
                            {preview && (
                                <div className="relative mb-4">
                                    <div className="absolute inset-0 bg-zinc-900 translate-x-1 translate-y-1"></div>
                                    <img
                                        src={preview}
                                        alt="Preview"
                                        className="relative w-full h-64 object-cover border-4 border-zinc-900"
                                    />
                                </div>
                            )}

                            {/* File Input */}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="border-2 border-zinc-900 rounded-md px-4 py-2 bg-white file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-zinc-900 file:text-white file:font-semibold hover:file:bg-zinc-800"
                            />
                            <p className="text-xs text-zinc-600">
                                Max file size: 2MB. Formats: JPG, PNG, GIF
                            </p>
                        </div>

                        {/* Description */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold">
                                Description
                            </label>
                            <textarea
                                rows="4"
                                className="border-2 border-zinc-900 rounded-md px-4 py-2 resize-none"
                                placeholder="Enter product description"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-zinc-900 translate-x-1.5 translate-y-1.5"></div>
                            <button
                                type="button"
                                className="relative bg-white border-4 border-zinc-900 px-8 py-3 font-bold hover:-rotate-1 transition-all"
                            >
                                Create Product
                            </button>
                        </div>
                    </div>
                </section>

                {/* Penjelasan Kode - Untuk Belajar */}
                <section className="max-w-2xl mt-12 p-6 bg-white border-2 border-zinc-300 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">
                        📚 Cara Kerja Image Preview:
                    </h2>
                    <div className="space-y-3 text-sm">
                        <div className="flex gap-3">
                            <span className="font-bold text-zinc-900 flex-shrink-0">
                                1.
                            </span>
                            <p>
                                <code className="bg-zinc-100 px-2 py-1 rounded">
                                    e.target.files[0]
                                </code>{" "}
                                - Ambil file yang diupload
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="font-bold text-zinc-900 flex-shrink-0">
                                2.
                            </span>
                            <p>
                                <code className="bg-zinc-100 px-2 py-1 rounded">
                                    new FileReader()
                                </code>{" "}
                                - Buat pembaca file
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="font-bold text-zinc-900 flex-shrink-0">
                                3.
                            </span>
                            <p>
                                <code className="bg-zinc-100 px-2 py-1 rounded">
                                    reader.readAsDataURL(file)
                                </code>{" "}
                                - Konversi file jadi URL
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="font-bold text-zinc-900 flex-shrink-0">
                                4.
                            </span>
                            <p>
                                <code className="bg-zinc-100 px-2 py-1 rounded">
                                    reader.onload
                                </code>{" "}
                                - Saat selesai, simpan ke state
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <span className="font-bold text-zinc-900 flex-shrink-0">
                                5.
                            </span>
                            <p>
                                <code className="bg-zinc-100 px-2 py-1 rounded">
                                    setPreview(reader.result)
                                </code>{" "}
                                - Tampilkan preview
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </AuthenticatedLayout>
    );
}
