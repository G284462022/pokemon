/*
HTML要素を配列として取得するコード
Array.prototype.slice.call
https://www.konosumi.net/entry/2019/05/26/220321
参照日：2025/1/7

クリックされたチェックボックスの添字を取得するコード
indexOf()
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
参照日：2025/1/7

checkboxがクリックされた時の処理を記述する際のthisの使い方
cli(this)
https://qiita.com/takkyun/items/c6e2f2cf25327299cf03
参照日：2025/1/7

checkboxがクリックされた時のfunctionの記述の仕方
checkboxs[i].onclick = function (){}
https://techplay.jp/column/568
参照日：2025/1/7

randomで生成された小数を整数に変換するメソッド
Math.floor()
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
参照日：2025/1/7

blockにおいてお邪魔ブロックを作成するためのhiddenの使い方
checkboxs[random].type = "hidden";
https://magazine.techacademy.jp/magazine/19638
参照日：2025/1/7

ドロップダウンメニューを変更した時の処理の書き方
・html
<select onchange="levelChange()" id="level">
・script
function levelChange(){}
https://www.javadrive.jp/javascript/form/index5.html
参照日：2025/1/7

ドロップダウンメニューの値を取得するコード
level.value
https://www.javadrive.jp/javascript/form/index5.html
参照日：2025/1/7

文字列を数字に変換するコード
Number(level.value)
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number
参照日：2025/1/7

要素を作成し、tabelに追加するコード
document.createElement("tr");
new_td.appendChild(new_input);
https://qiita.com/forever---searcher/items/7901217dc811d72687f8
参照日：2025/1/7

要素の消し方
gyou[i].remove()
https://qiita.com/cookiesand1023/items/3cd57fd51f85ff920990
参照日：2025/1/7

tr内のtdを指定する方法
gyou[i].cells[bordSize - i - 1].remove();
https://so-zou.jp/web-app/tech/programming/javascript/dom/node/element/html/table/
参照日：2025/1/7
*/

let checks = document.getElementsByClassName("checks");
let checkboxs = Array.prototype.slice.call(checks);
let level = document.getElementById("level");
let score = document.getElementById("score");
let count = 0;
let main = document.getElementById("main");
let lookMain = document.getElementById("lookMain");
lookMain.style.display = "none";
let lookRank = document.getElementById("lookRank");
let rank = document.getElementById("rank");
rank.style.display = "none";

const URL3_3 = "https://script.google.com/macros/s/AKfycbxzTyP1qibynIsp6vSCfjvr4AurDP8P0k4nxj36YtXWJc1LqJHQ0iaPBeQRitP8Toc7/exec";
const URL4_4 = "https://script.google.com/macros/s/AKfycbz_xHVWGq-eFalgJorjK4inVy40jH6fFknPt4wX-PYijP9oT41KP0W7MptSaXVYkIvt/exec";
const URL5_5 = "https://script.google.com/macros/s/AKfycbwBW7Q9pN0L_cgOP4k6FUo5gDrXK1heBw91tc0Ok2GPwKPmiBCeAxNjuGDNlQmw7qlSSA/exec";
let baseUrl = "";


let bordSize = 3;

settei();

function settei(){
    for(let i = 0 ; i < checkboxs.length ; i++){
        checkboxs[i].onclick = function (){
            console.log(this);
            click(this);
        }
    }
}

function click(checking){
    count++;
    score.textContent = "手数：" + count;
    let index = checkboxs.indexOf(checking);
    console.log(index);
    juuzi(index);
    hantei();
}

function juuzi(index){
    let newIndex;

        newIndex = index + 1;
        if(index % bordSize != (bordSize - 1))omoteura(newIndex);

        newIndex = index - 1;
        if(index % bordSize != 0)omoteura(newIndex);

        newIndex = index + bordSize;
        if(index < (checks.length - bordSize))omoteura(newIndex);

        newIndex = index - bordSize;
        if(index >= bordSize)omoteura(newIndex);
}

function omoteura(newIndex){
    if(checks[newIndex].checked){
        checks[newIndex].checked = false;
    }else{
        checks[newIndex].checked = true;
    }
}

function hantei(){
    for(let i = 0 ; i < checkboxs.length ; i++){
        if(checkboxs[i].checked == false){
            if(i == checkboxs.length - 1)clear();
        }else{
            break;
        }
    }
}

function start(){
    count = 0;
    score.textContent = "手数：" + count;
    score.style.display = "block";
    lookRank.style.display = "none";
    rank.style.display = "none";
    for(let i = 0 ; i < checkboxs.length ; i++){
        checkboxs[i].checked = false;
    }

    for(let i = 0 ; i < checkboxs.length / 3 ; i++){
        let random = Math.floor(Math.random() * checkboxs.length);
        checkboxs[random].checked = true;
    }
}

function block(){
    for(let i = 0 ; i < checkboxs.length ; i++){
        checkboxs[i].type = "checkbox";
    }

    for(let i = 0 ; i < checkboxs.length / 3 - 1; i++){
        let random = Math.floor(Math.random() * checkboxs.length);
        checkboxs[random].type = "hidden";
    }
}

function levelChange(){
    //alert("こんにちは");
    newBordSize = Number(level.value);

    if(bordSize < newBordSize){
        tablePlus(newBordSize);
    }else if(bordSize > newBordSize){
        tableMinus(newBordSize);
    }

    settei();
}

function tablePlus(newBordSize){
    /*
    手順
    ○行を追加
        1.table要素を取得
        2.変更後を変更前の差の分だけ行(tr)を追加
        3.tdを変更前の列の分だけ作り、trに追加する
        4.tdを追加したtrをtableに追加する
    ○列を追加
        1.gyou要素を取得
        2.tdを作り、行に(取得したgyou要素に順番に)追加する
        3.変更後を変更前の差の分だけ、上の2.の作業を繰り返す
    ○最後に配列checkboxsとbordSizeを更新する
    */

    let table = document.getElementById("table");
    for(let i = 0 ; i < newBordSize - bordSize ; i++){
        let new_tr = document.createElement("tr");
        new_tr.className = "gyou";
        for(let j = 0 ; j < bordSize ; j++){
            let new_td = document.createElement("td");
            let new_input = document.createElement("input");
            new_input.type = "checkbox";
            new_input.className = "checks";
            new_td.appendChild(new_input);
            new_tr.appendChild(new_td);
        }
        table.appendChild(new_tr);
    }

    let gyou = document.getElementsByClassName("gyou");
    for(let j = 0 ; j < newBordSize - bordSize ; j++){
        for(let i = 0 ; i < gyou.length ; i++){
            let new_td = document.createElement("td");
            let new_input = document.createElement("input");
            new_input.type = "checkbox";
            new_input.className = "checks";
            new_td.appendChild(new_input);
            gyou[i].appendChild(new_td);
        }
    }
    checkboxs = Array.prototype.slice.call(document.getElementsByClassName("checks"));
    bordSize = newBordSize;
}

function tableMinus(newBordSize){
    /*
    手順
    ○tableの変更
        1.変更前から変更後の差の分だけ下から行を削除
        2.変更前から変更後の差の分後ろから列を削除
        3.行の分だけ上の2.の作業を繰り替えす
    ○最後に配列checkboxsとbordSizeを更新する
    */

    let gyou = document.getElementsByClassName("gyou");
    for(let i = bordSize ; i > newBordSize ; i--){
        gyou[i-1].remove();

        for(let j = 0 ; j < newBordSize ; j++){
            gyou[j].cells[i - 1].remove();
        }
    }
    checkboxs = Array.prototype.slice.call(document.getElementsByClassName("checks"));
    bordSize = newBordSize;
}

function clear(){
    alert("成功!!\n手数は " + count + " でした!");

    let name = window.prompt("名前を入力してください", "");
    if (name == null || name == "") {
        alert("保存がキャンセルされました");
    } else {
        saveScore(name, count);
    }

    count = 0;
    score.textContent = "手数：" + count;
    for(let i = 0 ; i < checkboxs.length ; i++){
        checkboxs[i].checked = false;
    }
    score.style.display = "none";
    lookRank.style.display = "block";
}

function lookRanking(){
    checkRanking();

    main.style.display = "none";
    lookRank.style.display = "none";
    rank.style.display = "block";
    lookMain.style.display = "block";
}

function lookMaining(){
    main.style.display = "block";
    lookRank.style.display = "block";
    rank.style.display = "none";
    lookMain.style.display = "none";
}

async function saveScore(name, score) {
    switch(level.value){
        case "3":
            baseUrl = URL3_3; 
            break;
        case "4":
            baseUrl = URL4_4;
            break;
        case "5":
            baseUrl = URL5_5;
            break;
    }
    let newUrl = baseUrl + "?name=" + name + "&score=" + score;
  
    const request = {
      method: "POST"
    };
  
    const response = await fetch(newUrl, request);
}

async function checkRanking(){
    let scorebord = document.getElementById("x*x"); 
    switch(level.value){
        case "3":
            baseUrl = URL3_3;
            scorebord.textContent = "3×3";
            break;
        case "4":
            baseUrl = URL4_4;
            scorebord.textContent = "4×4";
            break;
        case "5":
            baseUrl = URL5_5;
            scorebord.textContent = "5×5";
            break;
    }
    // Google Sheetsからのデータの取得
      const request = {
        method: "GET"
      };
      const responce = await fetch(baseUrl, request);
      const res = await responce.json();
    
      console.log(res);
    // データをscoreの降順（大きい順）で並び替える
      res.sort(function(a,b){
        return(a[1] - b[1]);
        });
    // 取得したデータ(scoreとname）を元に、ランキング表に値を入れる
       const table = document.getElementById("rankingTable");
       for(let i = 0 ; i < 5 ; i++){
        table.rows[i].cells[1].innerHTML = "no data";
        table.rows[i].cells[2].innerHTML = "-";
       }
    
        for (i=0; i<res.length && i < 5; i++) {
            // 名前の設定
            let name = table.rows[i].cells[1];
            
            
            name.innerHTML = res[i][0] + "さん";
            // スコアの設定
            let score1 = table.rows[i].cells[2];
            score1.innerHTML = "手数 " + res[i][1] + " 回";
        }   
}