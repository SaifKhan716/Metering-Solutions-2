// // import React from 'react'

// // const Archive = () => {
// //   return (
// //     <div className='flex item-center justify-center '>
// //       Archive page
// //     </div>
// //   )
// // }

// // export default Archive


// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setHeaderTitle, setBreadcrumbs } from "../redux/slice/headerSlice";
// import Header from "../components/header/Header";

// const Archive = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(setHeaderTitle("Archive"));
//     dispatch(
//       setBreadcrumbs([
//         { label: "Home", link: "/home" },  // Updated label for clarity
//         { label: "Archive" },
//       ])
//     );
//   }, []);

//   return (
//     <div className="w-full h-full">
//       <Header />
//       {/* Page content goes here */}
//     </div>
//   );
// };

// export default Archive;



import React, { useState } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

function App() {
  const [files, setFiles] = useState([
    { name: "example.txt", content: "This is an example file." },
  ]);

  const handleAddFile = () => {
    setFiles([...files, { name: "", content: "" }]);
  };

  const handleFileChange = (index, field, value) => {
    const updatedFiles = [...files];
    updatedFiles[index][field] = value;
    setFiles(updatedFiles);
  };

  const handleGenerateZip = async () => {
    const zip = new JSZip();

    files.forEach((file) => {
      if (file.name && file.content) {
        zip.file(file.name, file.content);
      }
    });

    zip.generateAsync({ type: "blob" }).then((blob) => {
      saveAs(blob, "dynamic-archive.zip");
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Archive Generator</h1>

      {files.map((file, index) => (
        <div key={index} className="mb-4 bg-white p-4 rounded shadow">
          <input
            type="text"
            placeholder="File name (e.g., file.txt)"
            value={file.name}
            onChange={(e) =>
              handleFileChange(index, "name", e.target.value)
            }
            className="w-full border p-2 mb-2 rounded"
          />
          <textarea
            placeholder="File content"
            value={file.content}
            onChange={(e) =>
              handleFileChange(index, "content", e.target.value)
            }
            className="w-full border p-2 rounded"
            rows={4}
          />
        </div>
      ))}

      <button
        onClick={handleAddFile}
        className="bg-cyan-600 text-white px-4 py-2 rounded mr-2 hover:bg-cyan-700"
      >
        Add File
      </button>
      <button
        onClick={handleGenerateZip}
        className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700"
      >
        Generate ZIP
      </button>
    </div>
  );
}

export default App;
