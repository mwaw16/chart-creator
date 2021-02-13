window.onload = function()
{
    // GENERAL VARIABLES
    
    let clickFlag = false;
    let scoresTab = [];
    let addCounter = 0;

    let realNameOfChart = document.getElementById("title-real");
    let realUnit = document.getElementById("c6");
    let nameOfChart = document.getElementById("name-of-chart").value;
    let unit = document.getElementById("unit").value;
    const next = document.getElementById("next");
    const add = document.getElementById("add");
    const checkbox = document.getElementById("show-values-input");
    const reset = document.getElementById("reset");
    const download = document.getElementById("download");
    
    //FUNCTIONS
     function showValues()
    {
        let valueHandler = document.querySelectorAll(".bar-value");

        if(checkbox.checked===true)
        {
            valueHandler.forEach(function(item)
            {
                item.style.display = "block";
            })
        }
        
        else
        {
            valueHandler.forEach(function(item)
            {
                item.style.display = "none";
            })
        }

    }


    // EVENTS 
    
    next.addEventListener("click", function()
    {
        if(clickFlag===false)

        {
            
            nameOfChart = document.getElementById("name-of-chart").value;
            unit = document.getElementById("unit").value;
            
            realNameOfChart.innerHTML = nameOfChart;
    
            realUnit.innerHTML = unit;
    
            let secondBlock = document.getElementById("second-block");
            secondBlock.style.display = "flex";
    
            clickFlag = true;
        }



    })

    add.addEventListener("click", function()
    {
        

        let seriesName = document.getElementById("series-name").value;
        let barValue = document.getElementById("bar-value").value;
        scoresTab.push(barValue);
        

        // SETTING OY 
        let maxValue = Math.max.apply(Math, scoresTab);
        let maxValueOnChart = maxValue * 1.2;
        let ceiledValue;
        if(maxValueOnChart>=100)
        {
            ceiledValue = Math.ceil(maxValueOnChart);
        }

        else 
        {
            ceiledValue = maxValueOnChart;
        }
        
        
        let c2 = document.getElementById("c2");
        let c3 = document.getElementById("c3");
        let c4 = document.getElementById("c4");
        let c5 = document.getElementById("c5");

        if(ceiledValue>=100)
        {
            c5.innerHTML = ceiledValue;
            c2.innerHTML = Math.ceil(ceiledValue / 4 * 1);
            c3.innerHTML = Math.ceil(ceiledValue / 4 * 2);
            c4.innerHTML = Math.ceil(ceiledValue / 4 * 3);
        }
        else
        {
            c5.innerHTML = parseFloat(ceiledValue).toFixed(2);
            c2.innerHTML = parseFloat(ceiledValue / 4 * 1).toFixed(2);
            c3.innerHTML = parseFloat(ceiledValue / 4 * 2).toFixed(2);
            c4.innerHTML = parseFloat(ceiledValue / 4 * 3).toFixed(2);
        }
        

        // MATCHING FONT-SIZE TO OY LENGTH
        if (c5.innerHTML.length >= 8 || c2.innerHTML.length >= 8 || c3.innerHTML.length >= 8 || c4.innerHTML.length >= 8)
        {
            c5.style.fontSize = "0.5rem";
            c2.style.fontSize = "0.5rem";
            c3.style.fontSize = "0.5rem";
            c4.style.fontSize = "0.5rem";
        }
        
        else if (c5.innerHTML.length >= 7 || c2.innerHTML.length >= 7 || c3.innerHTML.length >= 7 || c4.innerHTML.length >= 7)
        {
            c5.style.fontSize = "0.6rem";
            c2.style.fontSize = "0.6rem";
            c3.style.fontSize = "0.6rem";
            c4.style.fontSize = "0.6rem";
        }
        
        
        else if (c5.innerHTML.length >= 6 || c2.innerHTML.length >= 6 || c3.innerHTML.length >= 6 || c4.innerHTML.length >= 6)
        {
            c5.style.fontSize = "0.7rem";
            c2.style.fontSize = "0.7rem";
            c3.style.fontSize = "0.7rem";
            c4.style.fontSize = "0.7rem";
        }
        
        else if (c5.innerHTML.length >= 5 || c2.innerHTML.length >= 5 || c3.innerHTML.length >= 5 || c4.innerHTML.length >= 5)
        {
            c5.style.fontSize = "0.9rem";
            c2.style.fontSize = "0.9rem";
            c3.style.fontSize = "0.9rem";
            c4.style.fontSize = "0.9rem";
        }

        else if (c5.innerHTML.length >= 4 || c2.innerHTML.length >= 4 || c3.innerHTML.length >= 4 || c4.innerHTML.length >= 4)
        {
            c5.style.fontSize = "1rem";
            c2.style.fontSize = "1rem";
            c3.style.fontSize = "1rem";
            c4.style.fontSize = "1rem";
        }

        // CREATING NEW BARS
        let newBar = document.createElement("div")
        let currentId = "b" + addCounter
        newBar.setAttribute("id", currentId);
        
        let barColour = document.getElementById("color-bar").value;
        newBar.style.backgroundColor = barColour; 
        
        let barWrapper = document.getElementById("bar-wrapper");
        barWrapper.appendChild(newBar);

        let newBarReal = document.getElementById(currentId);
        let newBarChild = document.createElement("div");
        newBarChild.classList.add("bar-order");
        newBarChild.innerHTML = seriesName;
        newBarReal.appendChild(newBarChild);
        let newBarChild2 = document.createElement("div");
        newBarChild2.classList.add("bar-value");
        newBarChild2.innerHTML = barValue;
        newBarReal.appendChild(newBarChild2);

        addCounter++;

        // SETTING HEIGHT OF BARS
        let chartHeight = document.getElementById("chart-content").offsetHeight;

        for (i=0; i<scoresTab.length; i++)
        {
            let currentIdInLoop = "b" + i;
            let currentBarInLoop = document.getElementById(currentIdInLoop);
            let currentBarInLoopHeight = (scoresTab[i] / maxValueOnChart) * (chartHeight-40) + "px";
            currentBarInLoop.style.height = currentBarInLoopHeight;
        }

        // MATCHING FONTSIZE OF BARS
        let orderLength = document.querySelectorAll(".bar-wrapper > div").length;
        
        if(orderLength >= 11)
        {
            let realBarsTab = document.querySelectorAll(".bar-wrapper > div");
            realBarsTab.forEach(function(item)
            {
                item.style.width = "25px";
            })

        }

        if(orderLength >= 7)
        {
            let barOrderTab = document.querySelectorAll(".bar-order");
            barOrderTab.forEach(function(item)
            {
                item.style.fontSize = "0.7rem";
            })

        }
        
        showValues();

    })


    checkbox.addEventListener("click", function()
    {
        showValues();
    })

    
    reset.addEventListener("click", function()
    {
        realNameOfChart.innerHTML = "Title";
        realUnit.innerHTML = "%";
        
        let currentBars = document.querySelectorAll(".bar-wrapper > div")
        currentBars.forEach(function(item)
        {
            item.remove();
        })

        let c2 = document.getElementById("c2");
        let c3 = document.getElementById("c3");
        let c4 = document.getElementById("c4");
        let c5 = document.getElementById("c5");

        c5.innerHTML = "100";
        c2.innerHTML = "25";
        c3.innerHTML = "50";
        c4.innerHTML = "75";

        nameOfChart = document.getElementById("name-of-chart").value;
        unit = document.getElementById("unit").value;

        let secondBlock = document.getElementById("second-block");
        secondBlock.style.display = "none";

        clickFlag = false;
        scoresTab = [];
        addCounter = 0;

    })

    download.addEventListener("click", function()
    {
        let chartScreen = document.getElementById("chart-wrapper");

        domtoimage.toBlob(chartScreen)
        .then(function (blob) {
        window.saveAs(blob, 'myChart.png');
        });
    })
}