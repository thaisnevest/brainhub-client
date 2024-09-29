import * as React from 'react';
import TextField from '@mui/material/TextField';
import { TextInputInterface } from './interface';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '500'],
  subsets: ['latin'],
})

export const Component = ({ children }: { children: React.ReactNode }) => {
  return <div className={montserrat.className} style={{gap: '4px'}}>{children}</div> ;
};

export const Title = ({ children }: { children: React.ReactNode }) => {
  return <h3 style={{fontWeight: '500', fontSize:'20px'}}>{children}</h3>;
};

export const TextInput = ({title, placeholder, obrigatory}:TextInputInterface) => {
  return (
    <Component>
      <Title>{title}{obrigatory && (<span style={{ color: 'red' }}>*</span>)}</Title>
      <TextField placeholder = {placeholder} sx={{'& .MuiOutlinedInput-notchedOutline': {
              borderColor: '##D9D9D9',
              borderRadius: '4px',
              borderWidth: '1px'
            },'& .MuiInputBase-input': {
              color: '##787878',
              fontWeight: '400',
              fontSize: '16px',
              fontFamily: montserrat.style.fontFamily
            },  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#58CBFB',
              backgroundColor: '#58CBFB33'
            },}}/>
    </Component>
  );
}

