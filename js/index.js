
const headerBurgerBtn = document.querySelector('.header_burger-btn')
const massage = document.querySelector('.header-bot-message')
const modalSub  = document.querySelector('.modal-sub')
const left  = document.querySelector('.left')
const nav  = document.querySelector('.nav')
const body  = document.body
const header  = document.querySelector('.header')
const modalSubTwo  = document.querySelector('.modal-sub_two')
const modalSubThree  = document.querySelector('.modal-sub_three')
const modalThreeBtns  = document.querySelectorAll('.modal-three-btn')
const btnBrif  = document.querySelector('.btn-brif')
const logotype  = document.querySelector('.logotype')
const modalSubBtnOne  = document.querySelector('.modal-sub_btn-one')
const modalSubBtnTwoOtpravit  = document.querySelector('.modal-sub_btn-two-otpravit')
const modalSubTwoInputOne  = document.querySelector('.modal-sub_two-input-one')
const modalSubTwoInputTwo  = document.querySelector('.modal-sub_two-input-two')
const modalSubTwoInputThree  = document.querySelector('.modal-sub_two-input-three')
const modalSubTwoInputFour  = document.querySelector('.modal-sub_two-four')
const hdimg1  = document.querySelector('.header-bot_img')
const hdimg2  = document.querySelector('.header-bot_img-2')

massage.onclick = () => {
    modalSub.classList.toggle('modal-sub--active')
    modalSubTwo.classList.remove('modal-sub--active')
    modalSubThree.classList.remove('modal-sub--active')
    hdimg1.classList.toggle('none-img')
    hdimg2.classList.toggle('none-img')
}
modalSubBtnTwoOtpravit.onclick = () => {
  if(modalSubTwoInputOne.value == '') {
    modalSubTwoInputOne.classList.add('inp-err')  
    modalSubTwo.classList.add('modal-sub--active')
  }
  else {
    modalSubTwoInputOne.classList.remove('inp-err')  
    modalSub.classList.remove('modal-sub--active')
    modalSubTwo.classList.remove('modal-sub--active')
  }
  if(modalSubTwoInputTwo.value == '') {
    modalSubTwoInputTwo.classList.add('inp-err')  
    modalSubTwo.classList.add('modal-sub--active')
  }
  else {
    modalSubTwoInputTwo.classList.remove('inp-err')  
    modalSub.classList.remove('modal-sub--active')
    modalSubTwo.classList.remove('modal-sub--active')
  }
  if(modalSubTwoInputThree.value == '') {
    modalSubTwoInputThree.classList.add('inp-err')  
    modalSubTwo.classList.add('modal-sub--active')
  }
  else {
    modalSubTwoInputThree.classList.remove('inp-err')  
    modalSub.classList.remove('modal-sub--active')
    modalSubTwo.classList.remove('modal-sub--active')
  }
  if(modalSubTwoInputFour.value == '') {
    modalSubTwoInputFour.classList.add('inp-err')  
    modalSubTwo.classList.add('modal-sub--active')
  }
  else {
    modalSubTwoInputFour.classList.remove('inp-err')  
    modalSub.classList.remove('modal-sub--active')
    modalSubTwo.classList.remove('modal-sub--active')
  }
  
    
}


btnBrif.onclick = () => {
    modalSub.classList.remove('modal-sub--active')
    modalSubTwo.classList.add('modal-sub--active')
}


left.onclick = () => {
  modalSubTwo.classList.add('modal-sub--active')
  modalSubThree.classList.remove('modal-sub--active')
}


modalSubBtnOne.onclick = () => {
    modalSub.classList.remove('modal-sub--active')
    modalSubTwo.classList.remove('modal-sub--active')
    modalSubThree.classList.add('modal-sub--active')
}


modalThreeBtns.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('modal-three-btn--active')
  })
})

headerBurgerBtn.onclick = () => {
  header.classList.toggle('open')
  nav.classList.toggle('nav-ss')
  // body.classList.toggle('body-ss')
  // logotype.classList.toggle('hiden-mor')
}

// SCROLL
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }


// const random = (min, max) => {
//   const rand = min + Math.random() * (max - min + 1)
//   return Math.floor(rand)
// }
//   const logo = document.querySelector('.logotype')
  
//   logo.addEventListener('mouseenter', () => {
//     logo.style.left = `${random(0, 90)}%`
//     logo.style.top = `${random(0, 90)}%`
//   })

 document.addEventListener('DOMContentLoaded', () => {
            const videoContainer = document.querySelector('.KarhumKelo_card-3');
            const video = document.querySelector('.vid');
            // const overlay = document.querySelector('.overlay');
           
            function playVideo() {
                video.play();
                // overlay.style.opacity = '0';
                
            }

            function pauseVideo() {
                video.pause();
                // overlay.style.opacity = '1';
            }

            videoContainer.addEventListener('mouseover', playVideo);
            videoContainer.addEventListener('mouseout', pauseVideo);

            // Add touch support for mobile devices
            videoContainer.addEventListener('touchstart', playVideo);
            videoContainer.addEventListener('touchend', pauseVideo);
        });