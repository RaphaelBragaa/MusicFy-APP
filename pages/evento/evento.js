

 function gerarEvento(i){
    alert('Cargando')
    window.location.href = "../evento/evento.html"
    const event = document.querySelector('#main-event');
    event.innerHTML = `
    <h1>${eventos[i].title}</h1>
    <div class="box-event">
            <div class="box-images">
                <img class="event" src="${eventos[i].image}">
            </div>
            <div class="box-desc">
                <h3>
                ${eventos[i].desc}
                </h3>
            </div>
            <div class="box-info">
                <div class="min-info">
                    <img src="../../images/icones/calendar-svgrepo-com.svg">
                    <h3>${eventos[i].data}</h3>
                </div>
                <div class="min-info">
                    <img src="../../images/icones/local-two-svgrepo-com.svg">
                    <h3>${eventos[i].local}</h3>
                </div>
            </div>
    </div>
    <h1 class="mid">Playlist</h1>
    <div class="box-playlist max">
        <div class="box-music">
            <div class="box-left">
                <img class="music" src="../../images/musicos-da-banda-nx-zero-estao-sentados-no-sofa-e-sorriem-para-a-camera_1_163187.webp"></div>
            <div class="box-right">
                <h1 class="box-title med">Cedo ou tarde</h1>
                <h2 class="box-autor">NX Zero</h2>
            </div>
        </div>
        <div class="box-music">
            <div class="box-left">
                <img class="music" src="../../images/musicos-da-banda-nx-zero-estao-sentados-no-sofa-e-sorriem-para-a-camera_1_163187.webp"></div>
            <div class="box-right">
                <h1 class="box-title med">Cedo ou tarde</h1>
                <h2 class="box-autor">NX Zero</h2>
            </div>
        </div>
        <div class="box-music">
            <div class="box-left">
                <img class="music" src="../../images/musicos-da-banda-nx-zero-estao-sentados-no-sofa-e-sorriem-para-a-camera_1_163187.webp"></div>
            <div class="box-right">
                <h1 class="box-title med">Cedo ou tarde</h1>
                <h2 class="box-autor">NX Zero</h2>
            </div>
        </div>
        <div class="box-music">
            <div class="box-left">
                <img class="music" src="../../images/musicos-da-banda-nx-zero-estao-sentados-no-sofa-e-sorriem-para-a-camera_1_163187.webp"></div>
            <div class="box-right">
                <h1 class="box-title med">Cedo ou tarde</h1>
                <h2 class="box-autor">NX Zero</h2>
            </div>
        </div>
    </div>
    `
}