let btnLeft = document.querySelector('#left')
    btnRight = document.querySelector('#right')
    img = document.querySelectorAll('.slide-container img')


    current_img = 0;

    btnRight.addEventListener('click', function(){

        img[current_img].id = ''

        if(current_img < img.length-1) current_img++;
        else current_img = 0;

        img[current_img].id = 'active'

    })

    btnLeft.addEventListener('click', function(){

        img[current_img].id = ''

        if(current_img != 0) current_img--;
        else current_img = img.length-1

        img[current_img].id = 'active'

    })