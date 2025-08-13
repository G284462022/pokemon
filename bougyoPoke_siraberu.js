function bougyoPoke_siraberu(){
    let inp = document.querySelector("input[name=防御ポケ]");
    inp_value = inp.value;

    let a;

    for(let v in poke_data){
        if(inp_value == poke_data[v].name){
            a = poke_data[v];
            defencePoke = poke_data[v];
            //defencePokeにポケモンのデータを送ってる
            break;
        }
    }

    if(a != null){
        //特性のプルダウンメニューを作ってる
        let puru = document.querySelector("div#bougyo > select.特性");
        puru.remove();
        let tokusei_pulu = document.createElement("select");
        tokusei_pulu.className = "特性";
        let span = document.querySelector("div#bougyo > span.特性");
        span.insertAdjacentElement("afterend", tokusei_pulu);

        for(let v of defencePoke.abilitys){
            let addPulu = document.createElement("option");
            for(let w in tokusei){
                if(v == tokusei[w].id){
                    addPulu.textContent = tokusei[w].name;
                    addPulu.setAttribute("value", tokusei[w].name);
                    tokusei_pulu.insertAdjacentElement("beforeend", addPulu);
                    break;
                }
            }
        }
    }else{
        console.log(inp_value + "？だれそれwwwwにわか？www");

        //特性のプルダウンメニューを作ってる
        let puru = document.querySelector("div#bougyo > select.特性");
        puru.remove();
        let tokusei_pulu = document.createElement("select");
        tokusei_pulu.className = "特性";
        let span = document.querySelector("div#bougyo > span.特性");
        span.insertAdjacentElement("afterend", tokusei_pulu);
    }
}
