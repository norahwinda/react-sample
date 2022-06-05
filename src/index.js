import React from 'react'
import ReactDOM from 'react-dom/client'


function Header(){
    return(
                <header>
            <nav>
                    <img src='./logo192.png' width='40px' alt = "React logo"></img>
                </nav>
        </header>
    )
}

function Footer(){
    return( 
    <footer>
        <small>@ 2022 Norah development. All rights reserved</small>
   </footer>
    )
}

function MainContent ()
{
    return(
        <div>
        <h1>Reasons why am exited to learn React</h1>
        <ol>
            <li>I want to improve my UI development skills</li>
            <li>I want to increase chances of getting hired in the job market</li>
            <li>I naturally love javascript library technologies</li>
        </ol>
        </div>
    )
}

function Custompage(){
    return(
        <>
        <Header />
        <MainContent />
        <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Custompage />)




