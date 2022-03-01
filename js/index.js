function renderSA_building() {
  document.createElement("main");
  const main = document.querySelector("main"); 
  
  document.createElement("div");
  const big_block = document.createElement("div");
  big_block.id = "big_block";
  main.appendChild(big_block);

  document.createElement("div");
  const front_block = document.createElement("div");
  front_block.id = "front_block";
  main.appendChild(front_block);

  document.createElement("div");
  const front_door = document.createElement("div");
  front_door.id = "front_door";
  main.appendChild(front_door);

  document.createElement("div");
  const inside_front_door = document.createElement("div");
  inside_front_door.id = "inside_front_door";
  main.appendChild(inside_front_door);
  
  document.createElement("div");
  const door_sign = document.createElement("div");
  door_sign.id = "door_sign";
  main.appendChild(door_sign);

  const door_sign_text = document.createElement("h1");
  door_sign_text.innerHTML = "ゆ";
  door_sign_text.id = "door_sign_text";
  main.appendChild(door_sign_text);



  
};

renderSA_building();