AFRAME.registerComponent("hitbox",{
    schema:{
        elementCollider:{type: "string", default: "#coin1"}
    },
    update: function(){
        this.collider(this.data.elementCollider)
    },
    collider: function(elementCollider){
        const elementDesider = document.querySelector(elementCollider)
        elementDesider.addEventListener("collide", (e)=>{
            if (elementCollider.includes("#fish")){
                console.log("Colisionó con fish")
                
            } else if(elementCollider.includes("#coin")){
                console.log("Colisionó con coin")
            }
        })
    }


})
