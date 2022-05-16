import { useState } from "react";
import Header from "./components/header.js";
import MainContent from "./components/maincontent.js";
import LoadingSpinner from "./spinner.js";

function App() {
    const [animeList, SetAnimeList] = useState([]);
    const [search, SetSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const HandleSearch = (e) => {
        e.preventDefault();
        FetchAnime(search);
    };

    const FetchAnime = async (query) => {
        setIsLoading(true);
        const temp = await fetch(
            `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=12`
        ).then((res) => res.json());
        SetAnimeList(temp.results);
        setIsLoading(false);
    };

    return (
        <div className="App">
            <Header />
            <div className="content-wrap">
                <MainContent
                    HandleSearch={HandleSearch}
                    search={search}
                    SetSearch={SetSearch}
                    animeList={animeList}
                />
                {isLoading ? <LoadingSpinner /> : false}
            </div>
        </div>
    );
}

export default App;
