export class RadioButtonsPage {
    // const radioButtonBrands = ["bmw", "benz", "honda"];
    
    checkRadioButtonsExist() {
        cy.get('[type="radio"]').should('be.visible')
        cy.log('Radio buttons exist');
    }

    checkRadioButtons() {
        cy.get('[type="radio"]')
        .check();
        cy.log('All radio buttons are checked');
    }

    checkBmwRadioButton()
    {
        cy.get('[type="radio"]')
        .check('bmw');
        cy.log('BMW radio button is checked');
    }

    checkBenzRadioButton()
    {
        cy.get('[type="radio"]')
        .check('benz');
        cy.log('Benz radio button is checked');
    }

    checkHondaRadioButton()
    {
        cy.get('[type="radio"]')
        .check('honda');
        cy.log('Honda radio button is checked');
    }
}