// Grab elements
const openElement = (param) => {
    const toggle = document.querySelector(param);
    if(toggle) return toggle;
    throw new Error(` ${param} is not valid.`);  
};

const changeHeader = () =>{
    const navbarElement = openElement('#header');
    if(this.scrollY >= 25) {
        navbarElement.classList.add('activated');
    } else {
        navbarElement.classList.remove('activated');
    }
}

window.addEventListener('scroll', changeHeader);



const menuToggleIcon = openElement('#menu-toggle-icon');


const toggleMenu = () =>{
    const mobileMenu = openElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);









  
  
  
  