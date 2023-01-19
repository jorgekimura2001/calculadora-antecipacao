import { Dispatch, ReactNode, SetStateAction } from "react";

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
	onSubmit: (dataTreated: IForm) => Promise<void>;
	isClick: boolean;
	isLoading: boolean;
	setIsClick: Dispatch<SetStateAction<boolean>>;
}