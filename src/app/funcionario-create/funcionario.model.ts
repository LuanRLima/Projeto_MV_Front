export interface Funcionario {
    id?: number
    cpf: string
    name: string
    listaItem: [ 
        { id?: number,
          name: string,}
    ]
}