import styled, { css } from "styled-components"

export const ButtonWrapper = styled.button`
  display: flex;
  align-content: center;
  background: transparent;
  padding: var(--p-md);
  cursor: pointer;

  color: ${props =>
    props.color === "gray" &&
    css`
      color: var(--color-gray-default);
    `};

  color: ${props =>
    props.color === "blue" &&
    css`
      color: var(--color-blue-default);
    `};

  color: ${props =>
    props.color === "red" &&
    css`
      color: var(--color-red);
    `};

  color: ${props =>
    props.color === "orange" &&
    css`
      color: var(--color-orange);
    `};

  ${props =>
    props.size === "md" &&
    css`
      height: var(--btn-lg);
      font-size: var(--text-md);
    `};

  ${props =>
    props.size === "sm" &&
    css`
      height: var(--btn-lg);
      font-size: var(--text-sm);
    `};

  ${props =>
    props.size === "lg" &&
    css`
      height: var(--btn-xl);
      font-size: var(--text-xl);
    `};

  ${props =>
    props.borderType === "none" &&
    css`
      border: none;
    `}

  ${props =>
    props.borderRadius === "lg" &&
    css`
      border-radius: var(--border-radius-lg);
    `}

  &:hover {
    background-color: ${props =>
      props.isHovered ? "var(--color-gray-default)" : null};
  }
  &:active {
    background: ${props =>
      props.isActive ? "var(--color-gray-darken-2)" : null};
  }
`
export const ButtonIconWrapper = styled.div`
  margin-right: 8px;
`
