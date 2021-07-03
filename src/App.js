import './App.css';
import './navbar.css'
import About from './main_components/About';
import Login from './main_components/Login';
import Register from './main_components/Register';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Upload_video_pt_1 } from './components/Forms/Upload_video_pt_1';
import UploadVideo2 from './main_components/UploadVideo2';
import Index from './main_components/Index';
import Logout from './main_components/Logout';
import './loader.css'
import UploadVideoForm3 from './components/Forms/UploadVideoForm3';
import { WatchVideo } from './main_components/WatchVideo';
import { Searched } from './main_components/Searched';
import { Videos } from './main_components/Videos';
import { Animate } from './main_components/Animate';
import { useEffect } from 'react';
import { LiveCodeChallengeEditor } from './main_components/LiveCodeChallengeEditor';


function App() {
  
  
    const script3 = document.createElement('script');
    
    script3.defer = true;
    script3.src = "/js/main.js";
  
    script3.data = localStorage.getItem('videoIods');

    document.body.appendChild(script3);
  

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/about" exact component={About} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/uploadVideo" exact component={Upload_video_pt_1} />
          <Route path="/uploadVideo2" exact component={UploadVideo2} />
          <Route path="/uploadVideo3" exact component={UploadVideoForm3} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/watch_video/:videoId" exact component={WatchVideo}/>
          <Route path="/search/:query" exact component={Searched}/>
          <Route path="/videos" exact component={Videos}/>
          <Route path="/new/video/animated" exact component={Animate}/>
          <Route path="/puzzle/LiveEditor/:id" exact component={LiveCodeChallengeEditor}/>
        </Switch>
        <script id="searcher" defer={true} src="/js/main.js" datavidids={localStorage.getItem('videoIdos')}/>
      </div>
    </Router>
  );
}


export default App;
