const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()-=_+[]{};:<>,./?";

const initialState = {
    length: 10,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
    strength: 0,
    password: ''
}

const passwordReducer = (password = initialState, action) => {
    switch(action.type){
        case 'UPDATE_LENGTH':
            return {
                ...password,
                length: action.length
            }
        case 'INCLUDE_UPPERCASE':
            return {
                ...password, 
                uppercase: action.uppercase,
            }
        case 'INCLUDE_LOWERCASE': 
            return {
                ...password,
                lowercase: action.lowercase,
            }
        case 'INCLUDE_NUMBERS': 
            return {
                ...password,
                numbers: action.numbers,
            }
        case 'INCLUDE_SYMBOLS':
            return {
                ...password,
                symbols: action.symbols,
            }
        case 'GENERATE_PASSWORD':
            let generatedPassword = ''
            let allowedCharacters = '';
            allowedCharacters += password.uppercase ? uppercase : '';
            allowedCharacters += password.lowercase ? lowercase : '';
            allowedCharacters += password.numbers ? numbers : '';
            allowedCharacters += password.symbols ? symbols : '';
        
            for(let i = 0; i < password.length; i++){
                const index = Math.floor(Math.random() * allowedCharacters.length);
                generatedPassword += allowedCharacters[index];
            }
            return {
                ...password,
                password: generatedPassword
            };
        default:
            return password; 
    }
}

export default passwordReducer;