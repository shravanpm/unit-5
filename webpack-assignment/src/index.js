import app from "./component"
import "./index.css"
import Logo from "./img/note-taking.png"

let layout = document.getElementById("root");
layout.innerHTML = app;
var nav = document.getElementsByClassName("navbar-brand")[0];
var img=document.createElement("img")
img.src=Logo
img.style.width="100px"
var p=document.createElement("p")
p.textContent="Note Taking Application"
p.style.fontSize = "30px";

nav.append(img,p)
var notesObj = [];

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");

  notesObj.push(addTxt.value);
  addTxt.value = "";

  showNotes();
});

function showNotes() {
 

  let html = "";

  notesObj.forEach((element, index) => {
    html += `<div class="noteCard my-2 mx-2 card" 
            style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">
                        Note ${index + 1}
                    </h5>
                    <p class="card-text"> 
                        ${element}
                    </p>

            </div>
        </div>`;
  });

  let notesElm = document.getElementById("notes");

  if (notesObj.length != 0) notesElm.innerHTML = html;
  else
    notesElm.innerHTML = `Nothing to show! 
        Use "Add a Note" section above to add notes.`;
}


