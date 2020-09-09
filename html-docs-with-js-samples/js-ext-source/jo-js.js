var string2 = "Please locate where 'locate' occurs";
var string3 = "Apple, Banana, Kiwi";
function showLengthMethod() {
  var string1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  writeContent("p11", "string1 is \"" + string1 + "\"");
  writeContent("p12", "string1.length() is " + string1.length);
}
function showIndexOfMethod() {
  writeContent("p21", "string2 is \"" + string2 + "\"");
  writeContent("p22", "string2.indexOf('locate') is "
                        + string2.indexOf("locate"));
}
function showLastIndexOfMethod() {
  writeContent("p31", "string2.lastIndexOf('locate') is "
                        + string2.lastIndexOf("locate"));
}
function showSearchMethod() {
  writeContent("p41", "string2.search('locate') is "
                          + string2.search("locate"));
}
function showSliceMethod() {
  writeContent("p51", "string3 is \"" + string3 + "\"");
  writeContent("p52", "string3.slice(7,13) is \""
                        + string3.slice(7,13)
                        + "\" (-ve args count from the end,"
                        + " & single arg slices to the end)");
}
function showSubstringMethod() {
  writeContent("p61", "substring() is similar to slice() except that"
                        + " it doesn\'t take negative arguments");
}
function showSubstrMethod() {
  writeContent("p71", "substr() is similar to slice() except that"
                        + " the second argument is a length"
                        + " and cannot be negative - can be absent");
}
function showReplaceMethod() {
  writeContent("p81", "string3.replace(/Banana/g,\"Grapefruit\") results in \""
                        + string3.replace(/Banana/g,"Grapefruit")
                        + "\"");
}
function showCaseMethods() {
  writeContent("p91", "toUpperCase() and toLowerCase() work as expected");
}
function showConcatMethod() {
  writeContent("p101", "concat() works as expected - similar to \"+\"");
}
function showCharMethods() {
  writeContent("p111", "charAt() and charCodeAt() are safe to use."
                        + " Don\'t access a string as an array-"
                        + " UNPREDICTABLE");
}
function showSplitMethod() {
  writeContent("p121", "split() converts a String to an array.");
  writeContent("p122", "var txt = \"a,b,c,d,e\";");
  writeContent("p123", "var array = txt.split(\",\");");
  writeContent("p124", "Delimiter can be any character");
}
function writeContent(id, msg) {
  document.getElementById(id).innerHTML = msg;
}
