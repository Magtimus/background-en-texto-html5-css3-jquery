$(document).ready(function () {

    var mouseX, mouseY;
    var ww = $(window).width();
    var wh = $(window).height();
    var traX, traY;

    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        traX = ((14 * mouseX) / 600) + 50;
        traY = ((14 * mouseY) / 600) + 50;
        console.log(traX);
        $(".title").css({
            "background-position": traX + "%" + traY + "%"
        });
    });

});
