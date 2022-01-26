$("#currentDay").text(moment().format("MMM Do, YYYY"));
function updater(){
    var currentTime = moment().hours();
    $(".time-block").each(function(){
        var hourBlock = parseInt($(this).attr("id").split("-")[1])
        console.log(hourBlock)
        if (currentTime > hourBlock){
            $(this).addClass("past")
        }
        else if(currentTime === hourBlock){
            $(this).addClass("present")
        }
        else {
            $(this).addClass("future")
        }
    })
    // create another function for capturing text to local storage and funtion save button  look into .siblings
    
}
updater();