import Head from 'next/head';
// import docx from 'docx';
import DivInput, {
  CPF,
  DivEnderecos,
  Genero,
  Nome,
  RG,
} from '../../components/inputs';

export default function Residencia() {
  return (
    <>
      <Head>
        <title>Declaração Residência</title>
      </Head>
      <section className="contact-form">
        <h1>Declaração de Residência</h1>

        <form onSubmit={handleFormSubmit}>
          <fieldset>
            <legend>Endereço</legend>
            <DivEnderecos />
          </fieldset>
          <fieldset id="declarante">
            <legend>Declarante</legend>
            <DivInput Component={Genero} name={'genero'} />
            <DivInput Component={Nome} name={'nome'} />
            <DivInput Component={RG} name={'rg'} />
            <DivInput Component={CPF} name={'cpf'} />
          </fieldset>
          <fieldset>
            <legend>Declarado</legend>

            <DivInput Component={Genero} name={'genero2'} />
            <DivInput Component={Nome} name={'nome2'} />
            <DivInput Component={RG} name={'rg2'} />
            <DivInput Component={CPF} name={'cpf2'} />
          </fieldset>
          <button type="submit">Criar</button>
        </form>
      </section>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js"></script>
      <script src="https://unpkg.com/docx@7.1.0/build/index.js"></script>
    </>
  );
}

let meses = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const convertePt = (valor) => valor * 20;

//#region SELETORES E EVENTOS

// const form = document.querySelector('.contact-form');
// form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const formJSON = Object.fromEntries(data.entries());

  gen(formJSON);
}

function gen(dados) {
  console.log(dados);
  const texto = docx.TextRun;
  const paragrafo = docx.Paragraph;

  const paragrafoTitulo = new paragrafo({
    children: [
      new texto({
        text: 'DECLARAÇÃO DE RESIDÊNCIA',
        bold: true,
      }),
    ],
    style: 'titulo',
    spacing: {
      after: convertePt(65),
    },
    alignment: docx.AlignmentType.CENTER,
  });

  const paragrafoDeclaracao = new paragrafo({
    children: [
      new texto('Eu, '),
      new texto({ text: dados.nome, bold: true }),
      new texto(
        `, brasileir${dados.genero}, ${
          dados.genero == 'o' ? 'portador' : 'portadora'
        } do`
      ),
      new texto({ text: ` RG ${dados.rg}`, bold: true }),
      new texto(` e inscrit${dados.genero} no CPF de`),
      new texto({ text: ` nº ${dados.cpf}`, bold: true }),
      new texto(`, residente e domiciliad${dados.genero} a `),
      new texto({
        text: `${dados.endereco}, nº ${dados.numero}, ${dados.bairro} – Guarujá/SP, CEP: ${dados.cep}`,
        bold: true,
      }),
      new texto(
        ' Declaro para os devidos fins de comprovação de residência, sob as penas da'
      ),
      new texto({ text: ' Lei 7.115/83, artigo 2º', bold: true }),
      new texto(' que'),
      new texto({
        text: ` ${dados.nome2}`,
        bold: true,
      }),
      new texto(
        `, ${dados.genero2 == 'o' ? 'portador' : 'portadora'} do RG de nº `
      ),
      new texto({ text: dados.rg2, bold: true }),
      new texto(` e inscrit${dados.genero2} no CPF de`),
      new texto({ text: ` nº ${dados.cpf2}.`, bold: true }),
      new texto({
        text: ' reside no endereço citado acima.',
      }),
    ],
    indent: {
      firstLine: '1.25cm',
    },
    style: 'normal',

    spacing: {
      line: 360,
      after: 280 * 2,
    },
  });

  const paragrafoDepois = new paragrafo({
    children: [
      new texto({
        text: 'Por expressão da verdade assumido inteira responsabilidade pelas declarações acima, as penas da lei assino para que produza seus efeitos legais.',
        bold: true,
      }),
    ],
    style: 'normal',
    indent: {
      firstLine: '1.25cm',
    },
    spacing: {
      line: 360,
      after: convertePt(35),
    },
  });

  const data = new Date();

  const paragrafoAntesLinha = new paragrafo({
    children: [
      new texto({
        text: `Guarujá, ${data.getDate()} de ${
          meses[data.getMonth()]
        } de ${data.getFullYear()}.`,
      }),
    ],
    alignment: docx.AlignmentType.CENTER,
    style: 'normal',
    spacing: {
      line: 189 * 2,
      after: convertePt(35),
    },
  });

  const paragrafoLinha = new paragrafo({
    children: [
      new texto({ text: '_______________________________', bold: true }),
    ],
    style: 'normal',
    alignment: docx.AlignmentType.CENTER,
    spacing: {
      after: convertePt(5),
    },
  });

  const paragrafoDepoisLinha = new paragrafo({
    children: [new texto({ text: dados.nome, bold: true })],
    alignment: docx.AlignmentType.CENTER,
  });

  const doc = new docx.Document({
    creator: 'Batata - Lan house e Informática',
    title: 'Declaração de Residência ' + dados.nome,

    description: 'Declaração de Residência',
    styles: {
      paragraphStyles: [
        {
          id: 'normal',
          name: 'normal',
          quickFormat: true,
          run: {
            font: 'Verdana',
            size: 12 * 2,
          },
        },
        {
          id: 'titulo',
          name: 'titulo',
          quickFormat: true,
          run: {
            font: 'Verdana',
            size: 14 * 2,
          },
        },
      ],
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: '1.70cm',
              right: '3cm',
              bottom: '1.25cm',
              left: '3cm',
            },
            borders: {
              pageBorderLeft: {
                style: docx.BorderStyle.SINGLE,
                size: 3,
                color: 'auto',
                space: 24,
              },
              pageBorderRight: {
                style: docx.BorderStyle.SINGLE,
                size: 3,
                color: 'auto',
                space: 24,
              },
              pageBorderTop: {
                style: docx.BorderStyle.SINGLE,
                size: 3,
                color: 'auto',
                space: 24,
              },
              pageBorderBottom: {
                style: docx.BorderStyle.SINGLE,
                size: 3,
                color: 'auto',
                space: 24,
              },

              pageBorders: {
                display: 'allPages', //https://docx.js.org/api/enums/PageBorderDisplay.html
                offsetFrom: 'page', //https://docx.js.org/api/enums/PageBorderOffsetFrom.html
                zOrder: 'front', //https://docx.js.org/api/enums/PageBorderZOrder.html
              },
            },
          },
        },
        children: [
          paragrafoTitulo,
          paragrafoDeclaracao,
          paragrafoDepois,
          paragrafoAntesLinha,
          paragrafoLinha,
          paragrafoDepoisLinha,
        ],
      },
    ],
  });

  docx.Packer.toBlob(doc).then((blob) => {
    saveAs(blob, `Declaração de Residência ${dados.nome}.docx`);
    console.log('Document created successfully');
  });
}
