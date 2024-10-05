
document.getElementById('Consulta').addEventListener('click', ()=>{
const cep = document.getElementById('CEPinput').value.trim()

if(cep.length!=8){
document.getElementById('Erro').innerText = 'Inválido! São 8 dígitos.'
document.getElementById('Resultado').style.display = 'none'
return;
}

document.getElementById('Erro').innerText = ''

fetch (`https://viacep.com.br/ws/${cep}/json/`)

        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                throw new Error('CEP não encontrado.');
            }

            document.getElementById('Logradouro').innerText = `Logradouro: ${data.logradouro}`;
            document.getElementById('Bairro').innerText = `Bairro: ${data.bairro}`;
            document.getElementById('Localidade').innerText = `Localidade: ${data.localidade}`;
            document.getElementById('UF').innerText = `UF: ${data.uf}`;
            document.getElementById('Estado').innerText = `Estado: ${data.estado}`;
            document.getElementById('Regiao').innerText = `Região: ${data.regiao}`;
            document.getElementById('Ibge').innerText = `IBGE: ${data.ibge}`;
            document.getElementById('Gia').innerText = `GIA: ${data.gia}`;
            document.getElementById('Ddd').innerText = `DDD: ${data.ddd}`;
            document.getElementById('Siafi').innerText = `SIAFI: ${data.siafi}`;
            document.getElementById('Resultado').style.display = 'block';
        })
        .catch(error => {
            document.getElementById('Erro').innerText = 'Ops! Erro!';
            document.getElementById('Resultado').style.display = 'block';
        });
});

