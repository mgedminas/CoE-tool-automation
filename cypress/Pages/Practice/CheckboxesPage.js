export class CheckboxesPage {

    checkboxesExistAndAreUnchecked() {
        const brands = ["bmw", "benz", "honda"];
        for (let i = 0; i < brands.length; i++) {
            cy.get('[type="checkbox"]').eq(i).should("not.be.checked").should('be.visible');
            cy.log("Tested:" + brands[i]);
        }
    }

    allCheckboxesAreChecked() {

        // Checking the checkboxes
        const brands = ["bmw", "benz", "honda"];
        for (let i = 0; i < brands.length; i++) {
            cy.get('[type="checkbox"]').eq(i).check();
            cy.log("Checked:" + brands[i]);

            // Testing if all are checked 
        }
        for (let i = 0; i < brands.length; i++) {
            cy.get('[type="checkbox"]').eq(i).should("be.checked");
            cy.log("tested:" + brands[i]);
        }
    }

    twoCheckboxesAreChecked() {

        // Checking the checkboxes
        const brands = ["#bmwcheck", "#hondacheck"];
        for (let i = 0; i < brands.length; i++) {
            cy.get(brands[i]).check();
            cy.log("Checked:" + brands[i]);

            // Testing if they are now checked  and benz is unchecked
        }
        for (let i = 0; i < brands.length; i++) {
            cy.get(brands[i]).should("be.checked");
            cy.log("tested:" + brands[i]);
        }
        cy.get('#benzcheck').should("not.be.checked");
        cy.log("tested: benz")
    }

    checkboxesAreCheckedThenUnchecked() {

        // Checking the checkboxes
        const brands = ["bmw", "benz", "honda"];
        for (let i = 0; i < brands.length; i++) {
            cy.get('[type="checkbox"]').eq(i).check();
            cy.log("Checked:" + brands[i]);
        }

        // Testing if all are checked 
        for (let i = 0; i < brands.length; i++) {
            cy.get('[type="checkbox"]').eq(i).should("be.checked");
            cy.log("tested:" + brands[i]);
        }

        // Unchecking the checkboxes
        for (let i = 0; i < brands.length; i++) {
            cy.get('[type="checkbox"]').eq(i).uncheck();
            cy.log("Unchecked:" + brands[i]);

        }

        // Testing if all are unchecked 
        for (let i = 0; i < brands.length; i++) {
            cy.get('[type="checkbox"]').eq(i).should("not.be.checked");
            cy.log("tested:" + brands[i]);
        }
    }
}