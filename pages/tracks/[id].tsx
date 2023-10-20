/* eslint-disable @next/next/no-img-element */
import { useInput } from "@/hooks/useInput";
import MainLayout from "@/layouts/MainLayout";
import { ITrack } from "@/types/tracks";
import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface TrackPageProps {
  serverTrack: ITrack;
}

export default function TrackPage({ serverTrack }: TrackPageProps) {
  const [track, setTrack] = useState(serverTrack);
  const router = useRouter();
  const username = useInput("");
  const text = useInput("");
  console.log(track.comments);
  const addComment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/tracks/comment",
        {
          username: username.value,
          text: text.value,
          trackId: track._id,
        }
      );
      setTrack({ ...track, comments: [...track.comments, response.data] });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainLayout
      title={track.name + " - " + track.artist + " - Музыкальная площадка"}
    >
      <Button
        variant="outlined"
        style={{ fontSize: 32 }}
        onClick={() => router.push("/tracks")}
      >
        К списку
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img
          width={200}
          height={200}
          src={"http://localhost:5000/" + track.picture}
          alt={track.name}
        />
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
        <TextField label="Ваше имя" fullWidth {...username} />
        <TextField label="Комментарий" fullWidth multiline rows={4} {...text} />
        <Button onClick={addComment}>Отправить</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div key={comment._id}>
            <div>Автор - {comment.username}</div>
            <div>Комментарий - {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.get(
    "http://localhost:5000/tracks/" + params?.id
  );
  return {
    props: {
      serverTrack: response.data,
    },
  };
};
