window.onload = function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    //Lets make the canvas occupy the full page 
    var W = window.innerWidth, H = window.innerHeight; 
    canvas.width = W;
    canvas.height = H;

    //Lets fill the canvas black 
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, W, H);

    //Lets make some particles 
    var particles = [];
    for(var i = 0; i < 40; i++){
        particles.push(new particles());
    }

    function particle(){
        //location on the canvas 
        this.location = {x: Math.random()*W., y:Math.random()*H};
        //radius 
        this.radius = 3;
        //speed 
        this.speed = 3;
        //steering angle in degrees range = -360 to 360
        this.angle = Math.random()*360;
    }

    //Lets draw the particles 
    function draw(){
        for(var i = 0; i < particles.length; i++){
            var p = particles[i];
            ctx.fillStyle = "white";
            ctx.fillRect(p.location.x, p.location.y, p.radius, p.radius);

            //Lets move the particles 
            //a random angle for the particle to steer to 
            var req_angle = Math.random()*360;
            if(req_angle > p.angle) {
                p.angle
            }
        }
    }

    setInterval(draw, 30);
}