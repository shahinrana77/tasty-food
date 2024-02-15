let review = document.querySelector("#review");
let customers = document.querySelector("#customers");
let items = document.querySelector("#items");

let reviews = 1700;
let clients = 2500;
let menu = 150;
let r = 0;
function reviewRun(){
  if(r < reviews){
    for(let i=0; i<1; i++){
      r++;
    }
    setTimeout(reviewRun, 1);
    review.innerText = `${r}+`;
  }
}
function clientsRun(){
  if(r < clients){
    for(let i=0; i<=1; i++){
      r++;
    }
    setTimeout(clientsRun, 1);
    customers.innerText = `${r}+`;
  }
}
function menuRun(){
  if(r < menu){
    for(let i=0; i<=1; i++){
      r++;
    }
    setTimeout(menuRun, 1);
    items.innerText = `${r}+`;
  }
}
reviewRun();
clientsRun();
menuRun();