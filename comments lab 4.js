async function getJson() {
    
  const response = await fetch('https://dummyjson.com');
    const data = await response.json();            
}
async function getJson() {
    
    let response = await fetch('https://dummyjson.com');
    let user = await response.json();
     let CommentInfo = `
    <div class="avatar">
        
        <p> ${div} </p>
    </div>`;
    user.innerHTML = CommentInfo;
    Comments.append(user);
    
    let Response = await fetch(`https://dummyjson.com${user.name}`);
    let User = await Response.json();
}
.then((json) => json.posts);
  console.log(response);