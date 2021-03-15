// // <!--js for the moving text effect-->
   
//     // <script>
//     //   $(function(){
//     //   $(".nouns").typed({
//     //     strings: ["travel", "trees", "sunshine"],
//     //   typeSpeed: 0,
//     //   showCursor: false,
//     //   loop: true,
//     //   loopCount: false,
//     //   backDelay: 1000,
//     //   })
//     // </script>
   

   

//Visitors counter
 fetch('https://ocpi5trgye.execute-api.us-east-1.amazonaws.com/Prod/index/')
   .then(res => res.json())
   .then(count => {
     document.querySelector('.visitor-count').textContent = count.numberofVisitors?count.numberofVisitors:400;
  })


// function autoType(elementClass, typingSpeed){
//   var thhis = $(elementClass);
//   thhis.css({
//     "position": "relative",
//     "display": "inline-block"
//   });
//   thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
//   thhis = thhis.find(".text-js");
//   var text = thhis.text().trim().split('');
//   var amntOfChars = text.length;
//   var newString = "";
//   thhis.text("|");
//   setTimeout(function(){
//     thhis.css("opacity",1);
//     thhis.prev().removeAttr("style");
//     thhis.text("");
//     for(var i = 0; i < amntOfChars; i++){
//       (function(i,char){
//         setTimeout(function() {        
//           newString += char;
//           thhis.text(newString);
//         },i*typingSpeed);
//       })(i+1,text[i]);
//     }
//   },1500);
// }

// $(document).ready(function(){
//   // Now to start autoTyping just call the autoType function with the 
//   // class of outer div
//   // The second paramter is the speed between each letter is typed.   
//   autoType(".type-js",200);
// });