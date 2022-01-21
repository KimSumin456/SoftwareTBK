function showSpicyColor()
{
    var spicys = document.getElementsByClassName("spicy");
    for (var i = 0; i < spicys.length; i++)
    {
        var spicy = spicys.item(i).innerText[1];
        spicyColor = "rgb(255, "+64*(5-spicy)+", 0)";
        spicys.item(i).style.color = spicyColor;
    }
}

var menuBoard =
{
    totalSpicy: 0,

    selectedMenu: {},

    onSelectMenu: function(self) {
        if (self.checked)
        {
            this.selectedMenu[self.value] = self.nextElementSibling.innerText + self.nextElementSibling.nextElementSibling.innerText + " ";
        }
        else
        {
            delete this.selectedMenu[self.value];
        }
        
        var selectedMenuString = "";
        for (var key in this.selectedMenu)
        {
            selectedMenuString += this.selectedMenu[key];
        }
        document.getElementById("selectedMenu").innerText = selectedMenuString;
        
        console.log(this.selectedMenu);
    }
}