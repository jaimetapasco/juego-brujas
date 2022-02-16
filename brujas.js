//Juego de las brujas By Jaime Tapasco

function witchtype (type) {
    this.type = type;
    }
    //BRUJAS ARRAY
    var witchStats = new Array();
    witchStats[0] = new witchtype("Doris la bruja");
    witchStats[1] = new witchtype("Dorotea la bruja");
    witchStats[2] = new witchtype("Sara la bruja");
    witchStats[3] = new witchtype("Juana la bruja");
    
   
    
    //PUEBLOS ARRAY
    function move (move, basedmg) {
    this.move = move;
    this.basedmg = basedmg;
    }
    var moves = new Array();
    moves[0] = new move("Pueblo Tornado", 50);
    moves[1] = new move("Pueblo Hoja", 40);
    moves[2] = new move("Pueblo Estrella", 36);
    moves[3] = new move("Pueblito Paisa", 44);
    
    //LLAMADO A BRUJA
    //LLAMA ID BRUJA
    var witchtypeid;
    callwitchtypeid = function(){
    witchtypeid = Math.floor(Math.random() * witchStats.length);
    };
    //NIVEL DE LA BRUJA
    var witchtypeLevel;
    callwitchtypeLevel = function(){
    witchtypeLevel = Math.floor(Math.random() * 6 + 1);
    };
    //SALUD PUEBLOS   
    var witchtypeHealth;
    callwitchtypeHealth = function(){
    witchtypeHealth = Math.floor(Math.random() + witchtypeLevel + 3);
    };
    //ATAQUE A PUEBLO
    var moveid;
    callMoveid = function(){
    moveid = Math.floor(Math.random() * moves.length);
    };
    //DAÑO A PUEBLO 
    var damage;


    //DAÑO DE ATAQUE A PUEBLO
    callMoveDamage = function(){
    damage = Math.floor(Math.random() * moves[callMoveid].basedmg + 3);
    };


    //DAÑO ATAQUE DE BRUJA
    callPlayerMoveDamage = function() {
    damage = Math.floor(Math.random() * moves[playerMove].basedmg + 3);
    };

    
    //ATAQUE DE LA BRUJA
    function selectMove(){
        debugger;
    playerMove = prompt("Puedes atacar a cualquiera de estos 4 pueblos, " + moves[0].move + ", 20 km" + moves[1].move + ", " + moves[2].move + " y " + moves[3].move + ", a que pueblo quieres atacar?").toUpperCase();
    if (playerMove === ""){
    selectMove();
    }
    else
    {
    switch(playerMove){
    case 'PUEBLO TORNADO':
    playerMove = 0;    
    callPlayerMoveDamage();
    playerAttack();
    break;
    case 'PUEBLO HOJA':
    playerMove = 1;
    callPlayerMoveDamage();
    playerAttack();
    break;
    case 'PUEBLO ESTRELLA':
    playerMove = 2;
    callPlayerMoveDamage();
    playerAttack();
    break;
    case 'PUEBLITO PAISA':
    playerMove = 3;    
    callPlayerMoveDamage();
    playerAttack();
    break;
    default : 
    alert('Este pueblo no existe');
    selectMove();
    break;
    }
    }
    }
    

   
    //EL ATAQUE DE LA BRUJA
    function witchtypeAttack(){
    if (witchHealth > 0){
    witchHealth = witchHealth - damage;
    alert("Es una descision dificil !! , solo tiene 10 hras para ir y  regresar; " + witchStats[witchtypeid].type + " el pueblo mas cercano es " + moves[moveid].move + " puede ir por comida y almacenarla en su pueblo " + damage + " recibe daño!");
    attackLoop();}
    else
    {
    alert("Bruja no pudo ir por comida");
    }
    }
    //ATAQUE DE LA BRUJA AL PUEBLO
    function playerAttack(){
    alert ("Changos!! el " + moves[playerMove].move + " es saqueado, y le quitan " + damage + "niveles de reserva ... ");
    if (witchtypeHealth > 0) 
    {
    witchtypeHealth = witchtypeHealth - damage;
    alert(witchStats[witchtypeid].type + " tiene " + witchtypeHealth + " salud del pueblo restante!");
    playerTurn = false;
    witchtypeFaint()
    }
    else
    {
    alert(witchStats[witchtypeid].type + " no puede cargar mas en su escoba y regresa a su pueblo, es hora de descanzar , mañana sera otro dia!!");
    }
    }




    //SE ELIGE LA BRUJA
    function randomwitch(){
    callwitchtypeid();
    callwitchtypeHealth();
    callwitchtypeLevel();
    callMoveid();
    }
    var witchHealth = 100;



    //INICIO DE VUELO
    function startFly(){
    randomwitch();
    alert("Se oculta el Sol y " + witchStats[witchtypeid].type + " va en busca de comida");
    alert(witchStats[witchtypeid].type + " quiere ir a un pueblo cercano,  tiene una escoba nivel " + witchtypeLevel + " y esto equivale a la cantidad de comida que puede cargar... " + witchtypeHealth);
    playerTurn = false;
    attackLoop();
    }
    function attackLoop(){
    if (playerTurn === false)
    {
    playerTurn = true;
    witchtypeAttack();
    }
    else
    {
    playerTurn = false;
    selectMove();
    }
    }
    function witchtypeFaint(){
    if (witchtypeHealth < 1){
    alert(witchStats[witchtypeid].type + " no puede cargar mas");}
    else
    {    attackLoop();}
    }
    startFly();
    