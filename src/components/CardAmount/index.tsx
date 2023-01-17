import { useState } from "react"
import { useApp } from "../../context"

const CardAmount = () => {

    const {values} = useApp()

    const valuesList: [string, number][] = Object.entries(values)

    let valuesToRender = []

    let valuesToRenderOne = []

    for (let i = 0; i < valuesList.length; i++){
        if (valuesList[i][0] === '1'){
            valuesToRenderOne.push(valuesList[i])
        }else{
            valuesToRender.push(valuesList[i])
        }
    }
        
    return (
        <>

            {
                valuesToRenderOne.length > 0 && valuesToRenderOne.map(
                    (elem, index) => <p key={index}>Amanhã: R$ {(elem[1]/100).toFixed(2).replace(".", ", ")}</p>
                )
            }
            {
                valuesToRender.length > 0 && valuesToRender.map(
                    (elem, index) => <p key={index}>Em {elem[0]} dias: R$ {(elem[1]/100).toFixed(2).replace(".", ", ")}</p>
                )
            }
        </>
    )
}

export default CardAmount