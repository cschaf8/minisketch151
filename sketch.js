function setup() {
    a = windowWidth;
    b = windowHeight;
    
    createCanvas(a, b);
  }

  r = 153;

  function draw() {
    a = windowWidth;
    b = windowHeight;

    background(255);
    strokeWeight(0);

    fill(220);
    rect(0,0,a/2,b/2);

    fill(100);
    rect(a/2,b/2,a/2,b/2);

    fill(180);
    rect(a/2,0,a/2,b/2);

    fill(140);
    rect(0,b/2,a/2,b/2);

    //r = 153;
    // g = 187;
    // countUp = true;
    // if(countUp)
    // {
    //   ++r;
    //   if(r > 215)
    //   {
    //     console.log("false");
    //     countUp = false;
    //   }

    // }
    // if(countUp == false)
    // {
    //   --r;
    //   console.log("minus");
    //   if(r < 152)
    //   {
    //     countUp = true;
    //   }
    // }
    

    console.log(r);
    fill(r,187,255);

    //fill(153, 187, 255);
    rect(0,b/2,a/16,b/2);
    rect((2*a)/16,b/2,a/16,b/2);
    rect((4*a)/16,b/2,a/16,b/2);
    rect((6*a)/16,b/2,a/16,b/2);

    rect((9*a)/16,0,a/16,b/2);
    rect((11*a)/16,0,a/16,b/2);
    rect((13*a)/16,0,a/16,b/2);
    rect((15*a)/16,0,a/16,b/2);

    fill(216, 153, 255);
    rect(a/2,(9*b)/16,a/2,b/16);
    rect(a/2,(11*b)/16,a/2,b/16);
    rect(a/2,(13*b)/16,a/2,b/16);
    rect(a/2,(15*b)/16,a/2,b/16);

    rect(0,0,a/2,b/16);
    rect(0,(2*b)/16,a/2,b/16);
    rect(0,(4*b)/16,a/2,b/16);
    rect(0,(6*b)/16,a/2,b/16);

    //strokeWeight(1);
    //strokeCap(SQUARE);
    fill(216, 153, 255);
    rect((6*a)/16,(6*b)/16,a/8,b/4);
    rect((8*a)/16,(8*b)/16,a/8,b/8);
    fill(153, 187, 255);
    rect((6*a)/16,(8*b)/16,a/8,b/8);
    rect((8*a)/16,(6*b)/16,a/8,b/8);

    fill(220);
    stroke(220);
    strokeWeight(1);
    triangle((6*a)/16,(6*b)/16,(6*a)/16, (8*b)/16, (8*a)/16, (6*b)/16);

    fill(180);
    stroke(180);
    strokeWeight(1);
    triangle((8*a)/16,(6*b)/16,(10*a)/16, (6*b)/16, (10*a)/16, (8*b)/16);

    fill(140);
    stroke(140);
    strokeWeight(1);
    triangle((6*a)/16,(10*b)/16,(6*a)/16, (8*b)/16, (8*a)/16, (10*b)/16);

    fill(100);
    stroke(100);
    strokeWeight(1);
    triangle((10*a)/16,(10*b)/16,(8*a)/16, (10*b)/16, (10*a)/16, (8*b)/16);

    

    // fill(153, 187, 255);
    // strokeWeight(1);
    // circle(x,150,70);
    
    // fill(216, 153, 255);
    // strokeWeight(0);
    // circle((a/3),y,45);
    // circle((a/3)+25,y,45);

    // x = x + 1;
    // y = y + 1;
    // if(x > a+50) 
    // {
    //   x = 0;
    // }
    
    // if(y > b+50) 
    // {
    //   y = 0;
    // }
   // console.log(x);
    
  }