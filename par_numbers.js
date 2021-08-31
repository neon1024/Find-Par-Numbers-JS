function findParNumbers() {

    var x=10;
    var y=100;

    var result ='';

    for(let i=x; i<=y; i++)
        if(i%2==0)
            result = result + ' ' + i;
    
    window.alert('Par numbers between ' + x + ' and ' + y + ' are: ' + result);

}
