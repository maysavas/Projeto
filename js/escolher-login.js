const login = document.querySelector('.faz-login')
const cadastro = document.querySelector('.faz-cadastro')

const formLogin = document.querySelector('.login-box')
const formCadastro = document.querySelector('.cadastro-box')

login.addEventListener('click', ()=> {
   
   cadastro.classList.remove('login-escolhido')
   formCadastro.classList.remove('display__escolhido')
   formCadastro.classList.add('display-none')

   login.classList.add('login-escolhido')
   formLogin.classList.add('display__escolhido')
   formLogin.classList.remove('display-none')
})

cadastro.addEventListener('click', ()=> {

   login.classList.remove('login-escolhido')
   formLogin.classList.remove('display__escolhido')
   formLogin.classList.add('display-none')

   cadastro.classList.add('login-escolhido')
   formCadastro.classList.add('display__escolhido')
   formCadastro.classList.remove('display-none')
})