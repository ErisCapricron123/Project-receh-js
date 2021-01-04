alert("selamat datang");
let ok = confirm("apakah anda mau bermain?");
while (ok === true){
  
  //player
  var player = prompt("\npilih: batu,gunting,kertas")

  // computer
  let computer = Math.floor(Math.random() * 3);
  switch (computer){
    case 0: 
    computer = "batu";
    break;
    case 1: 
    computer = "gunting";
    break;
    case 2: 
    computer = "kertas";
    break;
  }
 
  // peraturan
  let hasil = "" 
  var error = false

  if(player == computer){
    hasil = "Seri"
  }
  else if (player === "batu"){
    if(computer = "gunting"){
      hasil = "Menang"
    }
    else{
      hasil = "Kalah"
    }
  }
  else if (player == "gunting"){
    if(computer == "kertas"){
      hasil = "Menang"
    }
    else {
      hasil = "Kalah"
    }
  }
  else if (player == "kertas"){
    if(computer == "batu"){
      hasil = "Menang"
    }
    else {
      hasil = "Kalah"
    }
  }
  else{
    error = true
    console.log("Tidak ada pilihan seperti itu")
  }

  if (error == false) {
      console.log(`\nKamu memilih: ${player} \n
Computer memilih ${computer} \n
Hasilnya adalah ${hasil} \n `);
  }


  // ulangi permainan
  let ok = confirm("ulangi lagI?");
  if (ok === false){
    break;
  }
}