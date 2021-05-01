player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn -"+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn -"+player2_name;

function send()
{
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("Word in Lower Case =" + word);
    document.getElementById("result").innerHTML="";
    charAT1=word.charAt(1);
    console.log(charAT1);

    length_divide_2=Math.floor(word.length/2);
    charAT2=word.charAt(length_divide_2);
    console.log(charAT2);

    length_minus_1=word.length-1;
    charAT3=word.charAt(length_minus_1);
    console.log(charAT3);

    remove_charAt1=word.replace(charAT1,"_");
    remove_charAt2=remove_charAt1.replace(charAT2,"_");
    remove_charAt3=remove_charAt2.replace(charAT3,"_");
    console.log(remove_charAt3);

    question_word="<h4 id='word_display'> Q."+remove_charAt3+"</h4>";
    input_box="<br>Answer: <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info'onclick='check()'>Check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

question_turn="player1";
answer_turn="player2";

function check()
{
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();
    console.log("answer in lower case"+ answer);
    if (answer==word) 
    {
      document.getElementById("result").innerHTML="Correct Answer";
     if (answer_turn=="player1")
      {
       player1_score=player1_score+10;
       document.getElementById("player1_score") .innerHTML=player1_score;  
     } 
     else 
     {
        player2_score=player2_score+10;
        document.getElementById("player2_score") .innerHTML=player2_score;    
     }   
    }
    else
    {
      document.getElementById("result").innerHTML="Wrong Answer";
    }
    if (question_turn=="player1")
     {
       question_turn="player2" 
       document.getElementById("player_question").innerHTML="Question Turn -" + player2_name;
    }
     else 
     {
        question_turn="player1" 
        document.getElementById("player_question").innerHTML="Question Turn -" + player1_name; 
    }
    if (answer_turn=="player1")
     {
       answer_turn="player2" 
       document.getElementById("player_answer").innerHTML="Answer Turn -" + player2_name;
    }
     else 
     {
        answer_turn="player1" 
        document.getElementById("player_answer").innerHTML="Answer Turn -" + player1_name; 
    }
    document.getElementById("output").innerHTML="";
}