import { CHANGE_LANGUAGE } from '../redux/actions-types'

export const changeLanguage = (language) => {
    return {
        type: CHANGE_LANGUAGE,
        payload: language
    }
}