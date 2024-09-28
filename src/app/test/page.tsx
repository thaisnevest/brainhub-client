'use client';

import { Container } from './style';
import { TextInput, RoomButton } from 'components';

export default function Login() {

  return (
    <Container>
      <TextInput title='Email' obrigatory='*' placeholder={'Email'}></TextInput>
      <RoomButton title={'Matemática'} place={'Google Meet'} dateandtime={'28/09/24 | 19h'} participants={4}></RoomButton>
    </Container>
  );
}
