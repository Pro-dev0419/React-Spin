import React from "react";
import { Card } from "reactstrap";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./FeaturedCardItemSkeleton.scss";
const FeaturedCardItemSkeleton = () => {
  return (
    <Card className="custom-card-skeleton">
      <div style={{ padding: "20px" }}>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <div style={{ display: "flex", gap: "20px" }}>
            <Skeleton count={1} width={50} height={20} />
            <Skeleton count={1} width={50} height={20} />
          </div>
          <div style={{ marginTop: "20px" }}>
            <Skeleton height={180} borderRadius="8px" />
          </div>
          <div style={{ marginTop: "20px" }}>
            <h5>
              <Skeleton width="40%" />
            </h5>
            <p>
              <Skeleton width="70%" />
            </p>
          </div>
          <div>
            <Skeleton height={53} />
          </div>
        </SkeletonTheme>
      </div>
    </Card>
  );
};

export default FeaturedCardItemSkeleton;
