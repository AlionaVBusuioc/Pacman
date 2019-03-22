//LEGEND
//0 -empty
//1 - banan 1
//3 - banan 3
//4 - bomb;
//5 - wall;
//6 - meanion
//9 - pacman
//var timer = null;
var pac_r = 4;
var pac_c = 4;
var min_r = 8;
var min_c = 8;
var pac_health = 100; //bomb->10 ->#stats, if health <=0 alert(Game over)
//checkBanana() <<< checkBomb() +20 health #stats
var map = [
  [0, 1, 0, 0, 0, 0, 0, 3, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 9, 4, 0, 0, 0, 0],
  [0, 6, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 6, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
//alert(map[4][4]);
function checkBomb() {
  if(map[pac_r][pac_c] == 4){
    map[pac_r][pac_c] = 10;
  }else{
    map[pac_r][pac_c] = 9;
  }
}
function action(){
 console.log(event.keyCode);
 switch(event.keyCode){
   case 37: moveLeft(); break;
   case 38: moveUp(); break;
   case 39: moveRight(); break;
   case 40: moveDown(); break;
 }
}
function randBombs(amount){
 amount = amount || 5; //init
  while(amount--){//-->for()
  var r_r = randCoord();
  var r_c = randCoord();
  map[r_r][r_c] = 4;
}
}
// + randomBananas()
//randBombs();
//randBombs(2);
// function randWalls(amount){
//   amount = amount || 5; //init
//   while(amount--){//-->for()
//   var r_r = randCoord();
//   var r_c = randCoord();
//   var dir = Math.random()>0.5?'vt':'hz';
//   for(var l=0; l<randCoord()/2; l++){
//
//     if(dir=='vt'){
//         if(r_r+l>9) break;
//   map[r_r+l][r_c] = 5;
// }else{
//   if(r_c+l>9) break;
//     map[r_r][r_c+l] = 5;
// }
// }
// }
// }
// randWalls(3);
// function randCoord(){
//   return Math.ceil(Math.random()*9);
// }

function randBanan1(amount){
   amount = amount || 1; //init
  while(amount--){//-->for()
  var r_r = randCoord();
  var r_c = randCoord();
  var dir = Math.random()>0.5?'vt':'hz';
  for(var l=0; l<randCoord()/2; l++){

    if(dir=='vt'){
        if(r_r+l>9) break;
  map[r_r+l][r_c] = 1;
}else{
 if(r_c+l>9) break;
    map[r_r][r_c+l] = 1;
}
}
}
}
randBanan1(3);
function randCoord(){
  return Math.ceil(Math.random()*9);
}
function randBanan3(amount){
   amount = amount || 3; //init
 while(amount--){//-->for()
  var r_r = randCoord();
  var r_c = randCoord();
  var dir = Math.random()>0.5?'vt':'hz';
  for(var l=0; l<randCoord()/2; l++){

    if(dir=='vt'){
        if(r_r+l>9) break;
  map[r_r+l][r_c] = 3;
}else{
 if(r_c+l>9) break;
    map[r_r][r_c+l] = 3;
}
}
}
}
randBanan3(3);
function randCoord(){
  return Math.ceil(Math.random()*9);
}
function moveRight(){
  if(pac_c<9&&map[pac_r][pac_c+1]!=5){
  map[pac_r][pac_c] = 0; //delete from current location
  pac_c++; //step to right
  checkBomb();
  //
  // if(map[pac_r][pac_c] == 4){
  //   map[pac_r][pac_c] = 10;
  // }else{
  //   map[pac_r][pac_c] = 9;
  // }
  //
  map[pac_r][pac_c] == 9; //show in new coords
}
  showMap();
}
function moveLeft(){
  if(pac_c>0&&map[pac_r][pac_c-1]!=5){
  map[pac_r][pac_c] = 0; //delete from current location
  pac_c--; //step to left
  checkBomb();
//  map[pac_r][pac_c] = 9; //show in new coords
}
  showMap();
}
function moveUp(){
  if(pac_r>0&&map[pac_r-1][pac_c]!=5){
  map[pac_r][pac_c] = 0; //delete from current location
  pac_r--; //step to left
  checkBomb();
  //map[pac_r][pac_c] = 9; //show in new coords
}
  showMap();
}
function moveDown(){
  if(pac_r<9&&map[pac_r+1][pac_c]!=5){
  map[pac_r][pac_c] = 0; //delete from current location
  pac_r++; //step to left
  checkBomb();
  //map[pac_r][pac_c] = 9; //show in new coords
}
  showMap();
}
function moveMinionRight(){
  if(min_c<9&&map[min_r][min_c+1]!=5){
  map[min_r][min_c] = 0; //delete from current location
  min_c++; //step to right
  if(map[min_r][min_c] == 1){
    MinionFollow();
  }
  //checkBomb();
  //
  // if(map[pac_r][pac_c] == 4){
  //   map[pac_r][pac_c] = 10;
  // }else{
  //   map[pac_r][pac_c] = 9;
  //min
  //
  map[min_r][min_c] = 6; //show in new coords
}
  showMap();
}
function moveMinionLeft(){
  if(min_c>0&&map[min_r][min_c-1]!=5){
  map[min_r][min_c] = 0; //delete from current location
  min_c--; //step to left
  if(map[min_r][min_c] == 1){
    MinionFollow();
  }
  //checkBomb();
 map[min_r][min_c] = 6; //show in new coords
}
  showMap();
}
function moveMinionUp(){
  if(min_r>0&&map[min_r-1][min_c]!=5){
  map[min_r][min_c] = 0; //delete from current location
  min_r--; //step to left
  if(map[min_r][min_c] == 1){
    MinionFollow();
  }
  //checkBomb();
  map[min_r][min_c] = 6; //show in new coords
}
  showMap();
}
function moveMinionDown(){
  if(min_r<9&&map[min_r+1][min_c]!=5){
  map[min_r][min_c] = 0; //delete from current location
  min_r++; //step to left
  if(map[min_r][min_c] == 1){
    MinionFollow();
  }
  //checkBomb();
  map[min_r][min_c] = 6; //show in new coords
}
  showMap();
}
function MinionFollow(){
  setInterval(function(){
    if(min_c>pac_c){
    moveMinionLeft();
  }
  if(min_c<pac_c){
    moveMinionRight();
  }
  if(min_r>pac_r){
  moveMinionUp();
}
if(min_r<pac_r){
  moveMinionDown();
}
  },1000);
}
MinionFollow();
function showMap() {
  var div_map = document.querySelector('#map');
  div_map.innerHTML = "";
  for (var r = 0; r < 10; r++) {
    for (var c = 0; c < 10; c++) {
      if (map[r][c] == 0) {
        div_map.innerHTML += '<div class="square"><div>';
      }
      if (map[r][c] == 9) {
        div_map.innerHTML += '<div class="square pacman"><div>';
      }
      if(map[r][c] == 1) {
        div_map.innerHTML += '<div class="square banan1"><div>';
      }
      if(map[r][c] == 3) {
        div_map.innerHTML += '<div class="square banan3"><div>';
      }
      if(map[r][c] == 6) {
        div_map.innerHTML += '<div class="square meanion"><div>';
      }
      if(map[r][c] == 4) {
        div_map.innerHTML += '<div class="square bomb"><div>';
      }
      if(map[r][c] == 5) {
        div_map.innerHTML += '<div class="square wall"><div>';
      }
      if(map[r][c] == 10) { //pacman + explosion
        div_map.innerHTML += '<div class="square pacman"><div class="explosion"></div></div>';
      }
    }
  }
}
showMap();
