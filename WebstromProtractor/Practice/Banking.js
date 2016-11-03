describe("Test Automation of a Banking App", function(){
	
	it("Validate Customer login test",function(){
		
		browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
		
		element(by.buttonText("Customer Login")).click();
	    browser.sleep(3000);
	    element.all(by.css("#userSelect option")).then(function(items){
	    	// Printing Values From Dropdown List
	    	
	    	console.log("---Printing VAlues From the dropdown List----");
	    	console.log("Total Values in dropdown are: " +items.length);
	    	for (i=0; i<items.length; i++ );{
				items[i].getText().then(function (text) {



					console.log(text);

					browser.sleep(3000);
				});

			}


	    });
	});

	
	
	
});