import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import Login from './src/screens/Login';
import Chat from './src/screens/Chat';

export default function App() {

  const [userName, setuserName] = useState(null);

  return (
    <Container style={styles.container}>
      {!userName ?
        <Login setuserName={setuserName} />
        :
        <Chat />
      }
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16202b'
  }
});

