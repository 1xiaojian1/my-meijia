function saveProfile(){
 const profile={style:style.value,color:color.value,length:length.value,shape:shape.value,scene:scene.value};
 localStorage.setItem('nail_ai_profile',JSON.stringify(profile));
 location.href='ai-recommend.html';
}