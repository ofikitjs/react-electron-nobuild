class App extends React.Component {

  render() {
    return(
      <div>
        <nav>
          <Router.NavLink exact to="/" activeClassName="active" className="btn">Home</Router.NavLink>
          <Router.NavLink exact to="/page1" activeClassName="active" className="btn">Page 1</Router.NavLink>
          <Router.NavLink exact to="/page2" activeClassName="active" className="btn">Page 2</Router.NavLink>
        </nav>

        <section>
          <Router.Switch>
            <Router.Route exact path='/' component={Home}/>
            <Router.Route path='/page1' component={Page1}/>
            <Router.Route path='/page2' component={Page2}/>
          </Router.Switch>
        </section>
      </div>
    )
  }
}


