const numButton = document.querySelector("#id-main");
// const docClick = document.querySelector("main");
const panel = document.querySelector("numDisplay");
let addValue2String = ""; //String that has the current value
let previousValue2String ="";

//addEventListener("click", (MEvent) => { console.log( MEvent.target.value ) } ) ;
console.log("numButton ", numButton  );
console.log("dotClick ", panel );
window.onclick = ev =>  { 
    let result = ""; 
//    console.log( numButton.target ) ;
    
    id_is =  ev.target.id; // num0 num1 num2 ... num9 
    class_is = document.getElementById( id_is ).classList[0]  ;
    console.log("Initial class",class_is , "id", id_is );
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
            addValue2String+= nkey
            console.log("String", addValue2String ) ;
            mumDisplayUpdate( addValue2String );
     
    } 
    else if (class_is === "operator"){
        console.log("NAvigating operators class is",class_is , "id", id_is );
        switch( id_is ) {

        case "numCls":
            if( previousValue2String.length > 0 ) {
                previousValue2String = "";
            }
            alert("Erase All?");
        case "numC" :
            addValue2String = "";
            mumDisplayUpdate( addValue2String );
            break ; // missing break unde numCA is intentional!

        
         case "numPlus"  :
            if( previousValue2String.length > 0  && addValue2String > 0) {
                result = evaluate( previousValue2String , addValue2String , operand );
                addValue2String = result;
            }
            console.log(" Implemented: addition") ;
            operator = "+" ; 
            previousValue2String = addValue2String ;
            addValue2String=""
            mumDisplayUpdate( addValue2String ) ;
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
                alert( "Unknown option clicked id:" +  id_is + " of class " + class_is );
        }
    }     else if (id_is === "numBWrap") {
        console.log("class",class_is , "id", id_is );
        // clicked on grey background 
    }
    else {
        console.log("--------------------" );
            addValue2String = ""; 
            console.log("class",class_is , "id", id_is );
            
    }
    console.log( "id: ", id_is , " and ", class_is , " key ", nkey) ;

}
const evaluate = ( previousValue2String , addValue2String , operand ) => {
    let v3 = v2 = v1 = 0 ; 
    try {
        if (isNaN( previousValue2String )) { throw "stored number not a value" ;}
        v2 = previousValue2String * 1;
        if (isNaN( addValue2String )){ throw "displayed value is not a number" ;} 
        v1 = addValue2String * 1;
        if ( operand.length!= 1 && !["+","-","*","/"].includes( operand) ) {
            throw "unknown operator";
        } 
    }
    catch(err) {
            message.innerHTML = "Input is " + err;

        switch (operand) {
            case "+":
                v3= v2 +  v1 ;
                break ;
            case "+":
                v3= v2 +  v1 ;
                break ;
            case "*":
                v3= v2 *  v1 ;
                break ;  
            case "-":
                v3= v2 -  v1 ;
                break ;
            case "/":
                v3= v2 / v1 ; 
        }
         
        
          
        }
    return v3 ; 
}
const mumDisplayUpdate = ( Text) => {
    let zis = document.getElementById("numDisplay") ;
    if ( Text.value!= ""){
        zis.value =Text ;
    } else {
        xis.value="" ; 
    }
}
mumDisplayUpdate( addValue2String ) ;
