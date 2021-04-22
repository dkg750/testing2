console.log("This is an example of flexBox");
document.getElementById("container").addEventListener("click",function(e){
    let container=document.getElementById("container");
    let vary=e.target.id;
//console.log(vary);
   container.removeChild(document.getElementById(vary));
});



let i=1;
for(i=1;i<10;i++)
{
let elem=document.getElementById("container");
let create=document.createElement("div");
create.id="item"+i;
create.className="item";
let tnode=document.createTextNode("This is "+i+ " Box");
create.appendChild(tnode);
elem.appendChild(create);
}