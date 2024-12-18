//your JS code here. If required.
let body = document.querySelector("body")
let p = document.querySelector("#status")
const btn = document.querySelector("#enterBtn")
btn.addEventListener("click",(e)=>{
	const h1 = document.createElement("h1")
	h1.innerHTML = "Entered Metaverse"
	body.replaceChild(h1,p)
	// console.log(body)
})
// console.log(body) 

