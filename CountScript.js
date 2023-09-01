let count = 0;
    const counterButton = document.getElementById("counterButton");
    counterButton.addEventListener("click", Count);
    function Count() 
    {
        count;
        count++;
        document.getElementById("counterDisplay").innerText = count;
    }