import React from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = React.useState('')
    const [ageValue, setAgeValue] = React.useState('')
    const [selectValue, ToggleSelectValue] = React.useState('')
    const [textareaValue, setTextareaValue] = React.useState('')



    const sendForm = (e) => {
        console.log(`naam: "${nameValue}"`);
        console.log(`Leeftijd: "${ageValue}"`);
        console.log(`Recept gevonden via: "${selectValue}"`);
        console.log(`Opmerkingen: "${textareaValue}"`);
        e.preventDefault();

    }
  return (
      <>
    <div className="form-container">
            <form onSubmit={sendForm}>
                <fieldset>
                    <legend><h3>Gegevens</h3></legend>
                    <label htmlFor="form-name">
                        Naam:
                        <input
                            name="name"
                            id="form-name"
                            type="text"
                            value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)}
                        />
                    </label>
                    <br/><br/>
                    <label htmlFor="form-age">
                        Leeftijd:
                        <input
                            name="age"
                            id="form-age"
                            type="number"
                            value={ageValue}
                            onChange={(e) => setAgeValue(e.target.value)}
                        />
                    </label>
                </fieldset>
                <fieldset>
                    <legend><h3>Jouw review</h3></legend>
                   <label htmlFor="form-select-field">
                       Hoe heb je dit recept gevonden?
                       <br/><br/>
                    <select
                    value={selectValue}
                    onChange={(e) => ToggleSelectValue(e.target.value)}>
                        <option value="">Maak een keuze</option>
                        <option value="google">Google</option>
                        <option value="advertentie">Advertentie</option>
                        <option value="friend">Vriend</option>
                        <option value="other">Anders</option>
                    </select>
                   </label>
                    <br/><br/>
                    <label htmlFor="form-textarea">
                        Opmerkingen:
                        <br/><br/>
                        <textarea
                            value={textareaValue}
                            onChange={(e) => setTextareaValue(e.target.value)}
                            placeholder="Wat vond je van het recept?"
                        />
                    </label>
                    <br/>
                    <button
                        type="submit">
                        Verstuur
                    </button>
                </fieldset>
            </form>
    </div>
      </>
  );
}

export default App;
