'use client'
import { supabase } from '../../connection/supabase';

export default function LoginGoogle() {

    const signInWithGoogle = async () => {
        const { user, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'https://web-brip.vercel.app/logeado'
            }
        })  
    };
    
    return (
        <>
            <button onClick={signInWithGoogle}>Iniciar Sesion con Google</button>
        </>
    )
}




