function validaFormulario() {
    var vname = document.getElementById('name').value;
    var vNickName = document.getElementById('nickname').value;
    var vDay = document.getElementById('day').value;
    var vMonth = document.getElementById('month').value;
    var vYear = document.getElementById('year').value;
    var vTeamId = document.getElementById('team_id').value;
    var vcpf = document.getElementById('cpf');

    var sportlist = document.getElementsByName("sport");
    var sportlistSelected = [];
    
    if(sportlist[0].checked){
        sportlistSelected.push(sportlist[0].id);
    }

    if(sportlist[1].checked){
        sportlistSelected.push(sportlist[1].id);
    }

    if(sportlist[2].checked){
        sportlistSelected.push(sportlist[2].id);
    }

    if(sportlist[3].checked){
        sportlistSelected.push(sportlist[3].id);
    }

    if(sportlist[4].checked){
        sportlistSelected.push(sportlist[4].id);
    }

    if(sportlist[5].checked){
        sportlistSelected.push(sportlist[5].id);
    }

    if(sportlist[6].checked){
        sportlistSelected.push(sportlist[6].id);
    }

    var confirm = false;

    if (vname.length >= 10 && vname.length <= 80) {
        if (vNickName.length >= 2 && vNickName.length <= 20) {
            if (vDay >= 1 && vDay <= 31) {
                if (vMonth >= 1 && vMonth <= 12) {
                    if (vYear >= 1900 && vYear <= 2021) {
                        if (vTeamId != "") {
                            if (vcpf.value.length == 14 && vcpf.checkValidity()) {
                                if(sportlistSelected.length>0){
                                    confirm = true;
                                } else {
                                    confirm = false;
                                }
                            } else {
                                confirm = false;
                            }
                        } else {
                            confirm = false;
                        }
                    }
                } else {
                    confirm = false;
                }
            } else {
                confirm = false;
            }
        } else {
            confirm = false;
        }
    } else {
        confirm = false;
    }

    var resposta = document.getElementById("resposta");
    resposta.innerHTML = confirm;
}

function geraJSON() {
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
    var jresposta = document.getElementById('resposta');
    index_obj.aNickname = document.getElementById('nickname').value;
    index_obj.aDay = document.getElementById('day').value;
    index_obj.aMonth = document.getElementById('month').value;
    index_obj.aYear = document.getElementById('year').value;
    index_obj.aCPF = document.getElementById('cpf').value;
    index_obj.aTeam_id = document.getElementById('team_id').value;

    var sportlist = document.getElementsByName("sport");
    
    if(sportlist[0].checked){
        index_obj.aSport.push(sportlist[0].id);
    }

    if(sportlist[1].checked){
        index_obj.aSport.push(sportlist[1].id);
    }

    if(sportlist[2].checked){
        index_obj.aSport.push(sportlist[2].id);
    }

    if(sportlist[3].checked){
        index_obj.aSport.push(sportlist[3].id);
    }

    if(sportlist[4].checked){
        index_obj.aSport.push(sportlist[4].id);
    }

    if(sportlist[5].checked){
        index_obj.aSport.push(sportlist[5].id);
    }

    if(sportlist[6].checked){
        index_obj.aSport.push(sportlist[6].id);
    }

    var vJson = JSON.stringify(index_obj);
    jresposta.innerHTML = vJson;
}