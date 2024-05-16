import '../styles/Hero.css';

export const Hero = () => {
  return (
    <div className="hero">
      <h1 className="title">Generador de <span className="password">contraseñas</span>.</h1>
      <div className="divisor"></div>
      <h2 className="intro">
        Con solo una frase memorable cree una contraseña <span>muy</span> segura.
      </h2>
    </div>
  );
};
