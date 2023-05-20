'use client'
import { supabase } from '../../connection/supabase';

export default function LoginGoogle() {

    const signInWithGoogle = async () => {

        const { user, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'http://127.0.0.1:3000/logeado'
            }
        })
        if (error) {
            console.error(error)
        } else {
            console.log(user.session.provider_token)
        }
    };

    return (
        <>
            <button onClick={signInWithGoogle}>Iniciar Sesion con Google</button>
        </>
    )
}




