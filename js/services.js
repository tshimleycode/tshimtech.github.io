
let menus = document.querySelectorAll('.menu1');
console.log(menus)
let i = 1;
let selction = 1;
for(let men of menus){
    console.log(men);
    if(i == 1){
        document.addEventListener('click', function(){
            if(selction == 1){
                document.querySelector('.maintenance').style.display = 'block';
                selction = 0;
            }else{
                document.querySelector('.maintenance').style.display = 'none';
                selction = 1;
            }
        })
    }
    i += 1;
}