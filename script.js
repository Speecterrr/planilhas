function calcularTotalItem(valorUnitario, quantidadeId, totalId) {
    var quantidade = document.getElementById(quantidadeId).value;
    var total = valorUnitario * quantidade;
    document.getElementById(totalId).innerText = total.toLocaleString('pt-BR') + ' UNI';
}

function adicionarEventoInput(idCampo, valorUnitario, idTotal) {
    document.getElementById(idCampo).addEventListener('input', function() {
        calcularTotalItem(valorUnitario, idCampo, idTotal);
        calcularTotalGeral();
    });
}
// Lista de itens e seus valores unitários
const itens = [
    { idCampo: 'qtdParafal', valorUnitario: 1300000, idTotal: 'totalParafal' },
    { idCampo: 'qtdMunParafal', valorUnitario: 7000, idTotal: 'totalMunParafal' },
    { idCampo: 'qtdG36', valorUnitario: 1220000, idTotal: 'totalG36' },
    { idCampo: 'qtdM4A1', valorUnitario: 840000, idTotal: 'totalM4A1' },
    { idCampo: 'qtdMunM4A1', valorUnitario: 6000, idTotal: 'totalMunM4A1' },
    { idCampo: 'qtdM4A4', valorUnitario: 840000, idTotal: 'totalM4A4' },
    { idCampo: 'qtdMunM4A4', valorUnitario: 6000, idTotal: 'totalMunM4A4' },
    { idCampo: 'qtdAK47', valorUnitario: 705000, idTotal: 'totalAK47' },
    { idCampo: 'qtdMunAK47', valorUnitario: 6000, idTotal: 'totalMunAK47' },
    { idCampo: 'qtdUZI', valorUnitario: 500000, idTotal: 'totalUZI' },
    { idCampo: 'qtdMunUZI', valorUnitario: 4000, idTotal: 'totalMunUZI' },
    { idCampo: 'qtdFiveSeven', valorUnitario: 340000, idTotal: 'totalFiveSeven' },
    { idCampo: 'qtdMunFiveSeven', valorUnitario: 3000, idTotal: 'totalMunFiveSeven' },
    { idCampo: 'qtdGlock19', valorUnitario: 340000, idTotal: 'totalGlock19' },
    { idCampo: 'qtdMunGlock', valorUnitario: 3000, idTotal: 'totalMunGlock' },
    { idCampo: 'qtdPeDeCabra', valorUnitario: 120000, idTotal: 'totalPeDeCabra' },
    { idCampo: 'qtdColete', valorUnitario: 80000, idTotal: 'totalColete' },
    { idCampo: 'qtdLockpick', valorUnitario: 35000, idTotal: 'totalLockpick' },
    { idCampo: 'qtdCocaina', valorUnitario: 1400, idTotal: 'totalCocaina' },
    { idCampo: 'qtdMaconha', valorUnitario: 1400, idTotal: 'totalMaconha' },
    { idCampo: 'qtdLSD', valorUnitario: 1400, idTotal: 'totalLSD' },



  


];
// Adicionando eventos para todos os itens
itens.forEach(item => {
    adicionarEventoInput(item.idCampo, item.valorUnitario, item.idTotal);
});



function calcularTotalGeral() {
    var totalGeral = 0;
    itens.forEach(item => {
        var totalItemText = document.getElementById(item.idTotal).innerText;
        // Remova "UNI", pontos de milhar e substitua a vírgula decimal por ponto
        var totalItem = parseFloat(totalItemText.replace(' ','').replace(/\./g, '').replace(',', '.'));
        totalGeral += totalItem || 0;
    });

    // Formatação do total geral para incluir dois dígitos decimais
    document.getElementById('totalGeral').innerText = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(totalGeral);
}

// Antes da formatação
console.log(totalGeral); 
