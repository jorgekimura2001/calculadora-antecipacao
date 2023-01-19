import { createContext, useContext, useState } from "react"
import { IChildren, IContextProps, IForm } from "../interfaces"
import api from "../services/api"

export const AppContext = createContext<IContextProps>({} as IContextProps)

export const useApp = () => { return useContext(AppContext) }

const AppProvider = ({children}: IChildren) => {

    const [values, setValues] = useState({})

    const [isClick, setIsClick] = useState(false)

    const [isLoading, setIsLoading] = useState(true)

    const onSubmit = async (dataTreated: IForm): Promise<void> => {
        // setIsLoading(true)
        await api
                .post('/', dataTreated)
                .then(async (res) => {
                    const {data} = res
                    setValues(data)
                    setIsLoading(false)
                })
                .catch(err => console.log(err))
    }

    return (
        <AppContext.Provider value={{values, onSubmit, isClick, setIsClick, isLoading}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider
