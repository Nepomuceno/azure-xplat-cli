// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/providers/Microsoft.Network/checkTrafficManagerNameAvailability?api-version=2015-11-01', '*')
  .reply(200, "{\"name\":\"test-profile-dns\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"nameAvailable\":false,\"reason\":\"AlreadyExists\",\"message\":\"Domain name test-profile-dns.trafficmanager.net already exists. Please choose a different DNS prefix.\"}", { 'cache-control': 'private',
  'content-length': '239',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '7f85a993-d211-4f30-ad26-e10a840a0e54',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-writes': '1199',
  'x-ms-correlation-request-id': 'ffc8a8f9-f286-4d47-bb5b-05ec96861207',
  'x-ms-routing-request-id': 'WESTEUROPE:20160218T093334Z:ffc8a8f9-f286-4d47-bb5b-05ec96861207',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 Feb 2016 09:33:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/providers/Microsoft.Network/checkTrafficManagerNameAvailability?api-version=2015-11-01', '*')
  .reply(200, "{\"name\":\"test-profile-dns\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"nameAvailable\":false,\"reason\":\"AlreadyExists\",\"message\":\"Domain name test-profile-dns.trafficmanager.net already exists. Please choose a different DNS prefix.\"}", { 'cache-control': 'private',
  'content-length': '239',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '7f85a993-d211-4f30-ad26-e10a840a0e54',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-tenant-writes': '1199',
  'x-ms-correlation-request-id': 'ffc8a8f9-f286-4d47-bb5b-05ec96861207',
  'x-ms-routing-request-id': 'WESTEUROPE:20160218T093334Z:ffc8a8f9-f286-4d47-bb5b-05ec96861207',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 Feb 2016 09:33:33 GMT',
  connection: 'close' });
 return result; }]];
