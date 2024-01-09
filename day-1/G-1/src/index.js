import React from "react";
import ReactDOM  from "react-dom/client";
function Greetings(){
    return <h2>First Component </h2>
};
const Brahim  = () =>{
    return <div>
        <div> brahim create his first component the real one without copy</div>
    </div>
}
const brahimN= ReactDOM.createRoot(document.getElementById("forBrahim"))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greetings/>)
brahimN.render(<Brahim/>)