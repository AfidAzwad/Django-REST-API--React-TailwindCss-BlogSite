import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Blog from './components/Blogs/blog';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './components/Blog Detail/blogdetails';
import BlogCategory from './components/Blog Category/blogcategory';
import Navbar from './components/Navbar/navbar';
import Category from './components/Categories/categories';

export default function App() {
  return(

      <Router>
        <Navbar />
        <Category />
                  <Switch>
                    <Route  exact path='/' component={Blog} />
                    <Route  path='/blog/:id' component={Detail} />
                    <Route  path='/category/:id' component={BlogCategory} />
                  </Switch>
      </Router>
);
}