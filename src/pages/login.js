import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const Login = () => {
    const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData
    const { t } = useTranslation();
    const [typePass, setTypePass] = useState(false)

    const { auth , languagee} = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(login(userData))
    }

    return (
        <div className="auth_page"style={{ textAlign: languagee.language === 'ar' ? 'right' : 'left' }}>
            <form onSubmit={handleSubmit}>
                <h3 className="text-uppercase text-center mb-4">{t('V-Network', { lng: languagee.language })}</h3> 

                <div className="form-group" style={{ textAlign: languagee.language === 'ar' ? 'right' : 'left' }} >
                    <label htmlFor="exampleInputEmail1"   >{t('Email address', { lng: languagee.language })}</label> 
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email"
                    aria-describedby="emailHelp" onChange={handleChangeInput} value={email} />
                    
                    <small id="emailHelp" className="form-text text-muted" style={{ textAlign: languagee.language === 'ar' ? 'right' : 'left' }} >
                    {t('Info', { lng: languagee.language })}     
                    </small>
                </div>

                <div className="form-group"style={{ textAlign: languagee.language === 'ar' ? 'right' : 'left' }}>
                    <label htmlFor="exampleInputPassword1">{t('Password', { lng: languagee.language })} </label>      
                 

                    <div className="pass">
                        
                        <input type={ typePass ? "text" : "password" } 
                        className="form-control" id="exampleInputPassword1"
                        onChange={handleChangeInput} value={password} name="password" />

                        <small onClick={() => setTypePass(!typePass)}>
                        {typePass ? t('Hide', { lng: languagee.language }) : t('Show', { lng: languagee.language })}
       </small>
                    </div>
                   
                </div>
                
                <button type="submit" className="btn btn-dark w-100"
                disabled={email && password ? false : true}>
                  {t('Loginn', { lng: languagee.language })} 
                </button>

               

                <p className="my-2"style={{ textAlign: languagee.language === 'ar' ? 'right' : 'left' }}>
                {t('You dont have an account?', { lng: languagee.language })}       <Link to="/register" style={{color: "crimson"}}>{t('Register Now', { lng: languagee.language })}  </Link>
                </p>
            </form>
        </div>
    )
}

export default Login
