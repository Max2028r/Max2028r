let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header')

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onskroll = () => {
    menu.classList.remove('fa-times');
    header.classList.toggle('active');
}

let cursor1 = document.QuerySelector('.cursor-1');
let cursor2 = document.QuerySelector('.cursor-2');

window.onmousemove = () => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageY + 'px';
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageY + 'px';
}

let links = document.querySelectorAll('a').forEach(links => {

            links.onmouseenter = () => {
                cursor1.classList.add('active');
                cursor2.classList.add('active');
            }
            links.onmouseleave= () => {
                cursor1.classList.remove('active');
                cursor2.classList.remove('active');
  );