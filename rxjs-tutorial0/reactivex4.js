https://www.enmilocalfunciona.io/programacion-reactiva-con-rxjs/

var arrayStream$ = Rx.Observable.from([10,20,30]);  
// >> 10, 20, 30
arrayStream$.subscribe( item => log(item));



//-------------------------------------------
function log(val){
  let el = document.createElement('p');
  el.innerText = val;
  document.body.appendChild(el);
  console.log(val);
}

