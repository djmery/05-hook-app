import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ name, species }) => {

    const pReg = useRef();
    const [boxSice, setBoxSice] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const { width, height } = pReg.current.getBoundingClientRect(); //Muestra toda la información del tamaño la posición
        setBoxSice({ width, height });

    }, [name]);

    return (
        <>
            <blockquote className="blockquote text-end" style={{ display: 'flex' }}>
                <p ref={pReg} className="mb-1">{name} </p>
                {/* se puede poner también data[0].quote */}
                <footer className="blocquote-footer">  {species}</footer>
            </blockquote>
            <code>{JSON.stringify(boxSice)}</code>
        </>

    );
}
