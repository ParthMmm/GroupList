
function addItem(){
  const fModule = require('./node_mdules/firebase_module.js');
  let fbase = fModule.init();



  // var messagesRef = FBapp.ref();
  console.log(getUserName());
  var ref = fbase.database().ref("groups");
  var input = document.getElementById("userInput").value;
  console.log("adddddd");
  //("#itemList").append("<li class='list-group-item'>MY NEW ITEM</li>");
  console.log("adddddd");
  var ul = document.getElementById("itemList");
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(input));
  ul.appendChild(li);


}

function getUserName() {
  return firebase.auth().currentUser.displayName;
}
