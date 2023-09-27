import React, { ChangeEvent } from "react";

interface TrackProgressProps {
  left: number;
  right: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function TrackProgress(props: TrackProgressProps) {
  const { left, right, onChange } = props;
  return (
    <div style={{ display: "flex" }}>
      <input
        type="range"
        min={left}
        max={right}
        value={left}
        onChange={onChange}
      />
      <div>
        {left}/{right}
      </div>
    </div>
  );
}
