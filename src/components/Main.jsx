import { Route, Switch, Redirect } from 'react';
import About from '../pages/About';
import Index from '../pages/Index';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Show from '../pages/Show';

const Main = (props) => {
    return (
        <main>
            <Switch>
                <Route exact path='/'>
                    <Index />
                </Route>
            </Switch>
        </main>
    )
}