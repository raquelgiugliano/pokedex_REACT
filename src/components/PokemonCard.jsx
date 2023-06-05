import "./pokemonCard.css";
import pokeball from "../img/pokeball.png";
import { useState } from "react";

export function PokemonCard({
  id,
  name,
  image,
  type,
  weight,
  height,
  stats,
  statsName,
}) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="container">
      {isShown && (
        <div className="show">
          <div className="stat-container-title">
            <p>{name}</p>
            <img className="img-title" src={image} alt={name} />
          </div>
          <img src={image} alt={name} />
          <div style={{ display: "flex", width: "100%" }}>
            <div
              className="stats-left"
              style={{ background: "#dbdbd9", textAlign: "center" }}
            >
              <p>Type</p>
              <p>Weight</p>
              <p>Height</p>
            </div>
            <div className="stats-right" style={{ background: "ffffff" }}>
              <p>{type}</p>
              <p>{weight} lbs</p>
              <p>{height} cm</p>
            </div>
          </div>
          <div className="base-stats">
            <div>
              {statsName.map((stats) => (
                <p className="stats">{stats}</p>
              ))}
            </div>
            <div>
              {stats.map((stats)=>(
                <p className="stats">{stats}</p>
                ))}
            </div>
          </div>
        </div>
      )}

      <div
        className="right"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <img
          src={image}
          alt={name}
          style={{ maxHeight: "50px", marginRight: "10px", width: "50px" }}
        />
        <p style={{ width: "270px" }}>N°. {id}</p>
        <p>{name}</p>
        <img
          src={pokeball}
          alt={pokeball}
          style={{ marginLeft: "auto", width: "40px" }}
        />
      </div>
    </div>
  );
}
