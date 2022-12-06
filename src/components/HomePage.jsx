import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
class HomePage extends Component{
    
    render(){
    //    function refreshPage() {
    //        window.location.reload(false);
    //      }
        return (
      <div className='homecontainer d-flex flex-column justify-content-center align-items-center'>
        <div className="title d-flex justify-content-center align-items-center">
            <h1>StuRank</h1>
        </div>
        <div className="options">
            <h4 style={{marginBottom:'50px',marginTop:'30px'}} className='text-center'>Lütfen aşağıdakı alanlardan birini seçiniz.</h4>
            <div className='d-flex justify-content-evenly align-items-center'>
            <div className="card" style={{width: '18rem',}}>
        <img style={{width:'100%',height:'200px'}} alt='err' className="card-img-top" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Best-Programming-Languages-to-Start-Learning-Today.jpg" />
        <div className="card-body">
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Programlama dilleri
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a href='/quiz' className="dropdown-item" >Python</a></li>
          <li><a href='/cpp' className="dropdown-item">C++</a></li>
          <li><a href='/javascript' className="dropdown-item" >Javascript</a></li>
        </ul>
      </div>
        </div>
      </div>
            <div className="card" style={{width: '18rem'}}>
        <img  style={{width:'100%',height:'200px'}} className="card-img-top" src="https://simgevip.com/upload/makale/matematik-dersine-nasil-calisilir86018270.jpg" alt="err" />
        <div className="card-body">
          <a href='/matematik' className="card-text btn btn-primary">Matematik</a>
        </div>
      </div>
            <div className="card" style={{width: '18rem'}}>
        <img  style={{width:'100%',height:'200px'}} className="card-img-top" src="https://www.bogaziciders.com/media/k2/items/cache/15d43aef6c8a5134e1fc00a9c98b8ab0_XL.jpg" alt="err" />
        <div className="card-body">
          <a href='/turkce' className="card-text btn btn-primary">Türkçe</a>
        </div>
      </div>
            </div>
        </div>
        
      </div>
    )
        }
}


export default HomePage