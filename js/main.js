

$(document).ready(function(){
    let bopper = $("#bopper");
    let tictactoe = $("#tictactoe");
    let twatch = $("#twatch");
    let journal = $("#journal");
    $(".project").hide();
    dotLoadingAnim();
    $("#to-aboutme").on("click", function () {
        scrollToCenterElement(".aboutme-content");
    });

    $("#tictactoe-item").on("click", function(){
        $(".project-grid").hide();
        tictactoe.show();
    })

    $("#item-two").on("click", function(){
        scrollToCenterElement($(".project-grid"))
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

function scrollToCenterElement(target, offset = 380){
    const scrollToIndex = $(target).offset().top - $(window).height() / 2 + offset;
    $("body").scrollTo(scrollToIndex, 1000);
}

function dotLoadingAnim(){
    setInterval(function(){
        let wait = $("#wait");
        if(wait.html().length > 2){
            wait.html('');
        }else{
            wait.append(".")
        }
    }, 300)
}