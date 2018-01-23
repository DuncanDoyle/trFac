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
    "message0": "Name: %1",
    //rule name
    "args0": [
      {
        "type": "field_input",
        "name": "NAME",
        "text": "rule name"
      }
    ],
    "message1": "Properties %1",
    "args1": [
      {
       "type": "input_statement",
       "name": "PROPS"
      }
    ],
    //when
    "message2": "When %1",
    "args2": [
      {
       "type": "input_statement",
       "name": "LHS",
       "check": "expression"
      }
    ],
    //then
    "message3": "Then %1",
    "args3": [
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
       "text": "attribute"
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
       "type": "input_value",
       "name": "RIGHT_OP",
       "check": ["String", "Number"]
     }
    ],
     //test: untyped output
     "previousStatement": null,
     "nextStatement": null,
     "colour": 20,
     "tooltip": "Drools object definition",
     "helpUrl": "http://www.drools.org/learn/documentation.html"
  },
  {
    "type": "drools_string",
    "message0": "String %1",
    "args0": [
      {
        "type": "field_input",
        "name": "VALUE"
      }
    ],
    "output": "String",
    "colour": 220,
    "tooltip": "Drools String definition",
    "helpUrl": "http://www.drools.org/learn/documentation.html"
  },
  {
    "type": "drools_number",
    "message0": "Number %1",
    "args0": [
      {
        "type": "field_number",
        "name": "VALUE"
      }
    ],
    "output": "Number",
    "colour": 220,
    "tooltip": "Drools Number definition",
    "helpUrl": "http://www.drools.org/learn/documentation.html"
  },
  {
    "type": "drools_drl",
    "message0": "DRL: %1",
    "args0": [
      {
        "type": "field_input",
        "name": "VALUE"
      }
    ],
    "colour": 220,
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "Drools Number definition",
    "helpUrl": "http://www.drools.org/learn/documentation.html"
  },

  {
    "type": "drools_property",
    //Left
    "message0": "%1 %2",
    "args0": [
     {
       "type": "field_dropdown",
       "name": "OPERATOR",
       "options": [
         [ "salience", "salience" ],
         [ "agenda-group", "agenda-group" ],
         [ "ruleflow-group", "ruleflow-group" ]
       ]
     },
     {
       "type": "field_input",
       "name": "OPERAND",
       "check": ["String"]
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
