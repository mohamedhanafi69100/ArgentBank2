import React from "react";

const FeatureItem = ({ imageSource, imageAlt, title, paragraph }) => {
  return (
    <div className="feature-item">
      <img src={imageSource} alt={imageAlt} className="feature-icon" />
      <h3 className="feature-title">{title}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default FeatureItem;
