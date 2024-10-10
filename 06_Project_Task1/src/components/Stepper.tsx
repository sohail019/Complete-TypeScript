import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";

const steps = ["Select Role", "Enter Email", "Set Password"];

interface StepperProps {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  handleStep: (step: number) => void;
  isLastStep: () => boolean;
//   allStepsCompleted: () => boolean;
}

const HorizontalNonLinearStepper: React.FC<StepperProps> = ({
  activeStep,
  handleStep,

//   allStepsCompleted,
}) => {
  return (
    <Box sx={{ width: "100%"}}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} className="mt-4"  >
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default HorizontalNonLinearStepper;
