
      //Selecting Elements
      var inputBox=document.getElementById("inputBox")
      var result=document.getElementById("result")
      var Guesscount =document.getElementById("Guesscount")
      var noofguess = 3
      
      
      //Generate Ramndom Number from 1 to 5
      var randomnumber=Math.floor(Math.random()*10+1)//1 to 10
      if(randomnumber>5)
      {
          randomnumber=randomnumber-5
      }
      
      
      //Event Headler Function
      function checkthenumber()
      {
          if(inputBox.value ==randomnumber)
          {
              alert("You Go it Right, congratulation")
              result.textContent="You are Right"
          }
          else{
              noofguess=noofguess-1
              if(noofguess==0)
              {
                  alert("You Lost,Generated Random Number is:"+randomnumber)
              }
              Guesscount.textContent="Available guesses:"+noofguess
              result.textContent="You are Wrong !"
          }
      }
      
      
      
            
      