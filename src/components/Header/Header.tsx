import React, { Dispatch, SetStateAction } from 'react';
import { css } from '@emotion/react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { useDarkMode } from '../../context/DarkModeContext';

interface HeaderProps {
  filters: string[];
  filter: string;
  onFilterChange: Dispatch<SetStateAction<string>>;
}

export default function Header({
  filters,
  filter,
  onFilterChange,
}: HeaderProps) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header css={header}>
      <button css={darkModeToggle} onClick={toggleDarkMode}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
      <ul css={buttonsWrap}>
        {filters.map((item, index) => (
          <li key={index}>
            <button
              css={[button, filter === item && selected]}
              onClick={() => onFilterChange(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

const header = css`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  align-items: center;
  background-color: var(--color-bg-dark);
  border-bottom: 1px solid var(--color-grey);
`;

const darkModeToggle = css`
  font-size: 1.5rem;
  cursor: pointer;
  background-color: transparent;
  color: var(--color-text);
  transition: all 150ms ease-out;
`;

const buttonsWrap = css`
  display: flex;
`;

const button = css`
  font-size: 1.4rem;
  margin: 0.3rem;
  text-transform: capitalize;
  background-color: transparent;
  color: var(--color-accent);
  opacity: 0.8;
  font-weight: bold;
  &:hover {
    opacity: 1;
  }
`;

const selected = css`
  opacity: 1;
  &::after {
    content: '';
    display: block;
    margin-top: 0.2rem;
    border: 1px solid var(--color-text);
  }
`;
