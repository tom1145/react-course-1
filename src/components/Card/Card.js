import React from "react";

import s from "./style.module.scss";

function Card(props) {
  return (
    <div className={`${s.card} + ${props.className}`}>{props.children}</div>
  );
}

export default Card;
