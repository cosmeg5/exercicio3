const cidades = {
    sp: ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],
    rj: ['Teresópolis', 'Resende', 'Maricá', 'Macaé'],
}

let estadosHTML = document.querySelector('#estado')
let cidadeHTML = document.querySelector('#cidade')

estadosHTML.addEventListener('change', () => {
    cidadeHTML.innerHTML = `<option value="">-- Selecione --</option>`
    for (let estado in cidades) {
        if(estadosHTML.value === estado) {
            let cidadesArrray = cidades[estado]
            for(let i = 0; i < cidadesArrray.length ; i++) {
                cidadeHTML.innerHTML += `<option value="${cidadesArrray[i]}">${cidadesArrray[i]}</option>`
                console.log(cidades[estado][i])
            }
        }
    }
})

// Tratamento de erro

document.querySelector('#cadastro').addEventListener('submit', (event) => {
    event.preventDefault();

    let temErro = false

    let inputEstado = document.forms['cadastro']['estado'];

    if(!inputEstado.value) {
        temErro = true

        inputEstado.classList.add('error');
        let span = inputEstado.nextSibling.nextSibling;
        span.innerHTML = "Selecione um estado"
        span.classList.add('spanErro')
    } else {
        inputEstado.classList.remove('error');
        let span = inputEstado.nextSibling.nextSibling;
        span.innerHTML = ""
        span.classList.remove('spanErro')
    }

    let inputCidade = document.forms['cadastro']['cidade'];

    if(!inputCidade.value) {
        temErro = true

        inputCidade.classList.add('error');
        let span = inputCidade.nextSibling.nextSibling;
        span.innerHTML = "Selecione um estado"
        span.classList.add('spanErro')
    } else {
        inputCidade.classList.remove('error');
        let span = inputCidade.nextSibling.nextSibling;
        span.innerHTML = ""
        span.classList.remove('spanErro')
    }

    if(!temErro) {
        document.querySelector('#cadastro').submit()
    }
})

