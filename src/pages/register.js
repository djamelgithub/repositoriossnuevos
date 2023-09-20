import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { register } from '../redux/actions/authAction'
import { useTranslation } from 'react-i18next'
const Register = () => {
    const { auth, alert, languagee } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()
    const { t } = useTranslation();
    const initialState = {
         username: '', email: '', password: '', cf_password: '',  
    }
    const [userData, setUserData] = useState(initialState)
    const {   username, email, password, cf_password } = userData

    const [typePass, setTypePass] = useState(false)
    const [typeCfPass, setTypeCfPass] = useState(false)

    useEffect(() => {
        if (auth.token) history.push("/")
    }, [auth.token, history])


    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(register(userData))
    }

    return (
        <div className="auth_page"style={{ textAlign: languagee.language === 'ar' ? 'right' : 'left' }}>
            <form onSubmit={handleSubmit}>
                <h3 className="text-uppercase text-center mb-4"      >{t('V-Network', { lng: languagee.language })}</h3>

              

                <div className="form-group">
                    <label htmlFor="username">{t('User Name', { lng: languagee.language })}</label>
                    <input type="text" className="form-control" id="username" name="username"
                        onChange={handleChangeInput} value={username.toLowerCase().replace(/ /g, '')}
                        style={{ background: `${alert.username ? '#fd2d6a14' : ''}` }} />

                    <small className="form-text text-danger">
                        {alert.username ? alert.username : ''}
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" style={{ direction: languagee.language === 'ar' ? 'rtl' :  'ltr !important' }} >{t('Email address', { lng: languagee.language })}</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email"
                        onChange={handleChangeInput} value={email}
                        style={{ background: `${alert.email ? '#fd2d6a14' : ''}` }} />

                    <small className="form-text text-danger">
                        {alert.email ? alert.email : ''}
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">{t('Password', { lng: languagee.language })}</label>

                    <div className="pass">

                        <input type={typePass ? "text" : "password"}
                            className="form-control" id="exampleInputPassword1"
                            onChange={handleChangeInput} value={password} name="password"
                            style={{ background: `${alert.password ? '#fd2d6a14' : ''}` }} />

                        <small onClick={() => setTypePass(!typePass)}>
                            {typePass ? t('Hide', { lng: languagee.language }) : t('Show', { lng: languagee.language })}

                        </small>
                    </div>

                    <small className="form-text text-danger">
                        {alert.password ? alert.password : ''}
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="cf_password">{t('Confirm Password', { lng: languagee.language })}</label>

                    <div className="pass">

                        <input type={typeCfPass ? "text" : "password"}
                            className="form-control" id="cf_password"
                            onChange={handleChangeInput} value={cf_password} name="cf_password"
                            style={{ background: `${alert.cf_password ? '#fd2d6a14' : ''}` }} />

                        <small onClick={() => setTypeCfPass(!typeCfPass)}>
                            {typeCfPass ? t('Hide', { lng: languagee.language }) : t('Show', { lng: languagee.language })}

                        </small>
                    </div>

                    <small className="form-text text-danger">
                        {alert.cf_password ? alert.cf_password : ''}
                    </small>
                </div>
 

                <button type="submit" className="btn btn-dark w-100">
                    {t('Register', { lng: languagee.language })}
                </button>

                <p className="my-2">
                    {t('Already have an account?', { lng: languagee.language })}            <Link to="/" style={{ color: "crimson" }}>   {t('Login Now', { lng: languagee.language })}   </Link>
                </p>
            </form>
        </div>
    )
}

export default Register
