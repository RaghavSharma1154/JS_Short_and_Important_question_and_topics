//Bubble sort algorithm -->
//It takes n*n iteration to sort ,if the array is sorted in few iteration it will perform all n*n iteration
let arr = [12,9,5,7,23,6];
function bubbleSort(arr){
    if(arr.length <= 1) return;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
// bubbleSort(arr);
function bubbleSortAdaptive(arr){
    let n =arr.length;
    if(n <= 1) return;
    for(let i=0;i<n;i++){
        let flag = false;
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] =temp;
                flag = true;
            }
            console.log(arr);
        }
        if(flag == false) return;
    }
}
// bubbleSortAdaptive(arr);

//bubble sort using recursion -->
function recursiveBubbleSort(arr,n){
    if(n <= 1) return;
    let swapped = false;
    for(let i=0;i<n;i++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            swapped = true;
        }
    }
    if(!swapped) return;
    recursiveBubbleSort(arr,n-1);
}
recursiveBubbleSort(arr,arr.length);
console.log(arr);