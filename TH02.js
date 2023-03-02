const fn_check=()=>
        {
            let kp="";
            let a=check.tuoi.value;
            a=parseInt(a);
            if(a>=22)
            {
                alert("Độ tuổi chịu hình sự")
            }
            else{
                alert("Độ tuổi quậy phá")
            }
        }
function check(){
    var username = document.getElementById("ten").value
    var age=document.getElementById("tuoi").value

    console.log(username,age);
}