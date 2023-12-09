//o método para selecionar os elementos do tipo figcaption retorna um HTMLCollection
var item = document.getElementsByTagName("figcaption");
console.log(item)

//index do elemento na array do HTMLCollection que você deseja selecionar
var indexDeputado = 1

//método item do objeto HTMLCollection para acessar um dos elementos pelo index passado por parâmetro
var figcaption = item.item(indexDeputado)
console.log(figcaption)

//propriedade innerText do elemento selecionado para pegar apenas o texto
var texto = figcaption.innerText
console.log(texto)

//selecionando o span
var span = document.getElementById("p1")

// atribuindo texto a propriedade innerText do span
span.innerText = texto