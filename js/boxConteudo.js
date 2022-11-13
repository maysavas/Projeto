const boxPrincipal = document.querySelectorAll('.box-principal')
boxPrincipal.forEach((elemento)=> {
   elemento.addEventListener('click', ()=> {

      boxPrincipal.forEach((elem) =>{
         let paiElem = elem.parentNode
         let boxConteudo = paiElem.querySelector('.box-conteudo')

         boxConteudo.classList.remove('flex-visivel')
         paiElem.classList.remove('z-index')
         paiElem.classList.remove('star-bcg')
      })

      let paiElem = elemento.parentNode

      let boxConteudo = paiElem.querySelector('.box-conteudo')
      boxConteudo.classList.add('flex-visivel')
      paiElem.classList.add('z-index')
      paiElem.classList.add('star-bcg')

      let botaoX = boxConteudo.querySelector('.x-botao')
      botaoX.addEventListener('click', ()=> {

         boxConteudo.classList.remove('flex-visivel')
         paiElem.classList.remove('z-index')
         paiElem.classList.remove('star-bcg')
      })
   })
})

