const calculateTemp=()=>{
    const numberTemp=document.getElementById('temp').value;
    //console.log(numberTemp);
    const tempSelected=document.getElementById('temp_diff');
    const valueTemp=temp_diff.options[tempSelected.selectedIndex].value;
    //console.log(valueTemp);
    //console.log(tempSelected);
    const celTofah=(cel)=>{
        let Fahrenheit=Math.round((cel*9/5)+32);
        return Fahrenheit;
    }
    const fahTocel=(fah)=>{
        let Celcius=Math.round((fah-32)*5/9);
        return Celcius;
    }
    let result;
    if(valueTemp=='cel'){
        result=celTofah(numberTemp);
        document.getElementById('resultContainer').innerHTML= '=  '+result+'Fahrenheit';

    }
    else{
        result=fahTocel(numberTemp);
        document.getElementById('resultContainer').innerHTML='=  '+result+'Celcius';
    }

}