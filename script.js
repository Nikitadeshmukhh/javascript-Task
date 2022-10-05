var card=document.querySelector("#card");

card.addEventListener("mousemove", function(details){
   var dim = this.getBoundingClientRect();
   if(details.clientX - dim.x < dim.width/2)
   {
    var redclr = convertToRange(details.clientX - dim.x, [0,dim.width/2], [255,0]);
    this.style.backgroundColor = `rgb(${redclr},0,0)`;
   }
   else
   {
    var greenclr = convertToRange(details.clientX - dim.x, [dim.width/2,dim.width], [0,255]);
    this.style.backgroundColor = `rgb(0,${greenclr},0)`;
   }
});

card.addEventListener("mouseleave", function(){
    this.style.backgroundColor="#fff";
})

function convertToRange(value, srcRange, dstRange)
{
    if(value < srcRange[0] || value > srcRange[1])
    {
        return NaN;
    }

    var srcMax = srcRange[1] - srcRange[0],
        dstMax = dstRange[1] - dstRange[0],
        adjValue = value - srcRange[0];

    return (adjValue * dstMax / srcMax) + dstRange[0];
}
