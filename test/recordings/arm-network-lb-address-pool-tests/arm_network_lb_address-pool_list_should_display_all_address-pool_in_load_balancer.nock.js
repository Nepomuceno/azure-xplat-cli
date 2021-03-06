// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/loadBalancers/armEmptyLB?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/loadBalancers/armEmptyLB\",\r\n  \"etag\": \"W/\\\"216ea399-041a-48bb-8a99-d6871e3bc794\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6c6f1e2b-a1b6-4cfd-ad98-5c07191b5766\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplatFrontendIpAP\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/loadBalancers/armEmptyLB/frontendIPConfigurations/xplatFrontendIpAP\",\r\n        \"etag\": \"W/\\\"216ea399-041a-48bb-8a99-d6871e3bc794\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/publicIPAddresses/xplatTestIpAP\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"LB-AddPoll\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/loadBalancers/armEmptyLB/backendAddressPools/LB-AddPoll\",\r\n        \"etag\": \"W/\\\"216ea399-041a-48bb-8a99-d6871e3bc794\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\"\r\n        }\r\n      }\r\n    ],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1710',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"216ea399-041a-48bb-8a99-d6871e3bc794"',
  'x-ms-request-id': '095ffbd8-1fba-47fc-a95a-d93ff01c0841',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14927',
  'x-ms-correlation-request-id': '389b6fbb-f2d1-43ab-bf8c-12fb34579109',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T111858Z:389b6fbb-f2d1-43ab-bf8c-12fb34579109',
  date: 'Tue, 29 Dec 2015 11:18:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/loadBalancers/armEmptyLB?api-version=2015-06-15')
  .reply(200, "{\r\n  \"name\": \"armEmptyLB\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/loadBalancers/armEmptyLB\",\r\n  \"etag\": \"W/\\\"216ea399-041a-48bb-8a99-d6871e3bc794\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"eastus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"6c6f1e2b-a1b6-4cfd-ad98-5c07191b5766\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplatFrontendIpAP\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/loadBalancers/armEmptyLB/frontendIPConfigurations/xplatFrontendIpAP\",\r\n        \"etag\": \"W/\\\"216ea399-041a-48bb-8a99-d6871e3bc794\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/publicIPAddresses/xplatTestIpAP\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"LB-AddPoll\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLBAPool/providers/Microsoft.Network/loadBalancers/armEmptyLB/backendAddressPools/LB-AddPoll\",\r\n        \"etag\": \"W/\\\"216ea399-041a-48bb-8a99-d6871e3bc794\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\"\r\n        }\r\n      }\r\n    ],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1710',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"216ea399-041a-48bb-8a99-d6871e3bc794"',
  'x-ms-request-id': '095ffbd8-1fba-47fc-a95a-d93ff01c0841',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14927',
  'x-ms-correlation-request-id': '389b6fbb-f2d1-43ab-bf8c-12fb34579109',
  'x-ms-routing-request-id': 'WESTINDIA:20151229T111858Z:389b6fbb-f2d1-43ab-bf8c-12fb34579109',
  date: 'Tue, 29 Dec 2015 11:18:58 GMT',
  connection: 'close' });
 return result; }]];
