$(document).ready(function(){
    function scalePage() {
        const baseWidth = 1920;
        const scale = window.innerWidth / baseWidth;
      
        document.getElementsByClassName("container")[0].style.transform = `scale(${scale})`;
      }
      
      window.addEventListener("load", scalePage);
      window.addEventListener("resize", scalePage);
    
      $(".btn1").click(function() {
        if ($(".inp1").val().trim() === "" || $(".inp2").val().trim() === "" || $(".inp3").val().trim() === "") {
            alert("لطفا تمام فیلدها را پر کنید.");
        }
    });