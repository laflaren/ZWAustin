import logo from '../logo.svg';

function Footer(props){
  return (
    <div> 
    <footer> 
      <img src={logo} className="App-logo" alt="logo" />
        Natalie La Flare {props.year}
      <img src={logo} className="App-logo" alt="logo" />
    </footer>
    </div>
  )
}
export default Footer;