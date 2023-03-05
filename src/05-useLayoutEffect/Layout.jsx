
import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";




export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);
    //https://api.breakingbadquotes.xyz/v1/quotes/${counter}
    //console.log({ data, isLoading, hasError });

    const { name, species } = !!data && data;

    //const { author, quote } = !!data && data[0]; //si la data tiene un valor entonces toma la data en la posición cero.

    return (

        <>
            <h1>Rick&Morty</h1>
            <hr />

            {
                (isLoading)
                    ? <LoadingQuote />
                    : <Quote key={counter} name={name} species={species} />
            }

            <button className="btn btn-primary" onClick={() => increment(1)} disabled={isLoading}>
                Next quote
            </button>

        </>
    );

}

