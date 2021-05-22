var buttons=document.getElementsByClassName("button");
var display=document.getElementById("display");
var operand1=null;
var operand2=null;
var operator=null;

for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click',function()
        {
            var value=this.getAttribute('data-value');
            if(value=='+')
            {
                operator='+';
                operand1=parseFloat(display.textContent);
                display.innerText="";
            }
            else if(value=='-')
            {
                operator='-';
                operand1=parseFloat(display.textContent);
                display.innerText="";
            }
            else if(value=='+/-')
            {
                operator='-';
                operand1=parseFloat(display.textContent);
                if(value<0)
                {
                    
                    display.innerText="value";
                }  
            }
            else if(value=='*')
            {
                operator='*';
                operand1=parseFloat(display.textContent);
                display.innerText="";
            }
            else if(value=='/')
            {
                operator='/';
                operand1=parseFloat(display.textContent);
                display.innerText="";
            }
            else if(value=='%')
            {
                operator='%';
                operand1=parseFloat(display.textContent);
                display.innerText="";
            }
            else if(value== '=')
            {
                operand2=parseFloat(display.textContent);
                var result =eval(operand1+" "+operator+" "+operand2);
                display.innerText=result;
            }
            else if(value=='AC')
            {
                 operand1=null;
                 operand2=null;
                 operator=null;
                display.innerText="";
            }
            else
            {
                display.innerText +=value;
            }
        }
    );
}