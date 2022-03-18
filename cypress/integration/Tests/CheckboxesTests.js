import { CheckboxesPage } from "../../Pages/Practice/CheckboxesPage";
import { PracticePage } from "./pages";

describe('Practice Page', function() {

	const homePage = new PracticePage();
	const checkboxesPage = new CheckboxesPage();

	beforeEach(() => {homePage.navigateToHomepage()})

	describe
	('Checkboxes example', function() {
        beforeEach(() => {checkboxesPage.checkboxesExistAndAreUnchecked()})

	it('Checking if all checkbox options are checked', function() {
		checkboxesPage.allCheckboxesAreChecked();
	})

	it('Checking if 2 checkbox options are checked', function() {
		checkboxesPage.twoCheckboxesAreChecked();
	})

	it('Checking and then unchecking some checkbox options', function() {
		checkboxesPage.checkboxesAreCheckedThenUnchecked();
	})
	})
})  