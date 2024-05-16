import { useState } from "react";
import { PaswordGerated } from "./PasswordGenerated";
import {useValidateForm} from '../hooks/useValidateForm'
import '../styles/Form.css'

export const Form = () => {
  const [phrase, setPhrase] = useState(false)
  const [showGenerateBtn, setShowGenerateBtn] = useState(false)
  const [error, setError] = useState('')
  const { validateForm } = useValidateForm(phrase)

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = new FormData(e.target)
    const input = inputData.get('phrase')
    if (error !== false) return
    setPhrase(input)
    setShowGenerateBtn(false)
  }

  const handleChangeForm = (e) => {
    e.preventDefault()
    const inputData = e.target.value
    const error = validateForm(inputData)
    setError(error)
    if (error) {
      setShowGenerateBtn(false)
    } else {
      setShowGenerateBtn('Generar contraseña')
    }
  }

  const handleNewPhrase = () => {
    console.log(phrase)
    console.log(showGenerateBtn);
    setShowGenerateBtn(false)
    setPhrase(false)
  }

  return (  
    <section>
      {
        phrase === false &&
        <form 
          className="form_phrase"
          onSubmit={handleSubmit} 
        >
          <div className="error-container">
          {
            error &&
              <p className="invalid_input">{error}</p>
          }
          </div>
          <label >
            <p 
              className="input_label" 
              aria-selected='false' 
            >
              Escriba una <span>frase</span> memorable
            </p>
            <input 
              onChange={handleChangeForm}
              className="input_password"
              autoComplete="off"
              type="text" 
              name="phrase" 
              placeholder="Mi país favorito es..." 
            />
          </label>
          {
            showGenerateBtn &&
              <button className="submit_button">{showGenerateBtn}</button>
          }
        </form>
      }
      {
        phrase &&
          <PaswordGerated phrase={phrase} />
      }
      {
        phrase && 
          <div className="original_container">
            <p className="past__phrase">Frase original</p>
            <p className="original_phrase">{phrase}</p>
          </div>
      }
      {
        phrase && 
        <div className="new_phrase_container">
          <div className="divisor"></div>
          <div className="button_container">
            <button onClick={handleNewPhrase} className="generate_new">Generar nueva frase</button>
          </div>
        </div>
      }
    </section>
  );
}