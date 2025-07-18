import React from "react";

import ProjectRakshakHero from "../components/ProjectRakshak/ProjectRakshakHero";
import AboutProjectRakshak from "../components/ProjectRakshak/AboutProjectRakshak";
import ProtectorJourney from "../components/ProjectRakshak/ProtectorJourney";
import EligibilityCriteria from "../components/ProjectRakshak/EligibilityCriteria";
import SelectionProcess from "../components/ProjectRakshak/SelectionProcess";
import ReadyToJoinSection from "../components/ProjectRakshak/ReadyToJoinSection";
import HaveQuestionsSection from "../components/ProjectRakshak/HaveQuestionSection";

export default function ProjectRakshak() {
  return (
    <div>
        <ProjectRakshakHero />
        <AboutProjectRakshak />
        <ProtectorJourney />
        <EligibilityCriteria />
        <SelectionProcess />
        <ReadyToJoinSection />
        <HaveQuestionsSection />
    </div>
  );
}
