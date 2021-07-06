var canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
blockimagewidth=30;
blockimageheight=30;
var player_object="";
var blockimageobject="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    });
}

function new_img(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockimageobject=Img;
        blockimageobject.scaleToWidth(blockimagewidth);
        blockimageobject.scaleToHeight(blockimageheight);
        blockimageobject.set({
            top:player_y,left:player_x
        });
        canvas.add(blockimageobject);
    })
}



window.addEventListener("keydown",My_keydown);


function My_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true&&keyPressed=="80"){
        console.log("P and Shift pressed together");
        blockimagewidth=blockimagewidth+10;
        blockimageheight=blockimageheight+10;
        document.getElementById("current_width").innerHTML=blockimagewidth;
        document.getElementById("current_height").innerHTML=blockimageheight;
    }
    if(e.shiftKey==true&&keyPressed=="77"){
        console.log("M and Shift pressed together");
        blockimagewidth=blockimagewidth-10;
        blockimageheight=blockimageheight-10;
        document.getElementById("current_width").innerHTML=blockimagewidth;
        document.getElementById("current_height").innerHTML=blockimageheight;
    }
    
   

    if(keyPressed=="76"){
        new_img("download.jfif");
        console.log("L");
    }

  
    }
    
        
    

    






