import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import { AnimatedProgressProvider } from "./AnimatedProgressBarProvider";

const Progressbar = () => {
  return (
    <div className="h-[80px] w-[90px]">
      <AnimatedProgressProvider
        valueStart={0}
        valueEnd={70}
        duration={1.4}
        easingFunction={easeQuadInOut}
        // repeat
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              strokeWidth={14}
              text={`${roundedValue}%`}
              styles={buildStyles({
                pathTransition: "none",
                pathColor: "#6F94FF", // Set the color of the progress path to red
                textColor: "#fff", // Optionally set the color of the text to red
                trailColor: "#2B3365",
              })}
            />
          );
        }}
      </AnimatedProgressProvider>
    </div>
  );
};

export default Progressbar;
