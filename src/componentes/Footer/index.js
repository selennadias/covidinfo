import React from "react";
function Footer(props) {
  // mandar algo atraves de uma variavel
  // mandar algo
  return (
    <footer className="py-4 bg-dark text-white-50">
      <div class="container text-center">
        <small> {props.texto} </small>
      </div>
    </footer>
  );
}

export default Footer;
