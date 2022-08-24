
/*
let services =[
     {
          image_url :"https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0",
               type  : "Medicine",
               off : "UPTO 50% OFF",
     },

     {
          image_url :"https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0",
               type  : "Lab Tests",
               off : "UPTO 70% OFF",
     },

     {
          image_url :"https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0",
               type  : "Healthcare",
               off : "UPTO 60% OFF",
     },

     {
          image_url :"https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0",
               type  : "Health Blogs",
               off : undefined,
     },

     {
          image_url :"https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0",
               type  : "PLUS",
               off : "SAVE 5% EXTRA",
     },

     {
          image_url :"https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0",
               type  : "Offers",
               off : undefined,
     },

     {
          image_url :"https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=256x0",
               type  : "Surgeries",
              ,
     },

     {
          image_url :"https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0",
               type  : "Value Store",
               off : "UPTO 50% OFF",
     },
];

services.map(function(elem){
     let box = document.createElement("div");

     let itemImg = document.createElement("img")
     itemImg.setAttribute("src",elem.image_url)

     let title = document.createElement("h5")
     title.innerText = elem.type
     
     let offer = document.createElement("h5")
     if (offer.innerText == undefined){
          offer.innerText = ""
     } else{
          offer.innerText = elem.off
     }
     

     box.append(itemImg,title,offer);

     document.querySelector("#service").append(box);
}); */
