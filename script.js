let insetoSelecionado = "";

let animalSelecionado = "";




// =========================
// INICIAR MISSÃO
// =========================


function iniciar(){


document.getElementById("inicio").classList.add("escondido");


document.getElementById("jogo").scrollIntoView({
behavior:"smooth"
});


}





// =========================
// ESCOLHER INSETO
// =========================


function selecionarInseto(inseto){


insetoSelecionado = inseto;



document.getElementById("insetos").classList.add("escondido");



document.getElementById("animais").classList.remove("escondido");



document.getElementById("animais").scrollIntoView({

behavior:"smooth"

});


}








// =========================
// ESCOLHER ANIMAL
// =========================


function selecionarAnimal(animal){


animalSelecionado = animal;



document.getElementById("animais").classList.add("escondido");



mostrarResultado();



}









// =========================
// MOSTRAR RESULTADO
// =========================


function mostrarResultado(){



let produto = "";

let comoFunciona = "";

let usar = "";

let cuidado = "";






// MOSQUITO


if(insetoSelecionado == "mosquito"){



produto = 
"🧴 Repelentes ou produtos para controle de mosquitos (ex.: Icaridina, DEET ou IR3535)";



comoFunciona =

"Esses produtos ajudam a evitar que o mosquito encontre as pessoas. Alguns inseticidas usados contra mosquitos agem no sistema de comunicação do inseto.";



usar =

"Use somente a quantidade indicada no rótulo. Também é importante eliminar água parada, pois ela é um local onde o mosquito pode nascer.";



cuidado =

"Não aplicar produtos diretamente em animais de estimação. Evite usar mais produto do que o recomendado.";

}





// BARATA


else if(insetoSelecionado == "barata"){



produto =

"🪳 Iscas em gel para baratas (ex.: produtos com Fipronil ou Imidacloprido)";



comoFunciona =

"Esses produtos possuem substâncias que atrapalham o funcionamento do sistema nervoso da barata.";





usar =

"Coloque pequenas quantidades em locais onde as baratas passam, como cantos e frestas.";





cuidado =

"Não colocar perto de alimentos. Manter longe das crianças e dos animais.";

}








// FORMIGA


else if(insetoSelecionado == "formiga"){



produto =

"🐜 Iscas para formigas (produtos feitos para serem levados até o formigueiro)";



comoFunciona =

"A formiga leva o produto para a colônia, ajudando a controlar o problema no local onde elas vivem.";



usar =

"Coloque a isca perto do caminho das formigas e evite mexer nela enquanto as formigas estão levando o produto.";



cuidado =

"Não espalhar inseticida pela casa sem necessidade.";

}








// MOSCA


else if(insetoSelecionado == "mosca"){



produto =

"🪰 Armadilhas e produtos específicos para controle de moscas";



comoFunciona =

"Alguns produtos interferem no funcionamento do sistema nervoso das moscas.";



usar =

"Primeiro cuide da limpeza do ambiente e depois utilize produtos quando necessário.";



cuidado =

"Evite contato com alimentos e mantenha animais afastados durante o uso.";

}








// ANIMAL DE ESTIMAÇÃO



let avisoAnimal = "";




if(animalSelecionado=="gato"){



avisoAnimal =

"🐱 Você tem gato: tenha cuidado extra, pois alguns produtos podem ser perigosos para eles.";


}




else if(animalSelecionado=="cachorro"){



avisoAnimal =

"🐶 Você tem cachorro: mantenha o animal longe durante a aplicação e siga as instruções do produto.";


}



else if(animalSelecionado=="outro"){



avisoAnimal =

"🐰 Você possui outro animal: sempre verifique se o produto é seguro para ele.";


}



else{


avisoAnimal =

"🌱 Mesmo sem animais, o uso correto protege o ambiente.";


}









document.getElementById("resposta").innerHTML =



`

<h3>🦟 Inseto escolhido:</h3>

<p>${insetoSelecionado}</p>



<h3>🧴 Melhor escolha:</h3>

<p>${produto}</p>




<h3>🔎 Como funciona:</h3>

<p>${comoFunciona}</p>




<h3>📌 Como usar:</h3>

<p>${usar}</p>




<h3>⚠️ Cuidados importantes:</h3>

<p>${cuidado}</p>




<h3>${avisoAnimal}</h3>



<hr>



<h3>🧪 Curiosidade do laboratório:</h3>


<p>

Os inseticidas possuem pequenas moléculas que conseguem agir no corpo dos insetos.

Por isso, devemos escolher o produto certo e usar com cuidado para proteger outros seres vivos.

</p>



`;






document.getElementById("resultado").classList.remove("escondido");


document.getElementById("escolhaProduto").classList.remove("escondido");



document.getElementById("resultado").scrollIntoView({

behavior:"smooth"

});



}

function avaliarEscolha(){


let escolhas = [];


let caixas = document.querySelectorAll(
"#escolhaProduto input:checked"
);



caixas.forEach(function(item){

escolhas.push(item.value);

});




let analise = "";

let pontos = 0;



if(escolhas.length == 0){


analise =

`

<h3>🤔 Nenhuma opção escolhida</h3>

<p>

Um cientista primeiro observa o problema antes de escolher uma solução.

Tente selecionar uma estratégia.

</p>

`;


}

else{





// ========================
// ANALISA SPRAY
// ========================


if(escolhas.includes("spray")){


pontos -= 1;


analise +=

`

<h3>🧴 Spray inseticida</h3>

<p>

⚠️ Atenção!

O spray pode espalhar o produto pelo ambiente.

É importante evitar contato com crianças, alimentos e animais.

</p>

`;



if(animalSelecionado=="gato"){


pontos -= 2;


analise +=

`

<p>

🐱 Como existe gato na casa, o cuidado deve ser maior.

Algumas substâncias podem ser prejudiciais para felinos.

</p>

`;

}


}







// ========================
// ANALISA GEL
// ========================


if(escolhas.includes("gel")){


pontos += 2;


analise +=


`

<h3>🟢 Isca em gel</h3>


<p>

✅ Boa estratégia!

A isca fica em um local específico e reduz a quantidade de produto espalhado no ambiente.

Mesmo assim, deve ficar longe de crianças e animais.

</p>

`;



}








// ========================
// ANALISA REPELENTE
// ========================


if(escolhas.includes("repelente")){


pontos += 1;


analise +=


`

<h3>🌿 Repelente</h3>


<p>

O repelente pode ajudar a evitar picadas.

Use somente conforme a indicação do rótulo.

</p>


`;



}








// ========================
// ANALISA ARMADILHA
// ========================


if(escolhas.includes("armadilha")){


pontos += 3;


analise +=


`

<h3>🪤 Armadilha</h3>


<p>

⭐ Excelente escolha!

Muitas armadilhas controlam insetos sem espalhar substâncias químicas pelo ambiente.

</p>


`;



}









// ========================
// ANALISA COMBINAÇÕES
// ========================



if(escolhas.includes("spray") && escolhas.includes("gel")){


pontos -= 1;


analise +=


`

<h3>⚠️ Mistura de estratégias</h3>


<p>

Usar vários produtos ao mesmo tempo nem sempre é melhor.

O excesso de produtos pode aumentar o contato de pessoas e animais com substâncias químicas.

</p>


`;



}






if(escolhas.length >= 3){


pontos -=1;


analise +=


`

<h3>⚠️ Muitas escolhas</h3>


<p>

Um bom cientista escolhe a solução mais adequada, não necessariamente a maior quantidade de produtos.

</p>


`;



}







// ========================
// RESULTADO FINAL
// ========================



if(pontos >= 4){


analise +=


`

<hr>

<h2>🏆 Cientista responsável!</h2>

<p>

Sua escolha mostrou preocupação com segurança e ambiente.

</p>


`;



}

else if(pontos >=1){


analise +=


`

<hr>


<h2>👍 Boa escolha!</h2>


<p>

Você está no caminho certo. Sempre leia o rótulo e pense em quem pode ser afetado.

</p>


`;



}

else{


analise +=


`

<hr>


<h2>🔬 Vamos melhorar essa estratégia!</h2>


<p>

Antes de usar um produto, pense:

"Qual opção resolve o problema causando menos impacto?"

</p>


`;



}



}






document.getElementById("analiseEscolha").innerHTML = analise;



document.getElementById("resultadoEscolha").classList.remove("escondido");



document.getElementById("resultadoEscolha").scrollIntoView({

behavior:"smooth"

});



}






// =========================
// NOVA MISSÃO
// =========================



function reiniciar(){


location.reload();


}