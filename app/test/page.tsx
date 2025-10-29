"use client";
import ComparisonMatrix from "../table/components/ComparisonMatrix";
import GridHoverOverlay from "../table/components/GridHoverOverlay";
import MinimalListBadges from "../table/components/MinimalListBadges";
import PricingTableQuantitySelector from "../table/components/PricingTableQuantitySelector";
import TimelineBadges from "../table/components/TimelineBadges";


const page = () => {

  return (
    <div>
      {/* <EcommerceCategorie /> */}
      <PricingTableQuantitySelector />
    </div>
  );
};

export default page;
