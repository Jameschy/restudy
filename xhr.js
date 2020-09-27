/**
 * Create By admins on 2020/9/27.
 */

const xhr= new XMLHttpRequest();

xhr.onreadystatechange=()=>{
    if (xhr.readyState===4){
        xhr.status===200?console.log(xhr.responseText):console.error('出错');
    }
}
xhr.open('GET','http://nodejs.cn');
xhr.send()