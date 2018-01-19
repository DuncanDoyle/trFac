/**
 * Code generator for the Drools Rule Language.
 *
 *
 * @author ddoyle@redhat.com (Duncan Doyle)
 */



Blockly.Drools = new Blockly.Generator('Drools');


//Init function
//Required by the generator
Blockly.Drools.init = function(workspace) {
  //Create the package NAME
  //TODO: Package name needs to be add in a block, or we genarate it from something in the workspace.
  Blockly.Drools.packageName = "org.drools.blockly.test";

}

/**
  * scrub function
  * Required by the generator
  */
Blockly.Drools.scrub_ = function(block,code) {
    console.log("Scrubbing block: " + block);
    var commentCode = '';
    // Only collect comments for blocks that aren't inline.
    if (!block.outputConnection || !block.outputConnection.targetConnection) {
      // Collect comment for this block.
      console.log("Collecting block comments");
      var comment = block.getCommentText();
      comment = Blockly.utils.wrap(comment, Blockly.Drools.COMMENT_WRAP - 3);
      if (comment) {
        commentCode += '/*\n' +
                Blockly.Drools.prefixLines(comment + '\n', ' * ') +
                '*/\n';

      //TODO: This is from the JavaScript generator. Leaving it here for now for inspiration. Needs to be removed.
      //  if (block.getProcedureDef) {
      //    // Use a comment block for function comments.
      //    commentCode += '/**\n' +
      //                   Blockly.JavaScript.prefixLines(comment + '\n', ' * ') +
      //                   ' */\n';
      //  } else {
      //    commentCode += Blockly.JavaScript.prefixLines(comment + '\n', '// ');
      //  }
     // }
      // Collect comments for all value arguments.
      // Don't collect comments for nested statements.
      //for (var i = 0; i < block.inputList.length; i++) {
      //  if (block.inputList[i].type == Blockly.INPUT_VALUE) {
      //    var childBlock = block.inputList[i].connection.targetBlock();
      //    if (childBlock) {
      //      var comment = Blockly.JavaScript.allNestedComments(childBlock);
      //      if (comment) {
      //        commentCode += Blockly.JavaScript.prefixLines(comment, '// ');
      //      }
      //    }
      //  }
      }
    }

    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    console.log("Next block: " + nextBlock);
    var nextCode = Blockly.Drools.blockToCode(nextBlock);
    var separator = "";
	  if (block.type == "drools_constraint" && nextBlock != null && nextBlock.type == "drools_constraint") {
     	separator = ", ";
    }
    if (block.type == "drools_object" && nextBlock != null && nextBlock.type == "drools_object") {
      separator = "\n";
    }
    if (block.type == "drools_property" && nextBlock != null && nextBlock.type == "drools_property") {
      separator = "\n";
    }

    var generatedCode = commentCode + code + separator + nextCode;
    console.log("Generated code: " + generatedCode);
    return generatedCode;

}

//finish function
//Required by the generator
Blockly.Drools.finish = function(code) {
  //Add package name=
  var outputCode = "package " + Blockly.Drools.packageName + ";\n" + code;

  return outputCode;
}


//Blocks generation code.

//Drools Rule
Blockly.Drools['drools_rule'] = function(block) {
  var ruleName = block.getFieldValue('NAME')

  //Generate code for the LHS and RHS
  var propertiesCode = Blockly.Drools.statementToCode(block, 'PROPS');
  var lhsCode = Blockly.Drools.statementToCode(block, 'LHS');
  var rhsCode = Blockly.Drools.statementToCode(block, 'RHS');

  //Build the code of the rule.
  var code = 'rule "'+ ruleName +'"\n' + propertiesCode + '\nwhen\n' + lhsCode + '\nthen\n' + rhsCode + '\nend\n';

  return code;
}

//Drools DRL
Blockly.Drools['drools_property'] = function(block) {

  var operator = block.getFieldValue("OPERATOR");
  var operand = block.getFieldValue("OPERAND")
  //TODO: Check which operator has been selected to correctly format the operand.
  return operator + ' \"' + operand + '\"';
}

//Drools Object
Blockly.Drools['drools_object'] = function(block) {
  var objectName = block.getFieldValue('OBJECT');
  var varName = block.getFieldValue('VAR_NAME');

  var code = varName + ": " + objectName + "(";

  //TODO: constraints
  var constraintCode = Blockly.Drools.statementToCode(block, 'CONSTRAINT')

  code = code + constraintCode + " )";

  return code;
}

//Drools CONSTRAINT
Blockly.Drools['drools_constraint'] = function(block) {

  var leftOperand = block.getFieldValue("LEFT_OP");
  var operator = block.getFieldValue("OPERATOR");
  var rightOperand = Blockly.Drools.valueToCode(block, "RIGHT_OP", Blockly.Drools.ORDER_EQUALITY);
  console.log("Right operand: " + rightOperand);

  var code = leftOperand + operator + rightOperand ;

  return code;
}

//Drools String
Blockly.Drools['drools_string'] = function(block) {
  var value = block.getFieldValue("VALUE");
  console.log("String value: " + value);
  //TODO: Need to return the value as an array, because "valueToCode" fetches the first element. Need to figure out what that second element is for.
  return ['\"' + value + '\"'];
}

//Drools Number
Blockly.Drools['drools_number'] = function(block) {
  var value = block.getFieldValue("VALUE");
  console.log("Number value: " + value);
  //TODO: Need to return the value as an array, because "valueToCode" fetches the first element. Need to figure out what that second element is for.
  return [value];
}
//Drools DRL
Blockly.Drools['drools_drl'] = function(block) {
  var code = block.getFieldValue("VALUE");
  //TODO: Need to return the value as an array, because "valueToCode" fetches the first element. Need to figure out what that second element is for.
  return code;
}
