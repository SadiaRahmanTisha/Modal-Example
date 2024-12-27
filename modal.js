const open = document.getElementById('open');
const modal_container  = document.getElementById('modal_container');
const close  = document.getElementById('close');

let isCLick = false

open.addEventListener('click', () =>{
	isCLick = !isCLick 
	if(isCLick) {
		modal_container.classList.add('show')
	} else {
		modal_container.classList.remove('show')
	}
});
close.addEventListener('click', () =>{
	isCLick = false
	modal_container.classList.remove('show')
});


const input_box = document.getElementById("input_box");
const modal_container_2 = document.getElementById("modal_container_2");
const close_me = document.getElementById("close_me");


let iCLick = false


input_box.addEventListener('click', () =>{
	iCLick = !iCLick
	if(iCLick){
		modal_container_2.classList.add('show')
		console.log('clicked');
		
	}else{
		modal_container_2.classList.remove('show')
		console.log('clicked');
	}
})

close_me.addEventListener('click', () =>{
	iCLick = false
	modal_container_2.classList.remove('show')
})