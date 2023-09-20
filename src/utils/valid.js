const valid = ({fullname, username, email, password, cf_password}) => {
    const err = {}

    if(!fullname) {
        err.fullname = "Veuillez ajouter votre nom complet."
    }else if(fullname.length > 25){
        err.fullname = "Le nom complet peut contenir jusqu'à 25 caractères."
    }

    if(!username) {
        err.username = "Veuillez ajouter votre nom d'utilisateur."
    }else if(username.replace(/ /g, '').length > 25){
        err.username = "Le nom d’utilisateur peut contenir jusqu’à 25 caractères."
    }

    if(!email) {
        err.email = "Veuillez ajouter votre email."
    }else if(!validateEmail(email)){
        err.email = "Email format is incorrect."
    }

    if(!password) {
        err.password = "Veuillez ajouter votre mot de passe."
    }else if(password.length < 6){
        err.password = "Le mot de passe doit être au moins de 6 caractères."
    }

    if(password !== cf_password) {
        err.cf_password = "Confirmer que le mot de passe ne correspond pas."
    }

    return {
        errMsg: err,
        errLength: Object.keys(err).length
    }
}



function validateEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
  
export default valid