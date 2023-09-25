import TrackList from "@/components/TrackList";
import MainLayout from "@/layouts/MainLayout";
import { ITrack } from "@/types/tracks";
import { Box, Button, Card, Grid } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export default function Index() {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      id: "1",
      name: "Трек1",
      artist: "Исполнитель 1",
      text: "Any text",
      listens: 5,
      audio:
        "http://localhost:5000/audio/11a148dc-1dfc-40b6-a099-219b81ea3b0a.mp3",
      picture:
        "http://localhost:5000/image/a648e588-fcb7-43d6-a300-4a30127b8c34.jpg",
      comments: [],
    },
    {
      id: "2",
      name: "Трек2",
      artist: "Исполнитель 2",
      text: "Any text2",
      listens: 6,
      audio:
        "http://localhost:5000/audio/11a148dc-1dfc-40b6-a099-219b81ea3b0a.mp3",
      picture:
        "http://localhost:5000/image/a648e588-fcb7-43d6-a300-4a30127b8c34.jpg",
      comments: [],
    },
    {
      id: "3",
      name: "Трек3",
      artist: "Исполнитель 3",
      text: "Any text3",
      listens: 60,
      audio:
        "http://localhost:5000/audio/11a148dc-1dfc-40b6-a099-219b81ea3b0a.mp3",
      picture:
        "http://localhost:5000/image/a648e588-fcb7-43d6-a300-4a30127b8c34.jpg",
      comments: [],
    },
  ];
  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Список треков</h1>
              <Button onClick={() => router.push("tracks/create")}>
                Загрузить
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
}
