import React from "react";
import { Card } from "../card/card.component.jsx";
import "./card-list.styles.css";

export const CardList = props => (  //We're exporting the 'CardList' function component
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );