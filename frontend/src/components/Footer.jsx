function Footer() {
    return (
      <footer className="bg-dark py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h5 className="text-light">Sobre nós</h5>
              <p className="text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                fugiat architecto tenetur illum maiores voluptates dolor ipsam
                aliquid aliquam tempora officiis suscipit, eligendi error
                veritatis esse facere impedit iure. Nesciunt!
              </p>
            </div>
            <div className="col-md-4 mb-3">
              <h5 className="text-light">Links Úteis</h5>
              <ul className="list-unstyled ">
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Algo Here
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Algo Here
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Algo Here
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Algo Here
                  </a>
                </li>
                
              </ul>
            </div>
            
            <div className="col-md-4 mb-3 text-light">
             <h5>Contato</h5>
             <p>
               <i className="bi bi-geo-alt-fill"></i> Rua Exemplo, 123, Cidade -
               Estado
               <br />
               <i className="bi bi-telephone-fill"></i> +55 (11) 98765-4321
               <br />
               <i className="bi bi-envelope-fill"></i> contato@exemplo.com
             </p>
           </div>
  
          </div>
  
          <hr className="border-light" />
  
          <div className="text-center">
              <p className="mb-0 text-light" >
              &copy; {new Date().getFullYear()} Gerenciador de Estudos Espiritas. Todos os direitos
              //         reservados.
              </p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  