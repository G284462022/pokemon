function damageCalculation(){
    let waza_name = document.querySelector("select.技").value;
    let A = attackPoke.status[1];
    let C = attackPoke.status[3];

    let H = defencePoke.status[0];
    let B = defencePoke.status[2];
    let D = defencePoke.status[4];

    let waza = wazasyutoku(waza_name);
    let kougeki = zissuu(A, "A");
    let tokukou = zissuu(C, "C");
    let tairyoku = zissuu(H, "H");
    let bougyo = zissuu(B, "B");
    let tokubou = zissuu(D, "D");

    let damage;

    if(waza.class === "物理"){
        damage = parseInt(parseInt(22 * waza.pw * kougeki / bougyo) / 50 + 2);
    } else if(waza.class === "特殊"){
        damage = parseInt(parseInt(22 * waza.pw * tokukou / tokubou) / 50 + 2);
    } else if(waza.class === "変化"){
        console.log("変化技ですよ");
    }

    let damage_saitei = parseInt(damage * 0.85);
    let damage_saikou = damage;
    console.log("ダメージは「" + damage_saitei + "〜" + damage_saikou + "」です");
}

function zissuu(poke_st, I){
    let st;
    switch(I){
        case "H":
            st = parseInt((poke_st * 2  + 31 + parseInt(document.querySelector("input[name=努力値H]").value / 4)) * 0.5) + 60;
            return st;
        case "A":
            st = parseInt(((poke_st * 2 + 31 + parseInt(document.querySelector("input[name=努力値A]").value / 4)) * 0.5 + 5) * document.querySelector("div#kougeki > select.性格補正").value);
            return st;
        case "B":
            st = parseInt(((poke_st * 2 + 31 + parseInt(document.querySelector("input[name=努力値B]").value / 4)) * 0.5 + 5) * document.querySelector("div#bougyo > select.性格補正").value);
            return st;
        case "C":
            st = parseInt(((poke_st * 2 + 31 + parseInt(document.querySelector("input[name=努力値C]").value / 4)) * 0.5 + 5) * document.querySelector("div#kougeki > select.性格補正").value);
            return st;
        case "D":
            st = parseInt(((poke_st * 2 + 31 + parseInt(document.querySelector("input[name=努力値D]").value / 4)) * 0.5 + 5) * document.querySelector("div#bougyo > select.性格補正").value);
            return st;
    }
}

function wazasyutoku(waza){
    for(let D in waza_data){
        if(waza === waza_data[D].name){
            return waza_data[D];
        }
    }
}