import { HomePage } from "../../Pages/Practice/HomePage"
import { SwitchWindowPage } from "../../Pages/Practice/SwitchWindowPage";

describe('Practice page', function(){

    const homePage = new HomePage();
    const switchWindowPage = new SwitchWindowPage();

    beforeEach(() => {homePage.navigateToHomepage()});

    describe 
    ('Switch window example', function() {
        beforeEach(() => {switchWindowPage.checkIfButtonExists()})

    it('Clicking on the button and focusing on a new window', function() {
        switchWindowPage.clickOnTheButton();
    }) 

    })

})