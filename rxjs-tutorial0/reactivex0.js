// https://reactivex.io/rxjs/manual/tutorial.html
// The basics

var observable0 = Rx.Observable.of('foo', 'bar');
// observers
observable0.subscribe( i => log('obs1: ' + i));
observable0.subscribe( i => log('obs2: ' + i));

//observable0.next('baz'); //Invalid

var observable1 = Rx.Observable.from([1,2,3]);
observable1.subscribe( i => log('obs3:' + i));
observable1.subscribe( i => log('obs4:' + i));

var observable2 = Rx.Observable.fromEvent(document.querySelector('button'), 'click');
observable2.subscribe( e => log(e));

// SUBJECT
var myObservable = new Rx.Subject();
myObservable.subscribe(value => log('observable1:' + value));
myObservable.next('Bart 1');
myObservable.next('Bart 2');
myObservable.subscribe(value => log('observable2:' + value));
myObservable.next('Bart 3');

var factory = observable => {
  observable.next('1111');
  setTimeout(() => observable.next('2222'), 1000);
};

var myObservable = Rx.Observable.create(factory);
myObservable.subscribe( i => {
  log('withSetTimeout ' + i);
});

log('---------------------------------------');
// Controlling the flow --------------------------------------
var inputObservable = Rx.Observable.fromEvent(document.querySelector('input'), 'input');

// Producing values -------------------------------------
/*
// Pass on a new value
inputObservable.map( event => event.target.value)
  .subscribe(value => log('Map event -> value: ' + value));
*/

// Filter out target values less than 3 characters long
// inputObservable.filter(event => event.target.value.length > 2)
//   .map(event => event.target.value)
//   .subscribe(value => log('filter:' + value));

// // Delay the events
// inputObservable.delay(200)
//   .map(event => event.target.value)
//   .subscribe(value => log('delay:'+value));

//   // Only let through an event every 200 ms
// inputObservable.throttleTime(200)
//   .map(event => event.target.value)
//   .subscribe(value => log('Throttle:'+value));

// // Let through latest event after 200 ms
// inputObservable.debounceTime(300)
//   .map(event => event.target.value)
//   .subscribe(value => log('Debounce:'+value));

// typing "hello world"
var input = Rx.Observable.fromEvent(document.querySelector('input'), 'input');

// Pass on a new value
input.map(event => event.target.value)
  .subscribe(value => console.log(value)); // "h"

// Pass on a new value by plucking it
input.pluck('target', 'value')
  .subscribe(value => console.log(value)); // "h"

// Pass the two previous values
input.pluck('target', 'value').pairwise()
  .subscribe(value => console.log(value)); // ["h", "e"]

// Only pass unique values through
input.pluck('target', 'value').distinct()
  .subscribe(value => console.log(value)); // "helo wrd"

// Do not pass repeating values through
input.pluck('target', 'value').distinctUntilChanged()
  .subscribe(value => console.log(value)); // "helo world"

  
// Stop the stream of events after 3 events
inputObservable.take(3)
  .map(event => event.target.value)
  .subscribe(value => log('inputObservable value:' + value));

// Passes through events until other observable triggers an event
var stopStream = observable2;
inputObservable.takeUntil(stopStream)
  .map(event => event.target.value)
  .subscribe(value => log('TakeUntil observable2 triggers:' + value));


//-------------------------------------------
function log(val){
  let el = document.createElement('p');
  el.innerText = val;
  document.body.appendChild(el);
  console.log(val);
}

