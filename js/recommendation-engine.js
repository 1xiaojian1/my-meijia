const list=document.getElementById('recommendList');
const profile=JSON.parse(localStorage.getItem('nail_ai_profile')||'{}');
const nails=[
{name:'韩系奶油猫眼',style:'韩系',color:'裸色',score:96},
{name:'温柔粉色渐变',style:'可爱',color:'粉色',score:91},
{name:'高级红酒甲',style:'高级',color:'红色',score:89}
];
let result=nails.map(n=>({...n,match:n.style===profile.style||n.color===profile.color?n.score:n.score-15}))
.sort((a,b)=>b.match-a.match).slice(0,3);
list.innerHTML=result.map(n=>`<div class="card"><h2>${n.name}</h2><p>匹配度：${n.match}%</p><p>推荐理由：根据你的${profile.style||'个性'}偏好和${profile.scene||'日常'}场景生成。</p></div>`).join('');