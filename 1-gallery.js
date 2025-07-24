import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as s}from"./assets/vendor-CgTBfC_f.js";const e=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower",sound:"./sounds/open-modal-bird.mp3"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight",sound:"./sounds/container.mp3"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View",sound:"./sounds/ocean.mp3"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms",sound:"./sounds/open-modal-bird.mp3"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains",sound:"./sounds/mountain.mp3"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing",sound:"./sounds/open-modal-bird.mp3"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows",sound:"./sounds/open-modal-bird.mp3"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape",sound:"./sounds/mountain.mp3"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea",sound:"./sounds/ocean-bird.mp3"}],n=document.querySelector(".gallery"),c=e.map(({preview:p,original:o,description:a,sound:i})=>`
    <li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img
      class="gallery-image"
      src="${p}"
      data-source="${o}"
      data-sound="${i}"
alt="${a}"
    />
  </a>
</li>
`).join(`
`);n.innerHTML=c;new s(".gallery a",{captionsData:"alt",captionDelay:250});n.addEventListener("click",p=>{const o=p.target.closest("img.gallery-image");if(!o)return;const a=o.dataset.sound;a&&new Audio(a).play().catch(t=>console.warn("Audio play error:",t))});
//# sourceMappingURL=1-gallery.js.map
