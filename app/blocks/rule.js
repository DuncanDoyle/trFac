/**
 * @fileoverview Rule blocks for Drockly
 *
 * This files defines the blocks definition for DRL.
 *
 * @author ddoyle@redhat.com (Duncan Doyle)
 */
'use strict';

Blockly.defineBlocksWithJsonArray([
  {
    "type": "rule_when_then",
    "message0": "When %1",
    "args0": [
      {
       "type": "input_statement",
       "name": "WHEN0",
      }
    ],
    "message1": "Then %1",
    "args1": [
      {
       "type": "input_statement",
       "name": "THEN0",
      }
    ],
    "colour": 160,
    "tooltip": "Drools rule definition",
    "helpUrl": "http://www.drools.org/learn/documentation.html"
  },
  {
    "type": "expression",
    "message0": "There is a %1",
    "args0": [
      {
       "type": "input_statement",
       "name": "TI0",
      }
    ],
    "colour": 220,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Drools expression definition",
    "helpUrl": "http://www.drools.org/learn/documentation.html"
  }


]);
