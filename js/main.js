/*js du slider*/
const section=document.querySelector('.container');
const items=section.querySelectorAll('article');
const nbSlide=items.length;
const suivant=document.querySelector('button.btn-nav-right');
const precedent=document.querySelector('button.btn-nav-left');
let count=0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count<nbSlide-1){
        count++;
    }else{
        count=0;
    }

    items[count].classList.add('active');
}
suivant.addEventListener('click', slideSuivante);

function slidePrecedente(){
    items[count].classList.remove('active');

    if(count>0){
        count--;
    }else{
        count=nbSlide-1;
    }

    items[count].classList.add('active');
}
precedent.addEventListener('click', slidePrecedente);
/*js popup*/


/*test daily*/
/*let num=prompt("Merci de saisir un nombre pour voir s'il est prime");
let tab=[];
let j=0;
let c=0;

for (let i=2; i<num; i++){
    let count=0;   
        for(let j=1;i-j>0;j++){
            if( i%j==0){                              
                count++;                
            }
        }
        if(count==1){
            tab[c]=i;
            c++;
        }
    }  
 alert(tab);*/
