import { createContext, useContext, useState } from "react"
import { IChildren, IContextProps, IForm } from "../interfaces"
import api from "../services/api"

export const AppContext = createContext<IContextProps>({} as IContextProps)

export const useApp = () => { return useContext(AppContext) }

const AppProvider = ({children}: IChildren) => {

    const [values, setValues] = useState<Array<{}>>([])

    const [isClick, setIsClick] = useState(false)

    const [isLoading, setIsLoading] = useState(true)

    const onSubmit = async (dataTreated: IForm): Promise<void> => {

        console.log(dataTreated)
        let newValue: Array<{}> = []
        await api
                .post('/', dataTreated)
                .then(async (res) => {
                    if (dataTreated.days === undefined){
                        const {data} = res
                        for(let key in data){
                            newValue.push({[key]: data[key]})
                        }

                        setValues([...newValue])
                        setIsLoading(false)
                    }else{
                        const {data} = res
                        for(let key in data){
                            newValue.push({[key]: data[key]})
                        }
                        const newValues = newValue.map((elem) => elem)
                        setValues([...newValues])
                        setIsLoading(false)
                    }
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
