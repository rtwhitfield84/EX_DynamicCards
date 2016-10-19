/*GET INPUTS*/
var createButton = document.getElementById("create");
var placeHolder = document.getElementById("placeholder");
var textarea = document.getElementById("textArea");
var card;
var deleteButton;
var cardListener;
var deleteText = "Delete?";

document.addEventListener("click", function(event) {
	var text = textarea.value;
	if (text.length > 1 && event.target === createButton) {
		create(text,deleteButton);
		cardListener = document.getElementsByClassName("newCard");
		textarea.value = "";
}
});

function create (text, deleteButton) {
	card = document.createElement("div");
	deleteButton = document.createElement("button");
	card.setAttribute("class", "newCard");
	deleteButton.setAttribute("class", "delete");
	card.innerHTML = text;
	deleteButton.innerHTML = deleteText;
	card += placeholder.appendChild(card).appendChild(deleteButton);
	cardListener = document.getElementsByClassName("newCard");
placeholder.addEventListener("click", function(event){
	  if (event.target === deleteButton) {
		remove();
	}
});
}	

function remove (placeHolder) {
	cardListener = document.getElementsByClassName("newCard");
	cardListener[0].remove();
}





