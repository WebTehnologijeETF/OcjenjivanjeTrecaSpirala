function Sakrij()
{	
	var a=document.getElementById("KategorijeMeni");
	var b=document.getElementById("Nakit");
	console.log(a.style.visibility);
	if(a.classList.contains("hidden"))
	{
		a.style.visibility="visible";
		a.className="";
		
		b.innerHTML="▲ KATEGORIJE";
		

	}
	else{
		a.className="hidden";
	b.innerHTML="▼ KATEGORIJE";
	a.style.visibility="hidden";
	}
}

function Sakrijbizuterija()
{	
	var a=document.getElementById("NakitBizuterija");
	var b=document.getElementById("Nakit");
	console.log(a.style.visibility);
	if(a.classList.contains("hidden"))
	{
		a.style.visibility="visible";
		a.className="";
		
		b.innerHTML="▲ Bizuterija";
		

	}
	else{
		a.className="hidden";
	b.innerHTML="▼ Bizuterija";
	a.style.visibility="hidden";
	}
}

 function displayNextImage() {
              x = (x === images.length - 1) ? 0 : x + 1;
              document.getElementById("img").src = images[x];
          }

         

          function startTimer() {
              setInterval(displayNextImage, 1000);
          }

          var images = [], x = -1;
          images[0] = "http://www.clarajewellery.com/wp-content/uploads/500x500xgold-jewelry-tumblr-kghm.jpg.pagespeed.ic._Qb-ZE9mWx.jpg";
          images[1] = "http://25.media.tumblr.com/26257e599ae135e265a7fa2f038c38d0/tumblr_mlbyz9ve571qm6lcio1_400.jpg";
          images[2] = "https://31.media.tumblr.com/e5f9a16b844fdc30c91402f051dd500d/tumblr_inline_mmvxxlKutN1qz4rgp.jpg";
		 images[3]=" https://41.media.tumblr.com/b81af7cb5c91485fe63da4eb30bada7c/tumblr_my76qdP89d1rp7tbzo1_500.jpg";
		 images[4]="http://25.media.tumblr.com/tumblr_m5q1c9JFi11rvml7ro1_500.jpg";
		 images[5]=" http://data1.whicdn.com/images/19611812/large.jpg";
		 images[6]=" http://30.media.tumblr.com/tumblr_m3jco0r0mS1r0ezqso1_400.jpg";
		 images[7]=" http://favim.com/orig/201106/01/jewelry-lovely-necklaces-new-york-phone-runawaylove.blogg.no-Favim.com-62580.jpg";
		 images[8]=" http://s9.favim.com/orig/131023/fashion-girly-jewelry-luxury-Favim.com-1011219.jpg";