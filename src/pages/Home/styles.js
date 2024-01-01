import styled from "styled-components";

export const Container = styled.main`
  padding: 80px 0;

  h4 {
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.primary200};
  }

  h1 {
    font-size: 6.4rem;
    font-weight: 600;
    margin-bottom: 40px;
  }

  span {
    color: ${({ theme }) => theme.gray400};
  }

  > section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 22px;
    margin-top: 24px;
  }
`;
