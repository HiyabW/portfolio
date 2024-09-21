import * as React from "react";
import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import CircularProgress from "@mui/joy/CircularProgress";
import { useCountUp } from "use-count-up";

const CircularProgressBar = ({percentage}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [buttonLabel, setButtonLabel] = React.useState("Start");

  const { value: value1, reset: resetValue1 } = useCountUp({
    isCounting: isLoading,
    duration: 1,
    start: 0,
    end: 25,
    onComplete: () => {
      setIsLoading(false);
      setButtonLabel("Reset");
    },
  });

  const { value: value2, reset } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: percentage,
  });

  const handleButtonClick = () => {
    if (isLoading) {
      setIsLoading(false);
      setButtonLabel("Start");
      resetValue1();
    } else if (buttonLabel === "Reset") {
      setButtonLabel("Start");
      resetValue1();
    } else {
      setIsLoading(true);
      setButtonLabel("Reset");
    }
  };

  return (
    <>
      <CircularProgress thickness={20} sx={{'--CircularProgress-size': '200px'}} determinate value={value2}>
        <h3>{value2}%</h3>
      </CircularProgress>
    </>
  );
};

export default CircularProgressBar;
