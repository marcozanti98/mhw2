let risposte = {};

 let flag1 = false;
 let flag2 = false;
 let flag3 = false;

function immagine_scelta(event) 
{  
 const div = event.currentTarget;  
 const image = div.querySelector('img.checkbox');
 const id_domanda = (div.dataset.questionId); 

 const box_domanda = document.querySelectorAll ('[data-question-id=' + id_domanda + ']');
 for (let i of box_domanda) 
 {
   i.classList.add("opacity");
   i.classList.remove("diventa_blu");
   i.querySelector('.checkbox').src='./images/unchecked.png';
 }
   if (id_domanda === 'one') {
    flag1 = true;
   }
   if (id_domanda === 'two') {
    flag2 = true;
   }
   if (id_domanda === 'three') {
    flag3 = true;
   }

const message = (div.dataset.choiceId);
risposte[id_domanda]=message;

image.src = './images/checked.png';
div.classList.add("diventa_blu");
div.classList.remove("opacity");

 if (flag1 === true && flag2 === true && flag3 === true)
 {
    for (const i of box_domanda) 
    {
        i.removeEventListener('click', immagine_scelta);
    }

    invio_risposte();
 }
}

//faccio in modo che le immagini siano cliccabili
const immagini = document.querySelectorAll('.choice-grid div');
for(let i of immagini)
{
   i.addEventListener('click', immagine_scelta);
}

//conferma risposte
function invio_risposte() {
    const articolo = document.querySelector('article');  
    const div1 = document.createElement('div');  
    const titolo = document.createElement('h1');
    const contenuto = document.createElement('span');
    const tasto = document.createElement('button');

    const one= risposte['one'];
    const two= risposte['two'];
    const three= risposte['three'];

    articolo.appendChild(div1);
    div1.classList.add("fine");

    if (two === three){
    titolo.textContent= RESULTS_MAP[two]['title'];
    contenuto.textContent= RESULTS_MAP[two]['contents'];
    div1.appendChild(titolo);
    div1.appendChild(contenuto);
    }
    else {
    titolo.textContent= RESULTS_MAP[one]['title'];
    contenuto.textContent= RESULTS_MAP[one]['contents'];
    div1.appendChild(titolo);
    div1.appendChild(contenuto);
    }

    tasto.textContent= 'Ricomincia il Quiz';
    div1.appendChild(tasto);

    const bottone = document.querySelector('.fine button');
    bottone.addEventListener("click", aggiorna);
}

//aggiornamento
function aggiorna ()
{
    const immagini = document.querySelectorAll ('.choice-grid div');
    for (let i of immagini){
        i.addEventListener('click', immagine_scelta);
        i.classList.remove("opacity");
        i.classList.remove("diventa_blu");
        i.querySelector('.checkbox').src= './images/unchecked.png';

    }
    const end = document.querySelector('.fine');
    end.remove();

    flag1=false;
    flag2=false;
    flag3=false;

    window.scrollTo(0,0);
}