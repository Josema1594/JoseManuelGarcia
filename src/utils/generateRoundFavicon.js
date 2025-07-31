export const generateRoundFavicon = (imagePath) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const size = 32; // Tamaño del favicon
  
  canvas.width = size;
  canvas.height = size;
  
  const img = new Image();
  img.crossOrigin = 'anonymous';
  
  return new Promise((resolve) => {
    img.onload = () => {
      // Crear círculo de recorte
      ctx.beginPath();
      ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      ctx.clip();
      
      // Dibujar imagen dentro del círculo
      ctx.drawImage(img, 0, 0, size, size);
      
      // Convertir a data URL
      const dataURL = canvas.toDataURL('image/png');
      resolve(dataURL);
    };
    
    img.src = imagePath;
  });
};