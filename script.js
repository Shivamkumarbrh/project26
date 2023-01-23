document.querySelector('.detailContent1').style.display = 'block';
document.querySelector('.detailContent2').style.display = 'none';
document.querySelector('.detailContent3').style.display = 'none';
document.getElementById('one').style.backgroundColor = 'red';
const first = ()=>{
    document.querySelector(".detailContent1").style.display = 'block';
document.querySelector(".detailContent2").style.display = 'none';
document.querySelector(".detailContent3").style.display = 'none';
document.getElementById('one').style.backgroundColor = 'red';
document.getElementById('two').style.backgroundColor = 'black';
document.getElementById('three').style.backgroundColor = 'black';
}
const second = ()=>{
    document.querySelector(".detailContent1").style.display = 'none';
document.querySelector(".detailContent2").style.display = 'block';
document.querySelector(".detailContent3").style.display = 'none';
document.getElementById('one').style.backgroundColor = 'black';
document.getElementById('two').style.backgroundColor = 'red';
document.getElementById('three').style.backgroundColor = 'black';
}
const third = ()=>{
    document.querySelector(".detailContent1").style.display = 'none';
document.querySelector(".detailContent2").style.display = 'none';
document.querySelector(".detailContent3").style.display = 'block';
document.getElementById('one').style.backgroundColor = 'black';
document.getElementById('two').style.backgroundColor = 'black';
document.getElementById('three').style.backgroundColor = 'red';
}