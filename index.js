var text=new Text("john",120,120).setColor(Renderer.color(100,75,200))
var circle=new Shape(Renderer.color(200,100,50)).setCircle(140,150,60,360)
function exampleWorldLoad() {
ChatLib.chat('lol');
}
function renderoverlay(){
	Renderer.drawString("bob the builder",100,100)
	text.draw()
	circle.draw()
}
register("renderOverlay", renderoverlay)
register("worldLoad", exampleWorldLoad);