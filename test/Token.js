var request = require("request");
var access_token="00D4L000000gmbH!AQsAQFnwqqWf1YZZMMgIvR48FdW2quiGGiki8Ps5Eh5NQc90rjakrweqTUaE5pHjBXFtI6nhei605f1pMMp1RTtMtHw2gf7Y"
var options = {
    method: 'POST',
    url: 'https://login.salesforce.com/services/oauth2/token',
    form: {
        grant_type: 'password',
        client_id: '3MVG9I9urWjeUW051PumYX1mbS5HkS3kpZsbCEzYWjgivRyDno1MjvM08EfVf2be52s0vrthHamsgMpQCrm5Z',
        client_secret: 'EC97DAFBF9F6F2399DE5E7BADA2E9BBEF6B3B6E832DC435668AA452940AD9501',
        username: 'soljit_algeria2@soljit.com',
        password: 'entretient_1235zoLmTaUDLiouUaOAN6WhOQPi'
    }
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
});

