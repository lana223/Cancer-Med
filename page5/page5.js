function previewFile() {
    const op1 = document.getElementById('op1').value;
    const op2 = document.getElementById('op2').value;
    const op3 = document.getElementById('op3').value;
    const op4 = document.getElementById('op4').value;
    const op5 = document.getElementById('op5').value;


        opt = {
            url:'http://127.0.0.1:5000/BreastCancerU',
            method:'post',
            data:{

                opt1:op1,
                opt2:op2,
                opt3:op3,
                opt4:op4,
                opt5:op5
            }
        }

        axios(opt)
        .then(function(data_res){
          var y = data_res.data.id;
          
            console.log(data_res.data.id);
            var cc = document.getElementById('txtarea');
            cc.innerHTML = y + "  Sorry you are injured";
            cc.style.color = 'black';
            if(data_res.status == 201){
                console.log('DONE');
            }
        })
        .catch(function(ex){
            console.log(ex);
        })
    



}