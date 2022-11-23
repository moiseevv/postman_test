pm.test("Body matches string", function(){
	pm.expect(pm.response.text()).to.include("string_you_want_to_search");
});

pm.test("Body is correct", function(){
	pm.response.to.have.body("response_body_string");
});

pm.test("Your test name", function(){
	var jsonData = pm.response.json();
	pm.expect(jsonData.value).to.eql(100);
})

pm.test("Content-type is present", function(){
	pm.response.to.have("Content-type");
});


pm.test("response time is less than 200ms",function(){
	pm.expect(pm.response.responseTime).to.be.below(200);
});


pm.test("Status code", function(){
	pm.response.to.have.status(200);
});

pm.test(" status code name has string", function(){
	pm.response.to.have.status("Created");
});


pm.test("Correct format Json", function(){
    pm.response.to.have.jsonBody()
});

pm.test("Check that we have all declare fields", function(){
    const jsonData = pm.response.json()
    pm.expect(jsonData).to.have.property("people");
});


pm.test("Status code", function(){
	pm.response.to.have.status(200);
});

pm.test("Status is ok", function(){
    pm.response.to.have.status("OK")
});

pm.test("Check if value isn't NULL", function(){
    var jsonData = pm.response.json();
    pm.expect(jsonData.people).not.equal(null);
    pm.expect(jsonData.planets).not.equal(null);
    pm.expect(jsonData.films).not.equal(null);
    pm.expect(jsonData.species).not.equal(null);
});

pm.test(" Check not empty", function(){
    var j = pm.response.json();
    pm.expect(j.people).not.equal("")
    pm.expect(j.planets).not.equal("");
    pm.expect(j.films).not.equal("");
    pm.expect(j.species).not.equal("");
});


pm.test(" Check not empty", function(){
    var j = pm.response.json();
    pm.expect(j.people).to.equal("https://swapi.dev/api/people/")
    pm.expect(j.planets).to.equal("https://swapi.dev/api/planets/");
    pm.expect(j.films).to.equal("https://swapi.dev/api/films/");
    pm.expect(j.species).to.equal("https://swapi.dev/api/species/");
});

//the time is less than 1000ms
pm.test("Response time is less than 1000ms", function(){
    pm.expect(pm.response.responseTime).to.be.below(100000);
});
