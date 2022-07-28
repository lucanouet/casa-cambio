/// <reference types="Cypress" />

const valores = []
const nuevosValores = []
describe('casaDeCambio', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8080')
  })
  it('testea que haya monedas en la lista', ()=>{
    cy.get('#lista-monedas li').should('not.have.length', 0)
  })
  it('testea que haya valores en la lista y los guarda', ()=>{
    cy.get('#lista-valores li').should('not.have.length', 0)
    cy.get('#lista-valores li').each((valor)=>{
      valores.push(valor[0].textContent)
    })
  })
  it('testea cambiar de moneda y compara que los valores seas distintos a los primeros valores guardados', ()=>{
    cy.get('#selectBase').select('AED')
    cy.get('#lista-valores li').each((valor)=>{
      nuevosValores.push[valor[0].textContent]
    })
    cy.wrap(valores).should('not.deep.equal', nuevosValores)
  })

})