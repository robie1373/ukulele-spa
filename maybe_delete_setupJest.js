const { Response, Headers, Request } = require('whatwg-fetch');
//
global.Response = Response;
global.Headers = Headers;
global.Request = Request;
// global.console = {
//   log: () => {},
//   warn: () => {},
// };
global.fetch = require('jest-fetch-mock');
