import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales",
  description:
    "Contact Compulink sales team for IT products and solutions in Zimbabwe. Get quotes for hardware, software, and services.",
};

import MainLayout from "@/components/mainLayout";
import React from "react";
import Hero from "../_components/hero";

function Sales() {
  return (
    <div>
      <Hero backImage="host.webp" image="" />
      <div>Sales</div>
    </div>
  );
}

export default Sales;
