import { BUY_CAKE } from './cakeType';


export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}

/* type: uma descrição clara da ação a ser processada.
   no exemplo acima, indica "buy cake" ou comprar bolo

*/

/*
    payload: um action pode ter outros valores adicionais além do type,
    que contém informações adicionais sobre o que acontece.
    - por convenção, esse campo é chamado PAYLOAD.
*/