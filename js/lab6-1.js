/* jQuery and JavaScript code here for lab6-1.html */

$(document).ready(function(){
    /* Step 5 */
    $("#pageTitle").text("Lab 6 - DOM Manipulation with jQuery");

    /* Step 6 */
    var msgArea = $("#msgArea");
    msgArea.val("My class is " + msgArea.attr('class'));

    /* Step 7 */
    $(".btn-primary").css("background-color", "red");

    /* Step 8 */
    $("body").css("background-color", "ivory");

    /* Step 9 */
    $(".center-icons").addClass("selected");

    /* Step 10 */
    $(".panel")
        .on('click', function () {
            $("#message").text("You clicked in the panel.");
        })
    
        /* Step 11 */
        .on('mousemove', function (e) {
            $("#message").text("x=" + e.pageX + " y=" + e.pageY);
        })

        .on('mouseleave', function () {
            $("#message").text("The mouse has left.");
    });

    /* Step 12 */
    var panelImg = $('<img src="images/art/thumbs/13030.jpg">');
    $("#panel-2").append(panelImg);

    /* Step 13 */
    $(function () {
        $(".img-responsive").mousemove(function(){
            var alt = $(this).attr('alt');
            var src = $(this).attr('src');
            var newsrc = src.replace("small", "medium");
        
            var preview = $('<div id="preview"></div>');
            preview.css("display", "initial");
            var image = $('<img src="' + newsrc + '">');
            var caption = $('<p>' + alt + '</p>');

            preview.append(image);
            preview.append(caption);

            $("#preview").remove();  
            $(this).after(preview);
            $(preview).fadeIn(1000);
            $(this).addClass("gray");
        });

        $(".img-responsive").mouseleave(function(){
            $("#preview").remove();
            $(this).removeClass("gray");
        });
    });
});