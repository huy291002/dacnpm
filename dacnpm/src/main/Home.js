import { Layout } from 'antd';
import React, { useEffect } from 'react';
import './Home.css';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate, Navigate } from 'react-router-dom';
import { Typography } from "antd";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import InputTwoToneIcon from '@mui/icons-material/InputTwoTone';
import HeadphonesTwoToneIcon from '@mui/icons-material/HeadphonesTwoTone';
import UploadIcon from '@mui/icons-material/Upload';
import SearchIcon from '@mui/icons-material/Search';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import axios from 'axios';
// import { Input } from 'antd';
const { Header, Content } = Layout;


function Home() {
    const [word1, setWord1] = useState("");
    const [words1, setWords1] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [gotosearch, setGotosearch] = useState(false);
    const [source, setSource] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const [file, setFile] = useState();
    const audioRef = useRef();
    // var [playing, toggle] = useAudio(source);

    useEffect(() => {
        if (isPlaying) {
            axios({
                method: 'post',
                url: 'https://www.ura.hcmut.edu.vn/tts/speak',
                data: {
                    text: word1,
                    gender: "male"
                }
            })
                .then(res => {
                    console.log(res);
                    var srcUrl = "data:audio/mpeg;base64," + res.data.speech;
                    setSource(srcUrl);
                    console.log(audioRef.current);
                })
                .catch(e => console.log(e));
        }
    }, [isPlaying, word1]);

    const updateSong = (source) => {
        console.log(source);
        console.log(audioRef.current);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.load();
            audioRef.current.play();
        }
    }

    function showword(h) {
        h.preventDefault();
        setIsPlaying(true);
        console.log("Input word: ", word1);
        setWords1((prev) => [...prev, word1]);
    }

    if (gotosearch) {
        return <Navigate to="/Search" />;
    }

    function selectFile(e) {
        console.log(e.target);
        setFile(e.target.files[0]);
    }

    function handleUpload(e) {
        e.preventDefault();
        console.log(file);
        if (file) {
            const data = new FormData();
            data.append('file', file);
            axios.post("http://localhost:3001/api/uploadfile", data)
                .then(res => {
                    console.log(res);
                })
                .catch(e => {
                    console.log(e);
                })
        }
        handleClose();
    }

    return (
        <>
            <div class="bg1">
                <div className="container bg-transparent">
                    <div className="position-fixed top-0 start-0">
                        <img src="https://i.ibb.co/55dcLG1/logo.png" alt="logo" border="0" width="60px" height="56px" />
                    </div>
                    <div class="text-center">
                        <Typography.Title level={1} style={{ color: "white" }}> Bilingual Bana-Viet</Typography.Title>
                    </div>
                </div>
                <div className="container text-center">
                    <div className="row  " >
                        <div className="col-4 border-right-table " >
                            <div className="mb-3">
                                <form onSubmit={showword}>
                                    <BorderColorIcon></BorderColorIcon>
                                    <label for="exampleFormControlTextarea1" class="form-label">Bana-word</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" onChange={(h) => {
                                        setWord1(h.target.value);
                                    }}
                                        rows="3"></textarea>
                                    <div className="mt-2">
                                        <button type="submit" class="btn btn-primary mb-3">
                                            <HeadphonesTwoToneIcon></HeadphonesTwoToneIcon>Click to hear
                                        </button>
                                    </div>
                                </form>
                                <Button className="col-4 " variant="primary" onClick={handleShow} style={{ width: "40%" }}>
                                    <UploadIcon></UploadIcon>Upload file
                                </Button>

                                <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered
                                    show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Upload file</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div class="col-4">
                                            <input onChange={selectFile} type="file" />
                                        </div>
                                        <br></br>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Cancel
                                        </Button>
                                        <Button variant="primary" onClick={handleUpload}>
                                            Upload
                                        </Button>
                                    </Modal.Footer>
                                </Modal>

                                <div className="col-12 mt-2">
                                    <button class="btn btn-primary" type="submit" onClick={() => { setGotosearch(true) }} >
                                        <SearchIcon></SearchIcon>Search
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="col-8">

                            <div class="table table-bordered">
                                <table class="table">
                                    <thead>
                                        <tr>

                                            <th style={{ width: "50%" }}>
                                                <InputTwoToneIcon></InputTwoToneIcon>Your input word
                                            </th>
                                            <th style={{ width: "50%", color: "white" }} class="table align-middle" ><VolumeUpIcon></VolumeUpIcon>
                                                Sound
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            words1.map((singleWords1) => {
                                                return (
                                                    <tr>
                                                        <th style={{ width: "50%", color: "white" }} class="table align-middle"> {singleWords1}</th>
                                                        <th style={{ width: "50%", color: "white" }} class="table align-middle">
                                                            <audio controls ref={audioRef}>
                                                                <source src={source} />
                                                            </audio>
                                                            <div><button onClick={() => { updateSong(source) }} style={{ color: "black" }}>Play sound</button></div>
                                                        </th>

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
            </div>
        </>

    )
}
export default Home;