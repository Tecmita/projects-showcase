import React from "react";
import { featuresData } from "../data/featuresData";
import CardContent from "./ui/CardContent";

const Features = () => {
  return (
    <div>
      <div>Featured Luxury Cars</div>
      <div>
        {featuresData.map((item, i) => (
          <div key={i}>
            <CardContent item={item} variant="simple" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
