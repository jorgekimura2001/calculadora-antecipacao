import { ReactNode } from "react";

export interface IForm{
    amount: number;
	installments: number;
	mdr: number;
	days?: number[]
}

export interface IChildren{
	children: ReactNode
}

export interface IContextProps{
	values: {};
	onSubmit: (dataTreated: IForm) => Promise<void>
}