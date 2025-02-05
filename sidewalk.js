
class Sidewalk{
	constructor(){
	console.log("1");
	this.obj = document.createElement("a-box");
	this.obj.setAttribute("static-body",);
	this.obj.setAttribute("position",{x:0, y:-4.95, z:0});
	this.obj.setAttribute("rotation",{x:-90, y:0, z:0});
	this.obj.setAttribute("width",200);
	this.obj.setAttribute("height",200);
	this.obj.setAttribute("color","green");
	scene.append( this.obj );
	
	this.obj = document.createElement("a-box");
	this.obj.setAttribute("static-body",);
	this.obj.setAttribute("position",{x:115, y:-4.95, z:0});
	this.obj.setAttribute("rotation",{x:-90, y:0, z:0});
	this.obj.setAttribute("width",30);
	this.obj.setAttribute("height",260);
	this.obj.setAttribute("color","grey");
	scene.append( this.obj );
	
	this.obj = document.createElement("a-box");
	this.obj.setAttribute("static-body",);
	this.obj.setAttribute("position",{x:0, y:-4.95, z:115});
	this.obj.setAttribute("rotation",{x:-90, y:0, z:90});
	this.obj.setAttribute("width",30);
	this.obj.setAttribute("height",260);
	this.obj.setAttribute("color","grey");
	scene.append( this.obj );
	
	this.obj = document.createElement("a-box");
	this.obj.setAttribute("static-body",);
	this.obj.setAttribute("position",{x:-115, y:-4.95, z:0});
	this.obj.setAttribute("rotation",{x:-90, y:0, z:0});
	this.obj.setAttribute("width",30);
	this.obj.setAttribute("height",260);
	this.obj.setAttribute("color","grey");
	scene.append( this.obj );
	
	this.obj = document.createElement("a-box");
	this.obj.setAttribute("static-body",);
	this.obj.setAttribute("position",{x:0, y:-4.95, z:-115});
	this.obj.setAttribute("rotation",{x:-90, y:0, z:90});
	this.obj.setAttribute("width",30);
	this.obj.setAttribute("height",260);
	this.obj.setAttribute("color","grey");
	scene.append( this.obj );
	}
}


