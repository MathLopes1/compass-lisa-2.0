 interface IAdress {
    cep: string
    logradouro: string
    bairro: string
    uf: string
    localidade: string
    number: string
    complemento?: string
  }

export interface IRental {
    _id: string
    nome: string
    cnpj: string
    atividades: string
    endereco: Array<{ isFilial: boolean } & IAdress>
  }
