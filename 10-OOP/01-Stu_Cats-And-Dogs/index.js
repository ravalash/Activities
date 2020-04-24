const dog = {raining:true,
            noise:"Woof!",
            makeNoise:function(){
                if(this.raining===true){
                    console.log(this.noise);
                }
            }}

const cat = {raining: false,
            noise:"Meow!",
            makeNoise:function(){
            if(this.raining===true){
                console.log(this.noise);
                }
            }}


function massHysteria(){
    console.log(dog.raining===true && cat.raining===true ? "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!" : "" );   
}

cat.raining=true;
massHysteria();

