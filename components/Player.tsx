import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { ITrack } from "@/types/tracks";
import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import cls from "../styles/Player.module.scss";
import TrackProgress from "./TrackProgress";

let audio: HTMLAudioElement;

export default function Player() {
  const { active, currentTime, duration, pause, volume } = useTypedSelector(
    (state) => state.player
  );
  const {
    playTrack,
    pauseTrack,
    setVolume,
    setCurrentTime,
    setDuration,
    setActiveTrack,
  } = useActions();
  useEffect(() => {
    if (!audio) {
      audio = new Audio();
      audio.src = track.audio;
    }
  });
  const play = () => {
    if (pause) {
      playTrack();
      audio.play();
      audio.volume = volume / 100;
    } else {
      pauseTrack();
      audio.pause();
    }
  };
  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
    audio.volume = Number(e.target.value) / 100;
  };

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
  return (
    <div className={cls.player}>
      <IconButton onClick={play}>
        {!pause ? <Pause /> : <PlayArrow />}
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
      <TrackProgress left={volume} right={100} onChange={changeVolume} />
    </div>
  );
}
