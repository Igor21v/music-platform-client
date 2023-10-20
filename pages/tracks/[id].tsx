/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/layouts/MainLayout";
import { ITrack } from "@/types/tracks";
import { Button, Grid, TextField } from "@mui/material";

import { useRouter } from "next/router";
import React from "react";

export default function TrackPage() {
  const router = useRouter();
  const track: ITrack = {
    _id: "1",
    name: "Трек1",
    artist: "Исполнитель 1",
    text: "Any text",
    listens: 5,
    audio:
      "http://localhost:5000/audio/11a148dc-1dfc-40b6-a099-219b81ea3b0a.mp3",
    picture:
      "http://localhost:5000/image/a648e588-fcb7-43d6-a300-4a30127b8c34.jpg",
    comments: [],
  };
  return (
    <MainLayout>
      <Button
        variant="outlined"
        style={{ fontSize: 32 }}
        onClick={() => router.push("/tracks")}
      >
        К списку
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img width={200} height={200} src={track.picture} alt={track.name} />
        <div style={{ margin: "20px 0" }}>
          <h1>Название трека - {track.name}</h1>
          <h1>Исполнитель - {track.artist}</h1>
          <h1>Прослушиваний - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова в треке</h1>
      <p>{track.text}</p>
      <h1>Комментарии</h1>
      <Grid container>
        <TextField label="Ваше имя" fullWidth />
        <TextField label="Комментарий" fullWidth multiline rows={4} />
        <Button>Отправить</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div key={comment.id}>
            <div>Автор - {comment.username}</div>
            <div>Комментарий - {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
