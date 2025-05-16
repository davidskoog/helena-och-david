import './Icon.css';

const Icon = ({ icon }) => {
  return <img className="icon" src={`./icons/${icon}.svg`} alt={icon} />;
};

export default Icon;
