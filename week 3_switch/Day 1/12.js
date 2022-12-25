function tradeCommission(input) {
  let city = input.shift();
  let sales = Number(input.shift());
  let commission;
  let error = "error";

  switch (city) {
    case "Sofia":
      if (sales >= 0 && sales <= 500) {
        commission = sales * 0.05;
      } else if (sales > 500 && sales <= 1000) {
        commission = sales * 0.07;
      } else if (sales > 1000 && sales <= 10000) {
        commission = sales * 0.08;
      } else {
        commission = sales * 0.12;
      }
      break;
    case "Varna":
      if (sales >= 0 && sales <= 500) {
        commission = sales * 0.045;
      } else if (sales > 500 && sales <= 1000) {
        commission = sales * 0.075;
      } else if (sales > 1000 && sales <= 10000) {
        commission = sales * 0.1;
      } else {
        commission = sales * 0.13;
      }
      break;
    case "Plovdiv":
      if (sales >= 0 && sales <= 500) {
        commission = sales * 0.055;
      } else if (sales > 500 && sales <= 1000) {
        commission = sales * 0.08;
      } else if (sales > 1000 && sales <= 10000) {
        commission = sales * 0.12;
      } else {
        commission = sales * 0.145;
      }
      break;

    default:
      commission = "error";
  }

  if (sales < 0) {
    commission = "error"
  }

  if (commission !== "error") {
    commission = commission.toFixed(2);
  }

  console.log(commission);
}

tradeCommission(["Sofia", "1500"]);
