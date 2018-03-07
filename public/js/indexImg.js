window.onload = function() {  
    let imgarea = document.getElementById('hover-area');
    let imghover = document.getElementById('img-download');
    imgarea.onmouseenter = function() {
      imghover.style.display = 'block'
    }
    imgarea.onmouseleave = function() {
      imghover.style.display = 'none'
    }    
}