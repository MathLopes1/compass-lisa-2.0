export interface IRental {
    _id: string
    nome: string
    cnpj: string
    atividades: string
    endereco: [
      {
      isFilial: boolean
      cep: string
      logradouro: string
      bairro: string
      uf: string
      localidade: string
      number: string
      complemento?: string
    }
  ]
}

export interface IAdress {
  isFilial: boolean
  cep: string
  logradouro: string
  bairro: string
  uf: string
  localidade: string
  number: string
  complemento?: string
}
