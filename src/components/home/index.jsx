import { Link } from "react-router-dom";


export default function Home() {
    
    return (
      <div className="container">
        <div className="content">
          <h1>
            Geek <span>Jokes!</span>
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="../jokes">Read Jokes</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
}