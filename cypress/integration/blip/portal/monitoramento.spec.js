/// reference types="cypress" />

import loc from 'C:/Blip_Cypress/cypress/support/locators'
import 'C:/Blip_Cypress/cypress/support/commands'

describe('Tela de Monitoramento', () => {

    it('Quando o usuário acessa a tela de monitoramento', () => {
        cy.visit('https://hmg-portal.blip.ai')

        cy.login('lourena+teste@take.net', '150152')

        cy.selectOpenBot()

        cy.selectTabMore()
        
        cy.selectMonitoringOption()

        cy.monitoringPage()
    })

    it('Visualiza a aba Atribuído/Em Atendimento', () => {
        cy.reload()

        cy.assigned()
    })

    it('Visualiza a aba Na Fila', () => {
        cy.inqueue()
    })
})