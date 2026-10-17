export const contato = {
  telefone: '+55 (81) 98567-6610',
  email: 'ola@essenza.com.br',
  instagram: 'https://www.instagram.com/',
  whatsapp: 'https://wa.me/5581985676610?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Essenza.',
}

export function whatsappDoTratamento(nome: string) {
  const endereco = new URL(contato.whatsapp)
  endereco.searchParams.set('text', `Olá! Gostaria de saber mais sobre ${nome} na Essenza.`)
  return endereco.toString()
}
