
m_div = document.getElementById("m_div");
let l_div;
let twoP_div;
let items = "abcdefghijklmnopqrstuvwxyz";
items.split(" ");
Clicked();
async function Clicked(){
    try{
        
        

        for(let i = 0; i < items.length; i++){

            let responce = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?f=${items[i]}&1`
            );
            let data = await responce.json();
            showData(data);
            // console.log(data);
        }
    }
    catch(err){

        console.log(err)
    }
}

function showData(data){

    

    

    for(let i = 0; i < data.meals.length; i++){

        let l_div = document.createElement('div');
        l_div.id = "l_div";

        let onnDiv = document.createElement('div');
        onnDiv.id = "onnDiv";

        let twoP_div = document.createElement('div');
        twoP_div.id =  "twoP_div";

        let name = document.createElement('div');
        name.id =  "name";

        let price = document.createElement('div');
        price.id =  "price";

        let p1 = document.createElement('p');
        p1.innerText = data.meals[i].strMeal;
        
        let p2 = Math.floor(Math.random() * (500 - 100) + 100);
        
        
        p2 += " ₹"
        let img = document.createElement('img');
        img.src = data.meals[i].strMealThumb;

        let img2 = document.createElement('img');
        img2.src = "https://thumbs.dreamstime.com/z/add-to-cart-icon-adding-shopping-cart-well-organized-fully-editable-add-to-cart-icon-adding-shopping-cart-any-use-like-167547952.jpg"
        img2.id = "img2";
        

        name.append(p1);
        price.append(p2);
        l_div.append(img)
        twoP_div.append(name,price,img2);

        onnDiv.append(l_div,twoP_div);

        

        m_div.append(onnDiv);
    }
}