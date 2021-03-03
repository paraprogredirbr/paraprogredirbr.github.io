$(document).ready(function() {
    $("#content div:nth-child(1)").show();
    $(".tabs li:first div").addClass("active");
    $(".tab").click(function() {
        $(".tab").removeClass("active");
        $(this).addClass("active");
        var indice = $(this).parent().index();
        indice++;
        $("#content div").hide();
        $("#content div:nth-child(" + indice + ")").show();
    });
});