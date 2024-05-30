// https://reactivex.io/rxjs/manual/tutorial.html

// Controlling the flow --------------------------------------
var input = Rx.Observable.fromEvent(document.querySelector('input'), 'input');

// Producing values -------------------------------------
// Pass on a new value
input.map( event => event.target.value)
  .subscribe(value => log(value));

  // Pass on a new value by plucking it
input.pluck('target', 'value')
  .subscribe(value => log(value));

//-------------------------------------------
function log(val){
  let el = document.createElement('p');
  el.innerText = val;
  document.body.appendChild(el);
  console.log(val);
}

