describe("EPAD project Testcases", function() {

//
//
//     //Registration
//
//     it("executing Registration with same Email Address", function () {
//         browser.get("http://epad.antarc.com/#/nl");
//         browser.sleep(3000);
//         var login = browser.findElement(by.partialLinkText("LOGIN"));
//         login.click();
//         browser.sleep(3000);
//         var registration = browser.findElement(by.partialLinkText("Maak hier een account aan!"));
//         registration.click();
//         browser.sleep(3000);
//         element(by.model("reg.user.organization_name")).sendKeys("IMPEL IT");
//         element(by.model("reg.user.first_name")).sendKeys("Shohana");
//         element(by.model("reg.user.last_name")).sendKeys("Khondoker");
//         element(by.model("reg.user.post_code")).sendKeys("4507km");
//         element(by.model("reg.user.house_number")).sendKeys("10");
//         element(by.model("reg.user.email")).sendKeys("zeba@yahoo.com");
//         element(by.model("reg.user.mobile_number")).sendKeys("008801673223202");
//         registerChkbxLabel = element(by.model("reg.user.registrationAgreementStatus"));
//         registerChkbxLabel.click();
//
//         element(by.buttonText("Direct een offerte!")).click();
//
//         browser.sleep(3000);
//         var bindingResult = element(by.binding('theMessage'));
//         browser.sleep(3000);
//
//     });
//
//          //Registration with Blank
//
//               it("executing Registration with same Email Address", function () {
//               browser.get("http://epad.antarc.com/#/nl");
//
//               browser.sleep(3000);
//               var login = browser.findElement(by.partialLinkText("LOGIN"));
//               login.click();
//               browser.sleep(3000);
//               var registration = browser.findElement(by.partialLinkText("Maak hier een account aan!"));
//               registration.click();
//               element(by.buttonText("Direct een offerte!")).click();
//
//               browser.sleep(3000);
//               var bindingResult = element(by.binding('theMessage'));
//               browser.sleep(3000);
//
//                });
//
//     // Login with valid user
//
//     it("executing Login with a valid user", function () {
//         browser.get("http://epad.antarc.com/#/nl");
//         browser.sleep(3000);
//         var login = browser.findElement(by.partialLinkText("LOGIN"));
//         login.click();
//         browser.sleep(3000);
//         element(by.model("log.username")).sendKeys("zeba@yahoo.com");
//         element(by.model("log.password")).sendKeys("123456");
//         element(by.buttonText("Inloggen")).click();
//         browser.sleep(3000);
//         element(by.className("heading-01")).getText().then(function (text) {
//             console.log(text);
//             expect(text).toContain("Dashboard");
//             var logout = browser.findElement(by.partialLinkText("UITLOGGEN"));
//             logout.click();
//         });
//
//
//     });
//     // Login with Invalid User
//
//     it("executing Login with a invalid user", function () {
//         browser.get("http://epad.antarc.com/#/nl");
//         browser.sleep(3000);
//         var login = browser.findElement(by.partialLinkText("LOGIN"));
//         login.click();
//         browser.sleep(3000);
//         element(by.model("log.username")).sendKeys("zara@yahoo.com");
//         element(by.model("log.password")).sendKeys("123456");
//         element(by.buttonText("Inloggen")).click();
//
//         browser.sleep(3000);
//
//         var bindingResult = element(by.binding('theMessage'));
//         browser.sleep(3000);
//
//
//     });
//
//    // Login with Blank User name and password
//
//     it("executing Login with a invalid user", function () {
//         browser.get("http://epad.antarc.com/#/nl");
//         browser.sleep(3000);
//         var login = browser.findElement(by.partialLinkText("LOGIN"));
//         login.click();
//         browser.sleep(3000);
//         element(by.model("log.username")).sendKeys("");
//         element(by.model("log.password")).sendKeys("");
//         element(by.buttonText("Inloggen")).click();
//
//         browser.sleep(3000);
//
//         var bindingResult = element(by.binding('theMessage'));
//         browser.sleep(3000);
//
//
//     });
//
//     // Login with User name and Blank password
//
//     it("executing Login with a invalid user", function () {
//         browser.get("http://epad.antarc.com/#/nl");
//         browser.sleep(3000);
//         var login = browser.findElement(by.partialLinkText("LOGIN"));
//         login.click();
//         browser.sleep(3000);
//         element(by.model("log.username")).sendKeys("zeba@yahoo.com");
//         element(by.model("log.password")).sendKeys("");
//         element(by.buttonText("Inloggen")).click();
//
//         browser.sleep(3000);
//
//         var bindingResult = element(by.binding('theMessage'));
//         browser.sleep(3000);
//
//
//     });
//
//
// //Requirement Header button "Naar stap 2" is working
//
//     it("Naar stap 2", function () {
//         browser.get("http://epad.antarc.com/#/nl");
//         browser.sleep(3000);
//         var login = browser.findElement(by.partialLinkText("LOGIN"));
//         login.click();
//         browser.sleep(3000);
//         element(by.model("log.username")).sendKeys("zeba@yahoo.com");
//         element(by.model("log.password")).sendKeys("123456");
//         element(by.buttonText("Inloggen")).click();
//         var OverOns = browser.findElement(by.partialLinkText("OVER ONS"));
//         OverOns.click();
//         var CreateRequirement = browser.findElement(by.partialLinkText("Plaats opdracht"));
//         CreateRequirement.click();
//         element(by.model("ctrl.requirementHeader.description.data")).sendKeys("Its from protractor");
//         //element(by.className()).click();
//         browser.sleep(3000);
//         var step1 = browser.findElement(by.partialLinkText("Naar stap 2"));
//         step1.click();
//         browser.sleep(3000);
//         element(by.className("center-align")).getText().then(function (text) {
//             console.log(text);
//
//             expect(text).toContain("Wat zijn je functionele wensen?")
//             browser.sleep(3000);
//             var logout = browser.findElement(by.partialLinkText("UITLOGGEN"));
//             logout.click();
//         });

    });
    // Requirement Fetch by Login
    //
    // it("Naar stap 2", function () {
    //     browser.get("http://epad.antarc.com/#/nl");
    //     browser.sleep(3000);
    //     var login = browser.findElement(by.partialLinkText("LOGIN"));
    //     login.click();
    //     browser.sleep(3000);
    //     element(by.model("log.username")).sendKeys("zeba@yahoo.com");
    //     element(by.model("log.password")).sendKeys("123456");
    //     element(by.buttonText("Inloggen")).click();
    //     browser.sleep(3000);
    //     var OverOns = browser.findElement(by.partialLinkText("OVER ONS"));
    //     OverOns.click();
    //     var CreateRequirement = browser.findElement(by.partialLinkText("Plaats opdracht"));
    //     CreateRequirement.click();
    //     element(by.model("ctrl.requirementHeader.description.data")).sendKeys("Its from protractor");
    //             browser.sleep(3000);
    //     var step1 = browser.findElement(by.partialLinkText("Naar stap 2"));
    //     step1.click();
    //     browser.sleep(3000);
    //     element(by.css(".requirement-line li:nth-child(1) div:nth-child(2) textarea")).sendKeys("Line 1");
    //     element(by.css(".requirement-line li:nth-child(2) div:nth-child(2) textarea")).sendKeys("Line 2");
    //     element(by.css(".requirement-line li:nth-child(3) div:nth-child(2) textarea")).sendKeys("Line 3");
    //     browser.sleep(3000);
    //     languazeChkbxLabel = element(by.model("dl.is_selected"));
    //     languazeChkbxLabel.click();
    //     browser.sleep(3000);
    //     element(by.buttonText("Stuur mij een offerte")).click();
    //     browser.sleep(3000);
    //     var logout = browser.findElement(by.partialLinkText("UITLOGGEN"));
    //     logout.click();
    // });
    //
    // //With Annonymous user,Requirement giving
    //
    // it("With Annonymous user,Requirement giving ", function () {
    //
    //     browser.get("http://epad.antarc.com/#/nl");
    //     browser.sleep(3000);
    //
    //     var AANVRAGEN = browser.findElement(by.partialLinkText("OFFERTE AANVRAGEN"));
    //     AANVRAGEN.click();
    //     browser.sleep(3000);
    //     var CreateRequirement = browser.findElement(by.partialLinkText("Plaats opdracht"));
    //     CreateRequirement.click();
    //     element(by.model("ctrl.requirementHeader.description.data")).sendKeys("Its from protractor for annonymous");
    //             browser.sleep(3000);
    //     element(by.model("ctrl.requirementHeader.email.data")).sendKeys("adil@yahoo.com");
    //     browser.sleep(3000);
    //     var step1 = browser.findElement(by.partialLinkText("Naar stap 2"));
    //     step1.click();
    //     browser.sleep(3000);
    //     element(by.css("$")).sendKeys("Line 1");
    //     element(by.css(".requirement-line li:nth-child(2) div:nth-child(2) textarea")).sendKeys("Line 2");
    //     element(by.css(".requirement-line li:nth-child(3) div:nth-child(2) textarea")).sendKeys("Line 3");
    //     browser.sleep(3000);
    //     languazeChkbxLabel = element(by.model("dl.is_selected"));
    //     languazeChkbxLabel.click();
    //     browser.sleep(3000);
    //     element(by.buttonText("Stuur mij een offerte")).click();
    //     browser.sleep(3000);
    //     var login = browser.findElement(by.partialLinkText("LOGIN"));
    //     login.click();
    //     browser.sleep(3000);
    //     element(by.model("log.username")).sendKeys("zeba@yahoo.com");
    //     element(by.model("log.password")).sendKeys("123456");
    //     element(by.buttonText("Inloggen")).click();
    //     browser.sleep(3000);
    //     element(by.className("heading-01")).getText().then(function (text) {
    //     console.log(text);
    //     expect(text).toContain("Dashboard");
    //     var logout = browser.findElement(by.partialLinkText("UITLOGGEN"));
    //      logout.click();
    //
    //         });
    // });
   // Edit Requirements

    it("Edit Requirements", function () {
        browser.get("http://epad.antarc.com/#/nl");
        browser.sleep(3000);
        var login = browser.findElement(by.partialLinkText("LOGIN"));
        login.click();
        browser.sleep(3000);
        element(by.model("log.username")).sendKeys("zeba@yahoo.com");
        element(by.model("log.password")).sendKeys("123456");
        element(by.buttonText("Inloggen")).click();
        var dashboard = browser.findElement(by.partialLinkText("DASHBOARD"));
        dashboard.click();
        browser.sleep(3000);
        var Project = browser.findElement(by.partialLinkText("Projecten"));
        Project.click();
        browser.sleep(3000);
        var st  = '.body-container section:nth-child(2) div.data-table-list';

        element(by.css(".body-container section:nth-child(2) div.data-table-list tr:nth-child(3) td:nth-child(2) a")).click();

        //element(by.css(st + ' tr:nth-child(3) td:nth-child(2) a')).click();

        browser.sleep(5000);
        element(by.css(".requirement-line li:nth-child(4) div.form-fieldset textarea")).sendKeys("Line 4");
        browser.sleep(5000);
        element(by.buttonText("Pas mijn offerte aan")).click();
        browser.sleep(3000);
        var logout = browser.findElement(by.partialLinkText("UITLOGGEN"));
        logout.click();
    });
   //
   //      // View Requirement Header
   //
   //      it("View Requirement", function () {
   //      browser.get("http://epad.antarc.com/#/nl");
   //      browser.sleep(3000);
   //      var login = browser.findElement(by.partialLinkText("LOGIN"));
   //      login.click();
   //      browser.sleep(3000);
   //      element(by.model("log.username")).sendKeys("zeba@yahoo.com");
   //      element(by.model("log.password")).sendKeys("123456");
   //      element(by.buttonText("Inloggen")).click();
   //      var dashboard = browser.findElement(by.partialLinkText("DASHBOARD"));
   //      dashboard.click();
   //      browser.sleep(3000);
   //
   //      element(by.css(".body-container section:nth-child(2) div.data-table-list tr:nth-child(4) td:nth-child(2) span")).click();
   //
   //      browser.sleep(5000);
   //      element(by.id("ngdialog1-aria-labelledby")).getText().then(function (text) {
   //          console.log(text);
   //
   //          expect(text).toContain("Project Details");
   //          browser.sleep(5000);
   //          var logout = browser.findElement(by.partialLinkText("UITLOGGEN"));
   //          logout.click();
   //     });

 //     });
 // });

