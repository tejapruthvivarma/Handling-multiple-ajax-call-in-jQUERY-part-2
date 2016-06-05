(function(){
    $(document).ready(function(){

        /*
         *  Quiz #3
         *
         *  Instructions:
         *     - complete the three Ajax calls to server1.php, server2.php, and server3.php
         *     - ensure all three Ajax calls have completed, then call the finalize() function
         */

        // function to call once all three Ajax calls have returned
        var finalize = function(){
            // gather the three values
            var result1 = Number($('#result-1').val()) || undefined,
                result2 = Number($('#result-2').val()) || undefined,
                result3 = Number($('#result-3').val()) || undefined;

            // if they have all returned results, then show the result as a success!
            if(result1 && result2 && result3){
                $('#sum-of-results')
                    .removeClass('well')
                    .addClass('alert alert-success')
                    .html('SUCCESS! (sum is ' + (result1 + result2 + result3) + ')');
            }
            else{
                $('#sum-of-results')
                    .removeClass('well')
                    .addClass('alert alert-danger')
                    .html("ERROR!");
            }
        };


// load();

// function load(){
        // Ajax 1
       var ajax1 =  $.ajax({
            url: 'server1.php'
        }).done(function(data){
            $('#result-1').val(data);

         
        }).fail(function(jqXHR, statusText, errorThrown){
            $('#result-1').val('ERROR!');
        });

        // Ajax 2
    var ajax2 =    $.ajax({
            url: 'server2.php'
        }).done(function(data){
            $('#result-2').val(data);
 
        }).fail(function(jqXHR, statusText, errorThrown){
            $('#result-2').val('ERROR!');
        });

        // Ajax 3
      var ajax3 =  $.ajax({
            url: 'server3.php'
        }).done(function(data){
            $('#result-3').val(data);
 
        }).fail(function(jqXHR, statusText, errorThrown){
            $('#result-3').val('ERROR!');
        });
//}
        // call finalize when ready
        $.when( ajax1, ajax2, ajax3 ).done(function() {
finalize();
});
    });
})();
