import { HomePage } from "../../Pages/Practice/HomePage";
import { MultipleSelectPage } from "../../Pages/Practice/MultipleSelectPage";

describe('Practice Page', function() {

	const homePage = new HomePage();
    const multipleSelectPage = new MultipleSelectPage();
	
	beforeEach(() => {homePage.navigateToHomepage()})

	describe
	('Multiple select example', function() {
        beforeEach(() => {multipleSelectPage.checkMultipleSelectExists()})

	it('All values are selected', function() {
        multipleSelectPage.allValuesAreSelected();
	})

	it('Select 2 options', function() {
        multipleSelectPage.twoValuesAreSelected();
	})

    it('Select 1 option', function() {
        multipleSelectPage.oneValueIsSelected();
	})

	})
})  