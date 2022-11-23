var data = JSON.parse(responseBody);

var schema = {
    "type":"object",
    "required":["people", "planets", "films", "species", "vehicles", "starships" ],
    "properties":{
        "people":{"type":"string"},
        "planets":{"type":"string"},
        "films":{"type":"string"},
        "species":{"type":"string"},
        "vehicles":{"type":"string"},
        "vehstarships":{"type":"string"}
    } 
}

pm.test('Body is correst', function(){
    pm.expect(tv4.validate(data, schema)).to.be.true;
});
