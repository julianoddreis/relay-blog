/**
 * @flow
 * @relayHash 78c5fbdc7e9736494c87878ea36087c6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UsersQueryVariables = {||};
export type UsersQueryResponse = {|
  +users: ?$ReadOnlyArray<?{|
    +id: string,
    +firstname: string,
    +age: number,
  |}>
|};
export type UsersQuery = {|
  variables: UsersQueryVariables,
  response: UsersQueryResponse,
|};
*/


/*
query UsersQuery {
  users {
    id
    firstname
    age
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "users",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "firstname",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "age",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UsersQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UsersQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "UsersQuery",
    "id": null,
    "text": "query UsersQuery {\n  users {\n    id\n    firstname\n    age\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7f9f328671d0eacba34b3c8bd6e2bedb';
module.exports = node;
