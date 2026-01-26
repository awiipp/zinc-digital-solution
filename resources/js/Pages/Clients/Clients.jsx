import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Clients() {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            company: "Tech Innovators Inc.",
            role: "Marketing Director",
            message:
                "Outstanding quality and service! The custom merchandise exceeded our expectations for our annual tech conference.",
            rating: 4,
        },
        {
            id: 2,
            name: "Michael Chen",
            company: "Green Earth Foundation",
            role: "Event Coordinator",
            message:
                "Professional team with great attention to detail. Our eco-friendly tote bags were a huge hit at the sustainability summit.",
            rating: 5,
        },
        {
            id: 3,
            name: "Amanda Williams",
            company: "Startup Hub",
            role: "Community Manager",
            message:
                "Fast turnaround and creative solutions. They helped us create unique swag for our startup pitch event.",
            rating: 5,
        },
        {
            id: 4,
            name: "David Rodriguez",
            company: "Metro Sports Club",
            role: "Brand Manager",
            message:
                "The custom apparel quality is top-notch. Our team members love their branded gear!",
            rating: 5,
        },
        {
            id: 5,
            name: "Lisa Anderson",
            company: "Creative Agency Co.",
            role: "CEO",
            message:
                "Excellent collaboration from start to finish. They understood our vision and delivered perfectly.",
            rating: 2,
        },
        {
            id: 6,
            name: "James Parker",
            company: "University Student Union",
            role: "President",
            message:
                "Great pricing for students and amazing product quality. Highly recommend for any campus event!",
            rating: 5,
        },
    ];

    const clients = [
        "Tech Innovators Inc.",
        "Green Earth Foundation",
        "Startup Hub",
        "Metro Sports Club",
        "Creative Agency Co.",
        "University Student Union",
        "Digital Marketing Pro",
        "Fashion Forward Brands",
    ];

    return (
        <AuthenticatedLayout>
            <Head title="Clients" />

            <main className="min-h-screen bg-zinc-50">
                <div className="px-20 pt-14 bg-zinc-900 text-white pb-14">
                    <h1 className="text-5xl font-bold mb-3">
                        <span className="underline decoration-4 underline-offset-[10px] decoration-white">
                            Trusted
                        </span>{" "}
                        By
                    </h1>
                    <p className="text-xl text-zinc-300">
                        Clients who have trusted us to deliver creative
                        merchandise and event solutions.
                    </p>
                </div>

                <section className="px-20 mt-10 pb-10 bg-white border-zinc-900">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-12 h-1 bg-zinc-900"></div>
                        <h2 className="text-3xl font-bold text-zinc-900">
                            Our Clients
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {clients.map((client, index) => (
                            <div key={index} className="relative group">
                                <div className="absolute inset-0 bg-zinc-900 translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
                                <div className="relative bg-white border-4 border-zinc-900 p-6 h-32 flex items-center justify-center text-center hover:rotate-2 transition-all">
                                    <p className="font-bold text-zinc-900">
                                        {client}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="px-20 pt-16 pb-32">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-12 h-1 bg-zinc-900"></div>
                        <h2 className="text-3xl font-bold text-zinc-900">
                            What Our Clients Say
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <div key={testimonial.id} className="relative">
                                <div className="absolute inset-0 bg-zinc-900 translate-x-1.5 translate-y-1.5"></div>
                                <div
                                    className={`relative h-full bg-white border-4 border-zinc-900 p-6 hover:rotate-0 transition-all ${
                                        index % 2 === 0
                                            ? "rotate-1"
                                            : "-rotate-1"
                                    }`}
                                >
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map(
                                            (_, i) => (
                                                <span
                                                    key={i}
                                                    className="text-zinc-900 text-xl"
                                                >
                                                    ★
                                                </span>
                                            ),
                                        )}
                                    </div>

                                    <p className="text-zinc-700 mb-6 leading-relaxed">
                                        "{testimonial.message}"
                                    </p>

                                    <div className="border-t-2 border-zinc-900 pt-4">
                                        <p className="font-bold text-zinc-900">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-sm text-zinc-600">
                                            {testimonial.role}
                                        </p>
                                        <p className="text-sm text-zinc-500 mt-1">
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </AuthenticatedLayout>
    );
}
