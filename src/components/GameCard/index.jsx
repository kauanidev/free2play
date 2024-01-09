import { Container } from "./styles";

export const GameCard = ({ game }) => {
  return (
    <Container to={`/details/${game.id}`}>
      <img src={game.thumbnail} alt="foto do jogo" />
      <h2>{game.title}</h2>
    </Container>
  );
};
