
const request = require('request');
var access_token="00D4L000000gmbH!AQsAQFnwqqWf1YZZMMgIvR48FdW2quiGGiki8Ps5Eh5NQc90rjakrweqTUaE5pHjBXFtI6nhei605f1pMMp1RTtMtHw2gf7Y"

const client_id = '3MVG9I9urWjeUW051PumYX1mbS5HkS3kpZsbCEzYWjgivRyDno1MjvM08EfVf2be52s0vrthHamsgMpQCrm5Z';
const client_secret = 'EC97DAFBF9F6F2399DE5E7BADA2E9BBEF6B3B6E832DC435668AA452940AD9501';
const username = 'soljit_algeria2@soljit.com';
const password = 'entretient_1235zoLmTaUDLiouUaOAN6WhOQPi';


const getApplication = (access_token) => {
    const options = {
        method: 'GET',
        url: 'https://soljit35-dev-ed.my.salesforce.com/services/data/v55.0/sobjects/Candidature__c/' +
            'a004L000002gCJK',
        headers: {
            'Authorization': 'Bearer ' + access_token,
            'Content-Type': 'application/json'
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        const data = JSON.parse(body);
        console.log('First Name:', data.First_Name__c);
        console.log('Last Name:', data.Last_Name__c);
        console.log('Year:', data.Year__c);
        console.log('Year of Experience:', data.Year_Of_Experience__c);
    });
};



const insertApplication = (access_token) => {
    const options = {
        method: 'POST',
        url: 'https://soljit35-dev-ed.my.salesforce.com/services/data/v55.0/sobjects/Candidature__c/' +
            'a004L000002gCJK',
        headers: {
            'Authorization': 'Bearer ' + access_token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'First_Name__c': 'Leila',
            'Last_Name__c': 'habib',
            'Year_Of_Experience__c': '2'
        })
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log('user inserted');
    });
};

const updateApplication = (access_token) => {
    const options = {
        method: 'PATCH',
        url: 'https://soljit35-dev-ed.my.salesforce.com/services/data/v55.0/sobjects/Candidature__c/' +
            'a004L000002gCJK',
        headers: {
            'Authorization': 'Bearer ' + access_token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'Last_Name__c': 'Habib'
        })
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
        console.log('user name updated');
    });
};

const getAllApplications = (access_token) => {
    const options = {
        method: 'GET',
        url: 'https://soljit35-dev-ed.my.salesforce.com/services/data/v55.0/query?q=SELECT+Id,First_Name__c,' +
            'Last_Name__c,Year__c,Year_Of_Experience__c+FROM+Candidature__c',
        headers: {
            'Authorization': 'Bearer ' + access_token,
            'Content-Type': 'application/json'
        }
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        const data = JSON.parse(body);
        console.log('Number of Applications:', data.totalSize);
        data.records.forEach(application => {
            console.log('Id:', application.Id);
            console.log('First Name:', application.First_Name__c);
            console.log('Last Name:', application.Last_Name__c);
            console.log('Year:', application.Year__c);
            console.log('Year of Experience:', application.Year_Of_Experience__c);
            console.log('----------------');
        });
    });
};
    const searchApplication = (access_token, searchKey) => {
        const options = {
            method: 'GET',
            url: `https://soljit35-dev-ed.salesforce.com/services/data/v55.0/search?q=${searchKey}`,
            headers: {
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/json'
            }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            const data = JSON.parse(body);
            console.log('Number of Applications:', data.totalSize);
            data.records.forEach(application => {
                console.log('Id:', application.Id);
                console.log('First Name:', application.First_Name__c);
                console.log('Last Name:', application.Last_Name__c);
                console.log('Year:', application.Year__c);
                console.log('Year of Experience:', application.Year_Of_Experience__c);
                console.log('----------------');
            });
        });
    };



getApplication(access_token);
insertApplication(access_token);
updateApplication(access_token);
getAllApplications(access_token);



