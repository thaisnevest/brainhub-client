import * as React from "react";
import Button from "@mui/material/Button";
import { RoomButtonInterface } from "./interface";
import { People } from './../../assets';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['300', '500'],
  subsets: ['latin'],
})

export const RoomButton = ( {title, place, date, time, participants, backgroundcolor} : RoomButtonInterface ) => {
  return (
    <Button className={montserrat.className} variant="contained" sx={{display: 'flex', flexDirection: 'row', gap: '48px', width: '230px', height: '99px', borderRadius: '16px', fontSize: '14px', textTransform: 'none', color: '#292929', backgroundColor: backgroundcolor}}>
      <div style={{display: 'flex', flexDirection: 'column', gap: '2px', textAlign: 'left'}}>
        <div style={{fontWeight: '500'}}>{title}</div>
        <div style={{fontWeight: '300'}}>{place}</div>
        <div style={{fontWeight: '300'}}>{date} | {time}</div>
      </div>
      <div style={{display: 'flex', alignSelf: 'self-end', marginBottom: '5px', gap: '3px', fontWeight: '300'}}>
        {participants}
        <Image src={People} alt="ícone de pessoas"/>
      </div>
    </Button>
  );
}
