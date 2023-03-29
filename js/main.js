import renderTable from './renderTable.js';

const book = document.getElementById("book");

fetch('../books.json')
.then(response => response.json())
.then(d => {
	console.log(d);
	renderTable(d);
    const form = document.querySelector('#form');
    const button = document.querySelector('#button');
    const result = document.querySelector('#result');
	console.log(form);

    const tryToFilter = () => {
	result.innerHTML = '';
	console.log(form.value);
	const text = form.value.toLowerCase();
	for(let x of d){
		console.log(x);
		let name = x.TITULO.toLowerCase();
        console.log(name)
		if(name.indexOf(text) !== -1){
			result.innerHTML += `<a href="#${x.TITULO}" class="list-group-item d-flex justify-content-between align-items-start sc1"> <span class="badge bg-primary">${x.TITULO}</span> Precio: <span class="badge bg-secondary sc1">$ ${x.IMPORTE}</a>`
		}
	}
	if(result.innerHTML === ''){
		result.innerHTML += `<li class="list-group-item list-group-item-danger">El titulo no existe... Intente nuevamente.</li>`
	}
}

button.addEventListener('click', tryToFilter)	
})
.catch(err => {
	console.error(err);
});

//Scroll up

document.getElementById('button-up').addEventListener("click", scrollUp);

function scrollUp(){
    let currentScroll = document.documentElement.scrollTop;
    if(currentScroll > 0){
        //window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, 0);
    }
}

const buttonUp = document.getElementById('button-up');

window.onscroll = function(){
    let scroll = document.documentElement.scrollTop;
    if(scroll > 100){
        buttonUp.style.transform = "scale(1)"; 
    }else if(scroll < 100){
        buttonUp.style.transform = "scale(0)";
    }
}
