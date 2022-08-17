import './About.css';
import progrM from '../images/progrM.png';

function About() {
  return(
    <section className="about">
      <p id='about'></p>
      <h2>About me</h2>
      <div className='textImageAbout'>
      <p>
      Hello wooorld, me chamo Patrick, tenho 24 anos, carioca porem residente do<br />
      estado do Espírito Santo por pelo menos 22 anos e pai de um rapazinho lindo<br />
        de 6 anos.<br />
        E a tao famosa pergunta "oque me trouxe para área de tecnologia?" :<br />
        Não foi por acaso, desde pequeno sempre fui apaixonado por tecnologia, os olhos<br />
        brilhavam ao aprender algo novo seja em qualquer área desse enorme mundo.<br />
        E gracas ao acesso que temos hoje em dia por conta da tecnologia pude me <br />
        formar desenvolvedor fullstack na @Trybe, onde fiz o curso de <br />
        mais de 1500 horas (fora as horas de estudos por fora, que acredite, foram muuitas)<br />
        e hoje apos o recebimento dos certificados de front-end e back-end, sigo finalizando<br />
        o curso no último módulo (ciências da computação)...<br />
        Se você leu ate aqui e esta pensando em talvez me dar minha primeira oportunidade<br />
        de emprego formal nessa área, eu ficaria muito feliz em receber seu contato, vamos <br />
        conversar ?
      </p>
      <img src={progrM} alt="imagem de um desenvolvedor programando"/>
      </div>
    </section>
  )
}

export default About;
