let musics;

 let eventos = [
{
  title:"Vitrine Religiosa",
  image:"https://novatrento.sc.gov.br/uploads/sites/349/2022/10/798208.jpg",
  local:"Flópico, PA",
  data:"27/08/2025",
  status:"active",
  desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  playlist:[]
},
{
    title:"Vitrine Religiosa",
    image:"https://blog.cancaonova.com/saopaulo/files/2022/08/QUARESMA-SÃO-MIGUEL-CAPA-EVENTO-FACEBOOK.png",
    local:"Flópico, PA",
    data:"27/08/2025",
    status:"",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    playlist:[]
  },
  {
    title:"Vitrine Religiosa",
    image:"https://blog.cancaonova.com/saopaulo/files/2023/02/MISSA-DE-CINZAS_capa_evento.png",
    local:"Flópico, PA",
    data:"27/08/2025",
    status:"",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    playlist:[]
  }
]

function headerScreen(){
    const storedData = localStorage.getItem('musicfy');
    const musicfyData = JSON.parse(storedData);
    console.log(storedData)
    const perfil = document.querySelector('#perfil');
    perfil.innerHTML = `
    <img class="perfil" src="${musicfyData.userImage}">
    `

}

headerScreen()

function gerarDestaques(){
console.log("Chegue")

    const carrossel = document.querySelector('#carrosel')
    for( let i=0; i < eventos.length; i++){
        carrossel.innerHTML += `
        <div class="carousel-item ${eventos[i].status}">
        <a href="../evento/evento.html">
              <img
                src="${eventos[i].image}"
                class="d-block w-100"
                alt="..."
              />
            </div>
        `
    }
}
gerarDestaques()

// function salvarEscolha(select){
//     localStorage.setItem(
//         "eventStorage",
//         JSON.stringify({ select })
//       );
//     window.location.href = "../evento/evento.html"
// }

// function gerarMusicas(){
//     const quizzesDoUsuario = axios
//       .get(
//         `http://localhost:3000/musicas`
//       )
//       .then((response) => {
//         const musics = response.data.image;
//     const music = document.querySelector('#music')
//     for( let i=0; i < musics.length; i++){
//         music.innerHTML += `
//         <div class="evento-conteudo">
//         <img
//           class="thumbnail-evento"
//           src="../../images/logo.png"
//           alt="Thumbnail do 1° Encontro de Orixás de Itabaiana"
//         />
//         <div class="eventos-info">
//           <span>${musics[i].NomeMusica}</span>
//           <time datetime="2024-06-01"
//             ><img
//               src="../../images/icones/calendar-svgrepo-com.svg"
//               alt=""
//             />${musics[i].data_adicao}</time
//           >
//           <p>
//             <img
//               src="../../images/icones/local-two-svgrepo-com.svg"
//               alt=""
//             />
//             Brasil
//           </p>
//         </div>
//       </div>
//         `
//     }
// }


//  function gerarEvento(i){
//      alert('Cargando')
//      window.location.href = "../evento/evento.html"
//      const event = document.querySelector('#main-event');
//      event.innerHTML = `
//      <h1>${eventos[i].title}</h1>
//      <div class="box-event">
//              <div class="box-images">
//                  <img class="event" src="${eventos[i].image}">
//              </div>
//              <div class="box-desc">
//                  <h3>
//                  ${eventos[i].desc}
//                  </h3>
//              </div>
//              <div class="box-info">
//                  <div class="min-info">
//                      <img src="../../images/icones/calendar-svgrepo-com.svg">
//                      <h3>${eventos[i].data}</h3>
//                  </div>
//                  <div class="min-info">
//                      <img src="../../images/icones/local-two-svgrepo-com.svg">
//                      <h3>${eventos[i].local}</h3>
//                  </div>
//              </div>
//      </div>
//      <h1 class="mid">Playlist</h1>
//      <div class="box-playlist max">
//          <div class="box-music">
//              <div class="box-left">
//                  <img class="music" src="../../images/musicos-da-banda-nx-zero-estao-sentados-no-sofa-e-sorriem-para-a-camera_1_163187.webp"></div>
//              <div class="box-right">
//                  <h1 class="box-title med">Cedo ou tarde</h1>
//                  <h2 class="box-autor">NX Zero</h2>
//              </div>
//          </div>
//          <div class="box-music">
//              <div class="box-left">
//                  <img class="music" src="../../images/musicos-da-banda-nx-zero-estao-sentados-no-sofa-e-sorriem-para-a-camera_1_163187.webp"></div>
//              <div class="box-right">
//                  <h1 class="box-title med">Cedo ou tarde</h1>
//                  <h2 class="box-autor">NX Zero</h2>
//              </div>
//          </div>
//          <div class="box-music">
//              <div class="box-left">
//                  <img class="music" src="../../images/musicos-da-banda-nx-zero-estao-sentados-no-sofa-e-sorriem-para-a-camera_1_163187.webp"></div>
//              <div class="box-right">
//                  <h1 class="box-title med">Cedo ou tarde</h1>
//                  <h2 class="box-autor">NX Zero</h2>
//              </div>
//          </div>
//          <div class="box-music">
//              <div class="box-left">
//                  <img class="music" src="../../images/musicos-da-banda-nx-zero-estao-sentados-no-sofa-e-sorriem-para-a-camera_1_163187.webp"></div>
//              <div class="box-right">
//                  <h1 class="box-title med">Cedo ou tarde</h1>
//                  <h2 class="box-autor">NX Zero</h2>
//              </div>
//          </div>
//      </div>
//      `
//  }

