import type { Metadata } from "next";
import ToolsPageClient from "./tools-client";

export const metadata: Metadata = {
    title: "Mortgage Calculators & Tools | Supernova Mortgage Brokers",
    description:
        "Use our free mortgage calculators to estimate monthly payments, see how much home you can afford, and compare refinancing options. Powered by Supernova Mortgage Brokers, NMLS #1880516.",
    keywords: [
        "mortgage calculator",
        "home affordability calculator",
        "refinance calculator",
        "monthly payment calculator",
        "mortgage tools",
        "Supernova Mortgage Brokers",
    ],
};

export default function ToolsPage() {
    return <ToolsPageClient />;
}
