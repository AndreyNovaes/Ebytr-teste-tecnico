import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './css/ColorModeSwitcher';
import TaskCreator from './components/TaskCreator';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <TaskCreator />
    </ChakraProvider>
  );
}

export default App;
