var fs = require('fs');

function getDummyInsurance (req, res) {
    fs.readFile(__dirname + "/../../storage/" + "dummy_insurance.json", 'utf8', function (err, data) {
        var dummy_insurance_json = JSON.parse( data );
        var dummy_insurance = dummy_insurance_json["insurance" + req.params.id];
        res.end( JSON.stringify( dummy_insurance ));
    });
}
module.exports.getDummyInsurance = getDummyInsurance;
