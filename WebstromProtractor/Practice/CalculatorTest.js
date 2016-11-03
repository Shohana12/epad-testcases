/**
 * Created by root on 8/22/16.
 */
describe("Validating the Calculator app",function () {

    var expected_text;

    beforeEach(function () {

        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");



            element(by.model("first")).sendKeys("1");
            element(by.model("second")).sendKeys("1");
            element(by.buttonText("Go!")).click();
            expected_text=element(by.binding("latest")).getText();
    });

    afterEach(function () {

        browser.sleep(3000);
        console.log("after it block");

    });

    it("validate 1+1=2", function () {

        expected_text.then(function (text) {

            console.log("Result is: " + text)
            expect(text).toBe(14);
        });
    });
    it("validate 2+2=4", function () {



        element(by.model("first")).sendKeys("2");
        element(by.model("second")).sendKeys("2");
        element(by.buttonText("Go!")).click();
        element(by.binding("latest")).getText().then(function (text) {

            console.log("Result is: " + text)
        });

    });
    it("validate 3+3=6", function () {



        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("3");
        element(by.buttonText("Go!")).click();
        element(by.binding("latest")).getText().then(function (text) {

            console.log("Result is: " + text)
        });
    });
});