import React from 'react';
import { Container, Typography } from '@mui/material';
import Quiz from './Quiz';

function App() {
  return (
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Informační systémy 2 - Kvízové otázky
        </Typography>
        <Quiz />
      </Container>
  );
}

export default App;
