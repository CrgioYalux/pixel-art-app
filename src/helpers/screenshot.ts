import html2canvas from 'html2canvas';

export const screenshotElement = (elementID:string) => {
  const element :HTMLElement | null = document.getElementById(elementID);
  if (element) html2canvas(element).then((canvas) => {
    let link = document.createElement('a');
    link.download = 'Screenshot.png';
    link.href = canvas.toDataURL();
    link.click();
  })
}