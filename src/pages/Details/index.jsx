import { Rating } from "../../components/Rating";
import { About, Banner, Container, GameInfos, Screenshots } from "./styles";

export const Details = () => {
  const infos = [
    {
      title: "Publisher",
      value: "Riot Games",
    },
    {
      title: "Developer",
      value: "Riot Games",
    },
    {
      title: "Release Date",
      value: "2018-04-13",
    },
    {
      title: "Genre",
      value: "FPS",
    },
  ];
  return (
    <Container className="container">
      <Banner>
        <div>
          <span>Free2Play</span>
          <h1>Valorant</h1>
        </div>
      </Banner>
      <About>
        <Screenshots>
          <img src="/img/valorant.webp" alt="Game Banner" />
          <img src="/img/valorant.webp" alt="Game Banner" />
        </Screenshots>
        <GameInfos>
          <h2>About the game</h2>
          <p>
            Valorant is an online multiplayer computer game, produced by Riot
            Games. It is a first-person shooter game, consisting of two teams of
            five, where one team attacks and the other defends. Players control
            characters known as agents, who all have different abilities to use
            during gameplay.
          </p>
          <Rating />
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
          <button>Play now</button>
        </GameInfos>
      </About>
    </Container>
  );
};
