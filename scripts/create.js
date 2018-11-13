

function f1() {

    // var input = true;
    // if(input){
    //   //location.href="group.html";
    // }

    window.location.href="group.html";

}


window.onload = function() {
    document.getElementById("createButton").onclick = function myFunction() {
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
        console.log("yeet");
        console.log(x);
        console.log(y);
        //f1();
        //validation code to see State field is mandatory.
    }
}
