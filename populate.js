function setBGandColor(a,b){document.body.style.backgroundColor=a,document.body.style.color=b}window.onload=function(){var a=new Date,b=a.getHours();b>=19&&b<=23&&setBGandColor("#616161","black");document.getElementById("sections");secs=["PPKn","Kimia","Sejarah","Agama","Inggris","Ekonomi","Biologi"],files=[["-,#"],["-,#"],["Pengaruh Eropa,Pengaruh Eropa.pptx"],["-,#"],["-,#"],["-,#"],["Sel,sel.pptx","Jaringan Tumbuhan,jaringan tumbuhan.pptx"]],collapSubDiv=document.getElementById("collapSub"),secs.forEach(function(a){var b=document.create Element("li");subDivH=document.createElement("div"),subDivH.className="collapsible-header",subDivH.innerHTML=a,subDivB=document.createElement("div"),subDivB.className="collapsible-body",subContain=document.createElement("div"),subContain.id="subject",subContain.className="collection",c=files[secs.indexOf(a)],c.forEach(function(b){mat=b.split(",");var c=document.createElement("a");c.setAttribute("href","sub/"+a.toLowerCase()+"/"+mat[1]),c.className="collection-item",c.innerHTML=mat[0],subContain.appendChild(c)}),subDivB.appendChild(subContain),b.appendChild(subDivH),b.appendChild(subDivB),collapSubDiv.appendChild(b)})};