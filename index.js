let id = 0;

function generateList(array){
    for(let i = 0; i < array.length; i++){
        const ulAll = document.getElementsByTagName('ul')[id];
        const li = document.createElement('li');
        if(Array.isArray(array[i])){
            const ul = document.createElement('ul');
            li.append(ul);
            ulAll.append(li);
            id++;
            generateList(array[i]);
        } else{
            if(id === 0){
                li.innerText = array[i];
                ulAll.append(li);
            } else{
                li.innerText = `${id}.${array[i]}`;
                ulAll.append(li);
            }

        }

    }
    id--;

}

generateList([1,2,[1,2,[1,2,4,5],6,8],4,6]);
