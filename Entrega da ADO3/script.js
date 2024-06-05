

function buscarFichas(){
    let ObjFichas = localStorage.getItem('fichas');
    return ObjFichas ? JSON.parse(ObjFichas) : []; 
}

function salvarFichas(ficha){
    let fichas = buscarFichas();
    fichas.push(ficha);
    localStorage.setItem('fichas',JSON.stringify(fichas));
    
}

if(document.title === "A.D."){
   document.addEventListener('DOMContentLoaded', function(){
    const CRMs = ['CRMSP123355',
    'CRMRJ987654',
    'CRMRS456789',
    'CRMPR321654',
    'CRMSC753951',
    'CRMBH159357',
    'CRMSG246813',
    'CRMFN951753',
    'CRMCB357159',
    'CRMSS147258'];

    localStorage.setItem('CRMs',JSON.stringify(CRMs));

    

    document.getElementById('buscarbtn').addEventListener('click',function(event){
    event.preventDefault();
    let fichas = buscarFichas();
    let cpfInput = document.getElementById('cpfff').value;
    let crmInput = document.getElementById('crmtext').value;
    let crmJSON = localStorage.getItem('CRMs');
    let crmsObj = JSON.parse(crmJSON);
    localStorage.setItem('temp',JSON.stringify(cpfInput));
    
    if(!crmsObj.includes(crmInput)){
        return alert('CRM inválido');
    }
    if(cpfInput === ""){
        return alert('entre com um cpf');
    }
     if(!fichas.some(ficha => ficha.cpf === cpfInput)){
        return alert('Não há fichas para esse cpf');
     }
window.location.href = 'exibicao.html';
    });

   });
}
if(document.title === "A.D-fichas"){
    document.addEventListener('DOMContentLoaded',function(){
        let div = document.getElementById('listaFichas');
        div.innerText = '';
let cpfTempJSON = localStorage.getItem('temp');
let cpfTempObj = JSON.parse(cpfTempJSON);
let fichas = buscarFichas();
let fichasEspecificas = fichas.filter(ficha => ficha.cpf === cpfTempObj);
 
let table = document.createElement('table');
table.style.cssText = 'margin: 0 auto; background-color: lightblue; border: 1px solid black;';
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
let headrow = document.createElement('tr');
let headd1 = document.createElement('th');
let headd2 = document.createElement('th');
let headd3 = document.createElement('th');
let headd4 = document.createElement('th');
let headd5 = document.createElement('th');
let headd6 = document.createElement('th');
let headd7 = document.createElement('th');
 headd1.textContent='cpf';
 headd2.textContent='alergia'; 
 headd3.textContent='diagnóstico';
 headd4.textContent='medicamento';
 headd5.textContent='unidade';
 headd6.textContent='médico';
 headd7.textContent='data';
headrow.append(headd1,headd2,headd3,headd4,headd5,headd6,headd7);
thead.appendChild(headrow);
table.appendChild(thead);
fichasEspecificas.forEach(function(ficha){
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');
    let td6 = document.createElement('td');
    let td7 = document.createElement('td');
    td1.textContent = ficha.cpf;
    td2.textContent = ficha.alergia;
    td3.textContent = ficha.diagnostico;
    td4.textContent = ficha.medicamento;
    td5.textContent = ficha.unidade;
    td6.textContent = ficha.medico;
    td7.textContent = ficha.data;
    tr.append(td1,td2,td3,td4,td5,td6,td7);
    tbody.appendChild(tr);
   
});
table.appendChild(tbody);
div.appendChild(table);  
});


}
if(document.title === 'cadastro'){
    document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('btenviar').addEventListener('click',function(event){
        event.preventDefault();
        
        let cpf = document.getElementById('cpf').value;
        let alergia = document.getElementById('alergia').value;
        let diagnostico = document.getElementById('diagnostico').value;
        let medicamento = document.getElementById('medicamento').value;
        let unidade = document.getElementById('unidade').value;
        let medico = document.getElementById('medico').value;
        
        let data = document.getElementById('data').value;

      let ficha = {cpf : cpf,alergia : alergia,diagnostico : diagnostico,medicamento : medicamento,unidade : unidade,medico : medico,data : data};
        let crmLS = localStorage.getItem('CRMs');
        let crmObj = JSON.parse(crmLS);
        if(!crmObj.includes(medico)){
            return alert('CRM inválido');
        }
        salvarFichas(ficha);
        alert('Ficha enviada');
    })
    
       
    
    });
}