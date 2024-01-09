import axios from "axios";
import { About, Banner, Container, GameInfos, Screenshots } from "./styles";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LuArrowLeftFromLine } from "react-icons/lu";

export const Details = () => {
  const [gameDetails, setGameDetails] = useState({});

  const params = useParams();

  const getGameDetails = async () => {
    const { data } = await axios.get(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${params.id}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "fcb4bbd2e9mshd5f84144a0d4780p16c436jsnf372f56e0d68",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      }
    );
    setGameDetails(data);
  };

  useEffect(() => {
    getGameDetails();
  }, []);

  const infos = [
    {
      title: "Publisher",
      value: gameDetails.publisher,
    },
    {
      title: "Developer",
      value: gameDetails.developer,
    },
    {
      title: "Release Date",
      value: gameDetails.release_date,
    },
    {
      title: "Genre",
      value: gameDetails.genre,
    },
  ];

  if (!gameDetails.title) return null;

  return (
    <Container className="container">
      <Banner bannerUrl={gameDetails.thumbnail}>
        <div>
          <span>Free2Play</span>
          <h1>
            <Link to="/">
              <LuArrowLeftFromLine />
            </Link>
            {gameDetails.title}
          </h1>
        </div>
      </Banner>
      <About>
        <Screenshots>
          {gameDetails?.screenshots?.slice(0, 2)?.map((screenshot) => {
            return (
              <img
                src={screenshot.image}
                alt="Game Banner"
                key={screenshot.id}
              />
            );
          })}
        </Screenshots>
        <GameInfos>
          <h2>About {gameDetails.title}</h2>
          <p>{gameDetails.description}</p>
          <section>
            {infos.map((info) => {
              return (
                <div key={info.title}>
                  <span>{info.title}</span>
                  <p>{info.value}</p>
                </div>
              );
            })}
          </section>
          <a href={gameDetails.game_url} target="_blank" rel="noreferrer">
            Play now
          </a>
        </GameInfos>
      </About>
    </Container>
  );
};
