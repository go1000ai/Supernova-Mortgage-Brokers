import type { Metadata } from "next";
import FirstTimeHomeBuyersClient from "./first-time-home-buyers-client";

export const metadata: Metadata = {
  title: "First-Time Homebuyer DPA Prequalification | Supernova Mortgage Brokers",
  description:
    "Find out which Florida down payment assistance program you qualify for. Up to $80,000 in assistance — Orange County DPA, Osceola DPA, Florida Bond, Chenoa Fund.",
};

export default function Page() {
  return <FirstTimeHomeBuyersClient />;
}
