"use client";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export type LegalSection = {
    heading: string;
    body: string; // markdown content
};

export default function LegalPage({
    title,
    sections,
}: {
    title: string;
    sections: LegalSection[];
}) {
    return (
        <main className="mx-auto max-w-5xl px-4 py-16">
            <h1 className="text-4xl font-bold mb-12 text-center">{title}</h1>
            {sections.map((s, i) => (
                <motion.section
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-semibold mb-4">{s.heading}</h2>
                    <div className="prose prose-slate dark:prose-invert">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                        >

                            {s.body}
                        </ReactMarkdown>
                    </div>
                </motion.section>
            ))}
        </main>
    );
}