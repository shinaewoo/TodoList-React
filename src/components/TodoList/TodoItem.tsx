import React from 'react';
import { useDispatch } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import {
  AddTodoPayload,
  deleteTodo,
  updateTodoState,
} from '../../redux/store/todo';
import { css } from '@emotion/react';

interface TodoProps {
  todo: AddTodoPayload;
}

export default function TodoItem({ todo }: TodoProps) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTodo(todo.id));
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.checked ? 'completed' : 'active';
    dispatch(updateTodoState(todo.id, status));
  };
  return (
    <li css={todoItem}>
      <input
        css={checkbox}
        type="checkbox"
        id={todo.id}
        checked={todo.state === 'completed'}
        onChange={handleChange}
      />
      <label css={text}>{todo.text}</label>
      <span css={buttonWrap}>
        <button css={DeleteButton} onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}

const todoItem = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 0.1rem 0;
  color: var(--color-text);
`;

const checkbox = css`
  width: 1.5rem;
  height: 1.5rem;
`;

const text = css`
  flex: 1 1 0%;
  margin-left: 0.5rem;
  font-size: 1.5rem;
`;

const buttonWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  background-color: var(--color-grey);
  border-radius: 100%;
  transition: all 150ms ease-out;
  &:hover {
    background-color: var(--color-accent);
    transform: rotate(15deg) scale(1.2);
  }
`;

const DeleteButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text);
  background-color: transparent;
`;
