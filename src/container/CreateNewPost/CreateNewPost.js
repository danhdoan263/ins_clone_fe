import React, { useState } from 'react';
import './CreateNewPost.css';
import frameShow from 'assets/Rectangle 1.png';
import LabelCustomButton from 'components/LabelCustomButton/LabelCustomButton ';
import { postSubmitApi } from 'apis/postSubmitApi';
const CreateNewPost = ({ setModal }) => {
  const [iamgeShow, setIamgeShow] = useState(frameShow);
  const [caption, setCaption] = useState('');
  const [blobImage, setBlobImage] = useState(null);

  const handleChangeCaption = (e) => {
    setCaption(e.target.value.trim());
  };

  const handleFileProcess = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validImageTypes = [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/jpg',
      ];

      if (!validImageTypes.includes(file.type)) {
        alert('file is invalid format ');
        e.target.value = '';
        setTimeout(() => {
          e.target.click();
        });
        //if user select not valid file in format. reopen the select file
        //TESTED
      }
      //rename file to true formart on database
      //remove the whiteSpace
      const FileName = file.name
        .replace(/\s+/g, '-')
        .replace(/[^a-zA-Z0-9.\-_]/g, '');

      //add time post to the filename to prevent the duplicate filename
      const newFileName = `${Date.now()}_${FileName}`;

      const newBlobWithFileRename = new File([file], newFileName, {
        type: file.type,
      });
      setBlobImage(newBlobWithFileRename);

      //show image user slected
      const newAva = URL.createObjectURL(newBlobWithFileRename);
      setIamgeShow(newAva);

      //here is for the future config
      //   const img = new Image();
      //   const imgObjectUrl = URL.createObjectURL(file);
      //   img.src = imgObjectUrl;
    }
  };
  const postSubmit = async () => {
    if (caption.length > 0 && blobImage) {
      const formData = new FormData();
      console.log(blobImage);

      formData.append('photo', blobImage);
      formData.append('caption', caption);
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
      const res = await postSubmitApi(formData);
      console.log('accepted');
      console.log(res);
      setModal((pre) => !pre);
    } else {
      alert('invalid form submit');
    }
  };

  return (
    <div>
      <div className="post-cover">
        <div className="post-element">
          <div className="element-choise">
            <div className="caption">
              <h2>Caption</h2>
              <div className="caption-text">
                <textarea
                  type="text"
                  onChange={(e) => {
                    setCaption(e.target.value);
                  }}
                  onBlur={handleChangeCaption}
                />
              </div>
            </div>
            {/* custom input file  */}
            <div className="input-file">
              <LabelCustomButton textshow="Select Image">
                <input
                  type="file"
                  className="file-input"
                  onChange={handleFileProcess}
                />
              </LabelCustomButton>
            </div>
            <div className="submit-form">
              <LabelCustomButton textshow="Submit">
                <input
                  onClick={async () => {
                    await postSubmit();
                  }}
                  type="button"
                  className="file-input"
                />
              </LabelCustomButton>
            </div>
          </div>
          <div className="element-image-show">
            <img src={iamgeShow} alt="" width={500} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPost;
