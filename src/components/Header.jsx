function Header({informationHeader}) {
    const variableHeader = true;
    // Podemos pasar variableHeader al padre -> App.jsx
    informationHeader(variableHeader);
    return (
        <>
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto"> Seguimiento Pacientes {''} 
            <span className="text-indigo-600">Veterinaria</span>
            </h1>
        </>
    )
}

export default Header;