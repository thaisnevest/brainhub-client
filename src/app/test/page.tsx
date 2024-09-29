'use client';

import { Container } from './style';
import { TextInput, RoomButton } from 'components';

export default function Login() {

  return (
    <Container>
      <TextInput title='Email' obrigatory='*' placeholder={'Email'}></TextInput>
      <RoomButton title={'Matemática'} place={'Google Meet'} date={'28/09/24'} time={'19h'} participants={'04'} backgroundcolor={'#f9b462'}></RoomButton>
    </Container>
  );
}
