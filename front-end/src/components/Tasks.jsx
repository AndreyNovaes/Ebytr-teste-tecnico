import { Button, Flex, FormControl, FormHelperText, FormLabel, Heading, Icon, Input, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, UnorderedList, useDisclosure } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { getAll, deleteById, updateById, updateStatusById } from "../services/requests";
import { DeleteIcon, EditIcon, CheckIcon, InfoIcon, ArrowRightIcon } from "@chakra-ui/icons";

export default function Tasks() {
  const [tasks, setTasks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [ newName, setNewName ] = React.useState('');
  const [ newDescription, setNewDescription ] = React.useState('');
  const [ status, setStatus ] = React.useState('');
  const { onOpen, isOpen, onClose } = useDisclosure();

const getAllTasks = async () => {
  try {
    const tasksRequest = await getAll();
    setTasks(tasksRequest.response);
    setIsLoading(false);
  }
  catch (error) {
    setIsError(true);
  }
}

const handleDeleteTask = async (id) => {
  try {
    await deleteById(id);
    getAllTasks();
  }
  catch (error) {
    setIsError(true);
  }
}

const handleEditTask = async (id, name, description) => {
  try {
    await updateById(id, { name, description });
    getAllTasks();
  }
  catch (error) {
    setIsError(true);
  }
}

const handleStatusChange = async (id, status) => {
  try {
    const res = await updateStatusById(id, status);
    getAllTasks();
  }
  catch (error) {
    setIsError(true);
  }
}

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <Flex direction="column" align="center" justify="center">
      {isLoading ? ( <Spinner /> ) : ( <UnorderedList> {
      tasks.map(task => (
        <ListItem m={2} key={task.id}>
          <Flex direction="row" align="center" justify="space-between">
            <Heading as='h4'>{task.name}</Heading>
            <Flex direction="row" align="center">
              <Button onClick={onOpen} leftIcon={<EditIcon />}/>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>
                    <ModalCloseButton />
                  </ModalHeader>
                  <ModalBody>
                    <form
                      id="edit-task"
                      onSubmit={() => handleEditTask(task.id, newName, newDescription)}
                    >
                      <FormControl>
                        <FormLabel>Editar Tarefa </FormLabel>
                        <Input onChange={(e) => setNewName(e.target.value)} type="text" placeholder='Novo nome da sua tarefa' />
                        <Input onChange={(e) => setNewDescription(e.target.value)} type="text" placeholder='Nova Descrição da sua tarefa' />
                        <FormHelperText>
                          É necessário preencher os dois campos
                        </FormHelperText>
                      </FormControl>
                    </form>
                  </ModalBody>
                  <ModalFooter>
                    <Button type="submit" form="edit-task">
                      Editar Tarefa
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
              <Button 
              onClick={() => handleDeleteTask(task.id)} 
              leftIcon={<DeleteIcon/>}
              />
              <Button 
              onClick={() => handleStatusChange(task.id, 'finished')}
              leftIcon={<CheckIcon/>}
              />
              <Button
              onClick={() => handleStatusChange(task.id, 'ongoing')}
              leftIcon={<ArrowRightIcon/>}
              />
            </Flex>
          </Flex>
        </ListItem>
      ))} </UnorderedList> )}
      {isError && <p>Erro ao  carregar as tarefas</p>}
    </Flex>
  );
}
