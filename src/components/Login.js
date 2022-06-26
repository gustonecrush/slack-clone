import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <Container>
      <LoginInnerContainer>
        <img src="https://cdn.iconscout.com/icon/free/png-256/slack-1425877-1205068.png" />
        <h1>Sign in to the Slack Clone</h1>
        <p>slack-clone.com</p>

        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 25px;
    text-transform: inherit !important;
    color: white;
    background-color: var(--slack-color) !important;
  }
`;
