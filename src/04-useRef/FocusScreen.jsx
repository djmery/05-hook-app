import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        //console.log(inputRef);
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input
                ref={inputRef} //es una sintaxis esepecial de react, el inputRef va a mandar el htmlElement y se lo va a establecer al inputREf
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />
            <button className="btn btn-primary mt-2" onClick={onClick}>
                Set Focus
            </button>
        </>
    )
}
