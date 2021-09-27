player_1 = localStorage.getItem("player_1_name");
player_2 = localStorage.getItem("player_2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player_1 + ":";
document.getElementById("player2_name").innerHTML = player_2 + ":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_qution").innerHTML = "question Trun -" + player_1;
document.getElementById("player_answer").innerHTML = "Answer Trun - " + player_2;


function send()
{
    number_1 = document.getElementById("number_1").value;
    number_2 = document.getElementById("number_2").value;
    actul_answer = parseInt(number_1) * parseInt(number_2);

    question_h4 = "<h4>" + number_1 + "x" +number_2 + "</h4>";
    input_box = "<br>Answer :<input type='text' id='answer_input'>";
    button_box = "<br><button id='check_button' class='check()'>SEND</button>";
    row = question_h4 + input_box + button_box;
    document.getElementById("output").innerHTML = row;

}
question_trun = "player_1";
answer_trun = "player_2";

function check()
{
    get_answer = document.getElementById("answer_input").value;
    console.log(get_answer);
    if(actul_answer == get_answer)
    {
        if(answer_trun == "player_1")
        {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML  = player1_score;
        }
        else
        {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player1_score;
        }

        if(question_trun == "player_1")
        {
            question_trun = "player_2";
            document.getElementById("player_qution").innerHTML = "Question Trun -" + player_2;
        }
        else
        {
           question_trun = "player_1";
           document.getElementById("player_qution").innerHTML = "Question Trun -" + player_1;
        }

        if(answer_trun == "player_1")
        {
            answer_trun = "player_2";
            document.getElementById("player_answer").innerHTML = "answer Trun -" + player_2;
        }
        else
        {
           answer_trun = "player_1";
           document.getElementById("player_answer").innerHTML = "answer Trun -" + player_1;
        }
    }
    document.getElementById("output").innerHTML = " ";
}

