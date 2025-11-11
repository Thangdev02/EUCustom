"use client";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import ServicesSidebar from "../components/Diensten/ServicesSidebar";

export default function DynamicContentPage({ pageData, imageSrc = "/container.jpg", imageAlt = "Image" }) {
    useEffect(() => {
        const sr = ScrollReveal({
            origin: "bottom",
            distance: "40px",
            duration: 1000,
            delay: 200,
            easing: "ease-in-out",
            reset: false,
        });

        sr.reveal(".dynamic-title", { delay: 200, interval: 200 });
        sr.reveal(".dynamic-text", { delay: 400, interval: 100 });
        sr.reveal(".dynamic-image", { delay: 600, origin: "left" });
        sr.reveal(".sidebar", { delay: 600, origin: "right" });

        return () => sr.destroy();
    }, []);

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
                {/* LEFT CONTENT */}
                <div className="md:col-span-2 space-y-8">
                    {pageData.sections.map((section, index) => (
                        <div key={index} className="space-y-4">
                            <h2 className={`dynamic-title font-bold text-[#f2692a] ${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                                {section.title}
                            </h2>
                            <div
                                className="dynamic-text text-gray-700 leading-relaxed space-y-3"
                                dangerouslySetInnerHTML={{ __html: section.content }}
                            />
                        </div>
                    ))}

                    {/* Optional Image at the end */}
                    {imageSrc && (
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="dynamic-image rounded-lg shadow-md w-full mt-8"
                        />
                    )}
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="sidebar">
                    <ServicesSidebar />
                </div>
            </div>
        </section>
    );
}