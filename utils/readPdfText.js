export async function readPdfText(file) {
  if (typeof window === "undefined") {
    console.warn("readPdfText called on server — exiting");
    return "";
  }

  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = async function (e) {
      const typedArray = new Uint8Array(e.target.result);

      try {
        // ✅ Use browser-compatible webpack entry
        const pdfjsLib = await import("pdfjs-dist/webpack");
        const workerSrc = await import("pdfjs-dist/build/pdf.worker.entry");

        // Set the worker source
        pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;

        const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;

        let fullText = "";
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          const strings = content.items.map((item) => item.str).join(" ");
          fullText += strings + "\n";
        }

        resolve(fullText);
      } catch (err) {
        reject(err);
      }
    };

    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}
