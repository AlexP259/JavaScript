/* Заполняем страницу содержимым */ 
document.write("<div class='block'>");
    document.write("<div class='block__images'>");
        document.write("<img src='2.jpg'>");
        document.write("<img src='3.jpg'>");
        document.write("<img src='4.jpg'>");
    document.write("</div>");
    document.write("<p class='block__ctrl'>поменять <input type='text' class='block__ctrl-txt'> на <input type='text' class='block__ctrl-txt'>");
    document.write("</p>");
    document.write("<input type='button' class='block__btn' value='поменять'>");
document.write("</div>");

/* получаем доступ к элементам и настраиваем стили */
let block = document.getElementsByClassName("block")[0];
block.style.border = "1px black solid";
block.style.padding = "30px 0px";

let blockImages = document.getElementsByClassName("block__images")[0];
blockImages.style.display = "flex";
blockImages.style.justifyContent = "space-evenly";

let images = document.querySelectorAll(".block__images img");
images.forEach(image => {
    image.style.border = "1px grey solid";
    image.style.padding = "7px";
});

let blockCtrl = document.getElementsByClassName("block__ctrl")[0];
blockCtrl.style.fontWeight = "bold";
blockCtrl.style.fontSize = "22px";
blockCtrl.style.textAlign = "center";
blockCtrl.style.marginTop = "40px";

let blockCtrlTxts = document.querySelectorAll(".block__ctrl-txt");
blockCtrlTxts.forEach(txt => {
    txt.style.width = "70px";
});

let blockBtn = document.getElementsByClassName("block__btn")[0];
blockBtn.style.margin = "0 auto 10px";
blockBtn.style.width = "280px";
blockBtn.style.fontSize = "22px";
blockBtn.style.fontWeight = "bold";
blockBtn.style.display="block";

/* пишем функционал по замене картинок */
blockBtn.addEventListener('click', changeImg);
function changeImg(){
    let temp = images[blockCtrlTxts[0].value-1].src;
    images[blockCtrlTxts[0].value-1].src = images[blockCtrlTxts[1].value-1].src;
    images[blockCtrlTxts[1].value-1].src = temp;
}

