function vidi()
{
    
    var a=document.getElementById("us").value;
    var b=document.getElementById("pa").value;
    var c=a.toUpperCase();
    var d=b.toUpperCase();
    var e=c.concat("@");
    if(c=="SUJJEETH")
    {
        if(d==e)
        {
            document.getElementById("disp").innerHTML+='<br><button onclick="for()" name="sub" type="button" class="btn btn-outline-primary">Change Password</button><div class="input-group mb-3">
                <input type="text" id="us" class="form-control" placeholder="User Name" aria-label="Recipient's username" aria-describedby="button-addon2">
            </div>';
            document.getElementById("disp").innerHTML='<img  src="sujjeeth.jpg" width="302.4" height="403.2">';
            document.getElementById("disp").innerHTML+='<img  src="IMG_0301.jpg" width="302.4" height="403.2">';
            document.getElementById("disp").innerHTML+='<img  src="IMG_0300.jpg" width="302.4" height="403.2">';
            document.getElementById("disp").innerHTML+='<img  src="IMG_0299.jpg" width="302.4" height="403.2">';
            document.getElementById("disp").innerHTML+='<img  src="IMG_0294.jpg" width="302.4" height="403.2">';
            document.getElementById("disp").innerHTML+='<img  src="IMG_0295.jpg" width="302.4" height="403.2">';
        }
        else{
            alert("The entered password is wrong");
        }
    }
    else if(c=="SRI VIGNESH")
        {
            if(d==e)
            {
                document.getElementById("disp").innerHTML+='<br><button onclick="for()" name="sub" type="button" class="btn btn-outline-primary">Change Password</button>';
                document.getElementById("disp").innerHTML='<img src="IMG_0286.jpg" width="403.2" height="302.4" alt="Success Image">';
                document.getElementById("disp").innerHTML +='<img src="abc.jpg" width="320" height="426.6667" alt="Success Image">';
                document.getElementById("disp").innerHTML +='<img src="abcd.jpg" width="320" height="426.6667" alt="Success Image">';
            }
            else{
                alert("The entered password is wrong");
            }
        }
    else if(c=="THANEESH")
        {
            if(d==e)
            {
                document.getElementById("disp").innerHTML+='<br><button onclick="for()" name="sub" type="button" class="btn btn-outline-primary">Change Password</button>';
                document.getElementById("disp").innerHTML+='<img src="sri.jpg" width="403.2" height="302.4" alt="Success Image">';
            }
            else{
                alert("The entered password is wrong");
            }
        }
        else if(c=="SRIDHAR")
            {
                if(d==e)
                {
                    document.getElementById("disp").innerHTML+='<br><button onclick="for()" name="sub" type="button" class="btn btn-outline-primary">Change Password</button>';
                    document.getElementById("disp").innerHTML+='<img src="sri.jpg" width="403.2" height="302.4" alt="Success Image">';
                }
                else{
                    alert("The entered password is wrong.");
                }
            }
    else{
        alert("The entered username is wrong.");
    }
}
function log()
{
    location.reload();
}