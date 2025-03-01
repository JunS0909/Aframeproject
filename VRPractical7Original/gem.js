class Gem{
  constructor(x,y,z){
    this.y = y;
    this.dy = 0.01;
    this.a = 0;
    this.da = 0.01;

    this.obj = document.createElement("a-dodecahedron");
    this.obj.setAttribute("interact","");
    this.obj.setAttribute("color","aqua");
    this.obj.setAttribute("opacity",0.75);
    this.obj.setAttribute("scale","0.25 0.5 0.25");
    this.obj.setAttribute("position",{x:x,y:this.y,z:z});
    /* Challenge 5
       When you click on the gem, collect it.  
       Hint: Look further down in the class

    */
  
    scene.append(this.obj);    
  }
  float(){
    this.y += this.dy;
    this.a += this.da;
    /* Challenge 6 
       Update the object y position and y rotation to the values above
    */

    if(this.y < 0.75 || this.y > 1.25){
      this.dy = -this.dy;
    } 
  }
  collect(){
    gems_collected++;
    this.obj.setAttribute("opacity",0)
  }
}