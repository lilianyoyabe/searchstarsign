let data = [
    {
        name: "包子",
        birthday: "8/17",
        starSign:"獅子座"
    },
    {
        name: "閃亮亮",
        birthday: "10/11",
        starSign:"獅子座"
    },
    {
        name: "歐莉",
        birthday: "8/14",
        starSign:"獅子座"
    },
    {
        name: "衣袖",
        birthday: "4/17",
        starSign:"金牛座"
    },
    {
        name: "偉豪",
        birthday: "7/17",
        starSign:"巨蟹座"
    },
    {
        name: "莉莉",
        birthday: "5/17",
        starSign:"金牛座"
    },
    {
        name: "米奇",
        birthday: "12/17",
        starSign:"射手座"
    },
    {
        name: "蘇菲",
        birthday: "3/17",
        starSign:"水瓶座"
    },
    {
        name: "娃娃",
        birthday: "9/17",
        starSign:"處女座"
    },
    {
        name: "小桂",
        birthday: "8/17",
        starSign:"獅子座"
    }
];

let multipleSelect = document.getElementById("multipleSelect");
let nameList = document.getElementById("nameList");

multipleSelect.addEventListener("change",function(){
    console.log("Change event triggered");
    nameList.innerHTML = "";
    //let selectedStarSign = multipleSelect.value;
    let selectedStarSigns = Array.from(multipleSelect.selectedOptions).map(option => option.value);
    console.log(selectedStarSigns);
    for(let i=0;i<data.length;i++){
        if(selectedStarSigns.includes(data[i].starSign)){
            let listItem = document.createElement("li");
            listItem.textContent = data[i].name;
            nameList.appendChild(listItem);
        }
    }
})