function encodeImageFileAsURL(element){
    var file = element.files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
        console.log('RESULT', reader.result)
        
        sndImg = reader.result;

        opt = {
            url:'http://127.0.0.1:5000//skinCancer',
            method:'post',
            data:{
                image:sndImg
            }
        }

        axios(opt)
        .then(function(data_res){
        var y = Object.keys(data_res.data)[0];
        
        console.log(y);
        if(y==="id"){
            let o = data_res.data.id;
            test(o); 
        
          }else if(y==="no"){
            let t = data_res.data.no;
            var cc = document.getElementById('txt');
            cc.innerHTML = t + "   You are not injured";
            cc.style.color = 'blue';
          }
            if(data_res.status == 201){
                console.log('DONE');
            }
            function test(i){
                
                console.log(i);
                console.log();
                var cc = document.getElementById('txt');
                cc.innerHTML = i + "  you are injury";
                cc.style.color = 'red';
            }        
        })
        .catch(function(ex){
            console.log(ex);
        })
    


    }

    if (file) {
        reader.readAsDataURL(file);
    }
    
}
const defultbtn = document.querySelector("#defultbtn")
const custombtn = document.querySelector("#custombtn")
function defultBtnActive(){
    defultbtn.click();
}