let Status = document.getElementById("status");
Status.style.display = "none";

let DamageCalculation = document.getElementById("damageCalculation");
DamageCalculation.style.display = "none";

let Home = document.getElementById("home");

//作成用に表示している処理
//作り終わったら消す
// Home.style.display = "none";
// Status.style.display = "block";



let attackPoke = {
    // "ability": "", //特性
    // "nature": 1.0, //性格補正
    // "amountOfEffort": {
    //     "A": 0,
    //     "C": 0,
    // }, //努力値
    // "item": "", //持ち物
    // "statStageChanges": 0, //能力変化
    // "weather": "", //天候
    // "field": "", //フィールド
    // "move": "", //技
};

let defencePoke = {
    // "ability": "", //特性
    // "nature": 1.0, //性格補正
    // "amountOfEffort": {
    //     "H": 0,
    //     "B": 0,
    //     "D": 0,
    // }, //努力値
    // "item": "", //持ち物
    // "statStageChanges": 0, //能力変化
};

let Poke_waza = {
    // "no":"1",
    // "name":"10まんボルト",
    // "id":374549,
    // "type":"でんき",
    // "class":"特殊",
    // "pw":"90",
    // "hit":"100",
    // "pp":15,
    // "filter":"まひ",
    // "text":"10%の確率で相手をまひ状態にする。"
}

function modoru(){
    Status.style.display = "none";
    DamageCalculation.style.display = "none";
    Home.style.display = "block";
}

function statusMove(){
    Home.style.display = "none";
    Status.style.display = "block";
}

function damageMove(){
    Home.style.display = "none";
    DamageCalculation.style.display = "block";
}

DataListMake();
function DataListMake(){
    let datalist = [];
    datalist[0] = document.getElementById("リスト調べるポケ");
    datalist[1] = document.getElementById("攻撃ポケ");
    datalist[2] = document.getElementById("防御ポケ");
    for(let d of datalist){
        for(let v in poke_data){
            let listOption = document.createElement("option");
            listOption.value = poke_data[v].name;
            d.insertAdjacentElement("beforeend", listOption);
        }
    }
}