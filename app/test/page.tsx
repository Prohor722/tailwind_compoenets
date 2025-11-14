import AccessControlMatrix from "../table/components/AccessControlMatrix";
import EventLogSeverity from "../table/components/EventLogSeverity";
import FinancialSummarySparklines from "../table/components/FinancialSummarySparklines";
import ProjectTimelineGanttstyle from "../table/components/ProjectTimelineGanttstyle";
import TeamPerformanceMatrix from "../table/components/TeamPerformanceMatrix";

const page = () => {

  return (
    <div>
      {/* <EcommerceCategorie /> */}
      <EventLogSeverity />
    </div>
  );
};

export default page;
