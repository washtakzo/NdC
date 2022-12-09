import React from "react";

import MediumButton from "./MediumButton";

const ImageUpload = () => {
  const fileUploaderRef = React.useRef();
  const [file, setFile] = React.useState();
  const [preview, setPreview] = React.useState();

  const uploadImageHandler = () => {
    fileUploaderRef.current.click();
  };

  const unploaderChangeHandler = (event) => {
    const pickedFiles = event.target.files;
    if (!pickedFiles) return;
    setFile(pickedFiles[0]);
  };

  React.useEffect(() => {
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreview(fileReader.result);
    };
    fileReader.readAsDataURL(file);
    setPreview(file);
  }, [file]);

  return (
    <div>
      {preview && <img src={preview} className="w-[30%] mx-auto" />}
      {!preview && (
        <p className="mx-auto text-center mt-16">Please pick an image</p>
      )}
      <input
        ref={fileUploaderRef}
        type="file"
        onChange={unploaderChangeHandler}
        accept=".jpg, .jpeg, .png"
        className="hidden"
      />
      <MediumButton className="w-[40%]" onClick={uploadImageHandler}>
        upload Images
      </MediumButton>
    </div>
  );
};

export default ImageUpload;
