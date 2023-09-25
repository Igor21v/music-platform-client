import { ITrack } from "@/types/tracks";
import { Box, Grid } from "@mui/material";
import React from "react";
import TrackItem from "./TrackItem";

interface TrackListProps {
  tracks: ITrack[];
}

export default function TrackList({ tracks }: TrackListProps) {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem key={track.id} track={track} />
        ))}
      </Box>
    </Grid>
  );
}
