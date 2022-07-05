import React from 'react';
import { Button, Flex, FormControl, FormHelperText, FormLabel, Icon, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { createOne } from '../services/requests';

export default function HandleTaskCreate() {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const onSubmitCreateTask = () => {
    createOne({ name, description });
  }

  return (
    <Flex justify="center" align="center">
      <Button leftIcon={<AddIcon/>} onClick={onOpen}>Criar Nova Tarefa</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <form
              id="new-task"
              onSubmit={onSubmitCreateTask}
            >
              <FormControl>
                <FormLabel>Crie uma nova Tarefa </FormLabel>
                <Input onChange={(e) => setName(e.target.value)} required type="text" placeholder='Nome da sua tarefa' />
                <Input onChange={(e) => setDescription(e.target.value)} required type="text" placeholder='Descrição da sua tarefa' />
                <FormHelperText>
                  É necessário preencher os dois campos
                </FormHelperText>
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" form="new-task">
              Criar Tarefa
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
