import axios from "axios";
import { GameCard } from "../../components/GameCard";
import { Container } from "./styles";
import { useEffect, useState } from "react";

export const Home = () => {
  const [popularGames, setPopularGames] = useState([]);

  const getPopularGames = async () => {
    const { data } = await axios.get(
      "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=popularity",
      {
        headers: {
          "X-RapidAPI-Key":
            "fcb4bbd2e9mshd5f84144a0d4780p16c436jsnf372f56e0d68",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      }
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
