import logo from '../logo.svg';

function Footer(props){
  return (
    <div className="footer"> 
      <img src={logo} className="App-logo" alt="logo" />
      Created with ReactJS | © Natalie La Flare {props.year}
    </div>
  )
}
export default Footer;