function setBGandColor(a,b){document.body.style.backgroundColor=a,document.body.style.color=b}window.onload=function(){var a=new Date,b=a.getHours();b>=19&&b<=23&&setBGandColor("#616161","black");document.getElementById("sections");secs=["PPKn","Kimia","Sejarah","Agama","Inggris","Ekonomi","Biologi","Bahasa Indonesia"],files=[["Hak Asasi Manusia,PPKn X1   BIMTEK BESOK.pptx","Kehidupan Konstitusional Berbangsa dan Bernegara,PKn X1 BG 2.pptx"],[],["Pengaruh Eropa,Pengaruh Eropa.pptx"],["Keluarga Sebagai Pusat Utama Pendidikan,agama kls XI.pptx"],[],[],["Sel,sel.pptx","Jaringan Tumbuhan,jaringan tumbuhan.ppt"],["Analisis Pantun,ANALISIS PANTUN XI.ppt"]],collapSubDiv=document.getElementById("collapSub"),secs.forEach(function(a){var b=document.createElement("li");subDivH=document.createElement("div"),subDivH.className="collapsible-header",subDivH.innerHTML=a,subDivB=document.createElement("div"),subDivB.className="collapsible-body",subContain=document.createElement("div"),subContain.id="subject",subContain.className="collection",c=files[secs.indexOf(a)],c.forEach(function(b){mat=b.split(",");var c=document.createElement("a");c.setAttribute("href","sub/"+a.toLowerCase()+"/"+mat[1]),c.className="collection-item",c.innerHTML=mat[0],subContain.appendChild(c)}),subDivB.appendChild(subContain),b.appendChild(subDivH),b.appendChild(subDivB),collapSubDiv.appendChild(b)})};