const elements = document.querySelectorAll(".card, .education-item");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

elements.forEach(el => observer.observe(el));