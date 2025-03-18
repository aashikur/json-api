fetch('https://raw.githubusercontent.com/aashikur/json-api/refs/heads/main/hridoy/cards.json')
    .then(res => res.json())
    .then(data => myfunction(data.cards));

function myfunction(data) {


    function readMore(t){
        const s = t.split(' ');

        console.log(s);
        if(s.length >= 10)
        {
            let word = '';
            for(let i = 0; i<=10; i++){
                word += s[i] + " ";
            }
            return word + "...";
        }
        return word;
    }

    data.forEach(card => {
        console.log(card);

        const title = card.title;
        const img = card.image1;
        const details = readMore(card.description);
        

        const div = document.createElement('div');
        div.innerHTML = `
 <article
                class="bg-gray-800 overflow-hidden rounded-lg border border-gray-700 p-4 shadow-sm transition hover:shadow-primary cursor-default custom-cursor-default-hover">
                <a class="block overflow-hidden group mb-4 rounded-lg"
                    href="#0">
                    <div class="relative aspect-[4/3]">
                    <img alt="Card Image"
                            loading="lazy" decoding="async" data-nimg="fill"
                            class="duration-700 ease-in-out group-hover:scale-105 scale-100 blur-0 grayscale-0 h-full w-full object-cover"
                            
                            srcset="${img}" src="${img}"
                            style="position: absolute; height: 100%; width: 100%; inset: 0px; object-fit: contain; color: transparent;">
                    </div>
                </a>
                <div><span
                        class="text-xs font-medium uppercase inline-flex items-center px-2.5 py-0.5 rounded text-indigo-800 bg-indigo-200 last:mr-0 mr-2">FRONTEND</span>
                </div>
                <h3
                    class="font-bold text-2xl text-white tracking-tight my-2 transition duration-500 hover:underline hover:underline-offset-4">
                    <a href="/frontend-coding-challenges/star-rating-component-geShE1ApkqUoNCqujxOd">
                    ${title}
                    </a></h3>
                <p class="font-light text-gray-400 mb-4">${details}</p>
                <div class="relative"><span
                        class="text-xs font-medium uppercase inline-flex items-center px-2.5 py-0.5 rounded text-green-800 bg-green-200 last:mr-0 mr-2">Intermediate</span>
                    <div class="overflow-hidden h-2 mt-4 flex bg-transparent">
                        <div class="flex flex-col text-center whitespace-nowrap rounded justify-center bg-amber-200"
                            style="width: 33%;"></div>
                        <div class="flex flex-col text-center rounded whitespace-nowrap justify-center bg-green-200 mx-1"
                            style="width: 33%;"></div>
                        <div class="flex flex-col text-center rounded whitespace-nowrap justify-center bg-gray-500"
                            style="width: 34%;"></div>
                    </div>
                </div>
            </article> 
        `


        document.getElementById('cards').appendChild(div);

    });





}



