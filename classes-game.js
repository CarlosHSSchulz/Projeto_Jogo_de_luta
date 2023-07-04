
class Character {

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }
    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Knight extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;

    }
}
class Sorcerer extends Character {
    constructor(name) {
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;

    }
}

class litleMonster extends Character {
    constructor() {
        super('Pequeno Monstro');
        this.life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;

    }
}
class bigMonster extends Character {
    constructor() {
        super('Grande Monstro');
        this.life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;

    }
}
// a partir de agora vamos definir o que vai acontecer na tela.
// por exemplo, quem são os lutadores, a vida dos lutadores, etc.

// na primeira função definimos o cenário (Stage).
class Stage {
    constructor(fighter1, fighter2, fighter1EL, fighter2EL, logObject) {
// para inicio devemos identificar quem são os jogadores e seus elementos.        
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1EL = fighter1EL;
        this.fighter2EL = fighter2EL;
        this.log = logObject;
    }
// função para começar o jogo
// esta função deve colocar o nome dos jogadores na tela e as funções de atacar
    start() {
        // este comando atualiza a tela com as informações dos jogadores
        this.update();
        // agora uma função para gerar evento de click na função de atacar
        this.fighter1EL.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));
        this.fighter2EL.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));
    }

    update() {
        // figther 1
        this.fighter1EL.querySelector('.name').innerHTML = `${this.fighter1.name} está com ${this.fighter1.life.toFixed(1)} de vida`;
        // para calcular a vida do personagem em porcentagem
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1EL.querySelector('.bar').style.width = `${f1Pct}%`;
        // figther 2
        this.fighter2EL.querySelector('.name').innerHTML = `${this.fighter2.name} está com ${this.fighter2.life.toFixed(1)} de vida`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2EL.querySelector('.bar').style.width = `${f2Pct}%`;

    
    }
    doAttack(attacking, attacked) {
        if(attacking.life <= 0 || attacked.life <= 0){
            this.log.addMessage("Atacando cachorro morto...")
            return;
        }
        // vamos criar a seguir um fator de ataque que vai ser aleatório, mas com chanse aumentada de acordo com a força de ataque.
         let attackFactor = (Math.random() * 2).toFixed(2);
         let defenseFactor = (Math.random() * 2).toFixed(2);
         // agora ele pega o valor de ataque e multiplica pela força
         let actualAttack = attacking.attack * attackFactor;
         let actualDefense = attacked.defense * defenseFactor;
         //abaixo criamos a defesa
         
         

        this.update;

        if(actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)
        }else{
            this.log.addMessage(`${attacked.name} conseguiu se defender do ataque!!`)
        }

        this.update();
    }
}

// vamos criar uma class abaixo para o log

class Log {
    list = [];

    constructor(listEL) {
        this.listEL = listEL;

    }
        

    addMessage(msg) {
        this.list.unshift(msg);
        this.render();
    }

    render() {
        this.listEL.innerHTML = '';

        for(let i in this.list) {
            this.listEL.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}