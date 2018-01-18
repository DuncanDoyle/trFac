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

//scrub function
//Required by the generator
Blockly.Drools.scrub_ = function(block,code) {
    var commentCode = 'This is my comment';
    // Only collect comments for blocks that aren't inline.
    if (!block.outputConnection || !block.outputConnection.targetConnection) {
      // Collect comment for this block.
      var comment = block.getCommentText();
      commentCode = "//" + comment + "\n";
      //comment = Blockly.utils.wrap(comment, Blockly.JavaScript.COMMENT_WRAP - 3);
      //if (comment) {
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
      //}
    }
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
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


//Drools Rule
Blockly.Drools['rule_when_then'] = function(block) {
  var ruleName = block.getFieldValue('NAME')

  var code = 'rule "'+ ruleName + '"\n' + 'when\n' + 'then\n' + 'end\n';

  return code;
}
