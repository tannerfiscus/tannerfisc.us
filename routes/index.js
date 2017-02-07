import About              from '../app/components/about/About'
import App                from '../app/components/App'
import Blog				  from '../app/components/blog/Blog'
import BlogCategory		  from '../app/components/blog/BlogCategory'
import BlogPost		  	  from '../app/components/blog/BlogPost'
import Contact            from '../app/components/contact/Contact'
import Freelance		  from '../app/components/pages/Freelance'
import Home               from '../app/components/pages/Home'
import { IndexRoute,
         Route }          from 'react-router'
import NotFound      	  from '../app/components/NotFound'
import Portfolio          from '../app/components/portfolio/Portfolio'
import Project            from '../app/components/portfolio/project/Project'
import React              from 'react'
import Resume             from '../app/components/resume/Resume'

module.exports = (
  <Route path='/' component={ App }>
    <IndexRoute component={ Home }/>
    <Route path='/about' component={ About } />
    <Route path='/contact' component={ Contact } />
    <Route path='/portfolio' component={ Portfolio } />
    <Route path='/portfolio/:itemId' component={ Project } />
    <Route path='/freelance' component={ Freelance } />
    <Route path='/freelance/hire' component={ Freelance } />
    <Route path='/resume' component={ Resume } />
    <Route path='/thoughts' component={ Blog } />
    <Route path='/thoughts/:category' component={ BlogCategory } />
    <Route path='/thoughts/:category/:postFragment' component={ BlogPost } />
    <Route path='*' component={ NotFound } />
  </Route>
)
