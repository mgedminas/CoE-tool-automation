import { HomePage } from "../../Pages/Practice/HomePage";
import { SelectClassPage } from "../../Pages/Practice/SelectClassPage";

describe('Practice Page', function() {

	const homePage = new HomePage();
    const selectClassPage = new SelectClassPage();
	
	beforeEach(() => {homePage.navigateToHomepage()})

	describe
	('Select Class Example', function() {
        beforeEach(() => {selectClassPage.checkDropdownExists()})

	it('BMW is selected', function() {
        selectClassPage.selectBmwOption();
	})

	it('Benz is selected', function() {
        selectClassPage.selectBenzOption();
	})

	it('Honda is selected', function() {
        selectClassPage.selectHondaOption();
	})

	it('Multiple values are selected', function() {
        selectClassPage.selectMultipleOptions();
	})

	})
})