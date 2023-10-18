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
    } else {
      setAudio();
      if (active) {
        playTrack();
        audio.play();
        audio.volume = volume / 100;
      }
    }
  }, [active]);

  const setAudio = () => {
    if (active) {
      audio.src = active.audio;
      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration));
      };
      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime));
      };
    }
  };

  const play = () => {
    console.log(pause);
    if (pause) {
      playTrack();
      audio.play();
    } else {
      pauseTrack();
      audio.pause();
    }
  };
  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
    audio.volume = Number(e.target.value) / 100;
  };
  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value));
    audio.currentTime = Number(e.target.value);
  };

  if (!active) {
    return null;
  }

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
        <div>{active?.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{active?.artist}</div>
      </Grid>
      <TrackProgress
        left={currentTime}
        right={duration}
        onChange={changeCurrentTime}
      />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress left={volume} right={100} onChange={changeVolume} />
    </div>
  );
}
