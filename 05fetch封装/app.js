
const url = 'http://jsonplaceholder.typicode.com/users';

let easyHttp = new EasyHttp;

// 请求数据
easyHttp.get(url)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))


// 发送数据
const data = {
    name:"Henry",
    username:"露丝",
    email:"lusi@qq.com"
  };
// easyHttp.post(url,data)
//         .then(res=>console.log(res))
//         .catch(err=>console.log(err))


// 修改数据
// easyHttp.put(url+'/10',data)
//         .then(res=>console.log(res))
//         .catch(err=>console.log(err))

easyHttp.delete(url+'/2',data)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))


    
       