import "./PokeDetail.css";

const PokeDetail = ({ pokemonItem }) => {
  return (
    <div className="pokeDetail">
      <div className="image-wrapper">
        <img
          className="pokeImage"
          src={pokemonItem.sprites.front_default}
          alt={`${pokemonItem.name} front`}
        />
        <img
          src={pokemonItem.sprites.back_default}
          alt={`${pokemonItem.name} back`}
        />
      </div>
      <div className="description">
        <div className="description-header">
          <span>{pokemonItem.id}</span>
          <span>{pokemonItem.name}</span>
        </div>
        <div className="description-types">
          {pokemonItem.types.map((item) => (
            <span key={item.slot + item.type.name}>{item.type.name}</span>
          ))}
        </div>
        <div className="description-abilities">
          {pokemonItem.abilities.map((item) => (
            <span key={item.slot + item.ability.name}>{item.ability.name}</span>
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
    </div>
  );
};

export default PokeDetail;
