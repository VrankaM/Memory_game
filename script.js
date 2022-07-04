var container;
container = ['images/html.webp', 'images/html.webp', 'images/css.png', 'images/css.png', 'images/js.webp', 'images/js.webp'
, 'images/react.png', 'images/react.png', 'images/angular.png', 'images/angular.png', 'images/vue.png', 'images/vue.png'
, 'images/python.png', 'images/python.png', 'images/php.png', 'images/php.png', 'images/debian.png', 'images/debian.png'];

var order;
order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

var selected;
selected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var output = document.getElementById('output');

var ShuffleButton = document.getElementById('shuffle');

var items = document.getElementsByTagName('img');

var counter = 0;
var loser = 0;

var first = ' ';
var second = ' ';

var img1;
var img2;

var index1;
var index2;

var score = 109;

function shuffle(array){
    counter = 0;
    loser = 0;
    score = 109;
    selected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    first = ' ';
    second = ' ';

    img1 = null;
    img2 = null;

    output.innerHTML = ' ';
    for(let i = 0; i < 18; i++)
    {
        let a = array[i];
        let b = Math.floor((Math.random() * 18) + 0);
        let c = array[b];
        array[i] = c;
        array[b] = a; 

    }
    for(let i = 0; i < 18; i++)
    {
        items[i].setAttribute('src','images/stock.png');  
    }
}

function showPicture(a){
    let b;
    if (loser == 1)
    {
        img1.setAttribute('src','images/stock.png');
        img2.setAttribute('src','images/stock.png');
        loser = 0;
    }
    for(let i = 0; i < 18; i++)
    {
        if (order[i] == a)
        {
            b = i;
        }
    }
    items[a].setAttribute('src',container[b]);
}

function youWon(){

    window.alert('You won! Score: ' + score);
    shuffle(order);
}

function two(a){
    if ( first == ' ')
    {
        index1 = a;
        if ( selected[index1] == 1 )
        {
            window.alert('Wrong move');
        }
        else
        {
            img1 = items[a];
            first = items[a].getAttribute('src');
            output.innerHTML = first;
        }
        
    }
    else if ( second == ' ')
    {
        score--;
        if (score < 0)
        {
            index1 = 0;
            index2 = 0;
            first = ' ';
            second = ' ';
            selected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            img1 = null;
            img2 = null;
            shuffle(order);
        }
        index2 = a;
        if ( (selected[index2] == 1 ) || index1 == index2)
        {
            window.alert('wrong move');
            img1.setAttribute('src','images/stock.png');
            img1 = null;
            first = ' ';
        }
        else
        {
            img2 = items[a];
            second = items[a].getAttribute('src');
            output.innerHTML = second;
            if (img1.getAttribute('src') == img2.getAttribute('src'))
            {
                img1 = null;
                img2 = null;
                selected[index1] = 1;
                selected[index2] = 1;
                counter++;
                if(counter == 9)
                {
                    index1 = 0;
                    index2 = 0;
                    first = ' ';
                    second = ' ';
                    youWon();
                }
            }
            else
            {
                loser = 1;
                index1 = 0;
                index2 = 0;
            }
            first = ' ';
            second = ' ';
        }
    }
}

ShuffleButton.addEventListener('click', function(){
    shuffle(order);
}, false);

let tiles = document.querySelectorAll("img");

for(let i=0; i<18; i++){
    tiles[i].addEventListener("click", function(){
        showPicture(i);
    });
    tiles[i].addEventListener("click", function(){
        two(i);
    });
}

shuffle(order);