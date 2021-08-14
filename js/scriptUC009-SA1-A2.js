function validaFormulario(){
    //alert('Entrei no Validar Formulário');
    var confirm = true;
    var vname = document.getElementById('name').value;
    var vcpf = document.getElementById('cpf');

    if(vname.length>=10 && vname.length<=80){
        confirm = true;
    } else { 
        confirm = false;
    }

    if(vcpf.value.length = 14 && vcpf.checkValidity()){
        confirm = true
    } else {
        confirm = false
    }

    var presposta = document.getElementById("resposta");
    presposta.innerHTML = confirm;
}

function geraJSON(){
    //alert('Entrei no Gera JSON');
    var index_obj = {
        aName: "",
        aNickname: "",
        aDay: 0,
        aMonth: 0,
        aYear: 0,
        aCPF: "",
        aTeam_id: "",
        aSport: []
    }

    index_obj.aName = document.getElementById('name').value;
    var vJson = JSON.stringify(index_obj);
    var jresposta = document.getElementById('resposta');
    jresposta.innerHTML = vJson;
    
    index_obj.aCPF = document.getElementById('cpf').value;



}