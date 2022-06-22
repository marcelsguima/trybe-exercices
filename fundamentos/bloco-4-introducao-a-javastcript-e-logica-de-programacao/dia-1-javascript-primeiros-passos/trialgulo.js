const a = 90;
const b = "vara";
const c = 30;

let angulos = a + b + c;

let angulosPos = a > 0 && b > 0 && c > 0;

if (angulosPos){
  if (angulos === 180) {
    console.log(true);
  } 
else {
    console.log(false);
  };
} else {
  console.log('error');
}