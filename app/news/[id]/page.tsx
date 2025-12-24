"use client";

import { useParams, useRouter } from "next/navigation";
import { easeInOut, motion } from "framer-motion";
import { newspaperData } from "@/lib/NewsPaper";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export default function NewsPage() {
    const params = useParams();
    const router = useRouter();

    const id = Number(params.id);
    const newsItem = newspaperData.find((item) => item.id === id);

    // ❌ notFound() won't work in client component
    if (!newsItem) {
        router.push("/news"); // redirect instead of 404
        return null;
    }

    return (
        <div className="min-h-screen bg-white pb-20 pt-24">

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                <Link
                    href="/"
                    className="inline-flex items-center text-gray-500 hover:text-[#AA00FF] transition-colors mb-6"
                >
                    <ArrowLeft size={20} className="mr-2" />
                    Мэдээ рүү буцах
                </Link>
            </div>

            <motion.article
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeInOut }}
            >
                <header className="mb-10">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                            <Clock size={16} /> 2 min read
                        </span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="text-[#AA00FF] font-semibold">Онцлох мэдээ</span>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 mb-6">
                        {newsItem.title}
                    </h1>
                </header>

                {/* Show all images in the article */}
                <div className="space-y-8 mb-10">
                    {newsItem.src.map((image, index) => (
                        <div
                            key={index}
                            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src={image}
                                alt={`${newsItem.title} - image ${index + 1}`}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>


                <div className="prose prose-lg mx-auto text-gray-700">
                    {newsItem.description.split(". ").map((sentence, index) => (
                        <p key={index}>{sentence}.</p>
                    ))}
                </div>
            </motion.article>
        </div>
    );
}
