"use client";
import React, { useEffect, useState } from "react";
import LayoutStyle7 from "@/components/Layouts/LayoutStyle7";
import ProjectDetailsContent from "@/components/project/ProjectDetailsContent";
import Project1Data from "@/assets/jsonData/project/Project1Data.json";
import Project2Data from "@/assets/jsonData/project/Project2Data.json";

export default function ProjectDetailsPage({ params }) {
  const { id } = params;
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadEvent() {
      try {
        const res = await fetch(`/api/events/${id}`);
        const result = await res.json();
        if (result.success && result.data) {
          setEventData(result.data);
          setLoading(false);
          return;
        }
      } catch (err) {
        console.warn("Could not fetch event from API, trying fallback:", err);
      }

      // Fallback from Project1Data or Project2Data
      const foundIn1 = Project1Data.find((p) => p.id === parseInt(id));
      const foundIn2 = Project2Data.find((p) => p.id === parseInt(id));
      const fallback = foundIn1 || foundIn2 || {
        id,
        title: "Pelatihan & Event Fasel Consulting",
        thumbFull: "faseldrone.jpg",
        description: "Program pelatihan dan experiential learning dari Fasel Consulting.",
      };

      setEventData(fallback);
      setLoading(false);
    }
    loadEvent();
  }, [id]);

  if (loading) {
    return (
      <LayoutStyle7 breadCrumb="Event" title="Memuat Rincian Event...">
        <div className="container py-5 text-center">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      </LayoutStyle7>
    );
  }

  return (
    <LayoutStyle7 breadCrumb="Event" title={eventData?.title || "Rincian Pelatihan & Event"}>
      <ProjectDetailsContent projectInfo={eventData} />
    </LayoutStyle7>
  );
}