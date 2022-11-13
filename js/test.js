var cont = 0
var cont02 = 0

let conteudo = document.querySelectorAll('.conteudo')
conteudo.forEach((elemento)=> {
   elemento.addEventListener('click', ()=> {
      cont = 1

      if(cont == 1){
         let boxConteudo = elemento.querySelector('.box-conteudo')
         boxConteudo.classList.add('flex-visivel')
         elemento.classList.add('z-index')
         elemento.classList.add('star-bcg')
         cont02 *= -1
      }

      let botaoX = elemento.querySelector('.x-botao') 
      botaoX.addEventListener('click', ()=> { cont02 = 1; console.log(cont); })

      console.log(cont)

      if(cont02 == 1){
         let boxConteudo = elemento.querySelector('.box-conteudo')
         boxConteudo.classList.remove('flex-visivel')
         elemento.classList.remove('z-index')
         elemento.classList.remove('star-bcg')
         cont *= -1
      }
   
   })
})