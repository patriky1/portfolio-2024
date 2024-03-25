import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="white"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function CircularWithValueLabel({value= 0 ,stuckName}) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(value);
    }, 3000); 

    return () => {
      clearTimeout(timer); 
    };
  }, [value]);

  React.useEffect(() => {
    const clearProgress = () => {
      setProgress(0); 
    };

    const timer = setTimeout(() => {
      clearProgress();
      setTimeout(() => {
        setProgress(value);
      }, 3000);
    }, 8000);

    return () => {
      clearTimeout(timer); 
    };
  }, [progress, value]);

  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <CircularProgressWithLabel value={progress} className="slider" color="success" />
        <span className="text-white mt-2">{stuckName}</span>
      </div>
    </>
  )
}
