import React, {Component} from 'react';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';
import '../index.css'

class App extends Component {
    render(){
        return (
            <div className = "container body-format">
                <div className = "div-border-top">
                    <h1 className = "title">Recepie Finder</h1>
                    <SearchRecipes/>
                    <RecipeList/>
                </div>
            </div>
        )
    }
}

export default App;