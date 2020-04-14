function visualizar(){
	
	var superiorEsquerdo = document.getElementById("superiorEsquerdo").value
	var caixa = document.getElementById("caixa").style.borderTopLeftRadius = superiorEsquerdo + "px"
	
	var superiorDireito = document.getElementById("superiorDireito").value
	var caixa = document.getElementById("caixa").style.borderTopRightRadius = superiorDireito + "px"
	
	var inferiorDireito = document.getElementById("inferiorDireito").value
	var caixa = document.getElementById("caixa").style.borderBottomRightRadius = inferiorDireito + "px"
	
	var inferiorEsquerdo = document.getElementById("inferiorEsquerdo").value
	var caixa = document.getElementById("caixa").style.borderBottomLeftRadius = inferiorEsquerdo + "px"

	var codigo = document.getElementById("codigo").innerHTML = "border-top-left-radius: " + superiorEsquerdo + "px;" + "<br>" +
	"border-top-right-radius: " + superiorDireito + "px;" + "<br>" +
	"border-botton-right-radius: " + inferiorDireito + "px;" + "<br>" +
	"border-botton-left-radius: " + inferiorEsquerdo + "px;"
}
