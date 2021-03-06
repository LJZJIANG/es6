const data = [{
        name: '切森斯坦是',
        age: 30,
        gender: '男',
        lookingfor: '女',
        location: '北京',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: '尼古拉斯赵四',
        age: 32,
        gender: '男',
        lookingfor: '女',
        location: '上海',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    },
    {
        name: '李女士',
        age: 24,
        gender: '女',
        lookingfor: '男',
        location: '北京',
        image: 'https://randomuser.me/api/portraits/women/83.jpg'
    }
];

// 迭代器的方法

function profileIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ? {
                value: profiles[nextIndex++],
                done: false
            } : {
                value: undefined,
                done: true
            }
        }
    }
}


const profiles = profileIterator(data);
// 页面加载时默认调用一次
nextProfile();

document.querySelector('#next').addEventListener('click',nextProfile);

function nextProfile(){
    const currentProfile = profiles.next().value;
    // console.log(currentProfile);
    if(currentProfile !== undefined){
      document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
          <li class="list-group-item">姓名: ${currentProfile.name}</li>
          <li class="list-group-item">年龄: ${currentProfile.age}</li>
          <li class="list-group-item">位置: ${currentProfile.location}</li>
          <li class="list-group-item">诉求: ${currentProfile.gender} 寻找的目标对象是${currentProfile.lookingfor}性朋友</li>
        </ul>
      `;
      document.getElementById('imageDisplay').innerHTML = `
      <img src="${currentProfile.image}"/>
    `;
    }else{
      window.location.reload();
    }
  }