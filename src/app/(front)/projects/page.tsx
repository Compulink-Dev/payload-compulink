import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Compulink's technology projects and successful implementations across Zimbabwe.",
};

import MainLayout from "@/components/mainLayout";
import React from "react";
import Hero from "../_components/hero";

function Projects() {
  return (
    <div>
      <Hero backImage="host.webp" image="" />
      <div className="p-8">Projects</div>
    </div>
  );
}

export default Projects;
