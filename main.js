// <!--js for the moving text effect-->
   
    // <script>
    //   $(function(){
    //   $(".nouns").typed({
    //     strings: ["travel", "trees", "sunshine"],
    //   typeSpeed: 0,
    //   showCursor: false,
    //   loop: true,
    //   loopCount: false,
    //   backDelay: 1000,
    //   })
    // </script>
   

   

    fetch('https://ocpi5trgye.execute-api.us-east-1.amazonaws.com/Prod/index//')
    .then((res) => res.json())
    .then((data) => {
    loginBarner.innerHTML = `${JSON.stringify(data)}`;
    console.log(data);
    })
   
