"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function OpeningAnimation() {
    const [showIntro, setShowIntro] = useState(false);
    const [opening, setOpening] = useState(false);

    useEffect(() => {
        const alreadyPlayed = sessionStorage.getItem("arudhi-intro-played");

        if (!alreadyPlayed) {
            setShowIntro(true);

            const openTimer = setTimeout(() => {
                setOpening(true);
            }, 1700);

            const removeTimer = setTimeout(() => {
                setShowIntro(false);
                sessionStorage.setItem("arudhi-intro-played", "true");
            }, 2700);

            return () => {
                clearTimeout(openTimer);
                clearTimeout(removeTimer);
            };
        }
    }, []);

    if (!showIntro) return null;

    return (
        <div
            className={`arudhi-intro ${opening ? "arudhi-intro-opening" : ""}`}
        >
            {/* LEFT CURTAIN */}
            <div className="arudhi-curtain arudhi-curtain-left" />

            {/* RIGHT CURTAIN */}
            <div className="arudhi-curtain arudhi-curtain-right" />

            {/* CENTER CONTENT */}
            <div className="arudhi-intro-content">
                <div className="arudhi-intro-logo">
                    <Image
                        src="/logo.png"
                        alt="RU ARUDHI"
                        width={180}
                        height={180}
                        priority
                    />
                </div>

                <div className="arudhi-gold-line" />

                <h1 className="arudhi-intro-title">
                    RU ARUDHI
                </h1>

                <p className="arudhi-intro-subtitle">
                    Rutgers University
                </p>
            </div>
        </div>
    );
}
