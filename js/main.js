const out= getElementById("output");
let paragraph;
function buttonClick(){
   fetch("http://localhost:3000/users").then(
    (response)=>{
        return response.text();

    }
   ).then ((text) => {
let UssersArray =JSON.parse(text);
UssersArray.array.forEach(element => {
    paragraph=document.createElement('p');
    paragraph.innnerText='id: ${element.id} name:${element.name} email: ${element.email)'})
    out.appendChild(paragraph);
   });
}