import { createContext, ReactNode, useState } from "react";

type ContextType = {
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>
}
export const SearchContext = createContext<ContextType>({ inputText: "", setInputText: function () { } })
type Props = {
    children: ReactNode
}
//learnt==> make sure the type of value passed in createContext matches the type with value of SearchCOntex.Provider, here if we make the argument as empty and when try to put value = alue={{ inputText, setInputText }} we will get type error
export const SearchProvider = ({ children }: Props) => {
    const [inputText, setInputText] = useState<string>("")

    return <SearchContext.Provider value={{ inputText, setInputText }}>
        {children}
    </SearchContext.Provider>
}