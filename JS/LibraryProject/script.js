const myLibrary = [];

function Book() {
  // the constructor...
  this.title = title;
  this.marker = marker;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${title} by ${marker}, ${pages} pages, ${read}`;
  };
}
