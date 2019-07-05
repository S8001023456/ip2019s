/*

*/


function start(e) {
    var name=[
{
    char:'陳',
    big5:'B3AF',
    cns:'1-5D73',
    unicode:'9673'    },
    {char:'奕',
    big5:'ABB3',
    cns:'1-5055',
    unicode:'5955'    },
    {char:'江',
    big5:'A6BF',
    cns:'1-4840',
    unicode:'6C5F'    }
];
    var el = document.getElementById("div1");
    for (var i=0; i<3; i++)
    {
    el.innerHTML += name[i].char;
    el.innerHTML +=' big5 = ';
    el.innerHTML += name[i].big5;
    el.innerHTML +=' cns = ';
    el.innerHTML += name[i].cns;
    el.innerHTML +=' unicode = ';
    el.innerHTML += name[i].unicode;
    el.innerHTML +='<br>';
   };
}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
