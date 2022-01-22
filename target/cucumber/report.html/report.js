$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/sumOfDigits/sumOfDigits.feature");
formatter.feature({
  "line": 2,
  "name": "Find the sum of digits of given number",
  "description": "",
  "id": "find-the-sum-of-digits-of-given-number",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Correct count of digits",
  "description": "",
  "id": "find-the-sum-of-digits-of-given-number;correct-count-of-digits",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Passed \u003cInput\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "it returns \u003cexpectedSumOfDigits\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "find-the-sum-of-digits-of-given-number;correct-count-of-digits;",
  "rows": [
    {
      "cells": [
        "Input",
        "expectedSumOfDigits"
      ],
      "line": 9,
      "id": "find-the-sum-of-digits-of-given-number;correct-count-of-digits;;1"
    },
    {
      "cells": [
        "1205",
        "8"
      ],
      "line": 10,
      "id": "find-the-sum-of-digits-of-given-number;correct-count-of-digits;;2"
    },
    {
      "cells": [
        "-2354",
        "14"
      ],
      "line": 11,
      "id": "find-the-sum-of-digits-of-given-number;correct-count-of-digits;;3"
    },
    {
      "cells": [
        "2435",
        "14"
      ],
      "line": 12,
      "id": "find-the-sum-of-digits-of-given-number;correct-count-of-digits;;4"
    },
    {
      "cells": [
        "-1234",
        "10"
      ],
      "line": 13,
      "id": "find-the-sum-of-digits-of-given-number;correct-count-of-digits;;5"
    },
    {
      "cells": [
        "5642",
        "17"
      ],
      "line": 14,
      "id": "find-the-sum-of-digits-of-given-number;correct-count-of-digits;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Correct count of digits",
  "description": "",
  "id": "find-the-sum-of-digits-of-given-number;correct-count-of-digits;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Passed 1205",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "it returns 8",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 11,
  "name": "Correct count of digits",
  "description": "",
  "id": "find-the-sum-of-digits-of-given-number;correct-count-of-digits;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Passed -2354",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "it returns 14",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 12,
  "name": "Correct count of digits",
  "description": "",
  "id": "find-the-sum-of-digits-of-given-number;correct-count-of-digits;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Passed 2435",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "it returns 14",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 13,
  "name": "Correct count of digits",
  "description": "",
  "id": "find-the-sum-of-digits-of-given-number;correct-count-of-digits;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Passed -1234",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "it returns 10",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 14,
  "name": "Correct count of digits",
  "description": "",
  "id": "find-the-sum-of-digits-of-given-number;correct-count-of-digits;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Passed 5642",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "it returns 17",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});