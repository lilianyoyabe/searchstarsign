let data = [
    {
        name: "包子",
        birthday: "8/17",
        starSign:"獅子座"
    },
    {
        name: "閃亮亮",
        birthday: "8/11",
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


$('.js-multiple-select').change(function() {
    // 获取选择的星座--这些选择存储在 selectedStarSigns 变量中。
    const selectedStarSigns = $(this).val();
    
    // 获取结果显示的容器--该容器在代码中通过 ID 'result' 进行引用。
    const resultDiv = $('#result');
    
    // 清空结果容器--以便在添加新数据之前删除现有内容
    resultDiv.empty();

    // 对于每个选定的星座
    selectedStarSigns.forEach(starSign => {
        // 创建一个列容器并添加 'col' 类
        const titleContainer = $('<div>').addClass('col');

        // 创建星座标题元素，例如：<h2 class="star-sign-title">星座名称</h2>
        const starSignTitle = $('<h2>').addClass('star-sign-title').text(starSign);

        // 将星座标题添加到 titleContainer
        titleContainer.append(starSignTitle);

        // 将星座标题的列容器添加到结果容器
        resultDiv.append(titleContainer);

        // 根据选择的星座过滤匹配的数据项
        const matchingData = data.filter(item => item.starSign === starSign);

        if (matchingData.length > 0) {
            // 对于每个匹配的数据项
            matchingData.forEach(item => {
                // 创建一个列容器并添加 'col' 类
                const colContainer = $('<div>').addClass('col');

                // 创建包含姓名和生日信息的 'con' 包装容器
                const container = $('<div>').addClass('con');
                const nameElement = $('<p>').addClass('result-name').text('姓名: ' + item.name);
                const birthdayElement = $('<p>').addClass('result-birthday').text('生日: ' + item.birthday);

                // 将姓名和生日元素添加到 'con' 包装容器
                container.append(nameElement);
                container.append(birthdayElement);

                // 将 'con' 包装容器添加到 colContainer
                colContainer.append(container);

                // 将 colContainer 添加到结果容器
                resultDiv.append(colContainer);
            });
        } else {
            // 如果没有匹配的数据，创建一个空的列容器，然后将 "沒有人～～" 添加到其中
            const colContainer = $('<div>').addClass('col');
            // 创建包含 "沒有人～～" 文本的段落元素
            const noResultParagraph = $('<p>').text('沒有人～～');
            // 将 "沒有人～～" 段落元素添加到列容器中
            colContainer.append(noResultParagraph);
            // 将列容器添加到结果容器
            resultDiv.append(colContainer);
                }
    });
});

  
  
  



// let multipleSelect = document.getElementById("multipleSelect");
// let nameList = document.getElementById("nameList");

// multipleSelect.addEventListener("change",function(){
//     console.log("Change event triggered");
//     nameList.innerHTML = "";
//     //let selectedStarSign = multipleSelect.value;
//     let selectedStarSigns = Array.from(multipleSelect.selectedOptions).map(option => option.value);
//     console.log(selectedStarSigns);
//     for(let i=0;i<data.length;i++){
//         if(selectedStarSigns.includes(data[i].starSign)){
//             let listItem = document.createElement("li");
//             listItem.textContent = data[i].name;
//             nameList.appendChild(listItem);
//         }
//     }
// })