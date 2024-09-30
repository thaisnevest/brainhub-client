import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { House, UserCircle, GameController } from 'assets';
import Image from 'next/image';

export const TabBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div style={{backgroundColor: '#F5F5F5', width: '360px', height: '60px', boxShadow: '0px -4px 4px 0px #00000040'}}>
      <Tabs value={value} onChange={handleChange} aria-label="icon tabs" variant="fullWidth" TabIndicatorProps={{ style: { display: 'none' } }}  sx={{diplay: 'flex', justifyContent: 'space-around'}}>
        <Tab sx={{filter: value === 0 ? 'brightness(0) saturate(100%) invert(61%) sepia(89%) saturate(417%) hue-rotate(170deg) brightness(101%) contrast(103%)'
                  : 'none',}} icon={ <Image src={GameController} alt="icon 1" />} aria-label="game controller" />
        <Tab sx={{filter: value === 1 ? 'brightness(0) saturate(100%) invert(61%) sepia(89%) saturate(417%) hue-rotate(170deg) brightness(101%) contrast(103%)'
                  : 'none',}} icon={ <Image src={House} alt="icon 1" />} aria-label="home" />
        <Tab sx={{filter: value === 2 ? 'brightness(0) saturate(100%) invert(61%) sepia(89%) saturate(417%) hue-rotate(170deg) brightness(101%) contrast(103%)'
                  : 'none',}} icon={ <Image src={UserCircle} alt="icon 1" />} aria-label="user" />
      </Tabs>
    </div>
  );
}


