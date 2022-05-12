Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    cy.get('#firstName').type('Gleidmar')
    cy.get('#lastName').type('Alves')
    cy.get('#email').type('gleidmaralves@frwk.com.br')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()     
})
