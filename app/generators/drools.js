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
      var comment = block.getCommentText();
      comment = Blockly.utils.wrap(comment, Blockly.Drools.COMMENT_WRAP - 3);
      if (comment) {
        commentCode += '/**\n' +
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
    return commentCode + code + nextCode;

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

  //Generate code for the LHS
  var lhsCode = Blockly.Drools.statementToCode(block, 'LHS');

  //var rhsCode =

  var code = 'rule "'+ ruleName + '"\n' + 'when\n' + lhsCode + '\n' + 'then\n' + 'end\n';


  return code;
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
  var rightOperand = block.getFieldValue("RIGHT_OP");

  var code = leftOperand + operator + '\"' + rightOperand + '\"';

  return code;
}
