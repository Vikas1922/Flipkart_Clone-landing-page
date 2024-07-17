let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}




let x = Array.from(document.getElementsByClassName('lists-items'));
// console.log(x);
x.forEach((element, index) => {
  let ele;


  element.addEventListener('mouseenter', function () {
    ele = document.createElement('span');

    let yy = ele.appendChild(document.createElement('img'));
    yy.setAttribute("src", "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K");

    element.appendChild(ele);




  });

  element.addEventListener('mouseleave', function () {
    ele.remove();
  });

});
let z4 = document.querySelector('.list39');
// console.log(z);
let ele39;

z4.addEventListener('mouseenter',function(){
   ele39 = document.createElement('div');
  ele39.classList.add("change-1","dropdown-menu");
  let zz = ele39.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr = [`More in Beauty & Personal Care`,`View All`,`Bath & Oral Care`,`Personal Hygiene`,`Eye Makeup`,`Face Makeup`,`Lip Makeup`,`Hair Care`,`Bath Essentials`,`Women's Personal Hygiene`,`Body & Skin Care`,`Top Brand Deals`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }
z4.appendChild(ele39);

});
z4.addEventListener('mouseleave',function(){
  ele39.remove();
});

let y4 = document.querySelector('.list40');
// console.log(y);
let ele40;

y4.addEventListener('mouseenter',function(){

   ele40 = document.createElement('div');
  ele40.classList.add("change-1", "dropdown-menu");
  let zz = ele40.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr = [`More in Men's Grooming`,`View All`,`Face Washes`,`Beard Oils`,`Hair Styling`,`Shaving Essentials`,`Aftershave`,`Face Creams & Face Packs`,`Soaps & Bodywashes`,`Men's Grooming Combos`,`Sexwell Wallness`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

y4.appendChild(ele40);

});
y4.addEventListener('mouseleave',function(){
  ele40.remove();
});

let w4 = document.querySelector('.list41');
// console.log(y);
let ele41;

w4.addEventListener('mouseenter',function(){

   ele41 = document.createElement('div');
  ele41.classList.add("change-1", "dropdown-menu");
  let zz = ele41.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr =  [`More in Food & Drinks`,`View All`,`Nuts & Dry Fruits`,`Cooking Essentials`,`Breakfast Items`,`Sancks Corner`,`Jams, Spreads & Honey`,`Ready to Cook & Eat`,`Chocolates`,`Baking Essentials`,`Sweets Store`,`Top Brand Deals`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

w4.appendChild(ele41);

});
w4.addEventListener('mouseleave',function(){
  ele41.remove();
});

let n4= document.querySelector('.list42');
// console.log(y);
let ele42;

n4.addEventListener('mouseenter',function(){

   ele42 = document.createElement('div');
  ele42.classList.add("change-1", "dropdown-menu");
  let zz = ele42.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr = [`More in Nutrition & Health Care`,`View All`,`Masks`,`Ayurvedic Supplements`,`Health Drinks`,`Vitamin Supplements`,`Protein Supplements`,`Women's Safety`,`Home Medicines`,`Home Medical Supplies`,`Healthcare Combos`,`Professional Medical Supplies`,`Top Brand Deals`];

  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

n4.appendChild(ele42);

});
n4.addEventListener('mouseleave',function(){
  ele42.remove();
});

let s4= document.querySelector('.list43');
// console.log(y);
let ele43;

s4.addEventListener('mouseenter',function(){

   ele43 = document.createElement('div');
  ele43.classList.add("change-1", "dropdown-menu");
  let zz = ele43.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr =  [`More in Baby Care`,`View All`,`Baby Diapers`,`Baby Wipes`,`Baby Bath & Grooming`,`Baby Gift Sets & Combo`,`Baby Medical & Health Care`,`Nursing & Brest Feeding`,`Feeding Bottles, Utensils & Accessories`,`Baby Food`,`Baby Bedding`,`Baby Gear`,`Top Brand Deals`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

s4.appendChild(ele43);

});
s4.addEventListener('mouseleave',function(){
  ele43.remove();
});

let v4= document.querySelector('.list44');
// console.log(y);
let ele44;

v4.addEventListener('mouseenter',function(){

   ele44 = document.createElement('div');
  ele44.classList.add("change-1", "dropdown-menu");
  let zz = ele44.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr =[`More in Toys & School Supplies`,`View All`,`Remote Control Toys`,`Soft Toys`,`Puzzles`,`Board Games`,`Learning & Educational Toys`,`Cars & Die-Cast Vehicles`,`Baby Toys`,`Gifting Toys`,`School Bags & Bagpacks`,`School Supplies`,`Top Brand Deals`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

v4.appendChild(ele44);

});
v4.addEventListener('mouseleave',function(){
  ele44.remove();
});

let o4 = document.querySelector('.list45');
// console.log(y);
let ele45;

o4.addEventListener('mouseenter',function(){

   ele45 = document.createElement('div');
  ele45.classList.add("change-1", "dropdown-menu");
  let zz = ele45.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr =[`More in Sports & Fitness`,`View All`,`Badminton`,`Cricket`,`Cycling`,`Football`,`Fitness Equipments`,`Supports`,`Shakers & Sippers`,`Gym Gloves`,`Dumbbells`,`Yoga`,`Top Brand Deals`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

o4.appendChild(ele45);

});
o4.addEventListener('mouseleave',function(){
  ele45.remove();
});

let d4 = document.querySelector('.list46');
// console.log(y);
let ele46;

d4.addEventListener('mouseenter',function(){

   ele46 = document.createElement('div');
  ele46.classList.add("change-1", "dropdown-menu");
  let zz = ele46.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr = [`More in Books`,`View All`,`Test prep`,`Academics`,`Literature & Fiction`,`Non Fiction`,`Yound Readers`,`Audio Books`,`Stage Equipment & Accessories`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

d4.appendChild(ele46);

});
d4.addEventListener('mouseleave',function(){
  ele46.remove();
});

let f4 = document.querySelector('.list47');
// console.log(y);
let ele47;

f4.addEventListener('mouseenter',function(){

   ele47 = document.createElement('div');
  ele47.classList.add("change-1", "dropdown-menu");
  let zz = ele47.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr = [`More in Music`,`Musical Instruments`,`Music & TV Shows`,`Acoustic Guitars`,`Keys & Synthesizer`,`Microphones`,`Studio & Stage Equipment`,`String Instruments`,`Indian Instruments`,`Wind Instruments`,`Musical Keyboards`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

f4.appendChild(ele47);

});
f4.addEventListener('mouseleave',function(){
  ele47.remove();
});

let j4 = document.querySelector('.list48');
// console.log(y);
let ele48;

j4.addEventListener('mouseenter',function(){

   ele48 = document.createElement('div');
  ele48.classList.add("change-1", "dropdown-menu");
  let zz = ele48.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr = [`More in Stationery & Office Supplies`,`View All`,`Pens & Gift Sets`,`Notebooks & Diaries`,`Art Supplies`,`Calculators`,`Keychains`,`Card Holders`,`Desk Oraganizers`,`Office Supplies`,`Office Equipments`,`Party Supplies`,`Top Brand Deals`];

  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

j4.appendChild(ele48);

});
j4.addEventListener('mouseleave',function(){
  ele48.remove();
});

let p4 = document.querySelector('.list49');
// console.log(y);
let ele49;

p4.addEventListener('mouseenter',function(){

   ele49 = document.createElement('div');
  ele49.classList.add("change-1", "dropdown-menu");
  let zz = ele49.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr = [`More in Auto Accessories`,`View All`,`Bike Essentials`,`Car & Bike Covers`,`CarAirFreshener`,`CarBlutoothDevice`,`Car Lubricant`,`CarMediaPlayer`,`Helmet`,`Vihicle Washing & Cleaning Products`,`Tyres`];

  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

p4.appendChild(ele49);

});
p4.addEventListener('mouseleave',function(){
  ele49.remove();
});

let q4 = document.querySelector('.list50');
// console.log(y);
let ele50;

q4.addEventListener('mouseenter',function(){

   ele50 = document.createElement('div');
  ele50.classList.add("change-1", "dropdown-menu");
  let zz = ele50.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr =[`More in Safety & Hygiene Essentials`,`View All`,`Masks`,`Sanitizers`,`Hand Wash`,`Gloves`,`PPE Kits`,`Face Shields`,`UV Sterilizer Box`,`Safety Goggles`,`Vitamins for Immunity`];


  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

q4.appendChild(ele50);

});
q4.addEventListener('mouseleave',function(){
  ele50.remove();
});

// let e4 = document.querySelector('.list51');
// // console.log(y);
// let ele51;

// e4.addEventListener('mouseenter',function(){

//    ele51 = document.createElement('div');
//   ele51.classList.add("change-1", "dropdown-menu");
//   let zz = ele51.appendChild(document.createElement('ul'));
//   zz.classList.add("dropdown-lists");

//   let arr =[`More in Pet & Gardening`,`All`,`Plant Seeds`,`Soil Manure`,`Pots & Planters`,`Plant & Planters`,`Garden Tool Set`,`watering Equipments`,`Dog Essentials`,`Cat Essentials`,`Fish & Aquatic`,`Pet Grooming & Hygiene`,`Pet Toys`,`Pet Health & Safety`];

//   let i = 0;
//   let xx;
//   while(i<=arr.length-1){
//   xx = zz.appendChild(document.createElement('li'));
//     xx.classList.add("lists-items");
//     xx.innerHTML = arr[i];


//   i++;

//   }

// e4.appendChild(ele51);

// });
// e4.addEventListener('mouseleave',function(){
//   ele51.remove();
// });

// let g3 = document.querySelector('.list39');
// // console.log(y);
// let ele38;

// g3.addEventListener('mouseenter',function(){

//    ele38 = document.createElement('div');
//   ele38.classList.add("change-1", "dropdown-menu");
//   let zz = ele38.appendChild(document.createElement('ul'));
//   zz.classList.add("dropdown-lists");

//   let arr =[`More in Tablets`,`All`,`Tablets With Call Facility`,`Tablets Without Facility`];

 

//   let i = 0;
//   let xx;
//   while(i<=arr.length-1){
//   xx = zz.appendChild(document.createElement('li'));
//     xx.classList.add("lists-items");
//     xx.innerHTML = arr[i];


//   i++;

//   }

// g3.appendChild(ele38);

// });
// g3.addEventListener('mouseleave',function(){
//   ele38.remove();
// });

// *******************************************************************************************

let z3 = document.querySelector('.list26');
// console.log(z);
let ele26;

z3.addEventListener('mouseenter',function(){
   ele26 = document.createElement('div');
  ele26.classList.add("change-1","dropdown-menu");
  let zz = ele26.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr = [`More in Home Furnishings`,`All`,`Bed Linens`,`Bedsheets`,`Blankets`,`Curtains & Accessories`,`Bath Linen`,`Floor Coverings`,`Covers & Protectors`,`Cushions & Pillows`,`Kitchen Linen Sets`,`Table Linen Sets`,`Sofa & Curtain fabrics`,`Branded Collections`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }
z3.appendChild(ele26);

});
z3.addEventListener('mouseleave',function(){
  ele26.remove();
});

// let y2 = document.querySelector('.list13');
// // console.log(y);
// let ele13;

// y2.addEventListener('mouseenter',function(){

//    ele13 = document.createElement('div');
//   ele13.classList.add("change-1", "dropdown-menu");
//   let zz = ele13.appendChild(document.createElement('ul'));
//   zz.classList.add("dropdown-lists");

//   let arr = 
//   let i = 0;
//   let xx;
//   while(i<=arr.length-1){
//   xx = zz.appendChild(document.createElement('li'));
//     xx.classList.add("lists-items");
//     xx.innerHTML = arr[i];


//   i++;

//   }

// y2.appendChild(ele13);

// });
// y2.addEventListener('mouseleave',function(){
//   ele13.remove();
// });

let w3 = document.querySelector('.list28');
// console.log(y);
let ele27;

w3.addEventListener('mouseenter',function(){

   ele27 = document.createElement('div');
  ele27.classList.add("change-1", "dropdown-menu");
  let zz = ele27.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr =  [`More in Living Room Furniture`,`Sofa Sets & Sectionals`,`TV Units`,`Dining Sets`,`Sofa Beds`,`Recliners`,`Living Room Chairs`,`Cabinet & Drawers`,`Book Shelves`,`Shoe Racks`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

w3.appendChild(ele27);

});
w3.addEventListener('mouseleave',function(){
  ele27.remove();
});

let n3= document.querySelector('.list29');
// console.log(y);
let ele28;

n3.addEventListener('mouseenter',function(){

   ele28 = document.createElement('div');
  ele28.classList.add("change-1", "dropdown-menu");
  let zz = ele28.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr = [`More in Kitchen & Dining`,`All`,`Cookware`,`Knives, Choppers & Cutters`,`Gas Stoves & Accessories`,`Kitchen Tools`,`Tableware & Dinnerware`,`Containers & Kitchen Storage`,`Barware`,`Bakeware`,`Handjuicers & Grinders`,`Disposable Supplies`,`Outdoor Cooking`];

  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

n3.appendChild(ele28);

});
n3.addEventListener('mouseleave',function(){
  ele28.remove();
});

let s3= document.querySelector('.list30');
// console.log(y);
let ele29;

s3.addEventListener('mouseenter',function(){

   ele29 = document.createElement('div');
  ele29.classList.add("change-1", "dropdown-menu");
  let zz = ele29.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr =  [`More in Bedroom Furniture`,`Mattresses`,`Beds`,`Wardrobes`,`Side Tables`,`TV Units`,`Office Tables`,`Office Chairs`,`Bookshelves`,`Bar Cabinets`,`Bar stools`,`Rocking Chairs`,`Benches`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

s3.appendChild(ele29);

});
s3.addEventListener('mouseleave',function(){
  ele29.remove();
});

// let v3= document.querySelector('.list31');
// // console.log(y);
// let ele30;

// v3.addEventListener('mouseenter',function(){

//    ele30 = document.createElement('div');
//   ele30.classList.add("change-1", "dropdown-menu");
//   let zz = ele30.appendChild(document.createElement('ul'));
//   zz.classList.add("dropdown-lists");

//   let arr =[`More in Health & Personal Care`,`All`,`Trimmers`,`Shavers`,`Hair Straighteners`,`Hair Dryers`,`Epilators`,`Glucometers & Accessories`,`Blood Pressure Monitors`,`Digital Thermometers`,`Weighing Scales`,`Massagers`,`Nebulizers`,`Vaporizers`];
//   let i = 0;
//   let xx;
//   while(i<=arr.length-1){
//   xx = zz.appendChild(document.createElement('li'));
//     xx.classList.add("lists-items");
//     xx.innerHTML = arr[i];


//   i++;

//   }

// v3.appendChild(ele30);

// });
// v3.addEventListener('mouseleave',function(){
//   ele30.remove();
// });

let o3 = document.querySelector('.list32');
// console.log(y);
let ele31;

o3.addEventListener('mouseenter',function(){

   ele31 = document.createElement('div');
  ele31.classList.add("change-1", "dropdown-menu");
  let zz = ele31.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr =[`More in Home Decor`,`All`,`Lightings`,`Stickers & Wallpapers`,`Painting & Posters`,`Clocks`,`Showpieces & Decoratives`,`Wall Decor`,`Flowers & Vases`,`Home Fragrances`,`Windchimnes & Dream Catcher`,`Photo Frames & Albums`,`Diyas, Candles & Holders`,`Festive & Giftings`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

o3.appendChild(ele31);

});
o3.addEventListener('mouseleave',function(){
  ele31.remove();
});

let d3 = document.querySelector('.list33');
// console.log(y);
let ele32;

d3.addEventListener('mouseenter',function(){

   ele32 = document.createElement('div');
  ele32.classList.add("change-1", "dropdown-menu");
  let zz = ele32.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr = [`More in Tools & Utility`,`All`,`Hand Tools`,`Power Tools`,`Measuring Tools`,`Home Storage & Organizers`,`Umbrellas`,`Appliance Trolley & Stands`,`Cloth Dryer Stand`,`Appliance Filter & Cartridges`,`Laundary Oragnization`,`Lock & Security`,`Fire & Personal Safety`,`Paint Supplies & Equipments`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

d3.appendChild(ele32);

});
d3.addEventListener('mouseleave',function(){
  ele32.remove();
});

// let f3 = document.querySelector('.list34');
// // console.log(y);
// let ele33;

// f3.addEventListener('mouseenter',function(){

//    ele33 = document.createElement('div');
//   ele33.classList.add("change-1", "dropdown-menu");
//   let zz = ele33.appendChild(document.createElement('ul'));
//   zz.classList.add("dropdown-lists");

//   let arr = [`More in Mobile Accessory`,`All`,`Plain Cases`,`Designer Cases`,`Screen Guards`,`Camera Lens Protectors`,`Tablet Accessories`,`Mobile Cable`,`Mobile Charger`,`Mobile Pouches`,`Mobile Flash`,`Mobile Holder`,`Mobile USB Gadgets`,`Mobile Accessories Combos`];
//   let i = 0;
//   let xx;
//   while(i<=arr.length-1){
//   xx = zz.appendChild(document.createElement('li'));
//     xx.classList.add("lists-items");
//     xx.innerHTML = arr[i];


//   i++;

//   }

// f3.appendChild(ele33);

// });
// f3.addEventListener('mouseleave',function(){
//   ele33.remove();
// });

// let j3 = document.querySelector('.list35');
// // console.log(y);
// let ele34;

// j3.addEventListener('mouseenter',function(){

//    ele34 = document.createElement('div');
//   ele34.classList.add("change-1", "dropdown-menu");
//   let zz = ele34.appendChild(document.createElement('ul'));
//   zz.classList.add("dropdown-lists");

//   let arr = [`More in Powerbank`,`All`,`Powerbank`];

//   let i = 0;
//   let xx;
//   while(i<=arr.length-1){
//   xx = zz.appendChild(document.createElement('li'));
//     xx.classList.add("lists-items");
//     xx.innerHTML = arr[i];


//   i++;

//   }

// j3.appendChild(ele34);

// });
// j3.addEventListener('mouseleave',function(){
//   ele34.remove();
// });

let p3 = document.querySelector('.list36');
// console.log(y);
let ele35;

p3.addEventListener('mouseenter',function(){

   ele35 = document.createElement('div');
  ele35.classList.add("change-1", "dropdown-menu");
  let zz = ele35.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr = [`More in Lightings & Electricals`,`All`,`Bulbs`,`Emergency Lights`,`Torches`,`Tubelights`,`Extension Cords`,`Outdoor Lamps`,`Battries`,`Electrical Wires`,`Electric Socket`,`Electric Door Bell`,`Solar Lights, Panels & Battries`,`Electrical Hardware`];

  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

p3.appendChild(ele35);

});
p3.addEventListener('mouseleave',function(){
  ele35.remove();
});

let q3 = document.querySelector('.list37');
// console.log(y);
let ele36;

q3.addEventListener('mouseenter',function(){

   ele36 = document.createElement('div');
  ele36.classList.add("change-1", "dropdown-menu");
  let zz = ele36.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr =[`More in Cleaning & Bath`,`All`,`Mops`,`Cleaning Supplies`,`House Hold Supplies`,`Air Freshners`,`Cleaning Gloves`,`Liquid Detergents`,`Taps & Faucet`,`Toothbrush Holder`,`Bathroom Rack & Shelves`,`Shower Heads`,`Bath & Kitcen Fittings`,`Bathroom Accessories`];


  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

q3.appendChild(ele36);

});
q3.addEventListener('mouseleave',function(){
  ele36.remove();
});

let e3 = document.querySelector('.list38');
// console.log(y);
let ele37;

e3.addEventListener('mouseenter',function(){

   ele37 = document.createElement('div');
  ele37.classList.add("change-1", "dropdown-menu");
  let zz = ele37.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr =[`More in Pet & Gardening`,`All`,`Plant Seeds`,`Soil Manure`,`Pots & Planters`,`Plant & Planters`,`Garden Tool Set`,`watering Equipments`,`Dog Essentials`,`Cat Essentials`,`Fish & Aquatic`,`Pet Grooming & Hygiene`,`Pet Toys`,`Pet Health & Safety`];

  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

e3.appendChild(ele37);

});
e3.addEventListener('mouseleave',function(){
  ele37.remove();
});

// let g3 = document.querySelector('.list39');
// // console.log(y);
// let ele38;

// g3.addEventListener('mouseenter',function(){

//    ele38 = document.createElement('div');
//   ele38.classList.add("change-1", "dropdown-menu");
//   let zz = ele38.appendChild(document.createElement('ul'));
//   zz.classList.add("dropdown-lists");

//   let arr =[`More in Tablets`,`All`,`Tablets With Call Facility`,`Tablets Without Facility`];

 

//   let i = 0;
//   let xx;
//   while(i<=arr.length-1){
//   xx = zz.appendChild(document.createElement('li'));
//     xx.classList.add("lists-items");
//     xx.innerHTML = arr[i];


//   i++;

//   }

// g3.appendChild(ele38);

// });
// g3.addEventListener('mouseleave',function(){
//   ele38.remove();
// });

// *****************************************************************************************


let z2 = document.querySelector('.list12');
// console.log(z);
let ele12;

z2.addEventListener('mouseenter',function(){
   ele12 = document.createElement('div');
  ele12.classList.add("change-1","dropdown-menu");
  let zz = ele12.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr = [`More in Audio`,`All`,`Bluetooth Headphones`,`Wired Headphones`,`True Wireless Earbuds`,`Bluetooth Speakers`,`Soundbars`,`Home Theatres`,`TV Streaming Device`,`Remote Control`,`DTH Set top box`,`Headphones Pouch & Case Covers`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }
z2.appendChild(ele12);

});
z2.addEventListener('mouseleave',function(){
  ele12.remove();
});

// let y2 = document.querySelector('.list13');
// // console.log(y);
// let ele13;

// y2.addEventListener('mouseenter',function(){

//    ele13 = document.createElement('div');
//   ele13.classList.add("change-1", "dropdown-menu");
//   let zz = ele13.appendChild(document.createElement('ul'));
//   zz.classList.add("dropdown-lists");

//   let arr = 
//   let i = 0;
//   let xx;
//   while(i<=arr.length-1){
//   xx = zz.appendChild(document.createElement('li'));
//     xx.classList.add("lists-items");
//     xx.innerHTML = arr[i];


//   i++;

//   }

// y2.appendChild(ele13);

// });
// y2.addEventListener('mouseleave',function(){
//   ele13.remove();
// });

let w2 = document.querySelector('.list14');
// console.log(y);
let ele14;

w2.addEventListener('mouseenter',function(){

   ele14 = document.createElement('div');
  ele14.classList.add("change-1", "dropdown-menu");
  let zz = ele14.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr =  [`More in Cameras & Accessories`,`All`,`DSLR & Mirrorless`,`Sports & action`,`Point & Shoot`,`Instant Cameras`,`Camcorders`,`Camera Tripods`,`Camera Lenses`,`Drone`,`Flashes`,`Gimbals`,`Binoculars`,`Other Camera Accessories`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

w2.appendChild(ele14);

});
w2.addEventListener('mouseleave',function(){
  ele14.remove();
});

let n2= document.querySelector('.list15');
// console.log(y);
let ele15;

n2.addEventListener('mouseenter',function(){

   ele15 = document.createElement('div');
  ele15.classList.add("change-1", "dropdown-menu");
  let zz = ele15.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr = [`More in Computer Peripherals`,`All`,`Printers`,`Monitors`,`Projectors`,`Portable Projectors`,`Ink Cartridges`,`Ink Bottles`,`Receipt Printers`,`Lamination Machines`,`Note Counting Machines`,`Barcode Scanners`,`Currency Detectors`];

  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

n2.appendChild(ele15);

});
n2.addEventListener('mouseleave',function(){
  ele15.remove();
});

let s2= document.querySelector('.list16');
// console.log(y);
let ele16;

s2.addEventListener('mouseenter',function(){

   ele16 = document.createElement('div');
  ele16.classList.add("change-1", "dropdown-menu");
  let zz = ele16.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr =  [`More in Gaming`,`All`,`Gaming Consoles`,`Gaming Mouse`,`Gaming Keyboards`,`Gamepads`,`Games`,`Accessory Kits`,`Gaming Accessories Combo`,`Gaming Mousepads`,`Membership Cards`,`Controllers`,`Other Gaming & Accessories`,`Gaming Components`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

s2.appendChild(ele16);

});
s2.addEventListener('mouseleave',function(){
  ele16.remove();
});

let v2= document.querySelector('.list17');
// console.log(y);
let ele17;

v2.addEventListener('mouseenter',function(){

   ele17 = document.createElement('div');
  ele17.classList.add("change-1", "dropdown-menu");
  let zz = ele17.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr =[`More in Health & Personal Care`,`All`,`Trimmers`,`Shavers`,`Hair Straighteners`,`Hair Dryers`,`Epilators`,`Glucometers & Accessories`,`Blood Pressure Monitors`,`Digital Thermometers`,`Weighing Scales`,`Massagers`,`Nebulizers`,`Vaporizers`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

v2.appendChild(ele17);

});
v2.addEventListener('mouseleave',function(){
  ele17.remove();
});

let o2 = document.querySelector('.list18');
// console.log(y);
let ele18;

o2.addEventListener('mouseenter',function(){

   ele18 = document.createElement('div');
  ele18.classList.add("change-1", "dropdown-menu");
  let zz = ele18.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr =[`More in Laptop Accessories`,`All`,`Mouse`,`Laptop Keyboards`,`Routers`,`Data Cards`,`UPS`,`USB Gadgets`,`Security Software`,`Laptop Battery`,`Laptop Adapter`,`Wireless USB Adapter`,`Processor`,`Other Accessories`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

o2.appendChild(ele18);

});
o2.addEventListener('mouseleave',function(){
  ele18.remove();
});

let d2 = document.querySelector('.list19');
// console.log(y);
let ele19;

d2.addEventListener('mouseenter',function(){

   ele19 = document.createElement('div');
  ele19.classList.add("change-1", "dropdown-menu");
  let zz = ele19.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr = [`More in Laptop & Desktop`,`All`,`Laptops`,`Gaming Laptops`,`Desktop PCs`,`All In One PCs`,`Mini PCs`,`Tower PCs`,`PC Finder`,`Women Trouser`,`Women Jumpsuit`,`Women Shapewear`,`Women Sports Bra`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

d2.appendChild(ele19);

});
d2.addEventListener('mouseleave',function(){
  ele19.remove();
});

let f2 = document.querySelector('.list20');
// console.log(y);
let ele20;

f2.addEventListener('mouseenter',function(){

   ele20 = document.createElement('div');
  ele20.classList.add("change-1", "dropdown-menu");
  let zz = ele20.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr = [`More in Mobile Accessory`,`All`,`Plain Cases`,`Designer Cases`,`Screen Guards`,`Camera Lens Protectors`,`Tablet Accessories`,`Mobile Cable`,`Mobile Charger`,`Mobile Pouches`,`Mobile Flash`,`Mobile Holder`,`Mobile USB Gadgets`,`Mobile Accessories Combos`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

f2.appendChild(ele20);

});
f2.addEventListener('mouseleave',function(){
  ele20.remove();
});

let j2 = document.querySelector('.list21');
// console.log(y);
let ele21;

j2.addEventListener('mouseenter',function(){

   ele21 = document.createElement('div');
  ele21.classList.add("change-1", "dropdown-menu");
  let zz = ele21.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr = [`More in Powerbank`,`All`,`Powerbank`];

  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

j2.appendChild(ele21);

});
j2.addEventListener('mouseleave',function(){
  ele21.remove();
});

let p2 = document.querySelector('.list22');
// console.log(y);
let ele22;

p2.addEventListener('mouseenter',function(){

   ele22 = document.createElement('div');
  ele22.classList.add("change-1", "dropdown-menu");
  let zz = ele22.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr = [`More in Smart Home Automation`,`All`,`Smart Assistants`,`Smart Lights`,`Smart Cameras`,`Smart Switches`,`Smart Door Locks`,`Sensors & Alarms`];

  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

p2.appendChild(ele22);

});
p2.addEventListener('mouseleave',function(){
  ele22.remove();
});

let q2 = document.querySelector('.list23');
// console.log(y);
let ele23;

q2.addEventListener('mouseenter',function(){

   ele23 = document.createElement('div');
  ele23.classList.add("change-1", "dropdown-menu");
  let zz = ele23.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr =[`More in Smart Wearables`,`Smart Bands`,`Smart Glasses`];


  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

q2.appendChild(ele23);

});
q2.addEventListener('mouseleave',function(){
  ele23.remove();
});

let e2 = document.querySelector('.list24');
// console.log(y);
let ele24;

e2.addEventListener('mouseenter',function(){

   ele24 = document.createElement('div');
  ele24.classList.add("change-1", "dropdown-menu");
  let zz = ele24.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr =[`More in Storage`,`All`,`MobileMemoryCard`,`ComputerStoragePendrive`,`MobileStoragePendrive`,`ExternalHardDrive`,`InternalHardDrive`];

  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

e2.appendChild(ele24);

});
e2.addEventListener('mouseleave',function(){
  ele24.remove();
});

let g2 = document.querySelector('.list25');
// console.log(y);
let ele25;

g2.addEventListener('mouseenter',function(){

   ele25 = document.createElement('div');
  ele25.classList.add("change-1", "dropdown-menu");
  let zz = ele25.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr =[`More in Tablets`,`All`,`Tablets With Call Facility`,`Tablets Without Facility`];

 

  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

g2.appendChild(ele25);

});
g2.addEventListener('mouseleave',function(){
  ele25.remove();
});







let z = document.querySelector('.list1');
// console.log(z);
let ele1;

z.addEventListener('mouseenter',function(){
   ele1 = document.createElement('div');
  ele1.classList.add("change-1","dropdown-menu");
  let zz = ele1.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr = [`More in Men's Top Wear`,`All`,`Men's T-Shirts`,`Men's Casual Shirts`,`Men's Formal Shirts`,`Men's Kurtas`,`Men's Ethnic Sets`,`Men's Blazers`,`Men's Raincoat`,`Men's Windcheaters`,`Men's Suit`,`Men's Fabrics`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }
z.appendChild(ele1);

});
z.addEventListener('mouseleave',function(){
  ele1.remove();
});

let y = document.querySelector('.list2');
// console.log(y);
let ele2;

y.addEventListener('mouseenter',function(){

   ele2 = document.createElement('div');
  ele2.classList.add("change-1", "dropdown-menu");
  let zz = ele2.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr = [`More in Men's Bottom Wear`,`All`,`Men's Jeans`,`Men's Trousers`,`Men's Trackpants`,`Men's Shorts`,`Men's Cargos`,`Men's Threefourths`,`Men's Pyjamas & Loungepants`,`Men's Dhoti`,`Men's Ethnic Pyjama`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

y.appendChild(ele2);

});
y.addEventListener('mouseleave',function(){
  ele2.remove();
});

let w = document.querySelector('.list3');
// console.log(y);
let ele3;

w.addEventListener('mouseenter',function(){

   ele3 = document.createElement('div');
  ele3.classList.add("change-1", "dropdown-menu");
  let zz = ele3.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr = [`More in Women Ethnic`,`All`,`Women Sarees`,`Women Kurtas & Kurtis`,`Women Kurta Sets & Salwar Suits`,`Ethnic Dresses`,`Women Dress Matrials`,`Women Gowns`,`Women Lehenga Cholis`,`Women Leggings & Patialas`,`Women Plazzos & shararas`,`Women Blouse`,`Women Dupatta`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

w.appendChild(ele3);

});
w.addEventListener('mouseleave',function(){
  ele3.remove();
});

let n= document.querySelector('.list4');
// console.log(y);
let ele4;

n.addEventListener('mouseenter',function(){

   ele4 = document.createElement('div');
  ele4.classList.add("change-1", "dropdown-menu");
  let zz = ele4.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr = [`More in Men Footwear`,`All`,`Men's Sports Shoes`,`Men's Casual Shoes`,`Men's Sandals & Floaters`,`Men's Slippers & Flip Flops`,`Men's Formal Shoes`,`Men's Ethnic Shoes`,`Shoe Care`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

n.appendChild(ele4);

});
n.addEventListener('mouseleave',function(){
  ele4.remove();
});

let s= document.querySelector('.list5');
// console.log(y);
let ele5;

s.addEventListener('mouseenter',function(){

   ele5 = document.createElement('div');
  ele5.classList.add("change-1", "dropdown-menu");
  let zz = ele5.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr = [`More in Women Footwear`,`All`,`Women Flats`,`Women Heels`,`Women Wedges`,`Women Slipper Flip Flops`,`Women Casual Shoes`,`Women Sports Shoes`,`Women Ballerinas`,`Women Ethnic Shoes`,`Women Sneakers`,`Women Walking Shoes`,`Women Boots`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

s.appendChild(ele5);

});
s.addEventListener('mouseleave',function(){
  ele5.remove();
});

let v= document.querySelector('.list6');
// console.log(y);
let ele6;

v.addEventListener('mouseenter',function(){

   ele6 = document.createElement('div');
  ele6.classList.add("change-1", "dropdown-menu");
  let zz = ele6.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr = [`More in Watches & Accessories`,`All`,`Men & Women Watches`,`Men & Women Sunglasses`,`Wallets`,`Men & Women Belts`,`Men Fashion Jewellery`,`Precious Articles`,`kids Accessories`,`Women Fashion Jewellery`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

v.appendChild(ele6);

});
v.addEventListener('mouseleave',function(){
  ele6.remove();
});

let o = document.querySelector('.list7');
// console.log(y);
let ele7;

o.addEventListener('mouseenter',function(){

   ele7 = document.createElement('div');
  ele7.classList.add("change-1", "dropdown-menu");
  let zz = ele7.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr =[`More in Women Western`,`All`,`Women Tops`,`Women Dresses`,`Women T-shirts & Polo T-shirts`,`Women jeans`,`Women Nighties & Night Dresses`,`Women Night Suits`,`Women Track Pants`,`Women Trouser`,`Women Jumpsuit`,`Women Shapewear`,`Women Sports Bra`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

o.appendChild(ele7);

});
o.addEventListener('mouseleave',function(){
  ele7.remove();
});

let d = document.querySelector('.list8');
// console.log(y);
let ele8;

d.addEventListener('mouseenter',function(){

   ele8 = document.createElement('div');
  ele8.classList.add("change-1", "dropdown-menu");
  let zz = ele8.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr =[`More in Bags, Suitcases $ Luggages`,`All`,`Bags & Backpacks`,`Suitcases & Trolleys`,`Dufflebags`,`Rucksacks`,`Handbags`,`Slingbags`,`Women's Clutches & Wallets`,`Messengers Bags`,`Travel Accessories`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

d.appendChild(ele8);

});
d.addEventListener('mouseleave',function(){
  ele8.remove();
});

let f = document.querySelector('.list9');
// console.log(y);
let ele9;

f.addEventListener('mouseenter',function(){

   ele9 = document.createElement('div');
  ele9.classList.add("change-1", "dropdown-menu");
  let zz = ele9.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr =[`More in Kids`,`All`,`Girls Dresses`,`Boys & Girls T-shirts`,`Boys & Girls Combosets`,`Boys & Girls Ethnic Wear`,`Boys & Girls Jeans`,`Boys & Girls Shorts`,`Boys & Girls Trackpants`,`Boys & Girls Innerwear`,`Infant Wear`,`Kids Slipper Flip Flops`,`Kids Sports Shoes`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

f.appendChild(ele9);

});
f.addEventListener('mouseleave',function(){
  ele9.remove();
});

let j = document.querySelector('.list10');
// console.log(y);
let ele10;

j.addEventListener('mouseenter',function(){

   ele10 = document.createElement('div');
  ele10.classList.add("change-1", "dropdown-menu");
  let zz = ele10.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr =[`More in Essentials`,`Men's Briefs & Trunks`,`Men's Vests`,`Men's Boxers`,`Women Lingerie Sets`,`Women Bra`,`Women Panty`,`Women Sarees`,`Women Kurtas`,`Women Kurta Sets & Salwar Suits`,`Boys Innerwear`,`Girls Innerwear`,`Women Slipper Flip Flops`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

j.appendChild(ele10);

});
j.addEventListener('mouseleave',function(){
  ele10.remove();
});

let p = document.querySelector('.list11');
// console.log(y);
let ele11;

p.addEventListener('mouseenter',function(){

   ele11 = document.createElement('div');
  ele11.classList.add("change-1", "dropdown-menu");
  let zz = ele11.appendChild(document.createElement('ul'));
  zz.classList.add("dropdown-lists");

  let arr =[`More in Winter`,`All`,`Men's Jackets`,`Men's SweatShirts`,`Men's Thermals`,`Women's Jackets`,`Women's SweatShirts`,`Women's Sweaters & Cardigans`,`Women's Shrugs`,`Kids SweatShirts`,`Women Kurtas`,`Boys Innerwear`,`Kids Jackets`];
  let i = 0;
  let xx;
  while(i<=arr.length-1){
  xx = zz.appendChild(document.createElement('li'));
    xx.classList.add("lists-items");
    xx.innerHTML = arr[i];


  i++;

  }

p.appendChild(ele11);

});
p.addEventListener('mouseleave',function(){
  ele11.remove();
});




// ***********************************************************************************************************

// x.forEach(async (element,index) => {
//   // console.log(index);
//   let ele;
//  await element.addEventListener('mouseenter', function () {
//     ele = document.createElement('div');
//     ele.classList.add("change-1", "dropdown-menu");
//     let zz = ele.appendChild(document.createElement('ul'));
//     zz.classList.add("dropdown-lists");
//     let xx;
//     let arr = [
//       [`More in Men's Top Wear`, `All`, `Men's T-Shirts`, `Men's Casual Shirts`, `Men's Formal Shirts`, `Men's Kurtas`, `Men's Ethnic Sets`, `Men's Blazers`, `Men's Raincoat`, `Men's Windcheaters`, `Men's Suit`, `Men's Fabrics`],

//       [`More in Men's Bottom Wear`, `All`, `Men's Jeans`, `Men's Trousers`, `Men's Trackpants`, `Men's Shorts`, `Men's Cargos`, `Men's Threefourths`, `Men's Pyjamas & Loungepants`, `Men's Dhoti`, `Men's Ethnic Pyjama`]
//     ]
    
//   for(i=0; i<=arr.length-1; i++){
   
//     let z = 0;
//     while(z<=arr[i].length-1){
//       // console.log(z);
//       xx = zz.appendChild(document.createElement('li'));
    
//       xx.classList.add("lists-items");
      
//       xx.innerHTML = arr[i][z];
      
  
    
//       z++;
      
//     }
    
  
//   }

  
  
//     element.appendChild(ele);
    
//   });

//   element.addEventListener('mouseleave', function () {
//     ele.remove();
//   });
// });

// let arr = [
//   [`More in Men's Top Wear`, `All`, `Men's T-Shirts`, `Men's Casual Shirts`, `Men's Formal Shirts`, `Men's Kurtas`, `Men's Ethnic Sets`, `Men's Blazers`, `Men's Raincoat`, `Men's Windcheaters`, `Men's Suit`, `Men's Fabrics`],

//   [`More in Men's Bottom Wear`, `All`, `Men's Jeans`, `Men's Trousers`, `Men's Trackpants`, `Men's Shorts`, `Men's Cargos`, `Men's Threefourths`, `Men's Pyjamas & Loungepants`, `Men's Dhoti`, `Men's Ethnic Pyjama`]
// ]
// let i =0;
// while(i<=arr.length-1){
//   let z = 0;
//   while(z<=arr[i].length-1){
//     console.log(arr[i][z]);

//     z++;
//   }
//   i++;
// }

// console.log(arr.length);


// *******************************************************************************************************************










