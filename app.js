



document.getElementById('calculate').addEventListener('click', function () {
    const cash = parseFloat(document.getElementById("cash").value);
    const bank = parseFloat(document.getElementById('bank').value);
    const gold = parseFloat(document.getElementById('gold').value);
    const silver = parseFloat(document.getElementById('silver').value);
    const invest = parseFloat(document.getElementById('invest').value);
    const business = parseFloat(document.getElementById('business').value);
    const acceptable = parseFloat(document.getElementById('acceptable').value);
    const debt = parseFloat(document.getElementById('debt').value);
    const totalAsset = parseFloat(cash + bank + gold + silver + invest + business + acceptable);
    const zakatEligibleAsset = totalAsset - debt;

    console.log(zakatEligibleAsset)
})