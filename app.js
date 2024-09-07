var CEP = document.getElementById("cep");
var Rua = document.getElementById("rua");
var Bairro = document.getElementById("bairro");
var Cidade = document.getElementById("cidade");
var Estado = document.getElementById("uf");

// Validação dos dados inseridos nos inputs
btnPesquisar.onclick = function (e) {

    e.preventDefault();

    let cep = CEP.value;
    let rua = Rua.value;
    let bairro = Bairro.value;
    let cidade = Cidade.value;
    let uf = Estado.value;

    if (cep == "") {
        mensagemErro("CEP é obrigatório!");
    }
    else if (rua == "") {
        mensagemErro("Rua é obrigatório!");
    }
    else if (bairro == "") {
        mensagemErro("Bairro é obrigatório!");
    }
    else if (cidade == "") {
        mensagemErro("Cidade é obrigatório!");
    }
    else if (uf == "") {
        mensagemErro("Estado é obrigatório!");
    }
    else {
        executaPesquisa(uf);
    }
}

// Formatação do input CEP para o padrão brasileiro
function formatCEP(input) {
    let cep = input.value.replace(/\D/g, '');
        if (cep.length >= 5) {
            cep = cep.substring(0, 5) + '-' + cep.substring(5);
        }
        input.value = cep;
}

// API do VIACEP para busca do CEP informado
function pesquisaCEP(valor) {
    let cep = valor.replace(/\D/g, "");
    if (cep != "") {
        var validacep = /^[0-9]{8}$/;
        if (validacep.test(cep)) {
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";
            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);
        } else {
            limpa_formulário_cep();
            mensagemErro("Formato de CEP ou CEP inválido.");
        }
    } else {
        limpa_formulário_cep();
    }
}

// Dados do CEP pesquisado e formatação do tamanho dos inputs
function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
    } else {
        limpa_formulário_cep();
        mensagemErro("CEP não encontrado!");
    }
    atualizarTamanhoRua(conteudo.logradouro);
    atualizarTamanhoBairro(conteudo.bairro);
    atualizarTamanhoCidade(conteudo.localidade);
    atualizarTamanhoUf(conteudo.uf);
}

function atualizarTamanhoRua(conteudo) {
    const ruaInput = document.getElementById("rua");
    const inputWidth = conteudo.length * 8 + 15;
    ruaInput.style.width = `${inputWidth}px`;
}

function atualizarTamanhoBairro(conteudo) {
    const bairroInput = document.getElementById("bairro");
    const inputWidth = conteudo.length * 8 + 5;
    bairroInput.style.width = `${inputWidth}px`;
}

function atualizarTamanhoCidade(conteudo) {
    const cidadeInput = document.getElementById("cidade");
    const inputWidth = conteudo.length * 10 + 5;
    cidadeInput.style.width = `${inputWidth}px`;
}

function atualizarTamanhoUf(conteudo) {
    const ufInput = document.getElementById("uf");
    const inputWidth = conteudo.length * 10 + 5;
    ufInput.style.width = `${inputWidth}px`;
}

function limpa_formulário_cep() {
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
}

// Mensagem de erro da validação dos inputs
function mensagemErro(mensagem) {
    let spnErro = document.getElementById("spnErro");
    spnErro.innerText = mensagem;
    spnErro.style.display = "block";
    setTimeout(function () {
        spnErro.style.display = "none";
    }, 5000);
}

// Mensagens dos Links do Gemini e Maps
function mensagemLinks(mapsLink, geminiLink) {
    let maps = document.getElementById("maps");
    let gemini = document.getElementById("gemini");
    maps.innerHTML = mapsLink;
    gemini.innerHTML = geminiLink;
}

// Pega o resultado da pesquisa de CEP e procura nos dados o estado correspondente
// retornando para o HTML suas informações. Também exibe os links do Gemini e Maps.
function executaPesquisa(uf) {
    let section = document.getElementById("resultados-pesquisa");
    let resultado = "";
    let encontrou = false;
    let showGemini = "";
    let showMaps = "";

    for (let dado of dados) {
        if (dado.uf === uf) {
            resultado += `
                <div class="container-resultado-left">
                    <div class="resultado-texto">
                        <h2>${dado.uf}</h2>
                        <p>${dado.descricao}</p>
                        <a href="${dado.site}" target="_blank">Site oficial</a>
                    </div>
                </div>
                <div class="container-resultado-right">
                    <div class="resultado-mapa">
                        <img src="${dado.mapa}" alt="Mapa">
                    </div>
                </div>
            `;
            encontrou = true;
        }
    }

    showGemini = `
        <a href="https://gemini.google.com/app?hl=pt-PT" target="_blank"><img src="https://vectorseek.com/wp-content/uploads/2023/12/Google-Gemini-Logo-Vector.svg-.png"></a>
        <p>Se desejar mais informações sobre a localidade pesquisada, pergunte para a Inteligencia Artificial do Google clicando em Gemini.</p>
    `;

    showMaps = `
        <a href="https://www.google.com.br/maps" target="_blank"><img src="https://vectorseek.com/wp-content/uploads/2023/09/Google-Maps-Icon-2020-Logo-Vector.svg-.png"></a>
        <p>Acesse o Google Maps para visualizar e interagir pelas ruas encontradas com Street View, clicando no ícone acima.</p>
    `;

    if (encontrou) {
        section.innerHTML = resultado;
        mensagemLinks(showMaps, showGemini);
    } else {        
        mensagemErro("Nenhum estado encontrado.");
    }
}