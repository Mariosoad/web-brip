'use client'
import { supabase } from '../../connection/supabase';

export default function HomeSesion() {

    const logOut = async () => {
        const { error } = await supabase.auth.signOut({
            options: {
                redirectTo: 'http://127.0.0.1:3000'
            }
        })
    }

    return (
        <>
            <h1>USTED ACABA DE INICIAR SESION CON GOOGLE</h1>
            <button onClick={logOut}>Cerrar Sesion</button>
        </>
    )
}