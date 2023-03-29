export default function renderTable(d){
	console.table(d);
	for(let i=0; i< d.length; i++){
		console.log(i);
		console.log(d[i].IMAGEN)

		//creating elements
		let divt = document.createElement('div');
		divt.setAttribute('class', 'card');
		divt.setAttribute('style', '18rem');
		let indexT = document.createElement('span');
		indexT.setAttribute('id', d[i].TITULO);
		let img = document.createElement('img');
		img.setAttribute('class', 'box');
		let title = document.createElement('h5');
		let link = document.createElement('span');
		let modal = document.createElement('div');

		//assign values
		
		img.src = `${d[i].IMAGEN} alt="${d[i].TITULO}"`;
		title.innerHTML =  `${d[i].TITULO}`;
		link.innerHTML =  `<td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal--${i}">Info</button></td>`;
	
		//modal
		modal.innerHTML =
		`<div class="modal fade box" id="exampleModal--${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		  <div class="modal-dialog">
			<div class="modal-content">
			  <div class="modal-header d-flex justify-content-between flex-column">
			  <img src="${d[i].IMAGEN}" class="rounded float-start box" alt="${d[i].TITULO}">
				<h5 class="modal-title" id="exampleModalLabel">${d[i].TITULO}</h5>
				<h5 class="modal-title" id="exampleModalLabel">${d[i].AUTOR}</h5>
			  </div>
			  <div class="modal-body">
			  <ul class="list-group">
			  <li class="list-group-item list-group-item-light d-flex justify-content-between">Precio: <span class="badge bg-dark">$ ${d[i].IMPORTE}</li>
			  <li class="list-group-item list-group-item-light d-flex justify-content-between">Editorial: <span class="badge bg-dark">${d[i].EDITORIAL}</li>
			  <li class="list-group-item list-group-item-light d-flex justify-content-between">ISBN: <span class="badge bg-dark">${d[i].ISBN}</li>
			  <li class="list-group-item list-group-item-light d-flex justify-content-between">Paginas: <span class="badge bg-dark"> ${d[i].PAG}</li>
			  <li class="list-group-item list-group-item-light d-flex justify-content-between">Tematica: <span class="badge bg-dark"> ${d[i].TEMATICA}</span></li>
			  <li class="list-group-item list-group-item-light d-flex justify-content-between">Breve Reseña: <span class="badge bg-dark">${d[i].BREVE}</span></li>
			</ul>
			  </div>
			  <div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
			  </div>
			</div>
		  </div>
		</div>
		`;

		//adding modals to its wrapper
		document.getElementById("modals").appendChild(modal);

		//add elements to book
		divt.appendChild(indexT)
		divt.appendChild(img);
		divt.appendChild(title);
		divt.appendChild(link)
		
	
		//add tr to tbody
		book.appendChild(divt);
	}
}