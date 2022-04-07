
import React from 'react';
import { uploadFile } from 'react-s3';
import S3FileUpload from 'react-s3';
import { FilePicker } from 'react-file-picker'

window.Buffer = window.Buffer || require("buffer").Buffer;

const S3_BUCKET = 'sohini-test-bucket';
const REGION = 'us-west-2';
const ACCESS_KEY = '';
const SECRET_ACCESS_KEY = '';


const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}

const Front = () => {

    // const handleFileInput = (e) => {
    //     setSelectedFile(e.target.files[0]);
    // }
    const pickFile = async  (file) => {
        console.log(file);
    
        try {
           let res = await uploadFile(file, config);
           console.log(res);

        } 
        catch (error) {
            console.log(error, 'error while uploading the file');
        }
        
    }

    const uploadFileToBucket = async (file) => {
        console.log('uploading...');
        uploadFile(file, config)
            .then(data => console.log(data, "uploaded"))
            .catch(err => console.error(err, "error"));
    }

    return <div className='front'>
        <div className='upload-btn'>
            <FilePicker
                extension={['md', 'pdf', 'docx']}
                onChange={pickFile}
            >
                <button
                    className='btn'
                    onClick={uploadFileToBucket}
                >
                    Upload File
                </button>
            </FilePicker>
        </div>
        <div className='add-btn'>
           
        </div>
    </div>
}

export default Front;



