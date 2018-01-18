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
    "message0": "name: %1",
    //rule name
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "rule name"
      }
    ],
    //when
    "message1": "When %1",
    "args1": [
      {
       "type": "input_statement",
       "name": "WHEN",
       "check": "expression"
      }
    ],
    //then
    "message2": "Then %1",
    "args2": [
      {
       "type": "input_statement",
       "name": "THEN",
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
       "type": "field_input",
       "name": "TIA",
       "text": "object type"
      }
    ],
    "message1": "as %1",
    "args1": [
      {
       "type": "field_input",
       "name": "AS",
       "text": "variable name"
      }
    ],
    "message2": "with %1",
    "args2": [
      {
       "type": "input_statement",
       "name": "WITH",
      }
    ],
    "colour": 220,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Drools expression definition",
    "helpUrl": "http://www.drools.org/learn/documentation.html"
  },
  {
    "type": "drools_constraint",
    //Left
    "message0": "%1 %2 %3",
    "args0": [
      {
       "type": "field_input",
       "name": "VARLEFT",
     },
     {
       "type": "field_dropdown",
       "name": "OPERATOR",
       "options": [
         [ "==", "EQUALS" ],
         [ "!=", "NOT EQUALS" ]
       ]
     },
     {
       "type": "field_input",
       "name": "VARRIGHT"
     }
    ],
     //test: untyped output
     "previousStatement": null,
     "nextStatement": null,
     "colour": 220,
     "tooltip": "Drools object definition",
     "helpUrl": "http://www.drools.org/learn/documentation.html"
  }



]);
