
export const useValidateForm = (input) => {
  const validateForm = (input) => {
    const emojiRegEx = /\p{Emoji_Presentation}/gu;
    if (input.length < 10) {
      return 'La frase debe tener al menos 10 caracteres.'
    }
    if (input.length > 32) {
      return 'La frase debe tener menos de 32 caracteres.'
    }
    if (emojiRegEx.test(input)) {
      return 'No se permiten emojis.'
    }
    return false
  }
  return { validateForm }
}

