function Movable(el){

this.cord={};

this.moving=false;

this.getMousePosition=(event)=>{

this.cord.x =event.clientX; 

this.cord.y = event.clientY; 

};

this.init=()=>{

    setTimeout(()=>{

    this.id=document.getElementById(el);

    this.sizeX=this.id.clientWidth;

    this.sizeY=this.id.clientHeight;

    this.id.style.width=this.size+"px";

    this.id.style.height=this.size+"px";

    this.id.style.top=this.id.offsetTop+"px";

    this.id.style.left=this.id.offsetLeft+"px";

    this.id.style.position="absolute";

    this.id.style.touchAction="none";

    this.id.style.cursor="move";

        this.id.addEventListener("touchstart",(event)=>{

            var x,y;

    x = event.touches[0].clientX;

    y = event.touches[0].clientY;

    

    this.id.style.top=y-this.sizeY/2+"px";

    this.id.style.left=x-this.sizeX/2+"px";

        });

        this.id.addEventListener("touchmove",(event)=>{

            var x,y;

    x = event.touches[0].clientX;

    y = event.touches[0].clientY;

    

    this.id.style.top=y-this.sizeY/2+"px";

    this.id.style.left=x-this.sizeX/2+"px";

        });

             

    this.id.addEventListener("mousemove",(event)=>{

        if(!this.moving) return;

        if(this.moving){

        this.getMousePosition(event);

        this.id.style.top=this.cord.y-this.sizeY/2+"px";

        this.id.style.left=this.cord.x-this.sizeX/2+"px";

        }

    });

    this.id.addEventListener("mousedown",(event)=>{

        this.moving=true;

        this.getMousePosition(event);

    });

    this.id.addEventListener("mouseup",(event)=>{

        this.moving=false;

    });

        },5);

        };

    this.unInit=()=>{

        this.id.style.position="static";

    };

}
