import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background: ${({ theme }) => theme.black65};
  backdrop-filter: blur(4px);
  width: max-content;
  padding: 4px 8px;
  border-radius: 8px;
  color: ${({ theme }) => theme.tertiary};

  svg {
    font-size: 1.8rem;
  }
`;
