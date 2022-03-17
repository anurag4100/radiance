import React, { useState } from "react";

import { FilePond, File, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { Storage } from "aws-amplify";
import { useFormikContext } from "formik";
import { v4 as uuidv4 } from "uuid";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function DocumentUpload({ ...props }) {
  const [files, setFiles] = useState([]);
  //documents for formik
  const [documents, setDocuments] = useState([]);
  const { setFieldValue } = useFormikContext();

  async function handleUpload(
    fieldName,
    file,
    metadata,
    load,
    error,
    progress,
    abort,
  ) {
    try {
      console.log({ fieldName, file, metadata });
      const result = await Storage.put(uuidv4() + file.name, file, {
        progressCallback(pg) {
          console.log(`Uploaded: ${pg.loaded}/${pg.total}`);
          progress(pg.loaded / pg.total);
        },
        ///make resumable: true here to support abort functionality below.
      });
      setDocuments((old) => [
        ...old,
        { file_name: file.name, aws_key: result.key },
      ]);
      setFieldValue(props.field.name, documents);
      console.log("Uploaded: ", result.key);
      load(result.key);
      return {
        abort: () => {
          // This function is entered if the user has tapped the cancel button
          Storage.cancel(result);
          // Let FilePond know the request has been cancelled
          abort();
        },
      };
    } catch (err) {
      error(err);
    }
  }

  async function deleteFile(uniqueFileId, error) {
    try {
      console.log("into delete: ", uniqueFileId);
      await Storage.remove(uniqueFileId);
      setDocuments(documents.filter((file_name) => file_name === uniqueFileId));
      console.log(documents);
    } catch (err) {
      error(err);
    }
  }

  return (
    <div className="App">
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={10}
        name="files"
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        credits={false}
        server={{
          process: function (
            fieldName,
            file,
            metadata,
            load,
            error,
            progress,
            abort,
          ) {
            handleUpload(
              fieldName,
              file,
              metadata,
              load,
              error,
              progress,
              abort,
            );
          },
          revert: (uniqueFileId, load, error) => {
            deleteFile(uniqueFileId, error);
            load();
          },
        }}
      />
    </div>
  );
}
