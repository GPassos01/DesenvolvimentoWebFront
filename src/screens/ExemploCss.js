import React, { useState } from "react";

export default function ExemploCss() {

  return (
    <div className="container text-center">
        <h1>The border-radius Property</h1>

        <p>Rounded corners for an element with a specified background color:</p>
        <p id="rcorners1">Rounded corners!</p>
        <p>Rounded corners for an element with a border:</p>
        <p id="rcorners2">Rounded corners!</p>
        <p>Rounded corners for an element with a background image:</p>
        <p id="rcorners3">Rounded corners!</p>


        <h1>The Transform 2D</h1>
        <div class="box_2d" id="box2">Hover me</div>

        <h1>The Transform 3D</h1>
        <div class="box_3d" id="box3">Hover me</div>

        <h1>Translate</h1>
        <div class="box_t" id="box4">Hover me</div>       

        <h1>Várias transformações</h1>
        <div class="box_nc" id="box5">Hover me</div>                



    </div>



  );
}