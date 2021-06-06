function closeNav (){
  document.getElementById('sidebar').style.width = "0";
}
function openNav(){
  document.getElementById('sidebar').style.width = "280px";
}

function closeSearch(){
  document.getElementById('fullSearch').style.display = 'none';
  document.getElementById('search-open').style.display = 'block';
  document.getElementById('search-close').style.display = 'none';
  document.body.style.overflow = 'visible';
}

function search(){
  document.getElementById('fullSearch').style.display = 'block';
  document.getElementById('search-open').style.display = 'none';
  document.getElementById('search-close').style.display = 'block';
  document.body.style.overflow = 'hidden';
}