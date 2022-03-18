import { HomePage } from "../../Pages/Practice/HomePage";
import { RadioButtonsPage } from "../../Pages/Practice/RadioButtonsPage";

describe('Practice Page', function() {

	const homePage = new HomePage();
    const radioButtonsPage = new RadioButtonsPage();
	
	beforeEach(() => {homePage.navigateToHomepage()})

	describe
	('Radio Button Example', function() {
        beforeEach(() => {radioButtonsPage.checkRadioButtonsExist()})

	it('All radio buttons checked', function() {
        radioButtonsPage.checkRadioButtons();
	})

	it('BMW radio button checked', function() {
        radioButtonsPage.checkBmwRadioButton();
    })

	it('Benz radio button checked', function() {
		radioButtonsPage.checkBenzRadioButton();
	})

	it('Honda radio button checked', function() {
		radioButtonsPage.checkHondaRadioButton();
	})
	})
})  