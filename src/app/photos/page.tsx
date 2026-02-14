"use client";

import Image from "next/image";

const images = Array.from({ length: 36 }, (_, i) => `/game-photos/${i + 1}.avif`);

export default function PhotosPage() {
    return (
        <div className="min-h-screen p-8 bg-pink-50">
            <h1 className="text-3xl font-bold text-center mb-8 text-pink-600 font-serif">
                Photo Preview
            </h1>
            <p className="text-center mb-8 text-gray-600">
                Reviewing 18 game images. These will be duplicated to make 36 cards.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {images.map((src, index) => (
                    <div key={src} className="flex flex-col items-center">
                        <div className="relative w-40 h-40 md:w-52 md:h-52 shadow-lg rounded-lg overflow-hidden border-4 border-white">
                            <Image
                                src={src}
                                alt={`Game Photo ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="mt-2 font-mono text-sm text-gray-500">
                            {index + 1}.avif
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
