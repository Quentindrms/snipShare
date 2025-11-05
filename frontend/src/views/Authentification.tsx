
export function Authentification(){


    return(
        <>
            <form className="auth-form">
            <label className="label">Adresse email</label>
            <input type="email" className="form-email"></input>
            <label className="label">Adresse email</label>
            <input type="password" className="form-password"></input>            
            <button type="submit" className="auth-button" onClick={() => console.log('Click')}>Se connecter</button>
            </form>

            <p className="" >Pas de compte ? <a className='link 'href="/inscription">Inscrivez-vous</a> </p>
        </>
    )
}