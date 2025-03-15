const sharp = require('sharp');
window.jQuery = window.$ = require('./jquery.min.js');

$(function () {
  $('#upload').on('change', function (e) {
    $('#uploadedFileNum').text($(this)[0].files.length);
    for (var i=0; i < $(this)[0].files.length; i++) {
      file = $(this)[0].files[i];
      switch (file.type) {
        case 'image/jpg':
          fileType = 'jpg';
          break;
        case 'image/jpeg':
            fileType = 'jpeg';
            break;
        case 'image/gif':
            fileType = 'gif';
            break;
        case 'image/png':
        default:
            fileType = 'png';
      }
      resizedFile = resize(file, fileType);
    }
  });
});
 
function resize(file, fileType) {
    // Desktopのパス
    filePath = file.path.split('\\')[0] + '\\' + file.path.split('\\')[1] + '\\' + file.path.split('\\')[2] + '\\' + file.path.split('\\')[3] + '\\';
    return sharp(file.path)
    .resize(128, 128, {
        fit: 'inside'
    })
    .toFile(filePath + file.name.split('.')[0] + '_resize' +'.'+fileType);
}
