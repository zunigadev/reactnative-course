
export const BasicFunctions = () => {
    
    // Se esta declarando el tipo de valor de ambos parametros y es resultado esperado
    const addNumbers = (a: number, b:number):number => {
        return a + b
    }
    // NOTA: Se busca no dejar que TS infiera todos, permitendonos mayor control de las respuestas

    
    return (
        <>
            <div>BasicFunctions</div>
            <span>Resultado de la suma: {addNumbers(15,25)}</span>
        </>
    )
}
