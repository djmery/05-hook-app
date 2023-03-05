import { useEffect, useState } from "react";

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });


    useEffect(() => { //justo cuando el componente se monta
        const onMouseEvent = ({ x, y }) => {
            setCoords({ x, y });
        }
        window.addEventListener('mousemove', onMouseEvent);

        return () => {
            window.removeEventListener('mousemove', onMouseEvent);
        }
    }, []);


    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(coords)}
        </>
    );
}
