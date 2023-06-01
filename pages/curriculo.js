import Head from 'next/head';
import DivInput, {
  Cep,
  DataDeNascimento,
  DivEndereco,
  Endereco,
  fieldSetTelefone,
  Genero,
  Nome,
  NumeroEEndereco,
} from '../components/inputs';

export default function Curriculo() {
  return (
    <>
      <Head>
        <title>Currículo</title>
      </Head>
      <section className="contact-form">
        <h1>Currículo</h1>
        <form id="curriculo">
          <fieldset id="dadosPessoais">
            <legend>Dados Pessoais</legend>
            <DivInput Component={Genero} />
            <DivInput Component={Nome} />
            <DivInput Component={DataDeNascimento} />
            <DivInput Component={Cep} />
            <DivInput Component={Endereco} />
            <DivEndereco Component={NumeroEEndereco} />
            <DivInput Component={fieldSetTelefone} />
            <div className="divInput">
              <fieldset>
                <legend>Estado Civil</legend>
                <input
                  id="solteirx"
                  name="estadoCivil"
                  type="radio"
                  defaultValue="Solteiro"
                  defaultChecked
                />
                <label className="inline" htmlFor="solteirx">
                  Solteiro
                </label>
                <input
                  id="casadx"
                  name="estadoCivil"
                  type="radio"
                  defaultValue="Casado"
                />
                <label className="inline" htmlFor="casadx">
                  Casado
                </label>
                <input
                  id="uniao-estavel"
                  name="estadoCivil"
                  type="radio"
                  defaultValue="União Estável"
                />
                <label className="inline" htmlFor="uniao-estavel">
                  União Estável
                </label>
                <input
                  id="divorciadx"
                  name="estadoCivil"
                  type="radio"
                  defaultValue="Divorciado"
                />
                <label className="inline" htmlFor="divorciadx">
                  Divorciado
                </label>
                <input
                  id="viuvx"
                  name="estadoCivil"
                  type="radio"
                  defaultValue="Viúvo"
                />
                <label className="inline" htmlFor="viuvx">
                  Viúvo
                </label>
              </fieldset>
            </div>
            <div className="divInput">
              <label htmlFor="email">E-mail</label>
              <input id="email" name="email" type="email" />
            </div>
            <div className="divInput">
              <fieldset>
                <legend>CNH*</legend>
                <input
                  id="cnh-a"
                  name="cnh"
                  type="radio"
                  defaultValue
                  defaultChecked
                />
                <label className="inline" htmlFor="cnh-a">
                  Sem CNH
                </label>
                <input id="cnh-a" name="cnh" type="radio" defaultValue="A" />
                <label className="inline" htmlFor="cnh-a">
                  A
                </label>
                <input id="cnh-b" name="cnh" type="radio" defaultValue="B" />
                <label className="inline" htmlFor="cnh-b">
                  B
                </label>
                <input id="cnh-c" name="cnh" type="radio" defaultValue="C" />
                <label className="inline" htmlFor="cnh-c">
                  C
                </label>
                <input id="cnh-d" name="cnh" type="radio" defaultValue="D" />
                <label className="inline" htmlFor="cnh-d">
                  D
                </label>
                <input id="cnh-e" name="cnh" type="radio" defaultValue="E" />
                <label className="inline" htmlFor="cnh-e">
                  E
                </label>
                <input id="cnh-ab" name="cnh" type="radio" defaultValue="AB" />
                <label className="inline" htmlFor="cnh-ab">
                  AB
                </label>
                <input id="cnh-ac" name="cnh" type="radio" defaultValue="AC" />
                <label className="inline" htmlFor="cnh-ac">
                  AC
                </label>
                <input id="cnh-ad" name="cnh" type="radio" defaultValue="AD" />
                <label className="inline" htmlFor="cnh-ad">
                  AD
                </label>
                <input id="cnh-ae" name="cnh" type="radio" defaultValue="AE" />
                <label className="inline" htmlFor="cnh-ae">
                  AE
                </label>
              </fieldset>
            </div>
            <div className="divInput">
              <label htmlFor="formEscolar">Formação Escolar*</label>
              <input
                id="formEscolar"
                name="formacaoEscolar"
                type="text"
                required
              />
            </div>
          </fieldset>
          <fieldset id="cursos">
            <legend>Cursos</legend>
            <div className="cursosField divInput">
              <fieldset className="cursos">
                <legend>Curso 1</legend>
                <label htmlFor="curso-local">Local</label>
                <input id="curso-local" type="text" />
                <label htmlFor="curso-curso">Curso</label>
                <input id="curso-curso" type="text" />
                <label htmlFor="curso-periodo">Período</label>
                <input id="curso-periodo" type="text" />
              </fieldset>
            </div>
            <div className="divInput">
              <input
                type="button"
                className="botaoAcao adicionarCurso"
                defaultValue="+"
              />
              <input
                type="button"
                className="botaoAcao removerCurso"
                defaultValue="-"
              />
            </div>
          </fieldset>
          <fieldset id="trabalhos">
            <legend>Trabalhos</legend>
            <div className="trabalhosField divInput">
              <fieldset className="trabalhos">
                <legend>Trabalho 1</legend>
                <label htmlFor="trabalho-local">Local</label>
                <input id="trabalho-local" type="text" />
                <label htmlFor="trabalho-cargo">Cargo</label>
                <input id="trabalho-cargo" type="text" />
                <label htmlFor="trabalho-periodo">Período</label>
                <input id="trabalho-periodo" type="text" />
              </fieldset>
            </div>
            <div className="divInput">
              <input
                type="button"
                className="botaoAcao adicionarTrabalho"
                defaultValue="+"
              />
              <input
                type="button"
                className="botaoAcao removerTrabalho"
                defaultValue="-"
              />
            </div>
          </fieldset>
          <button type="submit">Criar</button>
        </form>
      </section>
    </>
  );
}
