import { useState } from "react";
import sliceText from "../../../helpers/slice-text";
import RecommendationDialog from "./Recommendation-Dialog/Recommendation-Dialog";
import "./Recommendation.scss";

const Recommendation = ({ recommendationData }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="recommendation">
      <div
        className="recommendation-content app-card"
        onClick={() => !open && setOpen(true)}
      >
        <span className="quotes">"&nbsp;</span>
        {sliceText(recommendationData.text, 150)}
        <span className="quotes">&nbsp;"&nbsp;</span>
      </div>
      <div className="recommendation-author">
        {`${recommendationData.author}, ${recommendationData.role} in ${recommendationData.from} (${recommendationData.date})`}
      </div>
      <RecommendationDialog
        selectedValue={recommendationData}
        open={open}
        onClose={() => open && setOpen(false)}
      />
    </div>
  );
};

export default Recommendation;
