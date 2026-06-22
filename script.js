
let insetoSelecionado="";
let animalSelecionado="";



function iniciar(){

document.getElementById("inicio").classList.add("escondido");

document.getElementById("insetos").classList.remove("escondido");

}





function selecionarInseto(inseto){


insetoSelecionado=inseto;


document.getElementById("insetos").classList.add("escondido");


document.getElementById("animais").classList.remove("escondido");


}







function selecionarAnimal(animal){


animalSelecionado=animal;


document.getElementById("animais").classList.add("escondido");


mostrarResultado();


}









function mostrarResultado(){


let produto="";
let mecanismo="";
let uso="";
let cuidado="";



if(insetoSelecionado=="barata"){


produto=
"🟢 Isca em gel para baratas (ex.: formulações contendo Fipronil ou Imidacloprido)";


mecanismo=
"Esses inseticidas atuam no sistema nervoso do inseto. O Fipronil interfere nos canais de GABA, causando hiperexcitação das células nervosas. O Imidacloprido atua nos receptores nicotínicos de acetilcolina, prejudicando a transmissão dos sinais nervosos.";


uso=
"Aplicar pequenas quantidades em frestas, cantos, atrás de móveis e locais onde as baratas circulam. As iscas são preferíveis porque reduzem a dispersão do produto no ambiente.";


cuidado=
"Evitar aplicação em superfícies de preparo de alimentos. Manter longe de crianças e animais domésticos, principalmente gatos.";

}




else if(insetoSelecionado=="mosquito"){


produto=
"🟢 Controle ambiental + repelentes registrados (ex.: produtos contendo DEET, Icaridina ou IR3535)";


mecanismo=
"Os repelentes interferem na capacidade do mosquito de localizar o hospedeiro através de sinais químicos. Já inseticidas utilizados em controle de mosquitos podem atuar em canais nervosos, como os modulados por piretroides.";


uso=
"Eliminar água parada, manter ambientes limpos e utilizar repelentes conforme indicação do rótulo.";


cuidado=
"Não aplicar repelentes diretamente em animais. Evitar uso excessivo em ambientes fechados.";

}





else if(insetoSelecionado=="formiga"){


produto=
"🟢 Iscas formicidas (ex.: produtos com Fipronil, Sulfluramida ou reguladores de crescimento de insetos)";


mecanismo=
"As formigas levam o produto para a colônia. Dependendo do princípio ativo, ocorre alteração do sistema nervoso ou interferência no desenvolvimento dos insetos.";


uso=
"Colocar as iscas próximas aos caminhos das formigas e permitir que elas transportem o produto até o ninho.";


cuidado=
"Não aplicar inseticida diretamente sobre alimentos ou locais acessíveis aos animais.";

}





else if(insetoSelecionado=="mosca"){


produto=
"🟢 Armadilhas, controle sanitário e inseticidas registrados à base de piretroides (ex.: permetrina ou deltametrina)";


mecanismo=
"Os piretroides alteram o funcionamento dos canais de sódio das células nervosas dos insetos, causando perda da coordenação e morte do organismo.";


uso=
"Priorizar higiene, retirada de resíduos e uso de armadilhas. Aplicações químicas devem seguir rigorosamente o rótulo.";


cuidado=
"Evitar contato de animais domésticos com superfícies tratadas até completa secagem.";

}





else{


produto=
"🟡 Identificar corretamente o inseto antes de escolher o produto.";


mecanismo=
"Cada inseticida possui um alvo molecular específico e pode apresentar diferentes efeitos em organismos não alvo.";


uso=
"Utilizar apenas produtos registrados e seguir as recomendações do fabricante.";


cuidado=
"Nunca misturar inseticidas diferentes.";

}






let alerta="";


if(animalSelecionado=="gato"){


alerta=

"🐱 Atenção: gatos possuem metabolismo diferente de outros animais e podem ser mais sensíveis a alguns compostos inseticidas. Evite contato direto com áreas tratadas.";

}


else if(animalSelecionado=="cachorro"){


alerta=

"🐶 Atenção: mantenha cães afastados durante aplicações e siga o tempo de segurança indicado no rótulo.";

}


else{


alerta=

"🌱 Sempre considere os organismos não alvo antes de aplicar qualquer produto.";

}





document.getElementById("resposta").innerHTML =


`

<h3>🦟 Inseto escolhido:</h3>

<p>${insetoSelecionado}</p>


<h3>🧪 Inseticida recomendado:</h3>

<p>${produto}</p>


<h3>🧬 Como o inseticida funciona:</h3>

<p>${mecanismo}</p>


<h3>📝 Como utilizar:</h3>

<p>${uso}</p>


<h3>⚠️ Cuidados importantes:</h3>

<p>${cuidado}</p>


<h3>${alerta}</h3>


<hr>


<h3>🔬 Conexão com a Bioquímica</h3>

<p>

Os inseticidas possuem moléculas capazes de interagir com proteínas,
enzimas e receptores celulares dos insetos. 
O uso racional busca atingir o organismo alvo reduzindo efeitos
sobre humanos, animais domésticos e ambiente.

</p>


`;



document.getElementById("resultado").classList.remove("escondido");


}







function reiniciar(){


location.reload();


}