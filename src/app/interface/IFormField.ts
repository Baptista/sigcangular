export interface IFormField {
    type:string;
    label:string;
    id: string;
    options: string[];
}

export interface IPanelFormField{
    label:string;
    fields: IFormField[];
}

