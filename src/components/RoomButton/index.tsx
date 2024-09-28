import * as React from "react";
import Button from "@mui/material/Button";
import { RoomButtonInterface } from "./interface";

export const RoomButton = ( {title, place, dateandtime, participants} : RoomButtonInterface ) => {
  return (
    <Button variant="contained" sx={{display: 'flex', flexDirection: 'column'}}>
      <div>{title}</div>
      <div>{place}</div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        {dateandtime}
        {participants}
      </div>
    </Button>
  );
}
