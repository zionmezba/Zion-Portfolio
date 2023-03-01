document.getElementById('change1').addEventListener('onclick', function(){
    document.getElementById('change1').style.color = 'red';
    document.getElementById('change1').style.fontWeight = 800;
    document.getElementById('change2').style.color = 'white';
    document.getElementById('change3').style.color = 'white';
    document.getElementById('change4').style.color = 'white';
})
document.getElementById('change2').addEventListener('onclick', function(){
    document.getElementById('change2').style.color = 'red';
    document.getElementById('change2').style.fontWeight = 800;
    document.getElementById('change1').style.color = 'white';
    document.getElementById('change3').style.color = 'white';
    document.getElementById('change4').style.color = 'white';
})
document.getElementById('change3').addEventListener('click', function(){
    document.getElementById('change3').style.color = 'red';
    document.getElementById('change3').style.fontWeight = 800;
    document.getElementById('change1').style.color = 'white';
    document.getElementById('change2').style.color = 'white';
    document.getElementById('change4').style.color = 'white';
})
