import './Contact.css';
import mapaLoc from '../images/mapaLoc.jpg'

function contact() {
  return (
    <section className="contact">
      <div className="form">
        <h2 >Contato</h2> <br />
      <p id='contact'></p>
        <p>
          Estou aberto a propostas de emprego CLT/PJ e freelancers, mas caso tenha <br />
          alguma duvida ou feedback, seja positivo ou negativo, nao hesite em me mandar <br />
          por esse formulario. <br /> <br />
        </p>
        {/* <form id="formulario" name="formularioLogin" method="post" action="/" data-netlify="true"> */}
        <form id="formulario" name="formularioLogin" action="/">
        {/* <form id="formulario" name="formularioLogin" data-netlify="true"> */}
          <fieldset>
            <input type="text" name="nome" placeholder='Nome'></input>
            <input type="email" name="email" placeholder='Email'></input> <br />
          </fieldset>
          <fieldset>
            <input type="text" name="assunto" placeholder='Assunto'></input>
          </fieldset>
          <fieldset>
            <textarea type="text" name="texto" placeholder='Texto'></textarea>
          </fieldset>
          <button type="submit" name="enviar" className='btn'>Enviar!</button>
        </form>
      </div>
      <div className='map'>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14959.626954678391!2d-40.37868764999999!3d-20.3867348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83ee07d3cd9c7%3A0x53ae290ed575a60e!2sUnidade%20de%20Sa%C3%BAde%20Rio%20Marinho!5e0!3m2!1spt-BR!2sbr!4v1660603146731!5m2!1spt-BR!2sbr" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='maap'></iframe> */}
        <img src={mapaLoc} alt='mapa com localizacao'/>
      </div>
    </section>
  )
}

export default contact;
