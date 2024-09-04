function* generator(){
    let id = 100;
    while(true){
        yield id++;
    }
}
let obj = generator();
function getId(){
    document.getElementById('id').innerText = obj.next().value;
}