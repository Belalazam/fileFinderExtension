const findPdfPage = async (query) => {
    const pdf = await fetch(document.location.href).then((res) => res.arrayBuffer());
    const loadingTask = pdfjs.getDocument({ data: pdf });
    const pdfDocument = await loadingTask.promise;
  
    for (let pageNumber = 1; pageNumber <= pdfDocument.numPages; pageNumber++) {
      const page = await pdfDocument.getPage(pageNumber);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item) => item.str).join("");
      if (pageText.includes(query)) {
        chrome.runtime.sendMessage({ type: "pdf-page-found", pageNumber });
        break;
      }
    }
  };
  
  chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "find-pdf-page") {
      const{query} = message;
      findPdfPage(message.query);
    }
  });