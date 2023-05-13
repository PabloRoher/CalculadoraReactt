import React, {useState} from "react";
import "./App.css";

const App = () => {
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const [previousResult, setPreviousResult] = useState(null);

    const handleclick = (e) => {
        setValue(value.concat(e.target.name));
    }

    const handleAnsClick = () => {
        if (previousResult !== null) {
            setValue(previousResult.toString());
        }
    };

    const clear = () => {
        setValue("");
        setResult("");
    }
    const borrar = () => {
        setValue(value.slice(0, -1));
    }

    const calculate = () => {
        try {
            const result = eval(value);
            setResult(result.toString());
            setPreviousResult(result);
        } catch (error) {
            setValue('Error');
        }
    };

    return (
        <div className= "container">
            <form>
                <div className="display">
                    <input type="text" className="operation" value={value}/>
                    <input type="text" className="result" value={result}/>
                </div>
            </form>

            <div className="keypad">
                <button name="7" onClick={handleclick}>7</button>
                <button name="8" onClick={handleclick}>8</button>
                <button name="9" onClick={handleclick}>9</button>
                <button onClick={borrar} id="borrar">DEL</button>
                <button onClick={clear} id="clear">AC</button>
                <button name="4" onClick={handleclick}>4</button>
                <button name="5" onClick={handleclick}>5</button>
                <button name="6" onClick={handleclick}>6</button>
                <button name="*" onClick={handleclick}>&times;</button>
                <button name="/" onClick={handleclick}>&divide;</button>
                <button name="1" onClick={handleclick}>1</button>
                <button name="2" onClick={handleclick}>2</button>
                <button name="3" onClick={handleclick}>3</button>
                <button name="+" onClick={handleclick}>+</button>
                <button name="-" onClick={handleclick}>&ndash;</button>
                <button name="0" onClick={handleclick}>0</button>
                <button name="." onClick={handleclick}>.</button>
                <button onClick={handleAnsClick} id="ans">Ans</button>
                <button onClick={calculate} id="result">=</button>



            </div>
        </div>
    );

}

export default App;