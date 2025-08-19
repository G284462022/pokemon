function statusCalculation(){
    //要素の表示処理
    let div_url = document.querySelector("div.poke_URL");
    div_url.style.display = "block";
    
    let syuzokuti = document.getElementById("syuzokuti");
    syuzokuti.style.display = "block";

    let zissuutitable = document.querySelector("div#調べる実数値 > table#実数値テーブル");
    zissuutitable.style.display = "block";

    let Scalc = document.getElementById("すばやさ計算");
    Scalc.style.display = "block";

    let HP_ad = document.getElementById("体力調整");
    HP_ad.style.display = "block";

    let tokusei_div = document.getElementById("特性");
    tokusei_div.style.display = "block";

    let has_moves = document.getElementById("覚える技");
    has_moves.style.display = "block";

    ///データ表示処理
    let poke = document.querySelector("input[name=調べるポケ]");
    poke = poke.value;

    let url = document.querySelector("a.poke_URL");

    let syuzokuti_class = document.querySelectorAll("span.種族値");

    let zissuutitable_td = document.querySelectorAll("td");

    let normal_ability = document.querySelector("div.通常特性");
    normal_ability.remove();
    let normal_ability_span = document.querySelector("span.通常特性");
    normal_ability = document.createElement("div");
    normal_ability_span.insertAdjacentElement("afterend", normal_ability);
    normal_ability.className = "通常特性";

    let dream_ability = document.querySelector("div.夢特性");
    dream_ability.remove();
    let dream_ability_span = document.querySelector("span.夢特性");
    dream_ability = document.createElement("div");
    dream_ability_span.insertAdjacentElement("afterend", dream_ability);
    dream_ability.className = "夢特性";

    let waza_list = document.querySelector("div#覚える技リスト > div");

    for(let P in poke_data){
        if(poke_data[P].name === poke){
            //attackPokeにデータを送信
            attackPoke = poke_data[P];
            //URL
            url.setAttribute("href", attackPoke.site);
            url.setAttribute("target", "_blank");

            //種族値
            let i = 0;
            for(let a of syuzokuti_class){
                a.textContent = poke_data[P].status[i];
                i++;
            }

            //実数値
            zissuutitable_td[1].textContent = Skeisann(poke_data[P].status[5], 31, 252, 1.1);
            zissuutitable_td[2].textContent = Skeisann(poke_data[P].status[5], 31, 252, 1.0);
            zissuutitable_td[3].textContent = Skeisann(poke_data[P].status[5], 31, 0, 1.0);
            zissuutitable_td[4].textContent = Skeisann(poke_data[P].status[5], 31, 0, 0.9);
            zissuutitable_td[5].textContent = Skeisann(poke_data[P].status[5], 0, 0, 0.9);

            //特性
            for(let a of poke_data[P].abilitys_name.normal){
                for(let v in tokusei){
                    if(a === tokusei[v].name){
                        let normal = document.createElement("div");
                        normal_ability.insertAdjacentElement("beforeend", normal);
                        normal.textContent = tokusei[v].name;

                        normal = document.createElement("div");
                        normal_ability.insertAdjacentElement("beforeend", normal);
                        normal.textContent = tokusei[v].effect;

                        let br = document.createElement("br");
                        normal.insertAdjacentElement("afterend", br);

                        break;
                    }
                }
            }
            for(let a of poke_data[P].abilitys_name.dream){
                for(let v in tokusei){
                    if(a === tokusei[v].name){
                        let dream = document.createElement("div");
                        dream_ability.insertAdjacentElement("beforeend", dream);
                        dream.textContent = tokusei[v].name;

                        dream = document.createElement("div");
                        dream_ability.insertAdjacentElement("beforeend", dream);
                        dream.textContent = tokusei[v].effect;

                        break;
                    }
                }
            }

            //覚える技
            waza_list.remove();
            let div = document.querySelector("div#覚える技リスト");
            waza_list = document.createElement("div");
            div.insertAdjacentElement("beforeend", waza_list);
            for(let v of poke_data[P].moves){
                for(let a in waza_data){
                    if(waza_data[a].no === v){
                        let list = document.createElement("div");
                        list.textContent = waza_data[a].name;
                        waza_list.insertAdjacentElement("beforeend", list);
                    }
                }
            }
            break;
        }
    }
}

function Scalc_start(){
    let btn1 = document.getElementById("Scalc");
    btn1.style.display = "none";
    let btn2 = document.getElementById("Scalc_back");
    btn2.style.display = "block";
    let Scalc_main = document.getElementById("すばやさ計算_メイン");
    Scalc_main.style.display = "block";
}

function Scalc_back(){
    let btn1 = document.getElementById("Scalc");
    btn1.style.display = "block";
    let btn2 = document.getElementById("Scalc_back");
    btn2.style.display = "none";
    let Scalc_main = document.getElementById("すばやさ計算_メイン");
    Scalc_main.style.display = "none";
}

function Scalc(){
    let kota = document.querySelector("input[name=個体値]");
    let dor = document.querySelector("input[name=努力値]");
    let seikaku = document.querySelector("input[name=性格補正]");
    let nouryoku = document.querySelector("input[name=能力変化]");
    let aitemu = document.querySelector("input[name=アイテム]");
    let sonota1 = document.querySelector("input[name=その他1]");
    let sonota2 = document.querySelector("input[name=その他2]");

    let S = Skeisann(attackPoke.status[5], Number(kota.value), Number(dor.value), Number(seikaku.value));

    if(nouryoku.value != "0"){
        let k = Number(nouryoku.value);
        if(k > 0){
            S = S * (2 + k) / 2;
        }else {
            S = S * 2 / (2 + k);
        }
    }
    if(aitemu.value != 0) S = S * Number(aitemu.value);
    if(sonota1.value != 0) S = S * Number(sonota1.value);
    if(sonota2.value != 0) S = S * Number(sonota2.value);

    let sp_hyo = document.getElementById("表示");
    sp_hyo.textContent = S;

    let R = Skeisann_gyakusann(S, "最速");
    let sp_saisoku = document.getElementById("最速抜き");
    sp_saisoku.textContent = R;

    R = Skeisann_gyakusann(S, "準速");
    let sp_junnsoku = document.getElementById("準速抜き");
    sp_junnsoku.textContent = R;

    let keisan = document.getElementById("計算結果");
    keisan.style.display = "block";
}

function HP_adjustment(){
    let span_kekka = document.getElementById("体力調整_結果");
    span_kekka.style.display = "block";

    let flag = document.getElementById("flag");
    flag = flag.value;

    let select = document.getElementById("select");
    select = select.value;

    let Poke_HP_max = parseInt((attackPoke.status[0] * 2  + 31 + 63) * 0.5) + 60;
    let Poke_HP_min = parseInt((attackPoke.status[0] * 2  + 31 + 0) * 0.5) + 60;

    if(flag === "0"){
        A = HP_calc0(select, Poke_HP_max, Poke_HP_min);
    }else if(flag === "1"){
        A = HP_calc1(select, Poke_HP_min, Poke_HP_max);
    }
    let div_hp = document.querySelector("div#体力調整_結果 > span#hphp");
    div_hp.textContent = A;

    if(A != null){
        A = ((A - 60) * 2 - attackPoke.status[0] * 2 - 31) * 4;
    }
    let div_doryokuti = document.querySelector("div#体力調整_結果 > span#doryoku");
    div_doryokuti.textContent = A;
}

function HP_adjustment_start(){
    let btn_HP_ad_st = document.getElementById("HP_adjustment_start");
    btn_HP_ad_st.style.display = "none";
    let btn_HP_ad_ba = document.getElementById("HP_adjustment_back");
    btn_HP_ad_ba.style.display = "block";
    let div_tairyokumain = document.getElementById("体力調整_メイン");
    div_tairyokumain.style.display = "block";
}

function HP_adjustment_back(){
    let btn_HP_ad_st = document.getElementById("HP_adjustment_start");
    btn_HP_ad_st.style.display = "block";
    let btn_HP_ad_ba = document.getElementById("HP_adjustment_back");
    btn_HP_ad_ba.style.display = "none";
    let div_tairyokumain = document.getElementById("体力調整_メイン");
    div_tairyokumain.style.display = "none";
}

function Skeisann(syu, kotai, doryo, sei){
    return (parseInt(((syu * 2 + kotai + parseInt(doryo / 4)) * 0.5 + 5) * sei));
}

function Skeisann_gyakusann(s, A){
    let result;
    switch(A){
        case "最速":
            result = (s - 1) / 1.1;
            if((result - parseInt(result)) * 10 > 0){
                result = parseInt(result) + 1;
            }
            result = parseInt(((result - 5) * 2 - 63 - 31) / 2);
            break;
        case "準速":
            result = (s - 1);
            if((result - parseInt(result)) * 10 > 0){
                result = parseInt(result) + 1;
            }
            result = parseInt(((result - 5) * 2 - 63 - 31) / 2);
            break;
    }
    return result;
}

function HP_calc0(select, HP, HP_min){
    if(HP < HP_min) return null;
   
    switch(select){
        case "191":
            if(HP === 191) return HP;
            break;
        case "16n-1":
            if(HP % 16 === 15) return HP;
            break;
        case "16n+1":
            if(HP % 16 === 1) return HP;
            break;
        case "16n":
            if(HP % 16 === 0) return HP;
            break;
        case "10n-1":
            if(HP % 10 === 9) return HP;
            break;
        case "4n+1":
            if(HP % 4 === 1) return HP;
            break;
        case "4n":
            if(HP % 4 === 0) return HP;
            break;
        case "2n":
            if(HP % 2 === 0) return HP;
            break;
        case "2n+1":
            if(HP % 2 === 1) return HP;
            break;
    }
    return HP_calc0(select, HP - 1, HP_min);
}

function HP_calc1(select, HP, HP_max){
    if(HP > HP_max) return null;

    switch(select){
        case "191":
            if(HP === 191) return HP;
            break;
        case "16n-1":
            if(HP % 16 === 15) return HP;
            break;
        case "16n+1":
            if(HP % 16 === 1) return HP;
            break;
        case "16n":
            if(HP % 16 === 0) return HP;
            break;
        case "10n-1":
            if(HP % 10 === 9) return HP;
            break;
        case "4n+1":
            if(HP % 4 === 1) return HP;
            break;
        case "4n":
            if(HP % 4 === 0) return HP;
            break;
        case "2n":
            if(HP % 2 === 0) return HP;
            break;
        case "2n+1":
            if(HP % 2 === 1) return HP;
            break;
    }
    return HP_calc0(select, HP + 1, HP_max);
}