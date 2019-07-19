import React from "react";
import Individual from "./Individual"

function Characters() {

const [charactersData, setcharactersData] = useState ();

useEffect(() => {
    this.getCharacters("https://swapi.co/api/people/1/")
    .then(res => {
        setcharactersData(res.data.results)
    })
    .catch(err => console.log(err));
}, [])

console.log(charactersData)

if (!charactersData) {
    return <h1>Loading...</h1>
}else {
    return(
        <div>
            {charactersData.map((person, index) => <Individual person={person} key={index} />)}
        </div>
    );
}
}

export default Characters