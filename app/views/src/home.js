console.log('JS is working');
var socket = io('http://localhost:3000');
socket.on('orderReceived',function(data){
  var node = document.createElement("LI");
  var textnode = document.createTextNode(data);
  node.appendChild(textnode);
  document.getElementById("hotelScreen").appendChild(node);
});
