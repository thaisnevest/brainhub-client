import * as React from "react";
import Button from "@mui/material/Button";
import { BasicButtonInterface } from "./interface";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['600', '700'],
  subsets: ['latin'],
})


export const BasicButton = ( {title}: BasicButtonInterface) => {
  return(
    <Button className={montserrat.className} sx={{width: '320px', height: '48px', backgroundColor:'#58CBFB', boxShadow: '0px 4px 4px 0px #00000040', textTransform: 'none', color: '#F5F5F5', fontSize: '20px', fontWeight:'700', borderRadius: '15px'}}>{title}</Button>
  )
}
