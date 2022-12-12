import { Layout } from 'antd';
import React, { useEffect } from 'react';
import './Home.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate, Navigate } from 'react-router-dom';
// import { Input } from 'antd';
const { Header, Content } = Layout;

function Home() {
    const[word1, setWord1] = useState("");
    const[words1, setWords1] = useState([]);
    const[word, setWord] = useState("");
    const[words, setWords] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [gotosearch, setGotosearch] = useState(false);
    
    function translateFunc(e)
    {
        e.preventDefault();
        console.log("Word translated: ", word);
        setWords((prev) => [...prev, word]);

    }
    function showword(h)
    {
        h.preventDefault();
        console.log("Input word: ", word1);
        setWords1((prev) => [...prev, word1]);
    }
    useEffect(()=> {
        if (words.length > 0)
        {
            console.log("Use effect:")
            console.log("Word: ", words)
        }
    }, [words])
    useEffect(()=> {
        if (words1.length > 0)
        {
            console.log("Use effect:")
            console.log("Word: ", words1)
        }
    }, [words1])
    if (gotosearch)
    {
        return <Navigate to ="/Search" />;
    }
   return (

    <Layout style={{height: "100vh"}}>
    
    <Layout>
        <Header style = {{backgroundColor: "transparent", textAlign: "center", color: "black", fontWeight: "bold"}}>
        <div className="container bg-transparent">
            <div className = "position-fixed top-0 start-0">
                <img src="https://i.ibb.co/55dcLG1/logo.png" alt="logo" border="0" width="60px" height="56px"/>
            </div>
            <div className="row">
                <div class="col-12 display-5 ">Bilingual Bana-Viet</div>
            </div>
            </div>
        </Header>
        <Content>
        <div className="container text-center">
            <div className="row  " >
                <div className="col-4  " >
                    <div className="mb-3">
                        <form onSubmit={showword}>
                            <label for="exampleFormControlTextarea1" class="form-label">Bana-word</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" onChange={(h)=>{
                            setWord1(h.target.value);
                            }}
                            rows="3"></textarea>
                            <button type="submit" class ="btn btn-primary mb-3">Click to hear</button>
                           
                        </form>
                    </div>  
                    
                </div>
                <div className="col-8">
                    
                    <div class="table table-bordered">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th style={{width: "50%"}}>Your input word</th>
                                    <th style={{width: "50%"}} class="table align-middle"  >Sound </th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                words1.map((singleWords1) => {
                                    return (
                                        <tr>
                                            <td class="border-right-table"> {singleWords1}</td>
                                            <td class="row align-items-center">
                                                <td class="col">
                                                <button type="button" class= "btn btn-primary mb-3">Binh Dinh</button>
                                                </td>
                                                <td class="col">
                                                <button type="button" class= "btn btn-primary mb-3">Gia Lai</button>
                                                </td>
                                                <td class="col">
                                                <button type="button" class= "btn btn-primary mb-3">Kon Tum</button>  
                                                    
                                                </td>
                                            </td>

                                        </tr>
                                    )
                                })

                            }
                                
                            </tbody>
                            </table>
                    </div>
                    


                </div>
                
            </div>

        </div>
        <div className ="container text-center">
        </div>
            <div className="container text-center">    
            <div className="row mt-2">
                <div className="col-4 border-right" >
                    <div className="mb-3">
                        <form onSubmit={translateFunc}>
                            <label for="exampleFormControlTextarea1" class="form-label">Input Vietnamese word</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" onChange={(e)=>{
                            setWord(e.target.value);
                            }}
                            rows="3"></textarea>
                            <button type="submit" class ="btn btn-primary mb-3">Translate word</button>
                           
                        </form>
                        
                        <Button className ="col-4 "  variant="primary" onClick={handleShow}>
                        Upload file
                    </Button>

                    <Modal size = "lg" aria-labelledby= "contained-modal-title-vcenter" centered 
                    show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Upload file</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form class = "row g-3">
                                <div class = "col-12">
                                    <label>Male:</label><br></br>
                                </div>
                                <div class = "col-4">
                                    <label for = "inputname1" class = "form-label">Binh Dinh</label><br></br>
                                    <input class="form-control" type="file" id="formFile"/>
                                </div>
                                <br></br>
                                <div class = "col-4">
                                    <label for = "inputname1" class = "form-label">Gia Lai</label><br></br>
                                    <input class="form-control" type="file" id="formFile"/>
                                </div>
                                <div class = "col-4">
                                    <label for = "inputname1" class = "form-label">Kon Tum</label><br></br>
                                    <input class="form-control" type="file" id="formFile"/>
                                </div>
                                <div class = "col-12">
                                    <label>Female:</label><br></br>
                                </div>
                                <div class = "col-4">
                                    <label for = "inputname1" class = "form-label">Binh Dinh</label><br></br>
                                    <input class="form-control" type="file" id="formFile"/>
                                </div>
                                <br></br>
                                <div class = "col-4">
                                    <label for = "inputname1" class = "form-label">Gia Lai</label><br></br>
                                    <input class="form-control" type="file" id="formFile"/>
                                </div>
                                <div class = "col-4">
                                    <label for = "inputname1" class = "form-label">Kon Tum</label><br></br>
                                    <input class="form-control" type="file" id="formFile"/>
                                </div>
                                
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Upload
                        </Button>
                        </Modal.Footer>
                    </Modal> 
                    <button class="btn btn-primary" type="submit" onClick ={() => {setGotosearch(true)}} >Search</button>
                    </div>  
                    
                </div>
              
                <div className="col-8">
                    
                    <div class="table table-bordered">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th style={{width: "50%"}}>Ba-na word</th>
                                    <th style={{width: "50%"}} class="table align-middle"  >Sound </th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                words.map((singleWords) => {
                                    return (
                                        <tr>
                                            <td class="border-right-table"> {singleWords}</td>
                                            <td class="row align-items-center">
                                                <td class="col">
                                                <button type="button" class= "btn btn-primary mb-3">Binh Dinh</button>
                                                </td>
                                                <td class="col">
                                                <button type="button" class= "btn btn-primary mb-3">Gia Lai</button>
                                                </td>
                                                <td class="col">
                                                <button type="button" class= "btn btn-primary mb-3">Kon Tum</button>  
                                                    
                                                </td>
                                            </td>

                                        </tr>
                                    )
                                })

                            }
                                
                            </tbody>
                            </table>
                    </div>
                    


                </div>
                
            </div>
            </div>
            
        </Content>
        
    </Layout>
    </Layout>

   )
}
export default Home;