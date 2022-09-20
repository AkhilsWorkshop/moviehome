import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import "./styles.css";


const App = () => {

    return (
        <div className="relative min-h-screen">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default App;