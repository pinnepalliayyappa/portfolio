var myImage=document.getElementById("image")
var count=0
function changeImage() {
  let mySrc = myImage.getAttribute('src');
  var photos=['2.jpg']
  if (count==photos.length) {
    count=0
  }
  else {
     myImage.setAttribute('src',photos[count]);
     count +=1
  }
}

setInterval("changeImage()",1500)
