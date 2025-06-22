const fortunes=["大吉","中吉","小吉","吉","凶","大凶"];

function getFortune(){
    const zodiac=document.getElementById('zodiac').value;
    const blood=document.getElementById('blood').value;
    const resultDiv=document.getElementById('result');

    if(!zodiac || !blood){
        resultDiv.textContent="星座と血液型を選んでください";
        return;
    }

const today=new Date().toDateString().slice(0,10);
const key=zodiac + "_" + blood +"_" + today;

const hash=hashCode(key);
const index=Math.abs(hash)%fortunes.length;
resultDiv.textContent="今日の運勢:"+fortunes[index];
}

function hashCode(str){
    let hash=0;
    for(let i=0; i<str.length; i++){
        hash=((hash<<5)-hash)+str.charCodeAt(i);
        hash |=0;
    }
    return hash;
}
