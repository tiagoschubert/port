
 const api_url1 = 'https://fishbase.ropensci.org//species?Fbname=';

 
const form = document.getElementById('form')
const search = document.getElementById('search');
const main = document.getElementById('main');
let show = false;

async function getFish(url) {
    const res = await fetch(url);
    const data = await res.json();
    const dataResult = data.data;
    let showMain = '';
    console.log(data)
    
    if( dataResult == null){
        showMain ='<h3> Sorry, Fish not found!</h3>'
        main.innerHTML = showMain;
    }

    dataResult.forEach( data => {
        if(show == true){
            showMain += `
                    <div class="fish">
                            <img src="${data.image}" alt="${data.FBname}">
                            <div class="fish-info">
                                <h3>${data.FBname}</h3>
                                
                                ${data.Comments}
                            </div>
                                
                            <p class="footer">Data taken from FishBase.org </p>
                    </div> `;
            show = false;
            main.innerHTML = showMain;}
                
            
    });
    
}


getFish(api_url1);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    if( search.value && search.value !== ''){
        getFish(api_url1 + search.value);
        search.value = '' 
        show = true
    }else{
        
        window.location.reload();
    }

})

  

