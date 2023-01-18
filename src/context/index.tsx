import { createContext, useContext, useState } from "react"
import { IChildren, IContextProps, IForm } from "../interfaces"
import api from "../services/api"

export const AppContext = createContext<IContextProps>({} as IContextProps)

export const useApp = () => { return useContext(AppContext) }

const AppProvider = ({children}: IChildren) => {

    const [values, setValues] = useState({})

    const [isClick, setIsClick] = useState(false)

    const onSubmit = async (dataTreated: IForm): Promise<void> => {
        await api
                .post('/', dataTreated)
                .then(async (res) => {
                    const {data} = res
                    setValues(data)
                })
                .catch(err => console.log(err))
    }

    return (
        <AppContext.Provider value={{values, onSubmit, isClick, setIsClick}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider
