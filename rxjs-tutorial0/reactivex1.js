// https://reactivex.io/rxjs/manual/tutorial.html
// The basics

var observable1 = Rx.Observable.of('foo', 'bar');
observable1.subscribe( e => log(e));
//obs1.next('baz'); Invalid

Rx.Observable.from([1,2,3]);

var observable2 = Rx.Observable.fromEvent(document.querySelector('button'), 'click');
observable2.subscribe( e => log(e));

var myObservable = new Rx.Subject();
myObservable.subscribe(value => log(value));
myObservable.next('Bart');


var myObservable = Rx.Observable.create( observer => {
  observer.next('1111');
  setTimeout(() => observer.next('2222'), 1000);
});
myObservable.subscribe( value => {
  log('withSetTimeout ' + value);
});

// Controlling the flow --------------------------------------
var input = Rx.Observable.fromEvent(document.querySelector('input'), 'input');

// // Filter out target values less than 3 characters long
// input.filter(event => event.target.value.length > 2)
//   .map(event => event.target.value)
//   .subscribe(value => log(value));

// // Delay the events
// input.delay(200)
//   .map(event => event.target.value)
//   .subscribe(value => log('delay:'+value));

//   // Only let through an event every 200 ms
// input.throttleTime(200)
//   .map(event => event.target.value)
//   .subscribe(value => log('Throttle:'+value));

// // Let through latest event after 200 ms
// input.debounceTime(300)
//   .map(event => event.target.value)
//   .subscribe(value => log('Debounce:'+value));

// Stop the stream of events after 3 events
input.take(3)
  .map(event => event.target.value)
  .subscribe(value => log('Take3:'+value));

  // Passes through events until other observable triggers an event
var stopStream = observable2;
input.takeUntil(stopStream)
  .map(event => event.target.value)
  .subscribe(value => log('TakeUntil:'+value));

// Producing values -------------------------------------
// Pass on a new value
input.map( event => event.targer.value)
  .subscribre(value => log(value));


//-------------------------------------------
function log(val){
  let el = document.createElement('p');
  el.innerText = val;
  document.body.appendChild(el);
  console.log(val);
}

