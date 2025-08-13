function kougekiPoke_siraberu(){
    let inp = document.querySelector("input[name=攻撃ポケ]");
    inp_value = inp.value;

    let a;

    for(let v in poke_data){
        if(inp_value == poke_data[v].name){
            a = poke_data[v].moves;
            attackPoke = poke_data[v];
            //attackPokeにポケモンのデータを送ってる
            break;
        }
    }

    if(a != null){
        //技のプルダウンメニューを作ってる
        let puru = document.querySelector("div#kougeki > select.技");
        puru.remove();
        let waza_pulu = document.createElement("select");
        waza_pulu.className = "技";
        let span = document.querySelector("div#kougeki > span.技");
        span.insertAdjacentElement("afterend", waza_pulu);

        //特性のプルダウンメニューを作ってる
        puru = document.querySelector("div#kougeki > select.特性");
        puru.remove();
        let tokusei_pulu = document.createElement("select");
        tokusei_pulu.className = "特性";
        span = document.querySelector("div#kougeki > span.特性");
        span.insertAdjacentElement("afterend", tokusei_pulu);

        for(let i = 0 ; i < a.length ; i++){
            let addPulu = document.createElement("option");
            for(let v in waza_data){
                if(a[i] == waza_data[v].no){
                    addPulu.textContent = waza_data[v].name;
                    addPulu.setAttribute("value", waza_data[v].name);
                    waza_pulu.insertAdjacentElement("beforeend", addPulu);
                    break;
                }
            }
        }

        for(let v of attackPoke.abilitys){
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

        let puru = document.querySelector("div#kougeki > select.技");
        puru.remove();
        let waza_pulu = document.createElement("select");
        waza_pulu.className = "技";
        let span = document.querySelector("div#kougeki > span.技");
        span.insertAdjacentElement("afterend", waza_pulu);

        //特性のプルダウンメニューを作ってる
        puru = document.querySelector("div#kougeki > select.特性");
        puru.remove();
        let tokusei_pulu = document.createElement("select");
        tokusei_pulu.className = "特性";
        span = document.querySelector("div#kougeki > span.特性");
        span.insertAdjacentElement("afterend", tokusei_pulu);
    }
}
