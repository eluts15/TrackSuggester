       //\\
      //  \\
     //    \\
    //      \\
   //        \\
  //          \\
 //            \\
//User Interface\\

$(function() { //iife
  $("#submit-form").submit(function(event) { 
    event.preventDefault();

    var languagePref = $("#language-pref").val(); //just compare strings
    console.log(languagePref);
    console.log(typeof(languagePref));



    if (languagePref === "GOLANG" || languagePref === "DESIGN") { //check for a matching string.
        console.log("You May be interested in learning about backend applications:)");
    }
    else {console.log("recommend design track?");}

  });
});
