//your JS code here. If required.
function form(name, age){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
		if(age>=18){
			resolve(`Welcome, ${name} You can vote.`)
		}
		else{
			reject(`Oh sorry ${name} You aren't old enough.`)
		}
			},4000)
	})
}

function validation(event){
event.preventDefault()
const name=document.getElementById("name").value
const age=document.getElementById("age").value
	
	form(name,age)
	.then((alert1)=>{
		alert(alert1)
	}) 
		.catch((alert1)=>{
			alert(alert1)
		})
}