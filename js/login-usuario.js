const btn = document.querySelectorAll('.botao')
btn.forEach((elemento)=> {

   elemento.addEventListener('click', (event)=> {
      event.preventDefault()

      let paiElem = event.target.parentNode
      
      let email = paiElem.querySelector('.form__email').value
      let senha = paiElem.querySelector('.form__senha').value
   
      if(email != '' && senha != ''){
         let telaLogin = document.querySelector('.main-page')
         telaLogin.classList.add('display-none')
   
         let telaPerfil = document.querySelector('.perfil')
         telaPerfil.classList.remove('display-none')

         let perfilTitulo = document.querySelector('.perfil__titulo--nome')
         perfilTitulo.textContent = ` ${email.toUpperCase()}`

         let nomePerfil = document.querySelector('.perfil__usuario__nome')
         nomePerfil.textContent = email

         let perfil = document.querySelector('.menu--ativo')
         perfil.textContent = 'Perfil'

      }else{
         alert('Preencha os dados corretamente')
      }
   })
})

