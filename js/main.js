
/*Burger*/

const menu = document.querySelector('.nav-mobile');
const menuBtn = document.querySelector('.menu__icon');
const body = document.querySelector('body');

if (menu && menuBtn) {
   menuBtn.addEventListener('click', () => {
      menu.classList.toggle('active');
      menuBtn.classList.toggle('active');
   })
}

/*Pop-Up*/

const openPopUp = document.querySelectorAll('.open_pop_up');
const popUp = document.getElementById('pop-up');
const closePopUp = document.getElementById('pop-up-close');
const popUpBody = document.querySelector('.pop-up__container');

const changePopUp = document.querySelector('.register');
const removeElement = document.querySelectorAll('.remove-element');

const popUpBodyMain = document.querySelector('.pop-up__body');



openPopUp.forEach((button) => {
   button.addEventListener('click', function(e) {
      e.preventDefault();
      popUp.classList.add('active');
      body.classList.toggle('lock');
      menu.classList.toggle('active');
      menuBtn.classList.toggle('active');
   })
});

closePopUp.addEventListener('click', () => {
   popUp.classList.remove('active');
   body.classList.remove('lock');
   changePopUp.classList.remove('active');
});

document.addEventListener('click', (e) => {
   if (e.target === popUpBody) {
      popUp.classList.remove('active');
      body.classList.remove('lock');
      changePopUp.classList.remove('active');
   }
})

function delElements() {
   removeElement.forEach((el) => {
      el.classList.add('none')
   })
}

function restoreElements() {
   removeElement.forEach((el) => {
      el.classList.remove('none')
   })
}

const active = (e) => {
   e.classList.toggle('active')
}

changePopUp.addEventListener('click', (e) => {
   active(changePopUp)
   if (e.target.closest('.register.active')) {
      changePopUp.innerHTML = "Log In";
      document.querySelector('.pop-up-title').innerHTML = "Create account";
      document.querySelector('.pop-up-text').innerHTML = "Already have an account?";
      document.querySelector('.sign-in__button').innerHTML = "Sign Up";
      popUpBodyMain.style.height = "460px"
      delElements();
   } else {
      changePopUp.innerHTML = "Register";
      document.querySelector('.pop-up-title').innerHTML = "Log In to your account";
      document.querySelector('.pop-up-text').innerHTML = "Don't have an account?";
      document.querySelector('.sign-in__button').innerHTML = "Sign In";
      popUpBodyMain.style.height = "660px"
      restoreElements();
   }

})


document.querySelector('.sign-in__button').onclick
 = click;
 function click() {
   'use strict';
    let login = document.getElementById('login').value;
    let pass = document.getElementById('pass').value;
    alert(login);
    alert(pass);
 };

 /*Slider*/

const dots = document.querySelectorAll('.dot__item');
const sliderLine = document.querySelector('.slider');
const sliderItem = document.querySelectorAll('.slider__item');
let sliderWidth = document.querySelector('.slider__item').offsetWidth;
const btnPrev = document.querySelector('.arrow-left');
const btnNext = document.querySelector('.arrow-right');
const containerWidth = document.querySelector('.slider-container').offsetWidth;

let position = 0;
let dotIndex = 0;

function activeDot(index) {
   for (let dot of dots) {
      dot.classList.remove('dot__item--active')
   }
   dots[index].classList.add('dot__item--active')
}


function changeSlide(item, index) {
   item.addEventListener('click', () => {
      if (index === 0) {
         position = sliderWidth;
         sliderLine.style.left = position + 'px';
         activeDot(index);
      } if (index === 1) {
         position = 0;
         sliderLine.style.left = 0 + 'px';
         dotIndex = index;
         activeDot(index);
      } if (index === 2) {
         position = sliderWidth;
         sliderLine.style.left = -position + 'px';
         dotIndex = index;
         activeDot(index)
      }
   });
};

sliderItem.forEach(changeSlide);
dots.forEach(changeSlide);


btnNext.onclick = function() {
   dotIndex++
   if (dotIndex < 3) {
      position = containerWidth * (dotIndex);
      sliderLine.style.left = -position + 'px';
   } else  {
      dotIndex = 0;
      position = 0;
      sliderLine.style.left = 0;
   }
}

btnPrev.onclick = function() {
   if (position === 0) {
      dotIndex = sliderItem.length - 1;
      position = dotIndex * containerWidth;
      console.log(dotIndex);
      console.log(position)
   } else if (position > 0) {
      position -= containerWidth;
      dotIndex--
   }
   sliderLine.style.left = -position + 'px';
}


