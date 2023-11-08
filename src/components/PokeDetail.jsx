const PokeDetail = (props) => {
  return (
    <div>
      <div className="image-wrapper">
        <img src={props.sprites.front_default} alt={`${props.name} front`} />
        <img src={props.sprites.back_default} alt={`${props.name} back`} />
      </div>
      <div className="description">
        <div className="description-header">
          <span>{props.id}</span>
          <span>{props.name}</span>
        </div>
        <div className="description-types">
          {props.types.map((item) => (
            <span key={item.slot + item.type.name}>{item.type.name}</span>
          ))}
        </div>
        <div className="description-abilities">
          {props.abilities.map((item) => (
            <span key={item.slot + item.ability.name}>{item.ability.name}</span>
          ))}
        </div>
        <div className="description-numbers">
          <div>
            <p>
              <span>Weight:</span>
              {props.weight}
            </p>
          </div>
          <div>
            <p>
              <span>Height:</span>
              {props.height}
            </p>
          </div>
          <div>
            <p>
              <span>Order:</span>
              {props.order}
            </p>
          </div>
          <div>
            <p>
              <span>Experience:</span>
              {props.base_experience}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeDetail;
