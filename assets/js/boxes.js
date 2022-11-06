let color = 'blue';
document.addEventListener('keydown', function(t){

    if(t.key === 'a'){
        color = 'green';
    } else if(t.key === 's'){
        color = 'orange';
    } else if(t.key === 'd'){
        color = 'red';a
    } else{
        color = 'black';
    }
});

const c1 = document.getElementById('box1')
const c2 = document.getElementById('box2')
const c3 = document.getElementById('box3')
const c4 = document.getElementById('box4')

c1.addEventListener('click', () => c1.style.backgroundColor = color)
c2.addEventListener('click', () => c2.style.backgroundColor = color)
c3.addEventListener('click', () => c3.style.backgroundColor = color)
c4.addEventListener('click', () => c4.style.backgroundColor = color)