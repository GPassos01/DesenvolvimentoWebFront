import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ItemScreen() {

  return (
    <div>
      <Link to="/item/1">Item 1</Link>
      <Link to="/item/2">Item 2</Link>
      <Link to="/item/3">Item 3</Link>
    </div>
  );
}