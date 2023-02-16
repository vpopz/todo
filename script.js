var un = document.getElementById('username');
var user = /^(admin)$/g;

var pw = document.getElementById('password')
var pass = /^(12345)$/g;


function userName(){
    if(!un.value.match(user)){
        return false;
    }else{
        return true;
    }
}

function passWord(){
    if(!pw.value.match(pass)){
        return false;
    }else{
        return true;
    }
} 

function validation(){
    if(!userName() || !passWord()){
        return false;
    }else{
        return true;
    }
}