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
    "type": "drools_rule",
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
       "name": "LHS",
       "check": "expression"
      }
    ],
    //then
    "message2": "Then %1",
    "args2": [
      {
       "type": "input_statement",
       "name": "RHS",
      }
    ],
    "colour": 160,
    "tooltip": "Drools rule definition",
    "helpUrl": "http://www.drools.org/learn/documentation.html"
  },

  {
    "type": "drools_object",
    "message0": "There is a %1 as %2",
    "args0": [
      {
       "type": "field_input",
       "name": "OBJECT",
       "text": "object type"
     },
     {
      "type": "field_input",
      "name": "VAR_NAME",
      "text": "variable name"
     }
    ],
    "message1": "with %1",
    "args1": [
      {
       "type": "input_statement",
       "name": "CONSTRAINT",
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
       "name": "LEFT_OP",
     },
     {
       "type": "field_dropdown",
       "name": "OPERATOR",
       "options": [
         [ "==", " == " ],
         [ "!=", " != " ]
       ]
     },
     {
       "type": "field_input",
       "name": "RIGHT_OP"
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
