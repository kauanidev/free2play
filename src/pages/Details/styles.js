import styled from "styled-components";

export const Container = styled.main`
  padding: 80px 0;
`;

export const Banner = styled.div`
  height: 480px;
  width: 100%;
  border-radius: 40px;
  background: linear-gradient(
      180deg,
      rgba(54, 44, 146, 0.4) 0%,
      rgba(18, 98, 151, 0.4) 100%
    ),
    url(/img/valorant.webp) no-repeat center/cover;
  display: flex;
  align-items: flex-end;
  margin-bottom: 155px;

  > div {
    background: ${({ theme }) => theme.card};
    width: max-content;
    width: 100%;
    max-width: 560px;
    border-radius: 24px;
    padding: 40px;
    backdrop-filter: blur(12px);
    margin-bottom: -72px;
    margin-left: 72px;

    > span {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.primary200};
    }

    > h1 {
      font-size: 3.2rem;
      font-weight: 600;
    }
  }
`;

export const About = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 72px;
  padding: 0 72px;
`;

export const Screenshots = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  > img {
    width: 100%;
    height: 350px;
    border-radius: 24px;
    object-fit: cover;
  }
`;

export const GameInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h2 {
    font-size: 24px;
    font-weight: 600;
  }

  > p {
    color: ${({ theme }) => theme.gray300};
    line-height: 3rem;
    font-size: 2rem;
    text-align: justify;
  }

  > section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;

    span {
      color: ${({ theme }) => theme.gray400};
    }

    p {
      font-size: 2rem;
      color: ${({ theme }) => theme.gray100};
      margin-top: 8px;
    }
  }

  button {
    background: ${({ theme }) => theme.primary500};
    color: ${({ theme }) => theme.white};
    border: none;
    padding: 16px 32px;
    border-radius: 12px;
    margin-top: 50px;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
