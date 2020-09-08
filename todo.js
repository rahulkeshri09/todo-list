var a=document.getElementById('btn');    // get submit action of adding input task 
a.addEventListener('click',function(){
	var b=document.getElementById('tas').value;   // get input value to add task
	if(b==""){
		window.alert("please input the task");
		return;
	}
	var tag = document.createElement('li');    // container of adding a task or container of display pending task
	var update=document.createElement('div');  // container of edit task to edit the task
	update.setAttribute("class","update");
	console.log(update);

	var textnode = document.createTextNode(b); 
	var div=document.createElement('div');
	div.appendChild(textnode);
	tag.appendChild(div); 
	console.log("tag",tag);
	var delNode = document.createTextNode("Completed / Delete");   // delete task button
	var del=document.createElement('a');  // delete task button
	var edit=document.createElement('a');  //edit task button
	var editNode=document.createTextNode('Edit');   
	edit.appendChild(editNode);
	del.appendChild(delNode);
	update.appendChild(del);
	update.appendChild(edit);
	edit.style.color="blue";
	edit.setAttribute("class","editTask");
	del.setAttribute("class","delete");
	tag.appendChild(update);                        
	document.getElementById("tasks").prepend(tag);     
	document.getElementById('tas').value='';    
	load();            // load() use for edit and delete pending task
});
function load(){
	var del=document.getElementsByTagName('li');    // get list of pending task
	for(let i=0;i<del.length;i++){
   		del[i].addEventListener('click',delLi(del[i]));      // deleting the task send argument of current task which is selected 
   }
   for(let k=0;k<del.length;k++){            // edit the task send argument of current task which is selected 
   		del[k].addEventListener('click',editLi(del[k]));
   	//	console.log(del[i].children);
   }
	function delLi(abc){     // delete task function
		abc.children[1].children[0].addEventListener('click',function(){
			abc.remove();
		});
		return;
	}
	function editLi(abc){    // edit task function
		abc.children[1].children[1].addEventListener('click',function(){
			if(abc.children.length>2){ 					// check edit container open or not
				return;
			}
			var editTask=document.createElement('div');      // open the container for editing the task 
			editTask.setAttribute("class","editTaskContainer");
			var input=document.createElement('input');
			var btn=document.createElement('a');   // submit button of updated edited task
			btn.innerHTML="submit";
			editTask.appendChild(input);
			abc.appendChild(editTask);
			editTask.appendChild(btn);
			btn.addEventListener('click',function(){
				if(input.value==""){				// check input task is not empty
					window.alert("please input the task");
					return;
				}
				abc.children[0].innerText=input.value;    // update the task
				editTask.remove();
			})
		});
		return;
	}
}
