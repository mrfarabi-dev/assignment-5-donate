document
  .getElementById("btn_remove_money_1")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const removeMoney = getInputFieldValueById("input_money_1");
    const Noakhali_balance = getTextFieldValueById("Noakhali_balance");
    const account_balance = getTextFieldValueById("account_balace");
    const NewBalance = Noakhali_balance + removeMoney;
    const account_new_balance = account_balance - removeMoney;
    console.log(account_balance, account_new_balance);

    if (account_balance < removeMoney) {
      return alert("Your Balance MT so You DGM");
    }

    document.getElementById("Noakhali_balance").innerText = NewBalance;
    document.getElementById("account_balace").innerText = account_new_balance;
    document.getElementById("my_modal_1").showModal();
    document.getElementById("input_money_1").value = "";
    const title = document.getElementById("noakhali_title").innerText;
    // add to history
    const p = document.createElement("p");
    p.innerHTML = `
        <div class="border p-5 bg-slate-300 text-black border-stone-500 rounded-sm  mt-4 space-y-4">
            <h1>${removeMoney.toFixed(2)} TK ${title}</h1>
            <p>${new Date().toString()}</p>
        </div>
    `;
    document.getElementById("history_container").appendChild(p);
  });

document
  .getElementById("btn_remove_money_2")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const removeMoney_2 = getInputFieldValueById("input_money_2");
    const feni_balance = getTextFieldValueById("feni_balance");
    const account_balance = getTextFieldValueById("account_balace");
    const newBalance_2 = feni_balance + removeMoney_2;
    const account_new_balance_2 = account_balance - removeMoney_2;

    if (account_balance < removeMoney_2) {
      return alert("Your Balance MT so You DGM");
    }

    document.getElementById("feni_balance").innerText = newBalance_2;
    document.getElementById("account_balace").innerText = account_new_balance_2;
    document.getElementById("my_modal_2").showModal();
    document.getElementById("input_money_2").value = "";
    const title_2 = document.getElementById("feni_title").innerText;
    // add to history
    const p = document.createElement("p");
    p.innerHTML = `
        <div class="border p-5 bg-slate-300 text-black border-stone-500  rounded-sm  mt-4 space-y-4">
            <h1>${removeMoney_2.toFixed(2)} TK ${title_2}</h1>
            <p>${new Date().toString()}</p>
        </div>
    `;
    console.log(p);

    document.getElementById("history_container").appendChild(p);
  });

document
  .getElementById("btn_remove_money_3")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const removeMoney_3 = getInputFieldValueById("input_money_3");
    const injured_balance = getTextFieldValueById("injured_balance");
    const account_balance = getTextFieldValueById("account_balace");
    const newBalance_3 = injured_balance + removeMoney_3;
    const account_new_balance_3 = account_balance - removeMoney_3;

    if (account_balance < removeMoney_3) {
      return alert("Your Balance MT so You DGM");
    }

    document.getElementById("injured_balance").innerText = newBalance_3;
    document.getElementById("account_balace").innerText = account_new_balance_3;
    document.getElementById("my_modal_3").showModal();
    const title_3 = document.getElementById("injurid_title").innerText;
    // add to history
    const p = document.createElement("p");
    p.innerHTML = `
        <div class="border p-5 bg-slate-300 text-black border-stone-500  rounded-sm mt-4 space-y-4">
            <h1>${removeMoney_3.toFixed(2)} TK ${title_3}</h1>
            <p>${new Date().toString()}</p>
        </div>
    `;
    console.log(p);

    document.getElementById("history_container").appendChild(p);
  });

// navbar
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  // Show/hide navbar based on scroll direction

  // Change background to red if scrolled more than 100px, otherwise reset to white
  if (currentScroll > 100) {
    navbar.classList.add("bg-slate-600", "opacity-80");
    navbar.classList.remove("bg-slate-600");
  } else {
    navbar.classList.add("bg-white");
    navbar.classList.remove("bg-red-500");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For mobile or negative scrolling
});
