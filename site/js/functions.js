$(function(){
    $("#file-upload").change(function(event){
        let x = URL.createObjectURL(event.target.files[0]);
        $("#upload-img").attr("src",x);
        console.log(event);
    });
});