// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '8d57ddbd-c779-40ea-b660-1015f4bf027d',
    name: 'Visual Studio Enterprise',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18319/providers/Microsoft.Web/sites/webappclitests4175/restart?api-version=2015-08-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '50f9fab8-4a28-4a8d-b610-ed3541d72ae4',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '3dcf122d-f56a-472c-8c9f-af1a49a7b9f7',
  'x-ms-routing-request-id': 'CENTRALUS:20160921T175725Z:3dcf122d-f56a-472c-8c9f-af1a49a7b9f7',
  date: 'Wed, 21 Sep 2016 17:57:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg18319/providers/Microsoft.Web/sites/webappclitests4175/restart?api-version=2015-08-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '50f9fab8-4a28-4a8d-b610-ed3541d72ae4',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '3dcf122d-f56a-472c-8c9f-af1a49a7b9f7',
  'x-ms-routing-request-id': 'CENTRALUS:20160921T175725Z:3dcf122d-f56a-472c-8c9f-af1a49a7b9f7',
  date: 'Wed, 21 Sep 2016 17:57:25 GMT',
  connection: 'close' });
 return result; }]];