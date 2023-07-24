const numButton = document.querySelector("#id-main");
// const docClick = document.querySelector("main");
const panel = document.querySelector("numDisplay");

//addEventListener("click", (MEvent) => { console.log( MEvent.target.value ) } ) ;
console.log("numButton ", numButton  );
console.log("dotClick ", panel );
window.onclick = ev =>  { 
//    console.log( numButton.target ) ;
    
    id_is =  ev.target.id; // num0 num1 num2 ... num9 
    class_is = document.getElementById( id_is ).classList[0]  ;
    let nkey= -1;
    if ( class_is === "num") {
        console.log( "debug" , id_is  ) ; 
        switch (id_is){
            case "num0" : nkey = 0  ; break ;
            case "num1" : nkey = 1  ; break ;
            case "num2" : nkey = 2  ; break ;
            case "num3" : nkey = 3  ; break ;
            case "num4" : nkey = 4  ; break ;
            case "num5" : nkey = 5  ; break ;
            case "num6" : nkey = 6  ; break ;
            case "num7" : nkey = 7  ; break ;
            case "num8" : nkey = 8  ; break ;
            case "num9" : nkey = 9  ; break ;
            default: nkey= undefined ;
        } 
    } 
    else if (class_is === "operator "){
        switch( id_is ) {
         case "numPlus"  :
            console.log("Not Yet Implemented: addition") ;
            break ;
            //add
                console.log("Not Yet Implmented: add") ; 
                break ;
        case "numMinus" :
            console.log("Not Yet Implemented: minus") ;
            break ;
            //subtract
            console.log("Not Yet Implmented: minus") ; 
            break ;
        case "numX" :
            // muliply
            console.log("Not Yet Implemented: multiply") ;
            break ;
        case "numdel" :
            // divide
            console.log("Not Yet Implmented: divide") ; 
            break ;
        default:
                console.alert( "unknown option clicked id:" +  id_is );
        }
    }     else if (id_is === "numBWrap") {
        // clicked on grey background 
    }
        else {
            alert( "unknown option clicked class:"+ class_is + " id: ", id_is );
    }


    console.log( "id: ", id_is , " and ", class_is , " key ", nkey) ;

}

