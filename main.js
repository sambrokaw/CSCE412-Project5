function starwars(){
    document.getElementById('page_style').setAttribute("href", "starwars.css");
}

function other(){
    document.getElementById('page_style').setAttribute("href", "alt.css");
}

function swapStyleSheet(sheet){
    document.getElementById('page_style').setAttribute('href', sheet);
    localStorage.setItem("sheet", sheet);
  }
  
  window.onload = _ =>
   swapStyleSheet(
    localStorage.getItem("sheet") || "alt.css"
   );