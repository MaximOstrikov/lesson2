let options = {started: false, initialX: 0, initialY: 0, x: 0, y: 0};
$(window).on('mousemove', function(e){
    if (options.started) {
        $('.polpap').css("left", options.initialX + e.clientX - options.x + "px").css("top", options.initialY + e.clientY - options.y -80 + "px");
        if (e.clientX < options.x - options.initialX) {
            $('.polpap').css("left", 0 + "px");
        }
        if (e.clientY < options.y - options.initialY + 80) {
            $('.polpap').css("top", 0 + "px");
        }
        if (e.clientX > $(window).width() - 320 + options.x - options.initialX ) {
            let clntx = $(window).width();
            $('.polpap').css("left", clntx - 320 + "px");
        }
    }
});
$('.downpanel').on("mousedown", function (e) {
    options.started = true;
    options.initialX = $('.polpap').offset().left;
    options.initialY = $('.polpap').offset().top;
    options.x = e.clientX;
    options.y = e.clientY;
    console.log(options);
});
$(window).on("mouseup focusout", function (e) {
    options.started = false;
});

// add new element
$('#btn').on('click', function () {
    $('main').prepend('<div class="polpap">\n' +
        '            <div class="downpanel">Control panel</div>\n' +
        '         </div>')
});



