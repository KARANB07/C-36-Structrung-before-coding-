class Form{
    constructor(){


    }
    display(){
        var title=createElement('h2')
        title.html("Car Racing")
        title.position(130,0);
        
        var input=createInput("Name")
        var button=createButton('Play')
        var greeting=createElement('h3')

        input.position(400,200);
        button.position(460,300);
        button.mousePressed(function(){
           
            button.hide();
            input.hide();
            //greeting.hide();s
            var name=input.val();

            playerCount=playerCount+1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello" +name);
            greeting.position(130,160);
        })
}
}