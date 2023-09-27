import { ITrack } from "@/types/tracks";
import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import React from "react";
import cls from "../styles/Player.module.scss";
import TrackProgress from "./TrackProgress";

export default function Player() {
  const track: ITrack = {
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
  };
  const active = false;
  return (
    <div className={cls.player}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={0} onChange={() => {}} />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress left={0} right={0} onChange={() => {}} />
    </div>
  );
}
