import i18n from "i18next";
import { ADD_LANGUAGE,CHANGE_LANGUAGE, LanguageActionType } from "./languageActions"

export interface LanguageState {
    language: "en" | "zh";
    languageList: { name: string; code: string }[];
}

const defaultState: LanguageState = {
    language: "zh",
    languageList: [
        { name: "中文", code: "zh" },
        { name: "English", code: "en" },
    ],
};

export default (state = defaultState, action : LanguageActionType) => {
    switch(action.type){
        case CHANGE_LANGUAGE:
            i18n.changeLanguage(action.payload); //处理不标准，有副作用
            return { ...state, language: action.payload }
        case ADD_LANGUAGE:
            return {
                ...state, 
                languageList: [...state.languageList, action.payload],
            };
        default:
            return state
    }
};
