import { GameCard } from "../../components/GameCard";
import { Container } from "./styles";

export const Home = () => {
  return (
    <Container className="container">
      <h4>Free2Play</h4>
      <h1>Most Played Today</h1>
      <span>32 items</span>
      <section>
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </section>
    </Container>
  );
};
