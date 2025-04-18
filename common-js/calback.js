function greating ( greatingHandler,a){
    greatingHandler(a);
}

// greating('Sadhin')
function greatingHandler(a){
    console.log('Good Morning',a);
}
function greatingEvening(a){
    console.log('Good Evening',a);
}

greating(greatingHandler, 'sadhin')
greating(greatingHandler, 'Ridwan')
greating(greatingHandler, 'Rayhan')
greating(greatingEvening , 'rean')