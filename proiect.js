info=['Primul său rol a fost necreditat, în anul 1990 în filmul Awakenings. Apoi, produce, regizează și joacă în scurt metrajul Multi-Facial din 1994, o semi-autobiografie ce urmărește lupta unui actor în procesul de audiere, pentru că este văzut fie prea negru, fie prea alb sau nici negru ori suficient de alb.',
    'După șapte ani, a reluat rolul lui Dominic Torretto în cea de-a patra parte a seriei Fast & Furious ce a fost gata în aprilie 2009. La fel sa întâmplat și în 2011 când a apărut în Fast Five unde a jucat tot cu numele de Dominic Toretto. Filmul a fost lansat în vara lui 2011.',
    'Vin Diesel a declarat că preferă să-și mențină discretă viața privată “adoptând codul tăcerii al lui Harrison Ford, Marlon Brandon, Robert de Niro și Al Pacino”.',
    'Diesel a jucat Dungeons & Dragons timp de 20 de ani și a scris o carte comemorativă intitulată 30 Years of Adventure: A Celebration of Dungeons & Dragons. La cea de-a treizecea aniversare a jocului a inaugurat revista “Dragon Magazine”.',
    'Apare în anul 2006 în drama „Pledez vinovat (Find me Guilty)” și de asemenea în cea de-a treia parte a seriei „The Fast and The Furious : Tokio Drift”, nefigurând însă în casting. În vara anului 2008 apare în science-fictionul „Babylon A.D.”.',
    'Și-a făcut debutul pe scenă la vârsta de 7 ani, când a apărut în piesa “Dinosaur Door”, scrisă de Barbara Garson, produsă la Theater for the New City, în New York.'];
window.onload=function(){
    //adauga si sterge elemente
    var n=0;
    const butoane=document.getElementsByTagName('button');
    butoane[0].onclick=function(){
        if(n<info.length)
        {
            var informatii=document.getElementById('Informatii');
            var p=document.createElement('p');
            p.innerHTML=info[n];
            n=n+1;
            informatii.appendChild(p);
        }
        else
            alert('Nu mai exista informatii!')

    }
    butoane[1].onclick=function(){
        if(n>0)
        {
            var informatii=document.getElementsByTagName('p');
            informatii[n].remove();
            n=n-1;
        }
    }
    //setTimeout
    const welcome=setTimeout(function(){
        var loc=document.getElementsByClassName('header');
        const p=document.createElement('p');
        p.innerHTML='Bine ai venit!';
        p.style.fontSize='30px';
        loc[0].appendChild(p);
    },3000);
    //serInterval
    setInterval(function(){
        const date=new Date();
        var timp=document.getElementById('time');
        const p=document.createElement('p')
        p.innerHTML=date.toLocaleTimeString();
        timp.innerHTML=p.textContent;
    },1000);

}


