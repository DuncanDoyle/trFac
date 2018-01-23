/**
 *
 *
 */


 function saveWorkspace(workspace) {
   var xml = Blockly.Xml.workspaceToDom(workspace);
   var xmlText = Blockly.Xml.domToText(xml);
   return xmlText;
 }

 function loadWorkspace(xmlText, workspace) {
   var xml = Blockly.Xml.textToDom(xmlText);
   Blockly.Xml.domToWorkspace(xml, workspace);
 }
