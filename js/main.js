

$(document).ready(function(){
    let bopper = $("#bopper");
    let tictactoe = $("#tictactoe");
    let twatch = $("#twatch");
    let journal = $("#journal");
    $(".project").hide();

    $("#to-aboutme").on("click", function () {
        scrollToCenterElement(".aboutme-content");
    });

    $("#tictactoe-item").on("click", function(){
        $(".project-grid").hide();
        tictactoe.show();
    })

    $("#bopper-item").on("click", function(){
        $(".project-grid").hide();
        bopper.show();
    })

    $("#twatch-item").on("click", function () {
        $(".project-grid").hide();
        twatch.show();
    })

    $("#journal-item").on("click", function () {
        $(".project-grid").hide();
        journal.show();
    })

    $("#bopper-side").on("click", function(){
        bopper.hide();
        $(".project-grid").show();
    })

    $("#twatch-side").on("click", function () {
        twatch.hide();
        $(".project-grid").show();
    })

    $("#tictactoe-side").on("click", function () {
        tictactoe.hide();
        $(".project-grid").show();
    })

    $("#journal-side").on("click", function () {
        journal.hide();
        $(".project-grid").show();
    })
});

function scrollToCenterElement(target){
    const scrollToIndex = $(target).offset().top - $(window).height() / 2 + 150;
    $("body").scrollTo(scrollToIndex, 1000);
}

function hideAllProjects(){
 
}