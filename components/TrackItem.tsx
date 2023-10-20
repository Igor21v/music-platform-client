/* eslint-disable @next/next/no-img-element */
import { ITrack } from "@/types/tracks";
import React, { ChangeEvent } from "react";
import { Card, Grid, IconButton } from "@mui/material";
import cls from "../styles/TrackItem.module.scss";
import { Delete, Pause, PlayArrow } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useActions } from "@/hooks/useActions";

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

export default function TrackItem({ track, active = false }: TrackItemProps) {
  const router = useRouter();
  const { playTrack, pauseTrack, setActiveTrack } = useActions();
  const play = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setActiveTrack(track);
    playTrack();
  };
  console.log("track id " + JSON.stringify(track));
  return (
    <Card
      className={cls.track}
      onClick={() => {
        router.push("/tracks/" + track._id);
      }}
    >
      <IconButton onClick={play}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <img
        width={70}
        height={70}
        src={"http://localhost:5000/" + track.picture}
        alt={track.name}
      />
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
      </Grid>
      {active && <div>02:42 / 03:22</div>}
      <IconButton
        onClick={(e) => e.stopPropagation()}
        style={{ marginLeft: "auto" }}
      >
        <Delete />
      </IconButton>
    </Card>
  );
}
