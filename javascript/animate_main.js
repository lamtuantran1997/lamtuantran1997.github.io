const test_1 = document.querySelector("#test-level div:first-child div:first-child");
const test_2 = document.querySelector("#test-level div:first-child div:nth-child(2)");

function test_show_up(){
    if(window.pageYOffset > 1350){
        test_1.style.animation = "rise-up-1 3s linear 1 forwards";
        test_2.style.animation = "rise-up-2 3s linear 1 forwards";
    }
}
