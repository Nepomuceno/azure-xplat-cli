// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup8671/providers/Microsoft.Batch/batchAccounts/armclibatch6657?api-version=2015-12-01')
  .reply(200, "{\"name\":\"armclibatch6657\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch6657.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup8671/providers/Microsoft.Storage/storageAccounts/armclibatch265\",\"lastKeySync\":\"2016-10-04T22:34:20.6216259Z\"}},\"id\":\"/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup8671/providers/Microsoft.Batch/batchAccounts/armclibatch6657\",\"type\":\"Microsoft.Batch/batchAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '635',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Tue, 04 Oct 2016 22:34:51 GMT',
  etag: '0x8D3ECA6A7ABA6CF',
  'request-id': '9a43777b-5d1c-45d0-a977-de257dee0cd7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-request-id': 'ee269145-27e3-42c9-9363-df4d3e3ad18a',
  'x-ms-correlation-request-id': 'ee269145-27e3-42c9-9363-df4d3e3ad18a',
  'x-ms-routing-request-id': 'WESTUS2:20161004T223451Z:ee269145-27e3-42c9-9363-df4d3e3ad18a',
  date: 'Tue, 04 Oct 2016 22:34:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup8671/providers/Microsoft.Batch/batchAccounts/armclibatch6657?api-version=2015-12-01')
  .reply(200, "{\"name\":\"armclibatch6657\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch6657.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup8671/providers/Microsoft.Storage/storageAccounts/armclibatch265\",\"lastKeySync\":\"2016-10-04T22:34:20.6216259Z\"}},\"id\":\"/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup8671/providers/Microsoft.Batch/batchAccounts/armclibatch6657\",\"type\":\"Microsoft.Batch/batchAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '635',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Tue, 04 Oct 2016 22:34:51 GMT',
  etag: '0x8D3ECA6A7ABA6CF',
  'request-id': '9a43777b-5d1c-45d0-a977-de257dee0cd7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-request-id': 'ee269145-27e3-42c9-9363-df4d3e3ad18a',
  'x-ms-correlation-request-id': 'ee269145-27e3-42c9-9363-df4d3e3ad18a',
  'x-ms-routing-request-id': 'WESTUS2:20161004T223451Z:ee269145-27e3-42c9-9363-df4d3e3ad18a',
  date: 'Tue, 04 Oct 2016 22:34:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup8671/providers/Microsoft.Batch/batchAccounts/armclibatch6657/applications/armclibatchapp6809?api-version=2015-12-01', '*')
  .reply(201, "{\"id\":\"armclibatchapp6809\",\"packages\":[],\"allowUpdates\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '61',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': 'debdd57d-f171-4075-bc0e-5f372c226fe4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-request-id': 'abf9ca29-231b-40ad-b6a0-dc01642be282',
  'x-ms-correlation-request-id': 'abf9ca29-231b-40ad-b6a0-dc01642be282',
  'x-ms-routing-request-id': 'WESTUS2:20161004T223451Z:abf9ca29-231b-40ad-b6a0-dc01642be282',
  date: 'Tue, 04 Oct 2016 22:34:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup8671/providers/Microsoft.Batch/batchAccounts/armclibatch6657/applications/armclibatchapp6809?api-version=2015-12-01', '*')
  .reply(201, "{\"id\":\"armclibatchapp6809\",\"packages\":[],\"allowUpdates\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '61',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'request-id': 'debdd57d-f171-4075-bc0e-5f372c226fe4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-request-id': 'abf9ca29-231b-40ad-b6a0-dc01642be282',
  'x-ms-correlation-request-id': 'abf9ca29-231b-40ad-b6a0-dc01642be282',
  'x-ms-routing-request-id': 'WESTUS2:20161004T223451Z:abf9ca29-231b-40ad-b6a0-dc01642be282',
  date: 'Tue, 04 Oct 2016 22:34:51 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['armclibatchapp6809'];};