let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, lightsources, trees = [],c;
window.onload = function(){
  scene = document.querySelector("a-scene"); 
  lightsources= document.getElementById("lightsources");
  sun = document.getElementById("sun");
  moon = document.getElementById("moon");
  mainCamera = document.getElementById("mainCamera");
  
  

	let s = new Sidewalk();
	c = new Car(0, 2, 0);
	
	window.addEventListener("keydown",function(e){
		
		 if(e.key == "e"){
			 console.log(e.key)
			 mainCamera.setAttribute("active",true);
			 c.camera.setAttribute("active",false);
			 mainCamera.object3D.position.x = c.camera.object3D.position.x;
			 mainCamera.object3D.position.z = c.camera.object3D.position.z;
		 }
	  })
	

	loop();
}
function loop(){
	console.log(lightsources.object3D.rotation.y);
	//c.move();
	lightsources.object3D.rotation.z += 0.002;
	window.requestAnimationFrame(loop);

}