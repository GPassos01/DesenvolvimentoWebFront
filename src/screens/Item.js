import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function ItemScreen() {
    const {id} = useParams()
  return (
    <div>
        <h1>Pegando dados do item id: {id}</h1>
    </div>
  );
}