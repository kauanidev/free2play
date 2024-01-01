import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  width: 100%;
  height: 480px;
  background: ${({ theme }) => theme.card};
  backdrop-filter: blur(12px);
  border-radius: 12px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 0.4s;
  text-decoration: none;
  color: ${({ theme }) => theme.gray50};

  > div {
    width: 100%;
    height: 400px;
    background: url(/img/valorant.webp) no-repeat center/cover;
    border-radius: 8px;
    padding: 10px;
  }

  h2 {
    display: flex;
    align-items: center;
    flex: 1;
    font-size: 1.6rem;
    font-weight: 600;
    padding: 8px;
  }

  &:hover {
    filter: brightness(1.3);
  }
`;
