
function randomNum(max){
    return  Math.floor(Math.random() * max);
}

function choice(items){
    return items[randomNum(items.length)];
}

function remove(items, item){
    for(let i=0; i < items.length; i++){
        if(items[i] === item){
            items.splice(i,1);
        }
    }
    // items.splice(item, 1);
}

export {choice, remove};