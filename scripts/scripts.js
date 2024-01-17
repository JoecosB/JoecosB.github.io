// 显示弹出窗
function show_pop(content) {
    document.getElementById('pop_content').innerHTML = content;
    document.getElementById('pop').classList.remove('invisible')
  }

// 关闭弹出窗
function hide_pop() {
    document.getElementById('pop_content').innerHTML = '';
    document.getElementById('pop').classList.add('invisible')
  }

// 从输入框获取文字信息，并用弹出窗做出反馈
function getInputContent() {
    var input_content = document.getElementById("starter").value;
    if(input_content != "")
    {
        show_pop("听不懂思密达");
    }else{
        show_pop("Please enter something!");
    }
  }

// 从文件中读取story
function getStory() {
    document.getElementById('story').innerHTML = readTextFile('../stories/01.txt');
  }

//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
            default: 
                return 0; 
    } 
  }

function readTextFile(filePath) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0)) {
        callback(xhr.responseText);
      }
    };
    xhr.open("GET", filePath, true);
    xhr.send();
  }