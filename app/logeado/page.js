'use client'
import { supabase } from '../../connection/supabase';

export default function HomeSesion() {

    const logOut = async () => {
        await supabase.auth.signOut()
    }

    return (
        <>
            <h1>USTED ACABA DE INICIAR SESION CON GOOGLE</h1>
            <button onClick={logOut}>Cerrar Sesion</button>
        </>
    )
}