export class MultipleSelectPage {

    checkMultipleSelectExists() {
        cy.get('#multiple-select-example')
        .should('be.visible');

        cy.log('Multiple select exists');
    }

    allValuesAreSelected() {
        cy.get('#multiple-select-example').select(['apple', 'orange', 'peach'])
		.invoke('val')
		.should('deep.equal', ['apple', 'orange', 'peach']);

        cy.log('All values are selected');
    }

    twoValuesAreSelected() {
        cy.get('#multiple-select-example').select(['orange', 'peach'])
		.invoke('val')
		.should('deep.equal', ['orange', 'peach'])

        cy.log('Orange and Peach values are selected');
    }

    oneValueIsSelected() {
        cy.get('#multiple-select-example').select('orange')
		.invoke('val')
		.should('deep.equal', ['orange'])

        cy.log('Orange value is selected');
    }
}