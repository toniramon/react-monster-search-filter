import React from "react";

export const Card = props => (
  <div className="card-container">
    <img alt="monster" src={`https://robohash.org/${props.monster.id}?set`} />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
