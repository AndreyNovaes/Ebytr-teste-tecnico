// Instale prop-types como dependência:
// npm i -S prop-types
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  VStack,
  Box,
  useDisclosure,
  useColorModeValue,
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { createOne } from '../services/requests';

export default function TaskCreator({ onTaskCreated }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nameError, setNameError] = useState('');
  const toast = useToast();

  const bgColor = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const resetForm = () => {
    setName('');
    setDescription('');
    setNameError('');
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const validateForm = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError('O nome da tarefa é obrigatório');
      isValid = false;
    } else {
      setNameError('');
    }

    return isValid;
  };

  const onSubmitNewTask = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const body = { name: name.trim(), description: description.trim() };
      await createOne(body);

      toast({
        title: 'Tarefa criada com sucesso!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      handleClose();

      // Aciona a função para atualizar a lista de tarefas
      if (onTaskCreated) {
        onTaskCreated();
      }
    } catch (error) {
      toast({
        title: 'Erro ao criar tarefa',
        description: 'Não foi possível criar a tarefa. Tente novamente.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      console.warn(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box>
      <Flex justify="center" mb={4}>
        <Button
          leftIcon={<AddIcon />}
          colorScheme="blue"
          onClick={onOpen}
          size="lg"
          shadow="md"
          _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
          transition="all 0.2s"
        >
          Criar Nova Tarefa
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={handleClose} size="md">
        <ModalOverlay backdropFilter="blur(2px)" />
        <ModalContent>
          <ModalHeader>Criar Nova Tarefa</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form id="new-task" onSubmit={onSubmitNewTask}>
              <VStack spacing={4} align="stretch">
                <FormControl isRequired isInvalid={!!nameError}>
                  <FormLabel htmlFor="name">Nome</FormLabel>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Digite o nome da tarefa"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    bg={bgColor}
                    borderColor={borderColor}
                    focusBorderColor="blue.400"
                  />
                  {nameError && <FormErrorMessage>{nameError}</FormErrorMessage>}
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="description">Descrição</FormLabel>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Adicione uma descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    bg={bgColor}
                    borderColor={borderColor}
                    focusBorderColor="blue.400"
                    rows={3}
                  />
                </FormControl>
              </VStack>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={handleClose}>
              Cancelar
            </Button>
            <Button
              type="submit"
              form="new-task"
              colorScheme="blue"
              isLoading={isSubmitting}
              loadingText="Criando..."
              isDisabled={!name.trim()}
            >
              Criar Tarefa
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

TaskCreator.propTypes = {
  onTaskCreated: PropTypes.func,
};

TaskCreator.defaultProps = {
  onTaskCreated: null,
};
