var sharebutton = document.getElementById('shareicon')
var links = document.getElementById('linksmenu')
var iconcolor = document.getElementById('sharebutton')
sharebutton.onclick =function(){
    var showmenu=links.getAttribute('show')
    if(showmenu == 'false'){
        links.style.display='flex'
        links.setAttribute('show','true')
}else{
    links.style.display='none'
    links.setAttribute('show','false')
}
//*************** */
// sharebutton.onmouseover = function(){
//     links.style.visibility = 'visible'
//     sharebutton.style.backgroundColor='hsl(9, 20%, 10%)'
//     iconcolor.style.color='red'
// }
// sharebutton.onmouseleave = function(){
//     links.style.visibility= 'hidden'
//     sharebutton.style.backgroundColor=' hsl(210, 46%, 95%)'

}



