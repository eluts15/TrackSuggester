//Logic






       //\\
      //  \\
     //    \\
    //      \\
   //        \\
  //          \\
 //            \\
//User Interface\\

$(function() { //iife
  $("#submit-form").submit(event) {
    
    event.preventDefault();


    var languagePref = $("#language-pref").val();
    var choice = $("input:radio[name=choice]:checked").val();
    var trueOrFalse = $("input:checkbox[]]");

 
    if (languagePref === "golang" || languagePref === "csharp") {
            console.log("Try something backend related.");
                        $("#recommended").show();
                        $(".recommendation").append("C#");

    }
    else if (languagePref === "design") {
            console.log("Consider something design oriented.");
                        $("#reccomended").show();
                        $(".recommendation").append("DESIGN");
    }
    else {
                        $("#recommended").show();
                        $(".recommendation").append("PHP");          
    }
    
  });
});
