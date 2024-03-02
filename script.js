function verificar() {
    var agora = new Date()
    var ano = agora.getFullYear()
    var anoNasc = Number(document.getElementById('anoN').value)
    var idade = ano-anoNasc
    var res = window.document.getElementById('res')
    var sexo = window.document.getElementsByName('sex')
    var genero = ''
    var img = window.document.createElement('img')

    
    img.setAttribute('id', 'photo')

    if(anoNasc <= 0 || anoNasc > ano){
        alert("Ao escolher a data de nascimento você digitou um valor inválido! [ERRO]")
        res.innerHTML = `Ao escolher a data de nascimento você digitou um valor inválido! [ERRO]`
    }
    else{
        if(sexo[0].checked){
            genero = 'um homem'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src','img/crianca-m.png')                
            }
            else if(idade >= 12 && idade < 18){
                img.setAttribute('src','img/jovem-m.png')
            }
            else if(idade >=18 && idade < 60){
                img.setAttribute('src','img/adulto-m.png')
            }
            else{
                img.setAttribute('src','img/idoso-m.png')
            }
        }
        else{
            genero = 'uma mulher'
            if(idade < 12){
                img.setAttribute('src','img/crianca-f.png')    
            }
            else if(idade < 18){
                img.setAttribute('src','img/jovem-f.png')
            }
            else if(idade < 60){
                img.setAttribute('src','img/adulto-f.png')
            }
            else{
                img.setAttribute('src','img/idoso-f.png')
            }
        }
        res.innerHTML = `Detectado ${genero} de ${idade} anos`
        res.appendChild(img)
        
    }  
}