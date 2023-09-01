let ctx1=document.getElementById("chart1").getContext("2d");
let chart1=new Chart(ctx1, 
    {
    type: "bar",
    data:{
        labels:["January", "February", "March", "April", "May", "June", "July"],
        datasets:[
            {
                label:"Gain",
                backgroundColor:"#fece76",
                data:[13,61,75,48,56,12,60],
                
            },
            {
                label:"Lost",
                backgroundColor:"#D03C55",
                data:[-10,-30,-25,-36,-3,-17,-49],
            },
        ],
    }
});