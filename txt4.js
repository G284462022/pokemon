let body1 = document.querySelector("body#new");
let li = document.querySelectorAll("li.w-pksv-pokemon-list-element");
let div_card = document.querySelectorAll("div._chara-column");
let div_a = document.querySelectorAll("div._thumb > a");
let div_img1 = document.querySelectorAll("div._thumb > a > img");
let div_img2 = document.querySelectorAll("div._type-column");

let body = document.createElement("body");
body1.insertAdjacentElement("afterend", body);
body1.remove();
let div;

for(let i = 0 ; i < li.length ; i++){
    div = document.createElement("div");
    div.className = "poke";
    body.insertAdjacentElement("beforeend", div);
    
    let a1 = li[i].getAttribute('no1');
    let a2 = li[i].getAttribute('type');
    let a3 = li[i].getAttribute('name');
    let a4 = li[i].getAttribute('moves');
    let a5 = li[i].getAttribute('abilitys');
    let a6 = li[i].getAttribute('base-h') + " " + li[i].getAttribute('base-a') + " " + li[i].getAttribute('base-b') + " " + li[i].getAttribute('base-c') + " " + li[i].getAttribute('base-d') + " " + li[i].getAttribute('base-s') + " " + li[i].getAttribute('base-total');
    
    let a7 = [];
    let a8 = [];
    let j = k = 0;
    let card = div_card[i].children;
    for(let a of card){
        if(a.className === "is-tooltip-enabled"){
            a7[j] = a.textContent;
            j++;
        }
        if(a.className === "_dream is-tooltip-enabled"){
            a8[k] = a.textContent;
            k++;
        }
    }
    let a9 = div_a[i].getAttribute("href");
    let a10 = div_img1[i].getAttribute("src");
    let a11 = div_img1[i].getAttribute("data-original");

    let a12 = [];
    j = 0;
    let img2 = div_img2[i].children;
    for(let a of img2){
        a12[j] = a.getAttribute("src");
        j++;
    }

    // console.log(a1);
    // console.log(a2);
    // console.log(a3);
    // console.log(a4);
    // console.log(a5);
    // console.log(a6);
    // for(let a of a7){
    //     console.log(a);
    // }
    // for(let a of a8){
    //     console.log(a);
    // }
    // console.log(a9);
    // console.log(a10);
    // console.log(a11);
    // for(let a of a12){
    //     console.log(a);
    // }
    hoge(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
}


function hoge(a1, a2, a3, a4, a5, a6, aa7, aa8, a9, a10, a11, aa12){
    let aa2 = huga(a2);
    let aa4 = huga(a4);
    let aa5 = huga(a5);
    let aa6 = huga(a6);

    let S = "\"no" + a1 + "\":{\n";
    S = S + "   \"no\":\"" + a1 + "\",\n";

    S = S + "   \"type\":[";
    for(let i = 0 ; i < aa2.length - 1 ; i++){
        S = S + "\"" + aa2[i] + "\", ";
    }
    S = S + "\"" + aa2[aa2.length - 1] + "\"],\n";

    S = S + "   \"name\":\"" + a3 + "\",\n";

    S = S + "   \"moves\":[";
    for(let i = 0 ; i < aa4.length - 1 ; i++){
        S = S + "\"" + aa4[i] + "\", ";
    }
    S = S + "\"" + aa4[aa4.length - 1] + "\"],\n";

    S = S + "   \"abilitys\":[";
    for(let i = 0 ; i < aa5.length - 1 ; i++){
        S = S + "\"" + aa5[i] + "\", ";
    }
    S = S + "\"" + aa5[aa5.length - 1] + "\"],\n";

    S = S + "   \"status\":[";
    for(let i = 0 ; i < aa6.length - 1 ; i++){
        S = S + "\"" + aa6[i] + "\", ";
    }
    S = S + "\"" + aa6[aa6.length - 1] + "\"],\n";

    S = S + "   \"abilitys_name\":{\n"; 
    S = S + "       \"normal\":["; 
    for(let i = 0 ; i < aa7.length - 1 ; i++){
        S = S + "\"" + aa7[i] + "\", ";
    }
    S = S + "\"" + aa7[aa7.length - 1] + "\"],\n";
    S = S + "       \"normal\":["; 
    for(let i = 0 ; i < aa8.length - 1 ; i++){
        S = S + "\"" + aa8[i] + "\", ";
    }
    S = S + "\"" + aa8[aa8.length - 1] + "\"],\n";
    S = S + "   },\n";

    S = S + "   \"site\":\"" + a9 + "\",\n";

    S = S + "   \"img1\":\"" + a11 + "\",\n";

    S = S + "   \"img2\":["; 
    for(let i = 0 ; i < aa12.length - 1 ; i++){
        S = S + "\"" + aa12[i] + "\", ";
    }
    S = S + "\"" + aa12[aa12.length - 1] + "\"],\n";

    S = S + "},";

    div.textContent = S;
}


function huga(a){
    let aa = a.split(" ");
    return aa;
}

// S = S + "   \"name\":\"" + 