var hr = 0 ; // initialise krdiya hr. ko min. ko sec. ko
var min = 0;
var sec = 0; 
var count = 0; // ye vo hai jo sec ki 100 tk counting karega 

// ye variable decide krega ki time chal rha hai ya ruk gya hai that is timer.
var timer = false ; // false denote krega ki time ruka hua hai aur jb jb true ho jayga to mtlb time chl gya hai 

function start(){
    timer = true ; // timer true ho gya to function call kra diya that is stopwatch 
    stopwatch() ; 

}
function stop(){
    timer = false ;

}
function reset(){
    timer = false ;
    // ye sb zero krunga jb reset krunga to..
    hr = 0 ;
    min = 0 ;
    sec = 0 ;
    count = 0 ;
    document.getElementById("hr").innerHTML = "00"; // = ke  bhar agr hm variable typr de mtlb aise hr to 0 hoga output mia sbhi 00 nhi ayga so hm 00 laane k liye string type mai denge aise.. "00"
    document.getElementById("min").innerHTML ="00";
    document.getElementById("sec").innerHTML = "00" ;
    document.getElementById("count").innerHTML = "00" ;

}
// actual mai jo kaam krega vo function hai stopwatch hai 
function stopwatch(){
    if(timer == true){
        count = count + 1 ; // jb settimeout 10 sec rukega to uske baad usse increase krna hai by 1
        // ab yaha vo condition lagaynge jb jaise hi count 100 ho jay to sec. 1 bd jayga aise hi teeno chejein bdhe..
        if(count == 100){
            sec = sec +1 ;
            count = 0 ; // jaise hi sec. bdh jaye to count ka value zero krdo
        }


        if( sec == 60){
            min = min+1 ;
            sec = 0 ;
        }

        if( min == 60){
            hr = hr+1 ; // jb ek ghanta pura hota hai to min bhi 0 aur sec bhi zero hoti hai 
            min = 0 ;
            sec = 0 ;
        }
        // zingle 0 aa rhi aise hme chaihye 00 aise so ..
        var hrstring = hr ;
        var minstring = min ;
        var secstring = sec ;
        var countstring = count ;
        if( hr < 10){ // agar hr mai 10 se km hai yaani k 00 nhi ayngi 0 type mai chalega so
           hrstring = "0" + hrstring ; // hrstring ko 0 string mai add krdiya hai 
        }
        if( min < 10){ // agar min mai 10 se km hai yaani k 00 nhi ayngi 0 type mai chalega so
            minstring = "0" + minstring ; // minstring ko 0 string mai add krdiya hai 
         }
         if( sec < 10){ // agar sec mai 10 se km hai yaani k 00 nhi ayngi 0 type mai chalega so
            secstring = "0" + secstring ; // secstring ko 0 string mai add krdiya hai 
         }
         if( count < 10){ // agar count mai 10 se km hai yaani k 00 nhi ayngi 0 type mai chalega so
            countstring = "0" + countstring ; // count ko 0 string mai add krdiya hai 
         } // ab jo element selet kiye unme string select krni hai so integer ko htake string laga di

        document.getElementById("hr").innerHTML = hrstring ;
        document.getElementById("min").innerHTML = minstring ;
        document.getElementById("sec").innerHTML = secstring ;
        document.getElementById("count").innerHTML = countstring ;

        setTimeout( "stopwatch()" , 10)  ; // 10 mili sec wait krega

    }


}