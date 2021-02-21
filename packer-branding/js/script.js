const navToggle = document.querySelector(".nav__toggle"),
  navWrapper = document.querySelector(".nav__wrapper"),
  navIcon = document.querySelector('.nav__icon'),
  header = document.querySelector('.site-header');

let scrollpos = window.scrollY;

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
    navIcon.classList.remove('open');
    document.body.style.overflow = "";
    document.ontouchmove = function (e) {
      return true;
    }
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
    navIcon.classList.add('open');
    document.body.style.overflow = "hidden";
    document.ontouchmove = function (e) {
      e.preventDefault;
    }
  }
});

navWrapper.addEventListener('click', () => {
  document.body.style.overflow = "";
  navWrapper.classList.remove("active");
  navIcon.classList.remove('open');
});

function add_class_on_scroll() {
  header.classList.add("scrollable");
}

function remove_class_on_scroll() {
  header.classList.remove("scrollable");
}

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;
  if (scrollpos > 400) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});

const offerBackgroundSlider = new Swiper('.bg-slider', {
  direction: 'horizontal',
  speed: 1500,
  loop: true,
  slidesPerView: 1,
  touchRatio: 0,
  effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.bg-slider__pagination',
    type: 'fraction',
  },
});

const offerSmallSlider = new Swiper('.small-slider', {
  direction: 'vertical',
  speed: 1500,
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.small-slider__pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.small-slider__next',
    prevEl: '.small-slider__prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  thumbs: {
    swiper: offerBackgroundSlider
  }
});


const clientsSlider = new Swiper('.clients__slider', {
  direction: 'horizontal',
  speed: 1500,
  loop: true,
  // autoplay: {
  //   delay: 3000,
  // },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
       spaceBetween: 15,
    },
    476: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },

    660: {
       slidesPerView: 2.2,
       spaceBetween: 25,
    },
  }
});

document.addEventListener('mousemove', parallax);

function parallax(e) {
  if (window.innerWidth > 1024) {
    this.querySelectorAll('.layer').forEach(layer => {
      const speed = layer.getAttribute('data-speed');
      const x = (window.innerWidth - e.pageX * speed) / 300;
      const y = (window.innerHeight - e.pageY * speed) / 300;
      layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
  }
}

AOS.init();

 const phoneInput = document.querySelectorAll('input[type="tel"]'),
  im = new Inputmask('+7 (999) 999-99-99');
 im.mask(phoneInput);

 let validateForms = function (selector, rules, successModal, yaGoal) {
   new window.JustValidate(selector, {
     rules: rules,
     messages: {
       name: {
         required: 'Обязательное поле'
       },
       email: {
         required: 'Обязательное поле'
       }
     },
     submitHandler: function (form) {
       let formData = new FormData(form);

       let xhr = new XMLHttpRequest();
       xhr.onreadystatechange = function () {
         if (xhr.readyState === 4) {
           if (xhr.status === 200) {
             alert('Ваши данные успешно отправлены')
           }
         }
       }
       xhr.open('POST', 'mail.php', true)
       xhr.send(formData);
       form.reset();
     }
   });
 }

 validateForms('.form', {
   tel: {
     required: true
   }
 }, '.thanks-popup', 'send goal');

 var scroll = new SmoothScroll('a[href*="#"]');


 
document.querySelectorAll('.form__field').forEach(element => {
  element.addEventListener('focus', () => {
    element.parentElement.querySelector('span').style.opacity = "1";
  });
  element.addEventListener('blur', () => {
    element.parentElement.querySelector('span').style.opacity = "";
  })
});