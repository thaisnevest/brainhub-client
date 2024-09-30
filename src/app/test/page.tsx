'use client';

import { Container } from './style';
import { TextInput, RoomButton, TabBar } from 'components';

export default function Login() {

  return (
    <Container>
      <TabBar></TabBar>
      <TextInput title='Email' obrigatory={true} placeholder={'Email'}></TextInput>
      <RoomButton title={'Matemática'} place={'Google Meet'} date={'28/09/24'} time={'19h'} participants={'04'} backgroundcolor={'#f9b462'}></RoomButton>
    </Container>
  );
}
