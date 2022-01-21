var spicys = document.getElementsByClassName("spicy");
for (var i = 0; i < spicys.length; i++)
{
    var spicy = spicys.item(i).innerHTML[0];
    spicyColor = "rgb(255, "+64*(5-spicy)+", 0)";
    spicys.item(i).style.color = spicyColor;
}

var levels = document.getElementsByClassName("level");
for (var i = 0; i < levels.length; i++)
{
    var level = levels.item(i).innerHTML[2]
    levelColor = "rgb(255, "+64*(5-level)+", 0)";
    levels.item(i).style.color = levelColor;
}