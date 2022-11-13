const filtro = document.querySelector('.filtro')

filtro.addEventListener('input', function(){
   const conteudo = document.querySelectorAll('.conteudo')

   conteudo.forEach(function(elemento){
      let titulo = elemento.querySelector('.titulo').textContent
      let expressao = new RegExp(filtro.value, 'i')

      
      if(expressao.test(titulo) == false){
         elemento.classList.add('invisivel-conteudo')
         setTimeout(()=> {elemento.classList.add('display-none')}, 350)
      }else{
         elemento.classList.remove('invisivel-conteudo')
         setTimeout(()=> {elemento.classList.remove('display-none')}, 350)
      }
   })
})
