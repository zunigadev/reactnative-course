interface Persona {
    nombre: string;
    edad: number;
    apellidos: Apellidos;
}

interface Apellidos {
    paternoApellido: string;
    maternoApellido: string;
}

export const ObjectLiterals = () => {

    const persona:Persona = {
        nombre: 'Denzel',
        edad: 22,
        apellidos: {
            paternoApellido: 'Zuñiga',
            maternoApellido: 'Noriega'
        }
    }

    return (
        <>

            <div>ObjectLiterals</div>
            <pre>
                {JSON.stringify(persona)}
            </pre>

        </>
    )
}
