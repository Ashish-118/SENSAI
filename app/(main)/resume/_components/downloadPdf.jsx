"use client";
import { useEffect } from "react";

export default function DownloadPDF({ contentRef }) {
    const handleDownload = async () => {
        const html2pdf = (await import("html2pdf.js")).default;

        html2pdf()
            .set({ filename: "resume.pdf" })
            .from(contentRef.current)
            .save();
    };

    return (
        <button onClick={handleDownload}>
            Download as PDF
        </button>
    );
}
