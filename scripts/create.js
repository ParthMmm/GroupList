window.onload = function() {
    document.getElementById("createButton").onclick = function createGroup() {
        //alert("hello");
        var ref = firebase.database().ref("groups");
        var str,
        x = document.getElementById("groupN").value;
        if(x != null){
          str = x.value;
        }
        else{
          str = null;
        }
        var y = document.getElementById("groupP").value;
        var newRef = ref.push();
        var postID = newRef.key;
        newRef.set({
          name: x,
          password: y
        }).then( user => {window.location.href="group.html";});

        console.log(x);
        console.log(y);
        //f1();
        //validation code to see State field is mandatory.
    }
}

window.onload = function(){
  document.getElementById("logInButton").onclick = function enterGroup(){
    var groupN = document.getElementById("groupN").value;
    var groupP = document.getElementById("groupP").value;

    var ref = firebase.database().ref("groups");

    ref.orderByChild('name').equalTo(groupN).on("value", function(snapshot){

      var value = snapshot.val();
      if(value){
        console.log("success name");
      }
      else{
        console.log("fail name");
      }
    });

    ref.orderByChild('password').equalTo(groupP).on("value", function(snapshot){

      var value = snapshot.val();
      if(value){
        console.log("success password");
      }
      else{
        console.log("fail password");
      }
    });

  }
}
