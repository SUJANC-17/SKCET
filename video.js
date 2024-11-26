function vidi()
{
    var a=document.getElementById("us").value;
    var b=document.getElementById("pa").value;
    var c=a.toUpperCase();
    var d=b.toUpperCase();
    if(c=="SUJJEETH")
    {
        if(d=="SUJJEETH@")
        {
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
            if(d=="SRI VIGNESH@")
            {
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
            if(d=="THANEESH@")
            {
                document.getElementById("disp").innerHTML+='<img src="sri.jpg" width="403.2" height="302.4" alt="Success Image">';
            }
            else{
                alert("The entered password is wrong");
            }
        }
        else if(c=="SRIDHAR")
            {
                if(d=="SRIDHAR@")
                {
                    document.getElementById("disp").innerHTML+='<img src="tha.jpg" width="403.2" height="302.4" alt="Success Image">';
                }
                else{
                    alert("The entered password is wrong");
                }
            }
    else{
        alert("The entered username is wrong");
    }
}