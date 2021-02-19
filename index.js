var text=new Text("john",120,120).setColor(Renderer.color(100,75,200))
var clickmessage=new Message(
	"this is not clickable",
	new TextComponent("this is clickable").setClick(
		"run_command",
		"/gamemode 1"),
	"!")
var hovermessage=new TextComponent("hover over me").setHoverValue("u see me now")
var circle=new Shape(Renderer.color(200,100,50)).setCircle(140,150,60,360)
function exampleWorldLoad() {
	console.log("yellow")
ChatLib.chat('lol');
}
function renderoverlay(){
	Renderer.drawString("bob the builder",100,100)
	text.draw()
	circle.draw()
}
//register("renderOverlay", renderoverlay)
register("worldLoad", exampleWorldLoad);
ChatLib.chat(clickmessage)
ChatLib.chat(hovermessage)
function onChatReceived(text,event){
	var message=ChatLib.getChatMessage(event)
	console.log(message)
}
register("messageSent",onChatReceived)