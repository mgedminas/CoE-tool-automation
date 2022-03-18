
export class SwitchWindowPage {


    checkIfButtonExists(){
        cy.get('#openwindow')
        .should('be.visible');

        cy.log('Button exists and is visible')
    }

    clickOnTheButton(){

        // A test to check that when performing the action in the app, 
        // the window.open event is called by using cy.spy() to listen for a window.open event.
        
        cy.visit('https://courses.letskodeit.com/practice', {
        onBeforeLoad(win) {
        cy.stub(win, 'open')
  }
})

        cy.get('#openwindow')
        .click();

        // cy.url()
        // .should('eq', 'https://courses.letskodeit.com/courses')
    }
}