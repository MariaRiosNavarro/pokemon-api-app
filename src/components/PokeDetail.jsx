import "./PokeDetail.css";

// const dynamicalSrc =
//   pokemonItem.sprites.other.dream_world.front_default === null
//     ? pokemonItem.sprites.front_default
//     : "";
const getColorForType = (typeName) => {
  switch (typeName) {
    case "bug":
      return "#3bb900";
    case "dark":
      return "#1c1c1c";
    case "dragon":
      return "#00458a";
    case "fairy":
      return "#ffc2f9";
    case "electric":
      return "#ffe600";
    case "shadow":
      return "#668b8b";
    case "fighting":
      return "#e40000";
    case "fire":
      return "#ff9900";
    case "flying":
      return "#ccdadd";
    case "ghost":
      return "#5a1e64";
    case "grass":
      return "#57921c";
    case "ground":
      return "#965a00";
    case "ice":
      return "#6ad2ff";
    case "normal":
      return "#b3b3b3";
    case "plant":
      return "#70df00";
    case "poison":
      return "#ab00ae";
    case "psychic":
      return "#ff81f2";
    case "rock":
      return "#e1b237";
    case "steel":
      return "#2a4950";
    case "water":
      return "#00a0e4";
    case "unknown":
      return "#fa8072";
    // Füge hier weitere Fälle für die verschiedenen Pokémon-Typen hinzu
    default:
      return "#FFFFFF"; // Standardfarbe, falls der Typ nicht übereinstimmt
  }
};

const PokeDetail = ({ pokemonItem }) => {
  return (
    <div className="pokeDetail">
      <div className="image-wrapper">
        <img
          src={pokemonItem.sprites.other.dream_world.front_default}
          alt={`${pokemonItem.name} front`}
          className="pokeImage"
        />
      </div>
      <div>
        <div className="description-header">
          <div className="textBG">
            <span>#{pokemonItem.id}</span>
            <span>
              {pokemonItem.name.charAt(0).toUpperCase() +
                pokemonItem.name?.slice(1)}
            </span>
          </div>

          <div className="orangeText">
            <span>#{pokemonItem.id}</span>
            <span>
              {pokemonItem.name.charAt(0).toUpperCase() +
                pokemonItem.name?.slice(1)}
            </span>
          </div>
        </div>
        <div className="description-types">
          {pokemonItem.types.map((item) => (
            <span
              className="pokeType"
              key={item.slot + item.type.name}
              style={{ backgroundColor: getColorForType(item.type.name) }}
            >
              {item.type.name}
            </span>
          ))}
        </div>

        <div className="detailsWrapper">
          <details>
            <summary>ATTACKS AND MOVEMENTS</summary>

            <div className="pokeSummery">
              <div className="description-abilities">
                {pokemonItem.abilities.map((item) => (
                  <span key={item.slot + item.ability.name}>
                    {item.ability.name}
                  </span>
                ))}
              </div>
              <div className="description-numbers">
                <div>
                  <p>
                    <span>Weight:</span>
                    {pokemonItem.weight}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Height:</span>
                    {pokemonItem.height}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Order:</span>
                    {pokemonItem.order}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Experience:</span>
                    {pokemonItem.base_experience}
                  </p>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default PokeDetail;
