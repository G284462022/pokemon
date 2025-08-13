let A1 = document.querySelectorAll("li.w-pksv-pokemon-list-element");

let A2 = document.querySelectorAll("div._thumb");

let A3 = document.querySelectorAll("div._type-column");

let body_main = document.querySelector("body#main");
let body_new = document.createElement("body");
body_main.insertAdjacentElement("afterend", body_new);

body_new.id = "new";
for(let i = 0 ; i < A1.length ; i++){
    body_new.insertAdjacentElement("beforeend", A1[i]);
    body_new.insertAdjacentElement("beforeend", A2[i]);
    body_new.insertAdjacentElement("beforeend", A3[i]);
}

body_main.remove();

let input = document.querySelectorAll("input#PokemonElement1");
let label = document.querySelectorAll("label");

for(let i = 0 ; i < input.length ; i++){
    input[i].remove();
    label[i].remove();
}