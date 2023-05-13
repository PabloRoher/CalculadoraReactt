import React, {useState} from "react";
import Button from "./button";
import Display from "./display";
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
                <Display value={value} result={result} />
            </form>

            <div className="keypad">
                <Button name="7" onClick={handleclick}>7</Button>
                <Button name="8" onClick={handleclick}>8</Button>
                <Button name="9" onClick={handleclick}>9</Button>
                <Button name="DEL" onClick={borrar} id="borrar">DEL</Button>
                <Button name="AC" onClick={clear} id="clear">AC</Button>
                <Button name="4" onClick={handleclick}>4</Button>
                <Button name="5" onClick={handleclick}>5</Button>
                <Button name="6" onClick={handleclick}>6</Button>
                <Button name="*" onClick={handleclick}>&times;</Button>
                <Button name="/" onClick={handleclick}>&divide;</Button>
                <Button name="1" onClick={handleclick}>1</Button>
                <Button name="2" onClick={handleclick}>2</Button>
                <Button name="3" onClick={handleclick}>3</Button>
                <Button name="+" onClick={handleclick}>+</Button>
                <Button name="-" onClick={handleclick}>&ndash;</Button>
                <Button name="0" onClick={handleclick}>0</Button>
                <Button name="." onClick={handleclick}>.</Button>
                <Button name="ans" onClick={handleAnsClick} id="ans">Ans</Button>
                <Button name="result" onClick={calculate} id="result">=</Button>
            </div>
        </div>
    );

}

export default App;