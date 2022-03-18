export class SelectClassPage {
    
    checkDropdownExists() {
        cy.get('#carselect')
        .should('be.visible');

        cy.log('Dropdown exists');
    }

    selectBmwOption() {
        cy.get('#carselect')
        .select('bmw')
        .should('have.value', 'bmw');

        cy.log('BMW option was selected')
    }

    selectBenzOption() {
        cy.get('#carselect')
        .select('benz')
        .should('have.value', 'benz');

        cy.log('Benz option was selected')
    }

    selectHondaOption() {
        cy.get('#carselect')
        .select('honda')
        .should('have.value', 'honda');

        cy.log('Honda option was selected')
    }

    selectMultipleOptions() {
        cy.get('#carselect')
        .select('bmw')
        .should('have.value', 'bmw')
        .select('benz')
        .should('have.value', 'benz')
        .select('honda')
        .should('have.value', 'honda')
        .select('benz')
        .should('have.value', 'benz')
        .select('honda')
        .should('have.value', 'honda')

        cy.log('multiple options were selected')
    }
}