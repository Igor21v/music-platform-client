import FileUpload from "@/components/FileUpload";
import StepWrapper from "@/components/StepWrapper";
import MainLayout from "@/layouts/MainLayout";
import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Create() {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);
  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    }
  };
  const back = () => {
    setActiveStep((prev) => prev - 1);
  };
  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction="column" style={{ padding: 20 }}>
            <TextField label="Название трека" style={{ marginTop: 10 }} />
            <TextField label="Имя исполнителя" style={{ marginTop: 10 }} />
            <TextField
              multiline
              rows={3}
              label="Слова к треку"
              style={{ marginTop: 10 }}
            />
          </Grid>
        )}
        {activeStep === 1 && (
          <h1>
            <FileUpload setFile={setPicture} accept="image/*">
              <Button>Загрузить изображение</Button>
            </FileUpload>
          </h1>
        )}
        {activeStep === 2 && (
          <h1>
            <FileUpload setFile={setAudio} accept="audio/*">
              <Button>Загрузить аудио</Button>
            </FileUpload>
          </h1>
        )}
      </StepWrapper>
      <Grid container justifyContent="space-between">
        <Button disabled={activeStep === 0} onClick={back}>
          Назад
        </Button>
        <Button onClick={next}>Далее</Button>
      </Grid>
    </MainLayout>
  );
}
