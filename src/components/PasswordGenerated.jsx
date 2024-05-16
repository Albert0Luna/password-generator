import { alternativeChars } from "../utils/alternativeChars";
import '../styles/PasswordGenerated.css'

export const PaswordGerated = ({phrase}) => {
  const phareLowerCase = phrase.toLowerCase()

  const splitPassword = phareLowerCase.split('')
  
  const password = splitPassword.map((char) => {
    const alternativeChar = alternativeChars.find(alternative => alternative.char === char)
    if (alternativeChar){
      const randomAlternative = alternativeChar.alternative[Math.floor(Math.random() * alternativeChar.alternative.length)]
      return randomAlternative
    }
    return char
  })

  const handleCopy = async (e) => {
    try {
      await navigator.clipboard.writeText(joinedPassword)
      e.target.classList.add('copied')
      e.target.textContent = 'Copiado' + ' ' + '✅'
    } catch (error) {
      console.log('Filed to copy', error);
    }
  }

  const joinedPassword = password.join('')

  return (
    <>
      <div className="pasword_generated">
        <h3 className="password_subtitle">Su contraseña es:</h3>
        <p className="password_result">{password}</p>
        <button 
          className='copy'
          onClick={handleCopy}
        >
          Copiar 📋
        </button>
      </div>
    </>
  );
}