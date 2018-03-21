document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJson);
document.getElementById('button3').addEventListener('click',getNextWork);

/*
    请求text文本数据
 */

 const el_output = document.getElementById('output');
 function getText(params) {
     fetch('test.txt')
        .then(res=>res.text())
        .then(data=>{
            // console.log(data)
            el_output.innerHTML = data;
        })
        .catch(err=>console.log(err));

 }

 /*
    请求json数据
 */

function getJson(params) {
     fetch('posts.json')
     .then(res=>res.json())
     .then(data=>{
        //  console.log(data)
        let outputStr = '';
        data.forEach(item => {
            outputStr +=`<li>${item.title}-----${item.body}</li>`
        });
        el_output.innerHTML = outputStr;
     })
     .catch(err=>console.log(err))
}

/*
    请求网络接口
 */

function getNextWork(params) {
     fetch('http://jsonplaceholder.typicode.com/users')
     .then(res=>res.json())
     .then(data=>{
         console.log(data)
         let outputStr = '';
         data.forEach(item => {
             outputStr +=`<li>${item.id}-----${item.name}</li>`
         });
         el_output.innerHTML = outputStr;
      })
      .catch(err=>console.log(err))
}
