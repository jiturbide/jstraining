const observable = Rx.Observable.create( observer => {
    observer.next('hello');
    observer.next('world');
});

observable.subscribe( (val) => {
    log(val);
});

function log(val){
    let el = document.createElement('p');
    el.innerText = val;
    document.body.appendChild(el);
    console.log(val);
}