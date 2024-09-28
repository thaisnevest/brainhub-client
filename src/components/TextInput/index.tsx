import * as React from 'react';
import TextField from '@mui/material/TextField';
import { TextInputInterface } from './interface';

export const Component = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div> ;
};

export const Title = ({ children }: { children: React.ReactNode }) => {
  return <h3>{children}</h3>;
};

export const TextInput = ({title, placeholder, obrigatory}:TextInputInterface) => {
  return (
    <Component>
      <Title>{title}{obrigatory}</Title>
      <TextField placeholder = {placeholder}/>
    </Component>
  );
}

