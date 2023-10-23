import React from "react";
import Routes from "src/routes/Routes";
import "src/App.scss";


interface AppProps {}
/**
 * App component
 * @return {jsx}
 */
const App: React.FC<AppProps> = () => {
    return (
        <React.Fragment>
            <Routes></Routes>
        </React.Fragment>
    );
};

export default App;
