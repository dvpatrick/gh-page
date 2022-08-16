import './Contact.css';
import mapaLoc from '../images/mapaLoc.jpg'

{/* <form name="formulariologin" netlify hidden><input type="text" name="nome" /><input type="text" name="email" /><input type="text" name="assunto" /><textarea type="text" name="texto" /></form> */}

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
        <form name="formulariologin" method="post" data-netlify="true" onSubmit="submit">
          <input type="hidden" name="form-name" value="formulariologin" />
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
        <img src={mapaLoc} alt='mapa com localizacao'/>
      </div>
    </section>
  )
}

export default contact;


// <!doctype html><html lang="en"><head><meta charset="utf-8"/><link rel="icon" href="./favicon.ico"/><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="theme-color" content="#000000"/><meta name="description" content="Web site created using create-react-app"/><link rel="apple-touch-icon" href="./logo192.png"/><link rel="manifest" href="./manifest.json"/><title>React App</title><script defer="defer" src="./static/js/main.3fdc04d0.js"></script><link href="./static/css/main.598223dd.css" rel="stylesheet"></head><body><form name="form1" netlify netlify-honeypot="bot-field" hidden><input type="text" name="name" /></form><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div></body></html>