function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       const one = document.getElementById('services_all-left-link-one')
       const two = document.getElementById('services_all-left-link-two')
       const three = document.getElementById('services_all-left-link-three')
       const four = document.getElementById('services_all-left-link-four')
       one.classList.remove('services_all-left-link--active')
       two.classList.add('services_all-left-link--active')
       three.classList.remove('services_all-left-link--active')
       four.classList.remove('services_all-left-link--active')
      }
    });
  }
  
  let options2 = {
    threshold: [0.5] };
  let observer2 = new IntersectionObserver(onEntry, options2);
  let elements2 = document.querySelectorAll('.raz-two');

  
  for (let elm of elements2) {
    observer2.observe(elm);
  }


const links = document.querySelectorAll('.services_all-left-link')
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => {
            l.classList.remove('services_all-left-link--active')
        })
        link.classList.add('services_all-left-link--active')
        
    })
})


function onEntry3(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       const one = document.getElementById('services_all-left-link-one')
       const two = document.getElementById('services_all-left-link-two')
       const three = document.getElementById('services_all-left-link-three')
       const four = document.getElementById('services_all-left-link-four')
       one.classList.remove('services_all-left-link--active')
       two.classList.remove('services_all-left-link--active')
       three.classList.add('services_all-left-link--active')
       four.classList.remove('services_all-left-link--active')
       
      }
    });
  }
  
  let options3 = {
    threshold: [0.5] };
  let observer3 = new IntersectionObserver(onEntry3, options3);
  let elements3 = document.querySelectorAll('.raz-three');

  
  for (let elm of elements3) {
    observer3.observe(elm);
  }


  function onEntry4(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       const one = document.getElementById('services_all-left-link-one')
       const two = document.getElementById('services_all-left-link-two')
       const three = document.getElementById('services_all-left-link-three')
       const four = document.getElementById('services_all-left-link-four')
       one.classList.remove('services_all-left-link--active')
       two.classList.remove('services_all-left-link--active')
       three.classList.remove('services_all-left-link--active')
       four.classList.add('services_all-left-link--active')
       
      }
    });
  }
  
  let options4 = {
    threshold: [0.5] };
  let observer4 = new IntersectionObserver(onEntry4, options4);
  let elements4 = document.querySelectorAll('.raz-four');

  
  for (let elm of elements4) {
    observer4.observe(elm);
  }
  function onEntry1(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       const one = document.getElementById('services_all-left-link-one')
       const two = document.getElementById('services_all-left-link-two')
       const three = document.getElementById('services_all-left-link-three')
       const four = document.getElementById('services_all-left-link-four')
       one.classList.add('services_all-left-link--active')
       two.classList.remove('services_all-left-link--active')
       three.classList.remove('services_all-left-link--active')
       four.classList.remove('services_all-left-link--active')
       
      }
    });
  }
  
  let options1 = {
    threshold: [0.5] };
  let observer1 = new IntersectionObserver(onEntry1, options1);
  let elements1 = document.querySelectorAll('.raz-one');

  
  for (let elm of elements1) {
    observer1.observe(elm);
  }