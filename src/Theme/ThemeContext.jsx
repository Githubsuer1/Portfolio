import { useContext, createContext } from "react";


const ThemeContext = createContext({
    dark:true,
    setDark:()=>{}
})

const useTheme = ()=>{
    return useContext(ThemeContext)
}

export default ThemeContext;