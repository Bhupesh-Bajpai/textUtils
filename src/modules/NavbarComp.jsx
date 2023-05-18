import PropTypes from 'prop-types';
export default function NavbarComponent(props){
    return(
        <>
            <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="/">{props.title}</a>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><a href="/">Home <span className="sr-only">(current)</span></a></li>
        <li><a href="/">{props.about}</a></li>
      </ul>
      <form className="navbar-form navbar-left">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search"/>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
}
NavbarComponent.propType = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
}

// NavbarComponent.defaultProps = {
//   title:"yout title here"
// }

