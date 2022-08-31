

function verificar(){

    var data = new Date()
    var ano = data.getUTCFullYear()
    var fAno = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fAno.value.length == 0){
        window.alert('[ERRO] PREENCHA OS CAMPOS')
    }else if (fAno.value > ano){
        window.alert('[ERRO] DATA INVÁLIDA ')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gen = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked == 0 && fsex[1].checked == 0){
            window.alert('[ERRO] SELECIONE UM SEXO')
        }else if (fsex[0].checked){
            gen = 'Homem'
            res.innerHTML = `<p>${gen} de ${idade} anos</p>`
            if ( idade >= 0 && idade <= 15){
                img.setAttribute('src','img/homem-bb.png')
            }else if(idade < 25){
                img.setAttribute('src','img/homem-jovem.png')
            }else if(idade < 50){
                img.setAttribute('src','img/homem-adulto.png')
            }else{
                img.setAttribute('src','img/homem-idoso.png')
            }
            res.appendChild(img)
        }else if (fsex[1].checked){
            gen = 'Mulher'
            res.innerHTML = `<p>${gen} de ${idade} anos</p>`
            if ( idade >= 0 && idade <= 15){
                img.setAttribute('src','img/mulher-bb.png')
            }else if(idade < 25){
                img.setAttribute('src','img/mulher-jovem.png')
            }else if(idade < 50){
                img.setAttribute('src','img/mulher-adulto.png')
            }else{
                img.setAttribute('src','img/mulher-idosa.png')
            }
            res.appendChild(img)
        }

    }
    
}