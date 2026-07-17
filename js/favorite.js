let f=JSON.parse(localStorage.favorites||'[]');document.getElementById('list').innerText=f.length?f.join('\n'):'暂无收藏';
