function addItem(){


  var fb = require('home');


  var ref = fb.database().ref("item")
  var user = fb.auth().currentUser;
  console.log(user.displayName);
  console.log(getUserName(fb));

  var input = document.getElementById("userInput").value;

  var ul = document.getElementById("itemList");
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(input));
  ul.appendChild(li);


  var newRef = ref.push();
  //ref.push();
  //var postID = newRef.key;
  newRef.set({
    item: input
  })

}

function getUserName(fb) {
  return fb.auth().currentUser.displayName;
}
