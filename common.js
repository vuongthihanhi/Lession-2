let defaultUsername = "admin", defaultPassword ="12345";

function clickBtnLogin() {
	let username, password;
	username = document.getElementById('userName').value;
	password = document.getElementById('passWord').value;
	if ((username == defaultUsername) && (password == defaultPassword)) {
		// login success
		window.location = "table.html";
		return false;
	} else {
		alert("Incorrect username/password");
	};
};

/*function btnAdd() {
    let add = document.createElement("td");
    let textId1 = document.createTextNode("1");
    add.appendChild(textId1);
    document.getElementById("id1").appendChild(add);
};*/ 
function btnAdd(){
	let table = document.getElementById("tableBooks");
	let row = table.insertRow(0);
	let cell1 = row.insertCell(0);
	let cell2 = row.insertCell(1);
	let cell3 = row.insertCell(2);
	let cell4 = row.insertCell(3);
	let cell5 = row.insertCell(4);
	let cell6 = row.insertCell(5);
	let id = document.getElementById('idBook').value;
	let name = document.getElementById('nameBook').value;
	let description = document.getElementById('desBook').value;
	let author = document.getElementById('authorBook').value;
	let categoryId = document.getElementById('catBook').value;
	let image = document.getElementById('imgBook').value;
	cell1.innerHTML = id;
	cell2.innerHTML = name;
	cell3.innerHTML = description
	cell4.innerHTML = author;
	cell5.innerHTML = categoryId;
	cell6.innerHTML = image;
	table.appendChild(row);

	saveItem(id, name, description, author, categoryId, image);
};
function saveItem(id, name, description, author, categoryId, image) {
	let book = {
		"id": id,
		"name": name,
		"description": description,
		"author": author,
		"categoryId": categoryId,
		"image": image
	};
	let datas = localStorage.getItem("books");
	if (datas) {
		datas = JSON.parse(datas);
	} else {
		datas = [];
	};
	datas.push(book);
	// save item to localstorage
	localStorage.setItem("books", JSON.stringify(datas));
};
function btnDel(){
	document.getElementById("tableBooks").deleteRow(1);
	window.localstorage.clear();
};

// let Books = [{
// 	"id": 1,
// 	"name": "Book 1",
// 	"category": "math"
// }, {
// 	"id": 2,
// 	"name": "Book 2",
// 	"category": "math"
// }];
// function renderBooks() {
// 	console.log('RENDER');
// };

// renderBooks();	