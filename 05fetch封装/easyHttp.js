/**
 * fetch 增删改查 的API封装
 */

 class EasyHttp{
    //  get 请求
    get(url){
        return new Promise((resolve,reject)=>{
            fetch(url)
                .then(res=>res.json())
                .then(data=>resolve(data))
                .catch(err=>reject(err))
        })
    }

    // post 请求

    post(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'POST',
                headers:{
                    'Content-type':'application/json'// 设置请求头数据类型
                },
                body:data
            })
            .then(res=>res.json())
            .then(data=>resolve(data))
            .then(err=>reject(err))
        })
    }


    // put 请求修改数据
    put(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'PUT',
                headers:{
                    'Content-type':'application/json'// 设置请求头数据类型
                },
                body:data
            })
            .then(res=>res.json())
            .then(data=>resolve(data))
            .then(err=>reject(err))
        })
    }

      // delete 删除数据
      delete(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'DELETE',
                headers:{
                    'Content-type':'application/json'// 设置请求头数据类型
                },
                body:data
            })
            .then(res=>res.json())
            .then(data=>'删除数据成功。。。')
            .then(err=>reject(err))
        })
    }

 }