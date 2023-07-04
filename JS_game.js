let log = new Log(document.querySelector('.log'));

let char = new Knight('Carlos');
let monster = new litleMonster();

let stage = new Stage(
    // fighter 1 é:
    char,
    // fighter 2 é:
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster"),
    log
);

stage.start();