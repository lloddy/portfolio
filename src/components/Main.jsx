import { Route, Switch } from 'react-router-dom'
import About from '../pages/About';
import Index from '../pages/Index';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
// import Show from '../pages/Show';

const Main = (props) => {
    return (
        <main>
            <Switch>
                <Route exact path='/'>
                    <Index />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/portfolio'>
                    <Portfolio />
                </Route>
                <Route path='/resume'>
                    <Resume />
                </Route>
            </Switch>
        </main>
    )
}

export default Main;