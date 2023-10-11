 var min = 1;
 var max = 6;
 var randomnum = Math.floor(Math.random()*(max + min -1))+min;
 var randomnum2 = Math.floor(Math.random()*(max + min -1))+min;
 
 console.log(randomnum);
function random()
{
    var a = document.getElementById("image1");
    var store;
    for(let i=0;i<6;i++)
    {
        if(randomnum == 1)
        {
            a.src="images/dice1.png"
        }
        if(randomnum == 2)
        {
            a.src="images/dice2.png"
        }
        if(randomnum == 3)
        {
            a.src = "images/dice3.png"
        }
        if(randomnum == 4)
        {
            a.src = "images/dice4.png"
        }
        if(randomnum == 5)
        {
            a.src = "images/dice5.png"
        }
        if(randomnum == 6)
        {
            a.src = "images/dice6.png"
        }
    }
    var b = document.getElementById("image2");
   
    for(let i=0;i<6;i++)
    {
        if(randomnum2 == 1)
        {
            b.src="images/dice1.png"
        }
        if(randomnum2 == 2)
        {
            b.src="images/dice2.png"
        }
        if(randomnum2 == 3)
        {
            b.src = "images/dice3.png"
        }
        if(randomnum2 == 4)
        {
            b.src = "images/dice4.png"
        }
        if(randomnum2 == 5)
        {
            b.src = "images/dice5.png"
        }
        if(randomnum2 == 6)
        {
            b.src = "images/dice6.png"
        }
    }
    var head = document.getElementById("heading");
    if(randomnum > randomnum2)
    {
        
        head.textContent = "player1 wins!";
    }
    if(randomnum < randomnum2)
    {
        head.textContent= "player2 wins!";
    }
    if(randomnum == randomnum2)
    {
        head.textContent = "draw!";
    }

}

