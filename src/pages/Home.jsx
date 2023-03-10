import React from "react";

export default function Home(){

    return(
        <main>
            <aside>
                <div className="sideContent">
                    <img src="/images/aside-cat.svg" height="50" />
                    <h1>Every day a new cat,<br/>you write the caption.</h1>
                    <div className="features">
                        <h4>๐ผ Every day a new cat</h4>
                        <h4>๐ญ Post a funny caption</h4>
                        <h4>๐บ Upvote your favorites</h4>
                    </div>
                </div>
                <div className="footer">
                    &copy; 2023 Caption Cat ยท <a href="https://github.com/emrecoban/caption-cat" target="_blank">GitHub</a>
                </div>
            </aside>
            <div className="content">
                <img className="todaysCat" src="https://static.india.com/wp-content/uploads/2015/10/538.jpg?impolicy=Medium_Resize&w=1200&h=800" />
                <p className="catSource"><b>Source: </b> <a href="#something" target="_blank">CNN UK News</a></p>
                <div className="comments">
                    <div className="comment">
                        <p className="commentScore">๐บ10</p>
                        <p className="displayName">emrecoban:</p>
                        <p className="userComment">Not funny!</p>
                    </div>
                    <div className="comment">
                        <p className="commentScore">๐บ9</p>
                        <p className="displayName">John:</p>
                        <p className="userComment">What a cHat!</p>
                    </div>
                    <div className="comment">
                        <p className="commentScore">๐บ5</p>
                        <p className="displayName">Nicola:</p>
                        <p className="userComment">hom hฤฑm hom</p>
                    </div>
                    <div className="comment">
                        <p className="commentScore">๐บ2</p>
                        <p className="displayName">Chiara:</p>
                        <p className="userComment">me with my cat.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}