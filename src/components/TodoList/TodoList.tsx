import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { AddTodoPayload } from '../../redux/store/todo';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

interface TodoListProps {
  filter: string;
}

export default function TodoList({ filter }: TodoListProps) {
  const todoList = useSelector((state: RootState) => state.todo.todoList);

  const filtered = fetFilteredItems(todoList, filter);

  return (
    <section css={container}>
      <ul css={list}>
        {filtered.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <AddTodo></AddTodo>
    </section>
  );
}

function fetFilteredItems(
  todoList: AddTodoPayload[],
  filter: string,
): AddTodoPayload[] {
  if (filter === 'all') {
    return todoList;
  }
  return todoList.filter((todo) => todo.state === filter);
}

const container = css`
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg);
`;

const list = css`
  flex: 1 1 auto;
  overflow-y: auto;
`;
