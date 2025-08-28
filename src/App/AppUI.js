import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { EmptySearchResults } from '../EmptySearchResults';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import '../App.css';
import { TodoContext } from '../TodoContext';


function AppUI(){
  const {
    error,
    addTodo,
    loading,
    searchedTodos,
    completeTodo,
    completedTodos,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {loading && (
        <>
          <TodosLoading />
          <TodosLoading />
          <TodosLoading />
        </>
      )}
      {error && <TodosError />}
      {(!loading && !totalTodos) && <EmptyTodos />}
      {(!!totalTodos && !searchedTodos.length) && <EmptySearchResults searchText={searchValue} />}

      {searchedTodos.map(todo => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      ))}
      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} />

      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

    </>
  );
}

export { AppUI };