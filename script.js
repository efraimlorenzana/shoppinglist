const txtItem = document.querySelector('#txtItem');
const btnAdd = document.querySelector('#btnAdd');
const Items = document.querySelector('#Items');
const noItems = document.querySelector('#noItems');

function itemLen() {
	return txtItem.value.length;
}

function NewList() {
	//Create New List
	let li = document.createElement('li');
	li.appendChild(document.createTextNode(txtItem.value));
	li.classList.add('li-style');
	li.addEventListener('click',toggleDone);
	Items.appendChild(li);
	txtItem.value = "";

	function toggleDone() {
		li.classList.toggle('done');
	}

	//create button
	let btnRemove = document.createElement('button');
	btnRemove.appendChild(document.createTextNode("x"));
	btnRemove.classList.add('btn-style');
	btnRemove.addEventListener('click', removeList);
	li.appendChild(btnRemove);

	showItems();

	function removeList() {
		li.remove();
		showItems();
	}
	
	function showItems() {
		let attr = Items.children.length > 0 ? 'none' : 'block';
		noItems.style.display = attr;
	}
}

txtItem.addEventListener('keypress', function (e) {
	itemLen() > 0 && e.keyCode === 13 ? NewList() : null ;
})

btnAdd.addEventListener('click', function (e) {
	itemLen() > 0 ? NewList() : null ;
})