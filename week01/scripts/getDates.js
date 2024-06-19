const currentYear = new Date().getFullYear();
document.querySelector('#currentYear').innerHTML = currentYear;

let lastModified = new Date(document.lastModified).toLocaleString();
document.querySelector('#last-modified').innerHTML = lastModified;


