const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');//pega multiplos empty

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag Functions

//usa alguns 'gatilhos' pra saber se entrou ou saiu em cada um dos slots

function dragStart() {
  this.className += ' hold'; 
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  //hovered = pairado
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  //fill é sempre o cara eleito para conter a imagem;
  this.append(fill);
}
