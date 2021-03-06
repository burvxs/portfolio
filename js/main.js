const WELCOME_TEXT = "Welcome to my portfolio";

const DESKTOP_PROJECT_GRID_SCROLL_OFFSET = 380;
const MOBILE_PROJECT_GRID_SCROLL_OFFSET = 100;
const DESKTOP_ABOUT_ME_SCROLL_OFFSET = 327;
const MOBILE_ABOUT_ME_SCROLL_OFFSET = 300;


$(document).ready(function(){
    let bopper = $("#bopper");
    let tictactoe = $("#tictactoe");
    let twatch = $("#twatch");
    let journal = $("#journal");

    let closeModal = $("#modal-close")
    let openModal = $("#contact");
    let modal = $("#modal");

    init();
    if(detectMobile()) initMobile();

    openModal.on("click", function(){
        modal.css("display", "block");
    });

    closeModal.on("click", function(){
        modal.css("display", "none");
    });

    $("#tictactoe-item").on("click", function(e){
        $(".project-grid").hide();
        tictactoe.show();
    })

    $("#item-two").on("click", function(e){
        scrollToAboutMe();
    })

    $("#item-one").on("click", function () {
        scrollToProjectGrid();
    })

    $("#bopper-item").on("click", function(){
        $(".project-grid").hide();
        bopper.show();
    })

    $("#twatch-item").on("click", function () {
        $(".project-grid").hide();
        twatch.show();
    })

    $("#journal-item").on("click", function (e) {
        e.preventDefault();
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

const initMobile = () => {
    const bopperItem = $("#bopper-item");
    const ticTacToeItem = $("#tictactoe-item");
    const twatchItem = $("#twatch-item");
    const journalItem = $("#journal-item");
    $(document).on("scroll", function (e) {
        onProjectImageScrollOver(bopperItem, ticTacToeItem, twatchItem, journalItem);
    })
}

const init = () => {
    $(".project").hide();
    giveAllATagsTarget();
    initStartContent();
    switchJournalPhotoGrid();
    advertisementConsoleLogs();
}

const advertisementConsoleLogs = () => {
    console.log("%cIf you're a developer check out mobile view!", "color: lightgreen; background: black;");
    console.log("%cLink to this project: https://github.com/burvxs/portfolio", "color: lightyellow;");
    console.log("%cPlease click on my details!", "color: blue; background: yellow");
    console.log("%cContact me! I love to chat.", "color: blue; background: yellow");
}

const onProjectImageScrollOver = (bopperElement, ticTacToeElement, twatchItem, journalItem) => {
    onBopperScrollOver(scrollY).then(() => {
        bopperElement.attr("src", "assets/bopperhoverimg.png")
    })
    .catch(() => {
        bopperElement.attr("src", "assets/bopper.png")
    })

    onTicTacToeScrollOver(scrollY).then(() => {
        ticTacToeElement.attr("src", "assets/tictactoehoverimg.png")
    })
    .catch(() => {
        ticTacToeElement.attr("src", "assets/tictactoe.png")
    })

    onTwatchScrollOver(scrollY).then(() => {
        twatchItem.attr("src", "assets/twatchhoverimg.png");
    })
    .catch(() => {
        twatchItem.attr("src", "assets/twatch.png");
    })

    onJournalScrollOver(scrollY).then(() => {
        journalItem.attr("src", "assets/journalhoverimage.png");
    })
    .catch(() => {
        journalItem.attr("src", "assets/journal.png");
    })
}

const onBopperScrollOver = (scrollY) => {
    return new Promise((resolve, reject) => {
        if (scrollY >= 2556 && scrollY <= 2781) {
            resolve();
        }else{
            reject()
        }
    })
}

const onTicTacToeScrollOver = (scrollY) => {
    return new Promise((resolve, reject) => {
        if(scrollY >= 2781 && scrollY <= 3027){
            resolve()
        }else{
            reject()
        }
    })
}

const onTwatchScrollOver = (scrollY) => {
    return new Promise((resolve, reject) => {
        if (scrollY >= 3027 && scrollY <= 3100) {
            resolve()
        }else {
            reject()
        }
    })
}

const onJournalScrollOver = (scrollY) => {
    return new Promise((resolve, reject) => {
        if (scrollY >= 3110) {
            resolve()
        } else if (scrollY <= 3110) {
            reject()
        }
    })
}

function scrollToCenterElement(target, offset = DESKTOP_PROJECT_GRID_SCROLL_OFFSET){
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
const scrollToProjectGrid = () => {
    if (detectMobile()) {
        scrollToCenterElement(".project-grid", MOBILE_PROJECT_GRID_SCROLL_OFFSET);
    } else {
        scrollToCenterElement(".project-grid", DESKTOP_PROJECT_GRID_SCROLL_OFFSET);
    }
}
const scrollToAboutMe = () => {
    if (detectMobile()) {
        scrollToCenterElement(".aboutme-content", MOBILE_ABOUT_ME_SCROLL_OFFSET);
    } else {
        scrollToCenterElement(".aboutme-content", DESKTOP_ABOUT_ME_SCROLL_OFFSET);
    }
}
function initStartContent(){
    dotLoadingAnim();
    const chars = WELCOME_TEXT.split("");
    isDotting = false;
    let index = 0;

    setTimeout(function (){
        $("#start-text").empty();
        let intervalTextWriter = setInterval(() => {
            $("#start-text").append(chars[index]);
            index++;
            if(index > chars.length - 1){
                clearInterval(intervalTextWriter);
                scrollToAboutMe();
                // setTimeout(() => {
                //     $("#start-content-wrapper").hide();
                // }, 1200);
            }                                  
        }, 150);
    }, 3000);
    if (index > chars.length){
        clearInterval(intervalTextWriter);
    }
}

function switchJournalPhotoGrid(){
    if(detectMobile()){
        $("#photo-grid").remove();
        $("#journal").prepend(`<img class="side-image" id="journal-side" onmouseover="this.src='assets/journalhoverimage.png'"
            onmouseout="this.src='assets/journal.png'" src="assets/journal.png" alt="journal project image">`);
    }
}

function detectMobile() {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

const giveAllATagsTarget = () => {
    const allATags = $("a");
    if(allATags.length > 0){
        allATags.each(function(index){
            allATags.eq(index).attr("target", "_blank");
        })
    }else{
        return "No <a> tags present";
    }
    
}