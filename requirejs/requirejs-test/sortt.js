define(function () {
    function sortArr(arr){
        return arr.sort(function(a,b){
            return b-a;
        });
    }
    return sortArr;
})