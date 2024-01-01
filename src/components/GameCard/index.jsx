import { Rating } from "../Rating";
import { Container } from "./styles";

export const GameCard = () => {
  return (
    <Container to="/details/valorant">
      <div>
        <Rating />
      </div>
      <h2>Valorant</h2>
    </Container>
  );
};
