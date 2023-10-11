function fileProcessor(url, callback) {
    const upload = new XMLHttpRequest();
    upload.open("GET", url, true);
    upload.responseType = "blob";
  
    upload.onload = function () {
      if (upload.status === 200) {
        callback(null, upload.response);
      } else {
        callback(new Error(`Request failed with status ${upload.status}`));
      }
    };  
  
    upload.onerror = function () {
      callback(new Error("Network error"));
    };
  
    upload.send();
  }
  
  const urlInput = document.getElementById("url");
  const downloadBtn = document.getElementById("btn");
  
  downloadBtn.addEventListener("click", () => {
    fileProcessor(urlInput.value, (error, blob) => {
        if(error) {
            console.error("Error fetching data:",error);
        }
      // Handle the downloaded file (blob) or error here
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    });
  });
  
