import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/store/todo';
import { v4 as uuidv4 } from 'uuid';
import { css } from '@emotion/react';

export default function AddTodo() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) return;
    const item = {
      id: uuidv4(),
      text: text,
      state: 'active',
    };

    dispatch(addTodo(item));
    setText('');
  };
  return (
    <form css={form} onSubmit={handleSubmit}>
      <input
        css={input}
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      />
      <button css={button}>Add</button>
    </form>
  );
}

const form = css`
  width: 100%;
  display: flex;
  padding: 1.4rem 1rem;
  background-color: var(--color-bg-dark);
`;

const input = css`
  flex: 1 0 auto;
  font-size: 1.4rem;
  padding: 0.7rem 1rem;
  border: none;
  outline: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

const button = css`
  cursor: pointer;
  background-color: var(--color-accent);
  color: var(--color-white);
  font-weight: bold;
  font-size: 1.4rem;
  padding: 0 2rem;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  &:hover {
    filter: brightness(125%);
  }
`;
