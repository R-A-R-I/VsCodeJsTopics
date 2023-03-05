//window.onload= function()
//{
        //The JavaScript onload event transpires when an object(window object) is loaded. The window object represents the browser's window. All global JavaScript objects, functions, and variables automatically become members of the window object. Global variables are properties of the window object. Global functions are methods of the window object.
        
        /*
        When you select onLoad, your JavaScript is wrapped with an onload function. This means your code will run when the page has finished loading, but is no longer available in the global scope. It looks like this
        */
        const form = document.getElementById('form');
        const task = document.getElementById('task');
        const submitButton = document.getElementById('submit button');
        //var taskjs = document.querySelector('#task').value;
        const clearButton = document.getElementById('clear button');
        
        
        
        //alert("hello world");
        if (document.getElementById('task') != null) {
            str = document.getElementById("task").value;
        }
        function delete_row(e) {

        // e.parentElement.remove();
        e.remove();
        }
        
        let taskContainer = document.createElement("div");
        taskContainer.setAttribute("class", "taskContainer");
        let removeButton;
        let doneButton;
        //console.log(str);
        //const submitButtonAction =
        submitButton.addEventListener("click",()=>{

            const taskvalue = task.value;
            window.taskvalue = taskvalue;

            //console.log(taskvalue);
        if( taskvalue ===''){
            alert("Please enter a task");
                }else{

                document.body.appendChild(taskContainer);
                
                var newTaskln= document.createElement('p');

                /*function setNewTaskln(newTaskln){
                    this.newTaskln = newTaskln;
                }*/
                //the reason this doesn't work is because it sets the this.newTaskln to the variable of the object executing the function which would be the window object, that is default to the browser and therefore global
                /*function getNewTaskln(){
                    return this.newTaskln;
                }*/
                //console.log(getNewTaskln());
                //console.log(newTaskln);

                newTaskln.innerText=taskvalue;
                
                // its like your changing one of many property inside the new element
                taskContainer.append(newTaskln);
                //document.body.appendChild(newTaskln);

                //remove button
                removeButton = document.createElement("button");
                
                removeButtonImg = document.createElement("img");
                removeButtonImg.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAA30lEQVRIS+2V4Q0CIQxG302gm+gIuokbqBM5gq5wGziKbmC+BBIS77hWUPwBv5s++mjLQKMzNOLSwT8z31X/leo1cAXOwH3hZgfgCOyBRy7W8saCbUIiJZyDC3oJsBHYlYLThKpiCp7GPAM0a8dSsS6eg7uhSmgFz8G3iV5TpVG/BzwFV+PpuKDeiuNlU7UfQWuB5xouO3klqqV3FbK74R7wVPemzeWCW8G5kbHM+Zt2C9gyp264BRxX5tLIVF+ZmtUbcDJ+EorTni7+JL7yVVpUd3AVA111FY2WJM1UvwDddEIfo/ojLgAAAABJRU5ErkJggg=="

                removeButton.append(removeButtonImg);
                
                task.value ="";
                //creates somewhere to store the remove button
                //removeButton is an object
                const removeIcon = document.createElement("a");
                /*removeIcon.setAttribute("href","To-do-list\iconfinder_cross_4115230.png");
                removeButton.appendChild("removeIcon");*/
                removeButton.addEventListener("click",()=>{

                    delete_row(newTaskln);
                })

                newTaskln.append(removeButton);

                //done button
                doneButton = document.createElement("button");
                window.doneButton = doneButton;
                doneButton.innerText='done';
                doneButton.addEventListener("click",()=>{
                    delete_row(newTaskln);
                })
                newTaskln.append(doneButton);
                
                }
                

            }
        
        )

        //window.submitButtonAction = submitButtonAction;

        //console.log(taskContainer);
        /*function taskContainer_children(){
            for(let node in document.querySelectorAll('taskContainer')){// probably has to be css that is a javascript variable currently
                return node;
            }
        }
        console.log(document.taskContainer.querySelectorAll('p'));
        taskContainer_children();*/
        function clear_list(e){
            e.remove();
        }
        /*console.log(taskContainer.getElementsByTagName("P"));*/

        

        
        
        clearButton.addEventListener("click",()=>{
         // console.log(document.querySelector('.taskContainer'));  
         console.log(taskContainer);
         taskContainer.textContent = '';
            /*for(let node in taskContainer){
                node.remove();
                console.log("after removing elements"+ document.querySelector('.taskContainer'));
                //node.value = '';
                
                //taskContainer = "";
            }
            clear_list(taskContainer);*/
        })
//}


