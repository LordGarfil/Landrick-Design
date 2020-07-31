function redirectToGithubProfile(){
    window.open('https://github.com/LordGarfil?tab=repositories')
}

function redirectToFacebookProfile(){
    window.open('https://www.facebook.com/juan.restrepooquendo/')
}

document.querySelector('#btnGithub').addEventListener('click', redirectToGithubProfile)

document.querySelector('#btnFacebook').addEventListener('click', redirectToFacebookProfile)
