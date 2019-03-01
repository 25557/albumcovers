let albums = document.querySelectorAll('.cover');
const up = (e) => {
  e.target.classList.remove('down');
  e.target.classList.add('up');
}
const down = (e) => {
  e.target.classList.remove('up');
  e.target.classList.add('down');
}

for (let i = 0; i < albums.length; i++) {
  let album = albums[i];
  album.addEventListener('mouseenter', up);
  album.addEventListener('mouseleave', down);
}
