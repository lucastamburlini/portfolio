import translations, { } from '../assets/translations'
import { CHANGE_LANGUAGE } from './actions-types'

const initialState = {
    language: ['English'],
    translations: translations.English
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            const newLanguage = action.payload;

            if (newLanguage === "English" || newLanguage === "Español") {
                return {
                    ...state,
                    language: newLanguage,
                    translations: translations.newLanguage
                }

            } else {
                return {
                    ...state
                }
            }

        default:
            return { ...state }
    }

}

export default reducer