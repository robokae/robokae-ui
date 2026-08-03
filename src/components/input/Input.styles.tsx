import styled, { css } from "styled-components";
import { borderRadius, gap, padding } from "../../constants";

export const baseStyles = css`
  gap: ${gap.sm};
  padding: ${padding.xs};
  outline: none;
  color: ${({ theme }) => theme.text.primary};
  background-color: ${({ theme }) => theme.input.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: ${borderRadius.sm};
  font-size: 1rem;

  &:focus {
    border-width: 2px;
    border-color: ${({ theme }) => theme.status.success};
  }

  &.error {
    border-width: 2px;
    border-color: ${({ theme }) => theme.status.error};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${gap.sm};
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${gap.sm};
`;

export const FieldHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${gap.sm};
`;

export const SublabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;

  & > p {
    margin: 0;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.text.secondary};
    width: 50%;
    max-width: 50%;
    word-wrap: break-word;
  }

  & > p.left-sublabel {
    margin-right: auto;
    text-align: left;
  }

  & > p.right-sublabel {
    margin-left: auto;
    text-align: right;
  }
`;

export const StyledLabel = styled.label`
  font-weight: 500;
`;

export const TextInput = styled.input`
  ${baseStyles}
`;

export const TextareaInput = styled.textarea<{
  resize?: string;
}>`
  ${baseStyles}
  resize: ${({ resize = "none" }) => resize};
  width: 100%;
  box-sizing: border-box;
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.status.error};
  font-size: 0.9rem;
`;
