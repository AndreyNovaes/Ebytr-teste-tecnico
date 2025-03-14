import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Container,
  VStack,
  useColorModeValue,
  Heading,
  Text,
  extendTheme,
} from '@chakra-ui/react';
import ColorModeSwitcher from './components/ColorModeSwitcher';
import TaskCreator from './components/TaskCreator';
import Tasks from './components/Tasks';

// Tema personalizado
const theme = extendTheme({
  colors: {
    brand: {
      50: '#e6f7ff',
      100: '#b3e0ff',
      200: '#80caff',
      300: '#4db3ff',
      400: '#1a9dff',
      500: '#0080ff',
      600: '#0066cc',
      700: '#004d99',
      800: '#003366',
      900: '#001933',
    },
    status: {
      pending: '#FFA500',
      ongoing: '#3182CE',
      finished: '#38A169',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.800' : 'gray.50',
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'medium',
        borderRadius: 'md',
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'brand.500' : 'brand.500',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.600' : 'brand.600',
          },
        }),
      },
    },
  },
});

function App() {
  const bgColor = useColorModeValue('white', 'gray.700');
  const [orderBy, setOrderBy] = useState('createdAt');
  const [orderDirection, setOrderDirection] = useState('desc');
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Função para forçar atualização das tarefas após criar nova tarefa
  const refreshTasks = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" py={10} bg={useColorModeValue('gray.50', 'gray.800')}>
        <Box position="fixed" top={5} right={5}>
          <ColorModeSwitcher />
        </Box>

        <Container maxW="container.lg">
          <VStack spacing={8} align="stretch">
            <Box textAlign="center" my={8}>
              <Heading color={useColorModeValue('gray.600', 'gray.400')} as="h1" size="2xl" mb={2}>Gerenciador de Tarefas</Heading>
              <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.400')}>
                Organize suas atividades de forma eficiente
              </Text>
            </Box>

            <Box
              bg={bgColor}
              p={6}
              borderRadius="lg"
              boxShadow="md"
              mb={6}
            >
              <TaskCreator onTaskCreated={refreshTasks} />
            </Box>

            <Box
              bg={bgColor}
              p={6}
              borderRadius="lg"
              boxShadow="md"
            >
              <Tasks
                orderBy={orderBy}
                orderDirection={orderDirection}
                setOrderBy={setOrderBy}
                setOrderDirection={setOrderDirection}
                refreshTrigger={refreshTrigger}
              />
            </Box>
          </VStack>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
