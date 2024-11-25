const cursor = document 
	.querySelector(".custom-cursor"); 

// Adding the animations when the 
// mouse button is clicked 

window.addEventListener("mousedown", (event) => { 
	if (!cursor.classList.contains("click")) { 
		cursor.classList.add("click"); 

		setTimeout(() => { 
			cursor.classList.remove("click"); 
		}, 800); 
	} 
}); 

// Getting the position of the cursor 
window.addEventListener("mousemove", (event) => { 
	let x = event.pageX - cursor.offsetWidth / 2, 
		y = event.pageY - cursor.offsetHeight / 2; 

	cursor.style.left = `${x}px`; 
	cursor.style.top = `${y}px`; 
}); 
