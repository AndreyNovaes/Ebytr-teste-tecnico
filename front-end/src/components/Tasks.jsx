/* eslint-disable react/no-array-index-key */
// Instale prop-types como dependência:
// npm i -S prop-types
import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  SimpleGrid,
  Skeleton,
  Tag,
  Text,
  Tooltip,
  useColorModeValue,
  useDisclosure,
  useToast,
  VStack,
  HStack,
} from '@chakra-ui/react';
import {
  DeleteIcon,
  EditIcon,
  CheckIcon,
  TimeIcon,
  ChevronDownIcon,
  InfoIcon,
} from '@chakra-ui/icons';
import {
  getAll,
  deleteById,
  updateById,
  updateStatusById,
} from '../services/requests';

// Componente de status da tarefa
function StatusBadge({ status }) {
  const statusMap = {
    pending: { color: 'yellow', label: 'Pendente' },
    ongoing: { color: 'blue', label: 'Em Andamento' },
    finished: { color: 'green', label: 'Concluído' },
  };

  const { color, label } = statusMap[status] || statusMap.pending;

  return (
    <Tag colorScheme={color} size="md" borderRadius="full">
      {label}
    </Tag>
  );
}

StatusBadge.propTypes = {
  status: PropTypes.string.isRequired,
};

// Componente de card de tarefa
function TaskCard({
  task,
  onEdit,
  onDelete,
  onStatusChange,
}) {
  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const dateColor = useColorModeValue('gray.500', 'gray.400');

  // Data formatada
  const formattedDate = new Date(task.createdAt).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Box
      p={4}
      bg={cardBg}
      borderRadius="md"
      borderWidth="1px"
      borderColor={borderColor}
      boxShadow="sm"
      transition="all 0.2s"
      _hover={{ boxShadow: 'md', transform: 'translateY(-2px)' }}
    >
      <VStack align="stretch" spacing={3}>
        <Flex justify="space-between" align="flex-start">
          <Heading as="h3" size="md" isTruncated maxW="70%">
            {task.name}
          </Heading>
          <StatusBadge status={task.status} />
        </Flex>

        {task.description && (
          <Text color={textColor} noOfLines={2}>
            {task.description}
          </Text>
        )}

        <Text fontSize="sm" color={dateColor}>
          Criado em:
          {' '}
          {formattedDate}
        </Text>

        <HStack spacing={2} justify="flex-end" mt={2}>
          <Tooltip label="Editar tarefa" placement="top">
            <IconButton
              size="sm"
              icon={<EditIcon />}
              onClick={() => onEdit(task)}
              aria-label="Editar tarefa"
              colorScheme="blue"
              variant="ghost"
            />
          </Tooltip>

          <Tooltip label="Excluir tarefa" placement="top">
            <IconButton
              size="sm"
              icon={<DeleteIcon />}
              onClick={() => onDelete(task.id)}
              aria-label="Excluir tarefa"
              colorScheme="red"
              variant="ghost"
            />
          </Tooltip>

          <Menu>
            <Tooltip label="Alterar status" placement="top">
              <MenuButton
                as={IconButton}
                size="sm"
                icon={<ChevronDownIcon />}
                aria-label="Alterar status"
                colorScheme="purple"
                variant="ghost"
              />
            </Tooltip>
            <MenuList>
              <MenuItem
                icon={<TimeIcon />}
                onClick={() => onStatusChange(task.id, 'pending')}
                isDisabled={task.status === 'pending'}
              >
                Pendente
              </MenuItem>
              <MenuItem
                icon={<TimeIcon color="blue.500" />}
                onClick={() => onStatusChange(task.id, 'ongoing')}
                isDisabled={task.status === 'ongoing'}
              >
                Em Andamento
              </MenuItem>
              <MenuItem
                icon={<CheckIcon color="green.500" />}
                onClick={() => onStatusChange(task.id, 'finished')}
                isDisabled={task.status === 'finished'}
              >
                Concluído
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </VStack>
    </Box>
  );
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onStatusChange: PropTypes.func.isRequired,
};

// Componente de filtros
function TaskFilters({
  orderBy,
  orderDirection,
  onOrderByChange,
  onOrderDirectionChange,
  onSearch,
}) {
  const bgColor = useColorModeValue('gray.50', 'gray.700');

  return (
    <Grid
      templateColumns={{ base: '1fr', md: '1fr 1fr' }}
      gap={4}
      p={4}
      bg={bgColor}
      borderRadius="md"
      mb={6}
    >
      <FormControl>
        <FormLabel htmlFor="order-by" fontSize="sm">Ordenar por</FormLabel>
        <Select
          id="order-by"
          name="order-by"
          value={orderBy}
          onChange={(e) => {
            onOrderByChange(e);
            onSearch();
          }}
          size="sm"
        >
          <option value="name">Nome</option>
          <option value="status">Status</option>
          <option value="createdAt">Data de Criação</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="order-direction" fontSize="sm">Ordem</FormLabel>
        <Select
          id="order-direction"
          name="order-direction"
          value={orderDirection}
          onChange={(e) => {
            onOrderDirectionChange(e);
            onSearch();
          }}
          size="sm"
        >
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </Select>
      </FormControl>
    </Grid>
  );
}

TaskFilters.propTypes = {
  orderBy: PropTypes.string.isRequired,
  orderDirection: PropTypes.string.isRequired,
  onOrderByChange: PropTypes.func.isRequired,
  onOrderDirectionChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

// Componentes para estados específicos
function EmptyState() {
  const bgColor = useColorModeValue('gray.50', 'gray.700');

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      py={10}
      bg={bgColor}
      borderRadius="md"
    >
      <InfoIcon boxSize={10} color="gray.400" mb={4} />
      <Text color="gray.500" fontSize="lg" fontWeight="medium">
        Nenhuma tarefa encontrada
      </Text>
      <Text color="gray.400" fontSize="md" textAlign="center" maxW="md" mt={2}>
        Comece adicionando uma nova tarefa usando o botão &quot;Criar Nova Tarefa&quot; acima.
      </Text>
    </Flex>
  );
}

function LoadingSkeleton() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
      {[...Array(6)].map((_, i) => (
        <Skeleton
          key={`skeleton-${i}`}
          height="150px"
          borderRadius="md"
        />
      ))}
    </SimpleGrid>
  );
}

// Componente principal
export default function Tasks({
  orderBy: initialOrderBy,
  orderDirection: initialOrderDirection,
  setOrderBy: externalSetOrderBy,
  setOrderDirection: externalSetOrderDirection,
  refreshTrigger,
}) {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [idToEdit, setIdToEdit] = useState('');
  const [orderBy, setInternalOrderBy] = useState(initialOrderBy);
  const [orderDirection, setInternalOrderDirection] = useState(initialOrderDirection);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  // Usar os setters externos se fornecidos, caso contrário usar os internos
  const setOrderBy = (value) => {
    if (externalSetOrderBy) {
      externalSetOrderBy(value);
    }
    setInternalOrderBy(value);
  };

  const setOrderDirection = (value) => {
    if (externalSetOrderDirection) {
      externalSetOrderDirection(value);
    }
    setInternalOrderDirection(value);
  };

  const getAllTasks = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getAll({ orderBy, orderDirection });
      setTasks(response.response || []);
    } catch (error) {
      toast({
        title: 'Erro ao carregar tarefas',
        description: 'Não foi possível carregar suas tarefas. Tente novamente.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  }, [orderBy, orderDirection, toast]);

  const handleDeleteTask = async (id) => {
    try {
      await deleteById(id);
      getAllTasks();
      toast({
        title: 'Tarefa excluída',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Erro ao excluir tarefa',
        description: 'Não foi possível excluir a tarefa. Tente novamente.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleEditTask = async (id, name, description) => {
    try {
      const body = { name, description };
      await updateById(id, body);
      getAllTasks();
      toast({
        title: 'Tarefa atualizada',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Erro ao atualizar tarefa',
        description: 'Não foi possível atualizar a tarefa. Tente novamente.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await updateStatusById(id, status);
      getAllTasks();

      const statusMessages = {
        pending: 'Tarefa marcada como pendente',
        ongoing: 'Tarefa em andamento',
        finished: 'Tarefa concluída!',
      };

      toast({
        title: statusMessages[status] || 'Status atualizado',
        status: status === 'finished' ? 'success' : 'info',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Erro ao atualizar status',
        description: 'Não foi possível atualizar o status da tarefa. Tente novamente.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const openEditModal = (task) => {
    setIdToEdit(task.id);
    setNewName(task.name);
    setNewDescription(task.description);
    onOpen();
  };

  // Atualizar quando os filtros ou o gatilho de atualização mudar
  useEffect(() => {
    getAllTasks();
  }, [orderBy, orderDirection, refreshTrigger, getAllTasks]);

  // Sincronizar com props externas quando elas mudarem
  useEffect(() => {
    setInternalOrderBy(initialOrderBy);
  }, [initialOrderBy]);

  useEffect(() => {
    setInternalOrderDirection(initialOrderDirection);
  }, [initialOrderDirection]);

  // Renderização condicional simplificada
  const renderContent = () => {
    if (isLoading) {
      return <LoadingSkeleton />;
    }

    if (tasks.length === 0) {
      return <EmptyState />;
    }

    return (
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={openEditModal}
            onDelete={handleDeleteTask}
            onStatusChange={handleStatusChange}
          />
        ))}
      </SimpleGrid>
    );
  };

  return (
    <Box>
      <Flex justify="space-between" align="center" mb={6}>
        <Heading as="h2" size="lg">Minhas Tarefas</Heading>
        <Text color="gray.500" fontSize="sm">
          {tasks.length}
          {' '}
          {tasks.length === 1 ? 'tarefa' : 'tarefas'}
          {' '}
          no total
        </Text>
      </Flex>

      <TaskFilters
        orderBy={orderBy}
        orderDirection={orderDirection}
        onOrderByChange={(e) => setOrderBy(e.target.value)}
        onOrderDirectionChange={(e) => setOrderDirection(e.target.value)}
        onSearch={getAllTasks}
      />

      {renderContent()}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Tarefa</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Nome</FormLabel>
                <Input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Digite o nome da tarefa"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Descrição</FormLabel>
                <Input
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Adicione uma descrição"
                />
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                handleEditTask(idToEdit, newName, newDescription);
                onClose();
              }}
              isDisabled={!newName.trim()}
            >
              Salvar Alterações
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

Tasks.propTypes = {
  orderBy: PropTypes.string,
  orderDirection: PropTypes.string,
  setOrderBy: PropTypes.func,
  setOrderDirection: PropTypes.func,
  refreshTrigger: PropTypes.number,
};

Tasks.defaultProps = {
  orderBy: 'createdAt',
  orderDirection: 'desc',
  setOrderBy: null,
  setOrderDirection: null,
  refreshTrigger: 0,
};
