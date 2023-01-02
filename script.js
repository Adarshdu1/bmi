const weight = document.getElementById("weight");
const height = document.getElementById("height");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  let wt = weight.value;
  let ht = height.value;
  //   console.log(wt, ht);
  if (wt <= 0 || isNaN(wt)) {
    weight.focus();
    return;
  }
  if (ht <= 0 || isNaN(ht)) {
    height.focus();
    return;
  }
  ht = ht / 100;
  let hts = ht * ht;
  let ans = wt / hts;
  ans = Math.round(ans);
  if (ans > 30) {
    output.innerHTML = `<hr><h1>${ans} <span>(Obesity)</span></h1>`;
    output.style.color = "red";
  } else if (ans > 25) {
    output.innerHTML = `<hr><h1>${ans} <span>(Overweight)</span></h1>`;
    output.style.color = "yellow";
  } else if (ans > 19) {
    output.innerHTML = `<hr><h1>${ans} <span>(Normal)</span></h1>`;
    output.style.color = "green";
  } else {
    output.innerHTML = `<hr><h1>${ans} <span>(Underweight)</span></h1>`;
    output.style.color = "maroon";
  }
  height.value = "";
  weight.value = "";
});
