let options = [{id: 0, started: false, initialX: 0, initialY: 0, x: 0, y: 0}];
let idCount = 1;
let elementId = 0;
$(window).on('mousemove', function(e){
    if (options.started) {
        console.log(elementId);
        $('#'+elementId).parent().css("left", options.initialX + e.clientX - options.x + "px").css("top", options.initialY + e.clientY - options.y -80 + "px");
        if (e.clientX < options.x - options.initialX) {
            $('#'+elementId).parent().css("left", 0 + "px");
        }
        if (e.clientY < options.y - options.initialY + 80) {
            $('#'+elementId).parent().css("top", 0 + "px");
        }
        if (e.clientX > $(window).width() - 320 + options.x - options.initialX ) {
            let clntx = $(window).width();
            $('#'+elementId).parent().css("left", clntx - 320 + "px");
        }
    }
});
$(document).on("mousedown", ".downpanel", function (e) {
    elementId = $(this).context.id;
    console.log(elementId);
    options.started = true;
    options.initialX = $('#'+elementId).parent().offset().left;
    options.initialY = $('#'+elementId).parent().offset().top;
    options.x = e.clientX;
    options.y = e.clientY;
    console.log(options);
});
$(window).on("mouseup focusout", function (e) {
    options.started = false;
});

// add new element
$('#btn').on('click', function () {
    $('main').append('<div class="polpap">\n' +
        '            <div class="downpanel" id="' + idCount + '">Control panel</div>\n' +
        '         </div>');
    options[idCount] = {id: idCount, started: false, initialX: 0, initialY: 0, x: 0, y: 0};
    console.log(options);
    idCount++
});



