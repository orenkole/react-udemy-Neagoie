import firebase from "firebase/app";
import "firebase/firestore";

import styled from "styled-components";

const Text = styled.div`
  color: red;
  font-size: 28px;
`

function App = () {
  return (
    <Text isActive={true}>I am a styled component</Text>
  );
}
