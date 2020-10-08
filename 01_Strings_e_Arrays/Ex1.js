//Atividade de DAW II
//Nome: Eduardo Correia
//RA: 19120
//Turma: 2INFD

var texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis justo dolor. Nulla facilisi. Vestibulum finibus eu justo eget elementum. Curabitur molestie ullamcorper risus, a eleifend magna. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibust COTIL vestibulum. Curabitur bibendum eu est consequa maximus. Nulla facilisi. In massa nisi, vestibulum ut cursus et, congue vitae nunc. Duis nunc magna, semper ut leo sed.';

if(texto.includes('COTIL')){
    let splittedText = texto.split('COTIL');
    console.log(`A palavra "COTIL" foi encontrada no caracter nº ${splittedText[0].length}!`)
}else{
    console.log('A palavra COTIL não foi encontrada!')
}