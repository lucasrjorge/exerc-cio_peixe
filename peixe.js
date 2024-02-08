var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create, 
        update: update,
    },

};

var game = new Phaser.Game(config);

function preload() {
    this.load.image("oceano", 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('algas', 'assets/peixes/algas.png');
    this.load.image('algas2', 'assets/peixes/algas2.png');
    this.load.image('baiacu', 'assets/peixes/baiacu.png');
    this.load.image('branco', 'assets/peixes/peixe_logo.png');
    this.load.image('roxo', 'assets/peixes/peixinho_roxo.png');
    this.load.image('areia', 'assets/peixes/areia.png');
    this.load.image('tuba', 'assets/peixes/tubarao.png');
    this.load.image('azul', 'assets/peixes/peixinho_azul.png');


}
function create() {   
    //adicionar fundo e logo
    this.add.image(400, 300, "oceano");
    this.add.image(400, 525, 'logo').setScale(0.5);
    //adicionar baiacu e torna-lo uma variável
    baiacu = this.add.image(400, 300, 'baiacu');
    baiacu.setFlip(true, false);
    //add algas
    this.add.image(400, 500, 'algas').setScale(0.4).setOrigin(1.5, 0.4);
    this.add.image(400, 500, 'algas2').setScale(0.4).setOrigin(-1, 0.4);
    //areia não está funcionando e eu não faço ideia do por quê, não parece ser um erro de código e muito menos com a imagem
    this.add.image(400, 525, 'areia');
    //add outros peixes
    this.add.image(420, 535, 'branco').setScale(0.5).setOrigin(-1, 0,1);
    this.add.image(700, 200, 'roxo');
    this.add.image(200, 100, 'azul');
    //transformar tubarão em uma variável 
    tuba = this.add.image(400, 300, 'tuba').setScale(1.5);
    tuba.setFlip(true, false);

   
}
function update() {
//baiacu segue o mouse
baiacu.x = this.input.x;
baiacu.y = this.input.y;
//tubarão segue o baiacu mas um pouco atrasado
tuba.x = baiacu.x - 150
tuba.y = baiacu.y - 120
}
