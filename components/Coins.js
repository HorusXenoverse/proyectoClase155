AFRAME.registerComponent("coin",{
    init: function(){
        for(var i = 1; i <= 10; i++ ){
            var id = `coin${i}`

            var posX = Math.floor(Math.random() *100 + -50)
            var posY =  Math.floor(Math.random()*5 +5)
            var posZ = Math.floor(Math.random()*60 + -40)

            var position = { x: posX, y: posY, z: posZ }
            this.createCoins(id, position)
        }
    },
    createCoins: function(id, position){
        var treasureEntity = document.querySelector("#island")
        var coinEL = document.createElement("a-entity")

        coinEL.setAttribute("id", id)
        coinEL.setAttribute("position", position)
        coinEL.setAttribute("material", "color", "#ff9100")
        //coinEL.setAttribute("scale", {x: 0.22, y: 0.22, z: 0.22})
        //coinEL.setAttribute("gltf-model", ".models/cthulhu_coin_hw10/scene.gltf")
        coinEL.setAttribute("static-body", {shape: "sphere", sphereRadius: 2})
        coinEL.setAttribute("hitbox", {elementCollider: `#${id}`})

        coinEL.setAttribute("animation",{
            property: "rotation",
            to: "0 360 0",
            loop: "true",
            dur: 1000
        })
        treasureEntity.appendChild(coinEL)
    }


})