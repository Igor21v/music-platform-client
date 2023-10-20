import FileUpload from "@/components/FileUpload";
import StepWrapper from "@/components/StepWrapper";
import { useInput } from "@/hooks/useInput";
import MainLayout from "@/layouts/MainLayout";
import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Create() {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState("");
  const [audio, setAudio] = useState("");
  const router = useRouter();

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    } else {
      const formData = new FormData();
      formData.append("name", name.value);
      formData.append("text", text.value);
      formData.append("artist", artist.value);
      formData.append("picture", picture);
      formData.append("audio", audio);
      axios
        .post("http://localhost:5000/tracks", formData)
        .then((resp) => router.push("/tracks"))
        .catch((e) => console.log(e));
    }
  };
  const back = () => {
    setActiveStep((prev) => prev - 1);
  };
  const name = useInput("");
  const artist = useInput("");
  const text = useInput("");
  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction="column" style={{ padding: 20 }}>
            <TextField
              label="Название трека"
              style={{ marginTop: 10 }}
              {...name}
            />
            <TextField
              label="Имя исполнителя"
              style={{ marginTop: 10 }}
              {...artist}
            />
            <TextField
              multiline
              rows={3}
              label="Слова к треку"
              style={{ marginTop: 10 }}
              {...text}
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
