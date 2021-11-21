import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PublicRoutes } from './routes/PublicRoutes'

function App() {
    return(
        <BrowserRouter>
            <main>
                <Switch>
                    { PublicRoutes.map((publicRoute, i) => {
                        return <Route exact={ publicRoute.exact } key={ i } path={ publicRoute.link } component={ publicRoute.component } />
                    }) }
                </Switch>
            </main>
        </BrowserRouter>
    )
}

export default App;