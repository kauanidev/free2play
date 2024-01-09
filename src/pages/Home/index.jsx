import axios from "axios";
import { GameCard } from "../../components/GameCard";
import { Container } from "./styles";
import { useEffect, useState } from "react";

export const Home = () => {
  const [popularGames, setPopularGames] = useState([]);

  const getPopularGames = async () => {
    const { data } = await axios.get(
      "https://www.freetogame.com/api/games?sort-by=popularity"
    );
    setPopularGames(data.slice(0, 40));
  };

  useEffect(() => {
    getPopularGames();
  }, []);

  return (
    <Container className="container">
      <h4>Free2Play</h4>
      <h1>Most Played Today</h1>
      <span>{popularGames.length} items</span>
      <section>
        {popularGames.map((game) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </section>
    </Container>
  );
};
