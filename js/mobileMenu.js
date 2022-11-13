const botaoMenu = document.querySelector('.mobile-menu')
const navBar = document.querySelector('.nav-bar')

let botaoAtivo = 1

botaoMenu.addEventListener('click', function(){

   setTimeout(function(){
      botaoAtivo *= -1

      if(botaoAtivo == -1){
         
         navBar.classList.remove('invisivel')
      }else{
         navBar.classList.add('invisivel')
      }
   })
})
