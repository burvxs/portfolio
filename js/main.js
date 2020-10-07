const WELCOME_TEXT = "Welcome to my portfolio"

$(document).ready(function(){
    let bopper = $("#bopper");
    let tictactoe = $("#tictactoe");
    let twatch = $("#twatch");
    let journal = $("#journal");

    let closeModal = $("#modal-close")
    let openModal = $("#contact");
    let modal = $("#modal");

    $(".project").hide();

    initStartContent();

    openModal.on("click", function(){
        modal.css("display", "block");
    });

    closeModal.on("click", function(){
        modal.css("display", "none");
    });

    $("#to-aboutme").on("click", function () {
        scrollToCenterElement(".aboutme-content");
    });

    $("#tictactoe-item").on("click", function(){
        $(".project-grid").hide();
        tictactoe.show();
    })

    $("#item-two").on("click", function(){
        scrollToCenterElement(".project-grid");
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

function dotLoadingAnim(isDotting = true){
    if(isDotting){
        setInterval(dotInterval, 300);
    }else{
        clearInterval(dotInterval);
    }
}

function dotInterval(){
    let wait = $("#wait");
    if (wait.html() === undefined) return;

    if (wait.html().length > 2) {
        wait.html("");
    } else {
        wait.append(".");
    }
}

function initStartContent(){
    dotLoadingAnim();
    const chars = WELCOME_TEXT.split("");
    isDotting = false;
    let index = 0;

    setTimeout(function () {
        $("#start-text").empty();
        let intervalTextWriter = setInterval(() => {
            $("#start-text").append(chars[index]);
            index++;
            if(index > chars.length){
                clearInterval(intervalTextWriter);
                scrollToCenterElement(".aboutme-content", 170);
            }                                  
        }, 150);
    }, 3000);
    console.log(index);
    if (index > chars.length){
        clearInterval(intervalTextWriter);
    }
}

function intervalTextWriter(incrementor, charArray) {
    $("#start-text").append(charArray[incrementor]);
    incrementor++;
}