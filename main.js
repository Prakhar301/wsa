var login=false;
var login_m=false;
function loginer(){
    document.getElementById("ghu").innerHTML="<center><span><img src='https://res.cloudinary.com/ambp/image/upload/v1646720477/icon/alert.jpg' style='width:30px;'></span><span style='color:maroon; font-weight'>This is a warning</span></center>" 
    document.getElementById("info").innerHTML="";
    document.getElementById("gghu").innerHTML="";
    document.getElementById("ghu").innerHTML="";
    var sp=document.getElementById("inputer").value;
    var un=document.getElementById("names").value;
    console.log(sp);
    console.log(un);
    var secret=localStorage.getItem("password");    
    console.log(secret);
    login=false;
    console.log(login);
    login_m=false;
    console.log(login_m);
    if(secret!=null){
        if(secret!=sp){
            document.getElementById("ghu").innerHTML="<center><span><img src='https://res.cloudinary.com/ambp/image/upload/v1646720477/icon/alert.jpg' style='width:30px;'></span><span style='color:maroon; font-weight'>Enter the correct secret password. </span></center>"
        }
        else{
            login=true;
            console.log(login);
        }
    }
    else{
        if(sp!=""){
        localStorage.setItem("password",sp);
        login=true;
        }
        else{
            document.getElementById("ghu").innerHTML="<center><span><img src='https://res.cloudinary.com/ambp/image/upload/v1646720477/icon/alert.jpg' style='width:30px;'></span><span style='color:maroon; font-weight'>Type the secret password. </span></center>"
        }
    }
    var secreted=localStorage.getItem("username");    
    console.log(secreted);
    if(secreted!=null){
        if(secreted!=un){
            document.getElementById("ghu").innerHTML="<center><span><img src='https://res.cloudinary.com/ambp/image/upload/v1646720477/icon/alert.jpg' style='width:30px;'></span><span style='color:maroon; font-weight'>Enter the correct username. </span></center>"
        }
        else{
            login_m=true;
            console.log(login); 
        }
    }
    else{
        if(un!=""){
            localStorage.setItem("username", un);
        login_m=true
        }
    }
    if(login!=false && login_m!=false ){
        document.getElementById("info").innerHTML="You have successfully logged in";    
        document. getElementById('info'). style. backgroundColor = 'rgb(255,175,85)' ;
        document.getElementById("dwsa").innerHTML="Logged in with<br>Username:"+un+"<br>Password:"+sp;
    }   
    secret="";
    secreted="";
}
function logout(){
    document.getElementById("dwsa").innerHTML='<a data-target="#log" data-toggle="modal" >Login</a>';
}