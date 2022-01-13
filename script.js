let ds = []

for(let i = 0; i < Infinity; i++){
    let dxd = prompt('Введите команду');
        
    let dx = dxd.split(', ');
    if(dx[0] == 'add'){
        ds.push(dx[1]);
    }else if(dx[0] == 'del'){
        for(let key in ds){
            ds[key] == dx[1] ? ds.splice(key,1) : '';
        }
    }else if(dxd == 'stop'){
        break;
    }
}console.log(ds);




























































