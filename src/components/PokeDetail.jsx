import "./PokeDetail.css";

// const dynamicalSrc =
//   pokemonItem.sprites.other.dream_world.front_default === null
//     ? pokemonItem.sprites.front_default
//     : "";

const PokeDetail = ({ pokemonItem }) => {
  return (
    <div className="pokeDetail">
      <div className="image-wrapper">
        <img
          src={pokemonItem.sprites.front_default}
          alt={`${pokemonItem.name} front`}
        />
      </div>
      <div>
        <div className="description-header">
          <div className="textBG">
            <span>#{pokemonItem.id}</span>
            <span>{pokemonItem.name}</span>
          </div>

          <div className="orangeText">
            <span>#{pokemonItem.id}</span>
            <span>{pokemonItem.name}</span>
          </div>
        </div>
        <div className="description-types">
          {pokemonItem.types.map((item) => (
            <span className="pokeType" key={item.slot + item.type.name}>
              {item.type.name}
            </span>
          ))}
        </div>
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
  );
};

export default PokeDetail;
