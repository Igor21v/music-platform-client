import { Card, Container, Grid, Step, StepLabel, Stepper } from "@mui/material";
import React, { ReactNode } from "react";

interface StapWrapperProps {
  activeStep: number;
  children: ReactNode;
}

export default function StepWrapper(props: StapWrapperProps) {
  const { activeStep, children } = props;
  const steps = ["Информация о треке", "Загрузите обложку", "Загрузите трек"];
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid
        container
        justifyContent="center"
        style={{ margin: "70px 0", height: 270 }}
      >
        <Card style={{ width: 600 }}>{children}</Card>
      </Grid>
    </Container>
  );
}
