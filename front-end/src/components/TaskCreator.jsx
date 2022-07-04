import React from 'react';
import { Button, FormControl, FormHelperText, FormLabel, Icon, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { createOne } from '../services/requests';

export default function HandleTaskCreate() {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const onSubmitCreateTask = (event) => {
    event.preventDefault();
    const body = {
      name: event.target.name,
      description: event.target.description,
    };
    console.log(body);
    console.log(event.target);
    createOne(body);
    onClose();
  }

  return (
    <>
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
                <Input required type="text" placeholder='Nome da sua tarefa' />
                <Input required type="text" placeholder='Descrição da sua tarefa' />
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
    </>
  );
}
