function adduser()
{
    player_1 = document.getElementById("player1_name").value;
    player_2 = document.getElementById("player2_name").value;

    localStorage.setItem("player_1_name" , player_1);
    localStorage.setItem("player_2_name" , player_2);

    window.location = "game_screen.html";
}