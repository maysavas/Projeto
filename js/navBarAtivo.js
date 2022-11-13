const link = document.querySelectorAll('.menu__link')
link.forEach((elemento)=> {
   elemento.addEventListener('click', ()=> {
      
      link.forEach((elem)=> {
         elem.classList.remove('menu--ativo')
      })

      elemento.classList.add('menu--ativo')
   })
})