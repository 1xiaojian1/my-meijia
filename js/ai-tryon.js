
const photoInput=document.getElementById("photoInput");
const sourcePreview=document.getElementById("sourcePreview");
const result=document.getElementById("aiResult");
const saveBtn=document.getElementById("saveBtn");
let current={};

photoInput?.addEventListener("change",e=>{
 const file=e.target.files[0];
 if(!file)return;
 current={name:file.name,time:new Date().toLocaleString()};
 const url=URL.createObjectURL(file);
 sourcePreview.innerHTML=`<img src="${url}" alt="上传照片">`;
});

document.getElementById("generateBtn")?.addEventListener("click",()=>{
 const style=document.getElementById("styleSelect").value;
 result.innerHTML=`<h3>AI美甲效果生成</h3>
 <p>已完成手部照片识别模拟</p>
 <span class="tag">${style}</span>
 <div class="generator-result">生成效果预览：${style}美甲方案</div>`;
 current.style=style;
 localStorage.setItem("nail_ai_generated",JSON.stringify(current));
});

saveBtn?.addEventListener("click",()=>{
 localStorage.setItem("nail_ai_history",JSON.stringify(current));
 alert("作品已保存");
});
