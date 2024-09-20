 const ADVICE_URL = "https://api.adviceslip.com/advice";

 const fetchAdvice = async ()=>{
try{
const response = await fetch(ADVICE_URL);
const data = await response.json();
return data.slip;
 }
catch(error){
console.log(error);
}
 }

 console.log(fetchAdvice());

 
let  idCount = document.getElementById('idCount');
let contentAdvice = document.getElementById('advices');

const diceImg = document.getElementById('dice');

 const renderAdvice = (advice)=>{
const adviceId = advice.id;
const content = advice.advice;
idCount.textContent = ` ADVICE #${adviceId}`;
contentAdvice.textContent = `"${content}"`;
}

diceImg.addEventListener('click', async ()=>{
const listAdvice = await fetchAdvice()
renderAdvice(listAdvice);
});



