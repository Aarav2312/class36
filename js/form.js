class Form{
    constructor(){
    this.input=createInput("name")
    this.button=createButton("play")
    this.gretting=createElement("h3")
    }
    hide(){
       this.input.hide()
        this.button.hide()
        this.gretting.hide()
    }
display(){
    var title=createElement("h2")
    title.html("car racing game")
    title.position(130,0)
    this.input.position(130,160)
    this.button.position(250,200)
    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        player.name=this.input.value()
        playerCount=playerCount+1
        player.index=playerCount
        player.update(name)
        player.updateCount(playerCount)
        this.gretting.html("hello "+player.name)
        this.gretting.position(130,160)
    });
}
}