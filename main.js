

function get_para_1() {

}


function get_para_2() {
    
}

var inputs=[];

for (var i=1; i<=6 ; i++ )
{
    inputs.push(document.getElementById("input_box_" +i).value);
}

for (var i=1; i<=6 ; i++ )
{
    inputs.push(document.getElementById("box" +i).value);
}

document.getElementById("showpara1").innerHTML=inputs.join(". ");
document.getElementById("showpara2").innerHTML=inputs.join(". ");





ś
 
















