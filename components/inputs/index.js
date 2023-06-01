// import styles from './style.module.css';

import React, { useState } from 'react';

export default function DivInput({ Component, name }) {
  // return <div className={styles.divInput}>{<Component />}</div>;
  return <div className="divInput">{<Component name={name} />}</div>;
}

export function DivEnderecos() {
  return (
    <>
      <DivInput Component={Cep} />
      <DivInput Component={Endereco} />
      <DivEndereco Component={NumeroEEndereco} />
    </>
  );
}

export function DivEndereco({ Component }) {
  return (
    // <div className={`${styles.divEndereco} ${styles.divInput}`}>
    <div className="divEndereco divInput">{<Component />}</div>
  );
}

export function fieldSetTelefone({ component }) {
  let [telefoneContagem, setTelefoneContagem] = useState(1);

  let componentesTelefone = [];
  for (let i = 0; i < telefoneContagem; i++) {
    componentesTelefone.push(
      <input
        onBlur={formataTelefone}
        onFocus={resetaCampo}
        name="telefone"
        type="text"
        maxLength={15}
      />
    );
  }
  return (
    <>
      <fieldset>
        <legend>Telefones</legend>
        <div className="divInput">
          <div className="telefones">{componentesTelefone}</div>
          <input
            type="button"
            className={`botaoAcao`}
            onClick={() => setTelefoneContagem(++telefoneContagem)}
            defaultValue="+"
          />
          <input
            type="button"
            className={`botaoAcao`}
            onClick={() =>
              telefoneContagem == 1 || setTelefoneContagem(--telefoneContagem)
            }
            defaultValue="-"
          />
        </div>
      </fieldset>
    </>
  );
}

function formataTelefone(event) {
  let telefoneCampo = event.target;
  let telefone = telefoneCampo.value.replace(/\D+/g, '');

  telefone =
    telefone.length < 9
      ? telefone
      : telefone.length == 9
      ? telefone.replace(/(\d{5})(\d{4})/, '$1-$2')
      : telefone.replace(/(\d{2})(\d{5})(\d{2})/, '($1) $2-$3');

  telefoneCampo.value = telefone;
}

export function DataDeNascimento() {
  return (
    <>
      <label htmlFor="dataNasc">Data de Nascimento*</label>
      <input
        id="dataNasc"
        onBlur={formataDataDeNascimento}
        onFocus={resetaCampo}
        name="dataNasc"
        type="text"
        required
        maxLength="8"
      />
    </>
  );
}

export function Nome({ name }) {
  return (
    <>
      <label htmlFor="name">Nome Completo*</label>
      <input onBlur={formataNome} id="name" name={name} type="text" required />
    </>
  );
}

export function Cep() {
  function onBlur(event) {
    handleCEP(event);
    formataCEP(event);
  }

  return (
    <>
      <label htmlFor="cep">CEP</label>
      <input
        onFocus={resetaCampo}
        onBlur={onBlur}
        name="cep"
        className="styles.cep"
        id="cep"
        type="text"
        maxLength={8}
      />
    </>
  );
}

export function Genero({ name }) {
  const [selectedOption, setSelectedOption] = useState('o');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <input
        id={name + 'h'}
        name={name}
        type="radio"
        value="o"
        checked={selectedOption === 'o'}
        onChange={handleOptionChange}
      />
      <label className="inline" htmlFor={name + 'h'}>
        Homem
      </label>

      <input
        id={name + 'm'}
        name={name}
        type="radio"
        value="a"
        checked={selectedOption === 'a'}
        onChange={handleOptionChange}
      />
      <label className="inline" htmlFor={name + 'm'}>
        Mulher
      </label>
    </>
  );
}

export function Endereco() {
  return (
    <>
      <div className="endereco endereco">
        <label htmlFor="name">Endereço*</label>
        <input
          onBlur={handleEndereco}
          id="endereco"
          name="endereco"
          type="text"
        />
      </div>
    </>
  );
}

export function NumeroEEndereco() {
  return (
    <>
      <div className="endereco numero">
        <label htmlFor="name">Número*</label>
        <input id="numero" name="numero" type="text" />
      </div>
      <div className="endereco bairro">
        <label htmlFor="name">Bairro*</label>
        <input id="bairro" name="bairro" type="text" />
      </div>
    </>
  );
}

export function RG({ name }) {
  return (
    <>
      <label htmlFor="rg">RG</label>
      <input
        onBlur={formataRG}
        onFocus={resetaCampo}
        className="rg"
        name={name}
        type="text"
        required
        maxLength="9"
      />
    </>
  );
}

export function CPF({ name }) {
  return (
    <>
      <label htmlFor="cpf">CPF</label>
      <input
        onBlur={formataCPF}
        onFocus={resetaCampo}
        className="cpf"
        id="cpf"
        name={name}
        type="text"
        required
        maxLength="11"
      />
    </>
  );
}

const resetaCampo = (event) => {
  event.target.value = event.target.value.replace(/\D+/g, '');
};

function formataRG(event) {
  let campoRG = event.target;
  let rg = campoRG.value.replace(/\D+/g, '');

  campoRG.value =
    rg.length == 9
      ? rg.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4')
      : rg;
}

function formataCPF(event) {
  let campoCPF = event.target;
  let cpf = campoCPF.value.replace(/\D+/g, '');

  campoCPF.value =
    cpf.length == 11
      ? cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
      : cpf;
}

function formataNome({ target }) {
  let nome = target.value.split(' ');
  let conjunto = [];

  nome.forEach((n) => {
    if (!n.match(/\bd[a,o,e][s]?\b/g))
      conjunto.push(n.charAt(0).toUpperCase() + n.slice(1));
    else conjunto.push(n);
  });
  target.value = conjunto.join(' ');
}

function formataDataDeNascimento(event) {
  let dataDeNascimento = event.target;
  let data = dataDeNascimento.value.replace(/\D+/g, '');

  dataDeNascimento.value =
    data.length == 8 ? data.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3') : data;
}

function formataCEP({ target }) {
  target.value = target.value.replace(/(\d{5})(\d{3})/, '$1-$2');
}

async function handleCEP(event) {
  let cepCampo = event.target;
  if (cepCampo.value.length == 8) {
    let bairro = document.getElementById('bairro');

    fetch(`https://viacep.com.br/ws/${cepCampo.value}/json/`)
      .then((res) => res.json())
      .then((json) => {
        endereco.value = json.logradouro;
        bairro.value = json.bairro;
      });
  }
}

function handleEndereco(event) {
  let bairro = document.getElementById('bairro');

  fetch(`https://viacep.com.br/ws/SP/Guaruja/${endereco.value}/json/`)
    .then((res) => res.json())
    .then((json) => {
      cep.value = json[0].cep;
      endereco.value = json[0].logradouro;
      bairro.value = json[0].bairro;
    });
}
